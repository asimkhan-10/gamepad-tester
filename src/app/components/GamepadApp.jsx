'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

export default function GamepadApp() {
  const [gamepadList, setGamepadList] = useState({});
  const [activeIndex, setActiveIndex] = useState(null);

  // States for the active gamepad
  const [gpData, setGpData] = useState(null);
  
  // High freq / Ref based state to avoid infinite hook deps
  const animationRef = useRef();
  const stateRef = useRef({
    recordingData: [],
    isRecording: false,
    isPlaying: false,
    playbackIndex: 0,
    startTime: 0,
    circularityStats: { 0: { err: null, score: null, pts: [] }, 1: { err: null, score: null, pts: [] } },
    l2History: new Array(100).fill(0),
    r2History: new Array(100).fill(0),
    frameCount: 0,
    lastSecond: performance.now(),
    lastTimestamp: 0,
    currentPollingRate: 0,
    vibrationInterval: null,
    isVibrating: false
  });

  // UI state for things that only update occasionally
  const [recordStateUI, setRecordStateUI] = useState('ready'); // ready, recording, playing
  const [vibStateUI, setVibStateUI] = useState('Idle');
  const [pollingRateUI, setPollingRateUI] = useState(0);

  // Refs for drawing
  const canvasLeft = useRef(null);
  const canvasRight = useRef(null);
  const graphL2 = useRef(null);
  const graphR2 = useRef(null);

  const initCanvases = useCallback(() => {
    [canvasLeft, canvasRight].forEach(ref => {
      if (ref.current) { ref.current.width = 100; ref.current.height = 100; }
    });
    [graphL2, graphR2].forEach(ref => {
      if (ref.current) { ref.current.width = 300; ref.current.height = 60; }
    });
  }, []);

  useEffect(() => {
    const handleConnect = (e) => {
      setGamepadList(prev => ({ ...prev, [e.gamepad.index]: e.gamepad }));
      setActiveIndex(prev => prev === null ? e.gamepad.index : prev);
    };
    const handleDisconnect = (e) => {
      setGamepadList(prev => {
        const next = { ...prev };
        delete next[e.gamepad.index];
        return next;
      });
      setActiveIndex(prev => {
        if (prev === e.gamepad.index) {
          const remaining = Object.keys(gamepadList).filter(k => parseInt(k) !== e.gamepad.index);
          return remaining.length > 0 ? parseInt(remaining[0]) : null;
        }
        return prev;
      });
    };

    window.addEventListener("gamepadconnected", handleConnect);
    window.addEventListener("gamepaddisconnected", handleDisconnect);

    return () => {
      window.removeEventListener("gamepadconnected", handleConnect);
      window.removeEventListener("gamepaddisconnected", handleDisconnect);
    };
  }, [gamepadList]);

  // Main Polling Loop
  const loop = useCallback(() => {
    let currentGp = null;
    const s = stateRef.current;
    
    // Playback logic
    if (s.isPlaying) {
      const timeElapsed = performance.now() - s.startTime;
      while (s.playbackIndex < s.recordingData.length - 1 && s.recordingData[s.playbackIndex + 1].time < timeElapsed) {
        s.playbackIndex++;
      }
      currentGp = s.recordingData[s.playbackIndex];
      
      if (s.playbackIndex >= s.recordingData.length - 1) {
        s.isPlaying = false;
        setRecordStateUI('ready');
      }
    } else if (activeIndex !== null) {
      const liveGp = navigator.getGamepads()[activeIndex];
      if (liveGp) {
        // Polling Rate calculate
        if (liveGp.timestamp !== s.lastTimestamp) {
            s.frameCount++;
            s.lastTimestamp = liveGp.timestamp;
        }
        const now = performance.now();
        if (now - s.lastSecond >= 1000) {
            s.currentPollingRate = s.frameCount;
            setPollingRateUI(s.currentPollingRate); // Trigger state update 1x per sec
            s.frameCount = 0;
            s.lastSecond = now;
        }

        currentGp = { axes: [...liveGp.axes], buttons: liveGp.buttons.map(b => ({ pressed: b.pressed, value: b.value })) };

        if (s.isRecording) {
            s.recordingData.push({ ...currentGp, time: now - s.startTime });
            if (s.recordingData.length % 30 === 0) setRecordStateUI(`recording-${(s.recordingData.length/60).toFixed(1)}`);
        }
      }
    }

    if (currentGp) {
      setGpData(currentGp); // Trigger re-render of components using strictly React concepts

      // Draw canvas graphs since they are too heavy for standard DOM nodes
      if (graphL2.current && graphR2.current) {
         const l2 = currentGp.buttons[6]?.value || 0;
         const r2 = currentGp.buttons[7]?.value || 0;
         s.l2History.push(l2); s.l2History.shift();
         s.r2History.push(r2); s.r2History.shift();
         drawGraph(graphL2.current.getContext('2d'), s.l2History, 300, 60);
         drawGraph(graphR2.current.getContext('2d'), s.r2History, 300, 60);
      }

      if (canvasLeft.current && canvasRight.current) {
         drawDot(canvasLeft.current.getContext('2d'), currentGp.axes[0]||0, currentGp.axes[1]||0);
         drawDot(canvasRight.current.getContext('2d'), currentGp.axes[2]||0, currentGp.axes[3]||0);
      }
    }

    animationRef.current = requestAnimationFrame(loop);
  }, [activeIndex]);

  useEffect(() => {
    initCanvases();
    animationRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animationRef.current);
  }, [loop, initCanvases]);


  const drawGraph = (ctx, data, w, h) => {
     if(!ctx) return;
     ctx.clearRect(0,0,w,h);
     ctx.beginPath();
     ctx.strokeStyle = '#2563eb';
     ctx.lineWidth = 2;
     const step = w / data.length;
     for(let i=0; i<data.length; i++){
         const x = i * step;
         const y = h - (data[i] * h);
         if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
     }
     ctx.stroke();
  };

  const drawDot = (ctx, x, y) => {
     if(!ctx) return;
     ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
     ctx.fillRect(0,0,100,100);
     ctx.fillStyle = '#2563eb';
     ctx.beginPath();
     ctx.arc((x+1)*50, (y+1)*50, 2, 0, Math.PI*2);
     ctx.fill();
  };

  const triggerVibration = (duration) => {
     const gp = navigator.getGamepads()[activeIndex];
     if(!gp || !gp.vibrationActuator) return alert("Vibration not supported.");
     if(stateRef.current.isVibrating) toggleVibrationLoop(); // reset
     
     setVibStateUI("Vibrating...");
     gp.vibrationActuator.playEffect("dual-rumble", { duration, weakMagnitude: 1, strongMagnitude: 1 })
       .then(() => { if(!stateRef.current.isVibrating) setVibStateUI("Idle"); });
  };

  const toggleVibrationLoop = () => {
    const sr = stateRef.current;
    const gp = navigator.getGamepads()[activeIndex];
    if(!gp || !gp.vibrationActuator) return alert("Vibration not supported.");
    
    if (sr.isVibrating) {
        clearInterval(sr.vibrationInterval);
        if(gp.vibrationActuator.reset) gp.vibrationActuator.reset();
        else gp.vibrationActuator.playEffect("dual-rumble", { duration:0, weakMagnitude:0, strongMagnitude:0 });
        sr.isVibrating = false;
        setVibStateUI("Idle");
    } else {
        sr.isVibrating = true;
        setVibStateUI("Looping...");
        const pulse = () => gp.vibrationActuator.playEffect("dual-rumble", { duration:1000, weakMagnitude:1, strongMagnitude:1 });
        pulse();
        sr.vibrationInterval = setInterval(pulse, 1000);
    }
  };

  const toggleRecord = () => {
     const sr = stateRef.current;
     if(sr.isPlaying) return;
     if(!sr.isRecording) {
         sr.isRecording = true;
         sr.recordingData = [];
         sr.startTime = performance.now();
         setRecordStateUI('recording-0.0');
     } else {
         sr.isRecording = false;
         setRecordStateUI('saved');
     }
  };

  const playRecording = () => {
      const sr = stateRef.current;
      if (sr.recordingData.length === 0) return;
      sr.isPlaying = true;
      sr.startTime = performance.now();
      sr.playbackIndex = 0;
      setRecordStateUI('playing');
  };

  // Render variables
  const activeGpObj = gamepadList[activeIndex];
  const l2Val = gpData ? gpData.buttons[6]?.value||0 : 0;
  const r2Val = gpData ? gpData.buttons[7]?.value||0 : 0;

  return (
    <main className="p-4 md:p-8 max-w-7xl mx-auto w-full min-h-[50vh]">
        {/* TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[0, 1, 2, 3].map(slot => {
                const gp = gamepadList[slot];
                const isActive = activeIndex === slot;
                if (gp) {
                   return (
                     <div key={slot} onClick={() => setActiveIndex(slot)} className={`p-4 rounded-xl border ${isActive ? 'ring-2 ring-blue-500 border-blue-200 bg-blue-50 hover:-translate-y-1' : 'border-blue-200 bg-blue-50 opacity-80'} text-center cursor-pointer transition-all shadow-md transform`}>
                        <div className="font-bold text-slate-800">Player {slot+1}</div>
                        <div className="text-xs text-blue-600 font-mono font-bold">{gp.id.length>15 ? gp.id.substring(0,12)+'...' : gp.id}</div>
                     </div>
                   );
                }
                return (
                     <div key={slot} className="p-4 rounded-xl bg-white border border-slate-200 text-center opacity-60 cursor-not-allowed shadow-sm">
                        <div className="font-bold text-slate-400">Slot {slot+1}</div><div className="text-xs text-slate-400">Empty</div>
                     </div>
                );
            })}
        </div>

        { activeIndex === null ? (
            <div className="bg-white border border-slate-200 rounded-xl p-12 text-center shadow-lg my-12">
               <div className="inline-block p-6 rounded-full bg-blue-50 mb-6 animate-pulse-ring border border-blue-100">
                  <svg height="64px" width="64px" viewBox="-5.36 -5.36 64.35 64.35" fill="#7fbad2" stroke="#7fbad2" strokeWidth="2.25">
                      <rect x="-5.36" y="-5.36" width="64.35" height="64.35" rx="32.175" fill="#ffffff" strokeWidth="0"/>
                      <path style={{fill: "#ffffff"}} d="M48.831,15.334c-7.083-11.637-17.753-3.541-17.753-3.541c-0.692,0.523-1.968,0.953-2.835,0.955 l-2.858,0.002c-0.867,0.001-2.143-0.429-2.834-0.952c0,0-10.671-8.098-17.755,3.539C-2.286,26.97,0.568,39.639,0.568,39.639 c0.5,3.102,2.148,5.172,5.258,4.912c3.101-0.259,9.832-8.354,9.832-8.354c0.556-0.667,1.721-1.212,2.586-1.212l17.134-0.003 c0.866,0,2.03,0.545,2.585,1.212c0,0,6.732,8.095,9.838,8.354c3.106,0.26,4.758-1.812,5.255-4.912 C53.055,39.636,55.914,26.969,48.831,15.334z M20.374,24.806H16.7v3.541c0,0-0.778,0.594-1.982,0.579 c-1.202-0.018-1.746-0.648-1.746-0.648v-3.471h-3.47c0,0-0.433-0.444-0.549-1.613c-0.114-1.169,0.479-2.114,0.479-2.114h3.675 v-3.674c0,0,0.756-0.405,1.843-0.374c1.088,0.034,1.885,0.443,1.885,0.443l-0.015,3.604h3.47c0,0,0.606,0.778,0.656,1.718 C20.996,23.738,20.374,24.806,20.374,24.806z M37.226,28.842c-1.609,0-2.906-1.301-2.906-2.908c0-1.61,1.297-2.908,2.906-2.908 c1.602,0,2.909,1.298,2.909,2.908C40.135,27.542,38.828,28.842,37.226,28.842z M37.226,20.841c-1.609,0-2.906-1.3-2.906-2.907 c0-1.61,1.297-2.908,2.906-2.908c1.602,0,2.909,1.298,2.909,2.908C40.135,19.542,38.828,20.841,37.226,20.841z M44.468,25.136 c-1.609,0-2.906-1.3-2.906-2.908c0-1.609,1.297-2.908,2.906-2.908c1.602,0,2.909,1.299,2.909,2.908 C47.377,23.836,46.07,25.136,44.468,25.136z"/>
                  </svg>
               </div>
               <h2 className="text-3xl font-bold text-slate-900 mb-2">Connect a Controller</h2>
               <p className="text-slate-500 max-w-md mx-auto">Plug in your device via USB or pair via Bluetooth. Press any button to instantly wake it up and start testing.</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Col */}
                <div className="lg:col-span-7 space-y-6">
                    {/* Visualizer */}
                    <div className="glass-card rounded-2xl p-6 relative">
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-slate-800">Visualizer</h3>
                            <span className="text-xs bg-slate-100 text-blue-600 px-3 py-1 rounded-full font-mono border border-slate-200 font-bold">{activeGpObj?.id.substring(0,20)}...</span>
                         </div>
                         <div className="relative w-full aspect-[16/10] flex items-center justify-center">
                            <svg className="controller-svg w-full max-w-[600px]" viewBox="0 0 600 380">
                                {/* Base */}
                                <path d="M150 80 L200 80 L230 100 L370 100 L400 80 L450 80 C520 80 550 140 550 200 C550 280 500 350 430 350 L380 350 L350 300 L250 300 L220 350 L170 350 C100 350 50 280 50 200 C50 140 80 80 150 80 Z" fill="#f8fafc" stroke="#94a3b8" strokeWidth="3"/>
                                
                                {/* Triggers */}
                                <path className={`btn-shape ${gpData?.buttons[6]?.pressed?'active':''}`} style={{strokeOpacity: 0.3+l2Val*0.7, stroke:l2Val>0?`rgba(37, 99, 235, ${l2Val})`:''}} d="M100 70 Q130 50 180 60" fill="none" strokeWidth="8" strokeLinecap="round" />
                                <path className={`btn-shape ${gpData?.buttons[7]?.pressed?'active':''}`} style={{strokeOpacity: 0.3+r2Val*0.7, stroke:r2Val>0?`rgba(37, 99, 235, ${r2Val})`:''}} d="M420 60 Q470 50 500 70" fill="none" strokeWidth="8" strokeLinecap="round" />
                                
                                {/* Bumpers */}
                                <path className={`btn-shape ${gpData?.buttons[4]?.pressed?'active':''}`} d="M100 90 Q130 80 180 90" fill="none" strokeWidth="6" strokeLinecap="round" />
                                <path className={`btn-shape ${gpData?.buttons[5]?.pressed?'active':''}`} d="M420 90 Q470 80 500 90" fill="none" strokeWidth="6" strokeLinecap="round" />
                                
                                {/* Face */}
                                <g transform="translate(470, 180)">
                                    <circle className={`btn-shape ${gpData?.buttons[3]?.pressed?'active':''}`} cx="0" cy="-40" r="16" /> 
                                    <circle className={`btn-shape ${gpData?.buttons[0]?.pressed?'active':''}`} cx="0" cy="40" r="16" /> 
                                    <circle className={`btn-shape ${gpData?.buttons[2]?.pressed?'active':''}`} cx="-40" cy="0" r="16" /> 
                                    <circle className={`btn-shape ${gpData?.buttons[1]?.pressed?'active':''}`} cx="40" cy="0" r="16" /> 
                                </g>
                                {/* Dpad */}
                                <g transform="translate(130, 180)">
                                    <rect className={`btn-shape ${gpData?.buttons[12]?.pressed?'active':''}`} x="-15" y="-45" width="30" height="35" rx="4" />
                                    <rect className={`btn-shape ${gpData?.buttons[13]?.pressed?'active':''}`} x="-15" y="10" width="30" height="35" rx="4" />
                                    <rect className={`btn-shape ${gpData?.buttons[14]?.pressed?'active':''}`} x="-45" y="-15" width="35" height="30" rx="4" />
                                    <rect className={`btn-shape ${gpData?.buttons[15]?.pressed?'active':''}`} x="10" y="-15" width="35" height="30" rx="4" />
                                </g>
                                {/* Menu */}
                                <rect className={`btn-shape ${gpData?.buttons[8]?.pressed?'active':''}`} x="240" y="180" width="30" height="15" rx="5" />
                                <rect className={`btn-shape ${gpData?.buttons[9]?.pressed?'active':''}`} x="330" y="180" width="30" height="15" rx="5" />
                                <circle className={`btn-shape ${gpData?.buttons[16]?.pressed?'active':''}`} cx="300" cy="220" r="12" />
                                
                                {/* Sticks */}
                                <circle className="stick-area" cx="200" cy="250" r="40" />
                                <circle className="stick-area" cx="400" cy="250" r="40" />
                                <circle className={`stick-head`} transform={`translate(${(gpData?.axes[0]||0)*20}, ${(gpData?.axes[1]||0)*20})`} cx="200" cy="250" r="20" />
                                <circle className={`stick-head`} transform={`translate(${(gpData?.axes[2]||0)*20}, ${(gpData?.axes[3]||0)*20})`} cx="400" cy="250" r="20" />
                                
                                {/* Stick Clicks */}
                                <circle className={`btn-shape opacity-0 ${gpData?.buttons[10]?.pressed?'active !opacity-100':''}`} cx="200" cy="250" r="10" /> 
                                <circle className={`btn-shape opacity-0 ${gpData?.buttons[11]?.pressed?'active !opacity-100':''}`} cx="400" cy="250" r="10" />
                            </svg>
                         </div>
                    </div>

                    {/* Graphs */}
                    <div className="glass-card rounded-xl p-6">
                       <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Trigger Smoothness</h4>
                       <div className="grid grid-cols-2 gap-4">
                           <div>
                               <div className="flex justify-between text-xs mb-1"><span>L2</span><span className="text-blue-600 font-bold">{l2Val.toFixed(3)}</span></div>
                               <canvas ref={graphL2} className="trigger-graph"></canvas>
                           </div>
                           <div>
                               <div className="flex justify-between text-xs mb-1"><span>R2</span><span className="text-blue-600 font-bold">{r2Val.toFixed(3)}</span></div>
                               <canvas ref={graphR2} className="trigger-graph"></canvas>
                           </div>
                       </div>
                    </div>

                    {/* Recorder */}
                    <div className="glass-card rounded-xl p-6">
                        <div className="flex justify-between mb-4">
                            <h4 className="text-sm font-bold text-slate-500 uppercase">Input Recorder</h4>
                            <span className={`text-xs font-mono px-2 py-1 rounded ${recordStateUI.includes('record')?'bg-red-100 text-red-600':'bg-slate-100 text-slate-500'}`}>
                                {recordStateUI === 'ready' ? 'Ready' : recordStateUI.includes('record') ? `Rec: ${recordStateUI.split('-')[1]}s` : recordStateUI === 'playing' ? 'Playing' : 'Saved'}
                            </span>
                        </div>
                        <div className="flex gap-2">
                           <button onClick={toggleRecord} className={`flex-1 py-2 rounded font-medium ${stateRef.current.isRecording ? 'bg-red-600 text-white':'bg-red-50 text-red-600 border border-red-200'}`}>
                              {stateRef.current.isRecording ? 'Stop Recording' : 'Start Recording'}
                           </button>
                           <button onClick={playRecording} disabled={stateRef.current.isRecording || stateRef.current.recordingData.length===0} className="flex-1 bg-green-50 text-green-600 py-2 rounded font-medium disabled:opacity-50 border border-green-200">
                             Play
                           </button>
                        </div>
                    </div>

                </div>

                {/* Right Col */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Vibration */}
                    <div className="glass-card rounded-xl p-6">
                       <div className="flex justify-between mb-4">
                          <h4 className="text-sm font-bold text-slate-500 uppercase">Vibration Test</h4>
                          <span className={`text-xs px-2 py-1 rounded font-mono ${vibStateUI==='Idle'?'bg-slate-100 text-slate-500':'bg-green-100 text-green-600'}`}>{vibStateUI}</span>
                       </div>
                       <div className="grid grid-cols-3 gap-2">
                           <button onClick={()=>triggerVibration(1000)} className="bg-slate-100 text-slate-700 text-xs font-bold py-3 rounded">1 Sec</button>
                           <button onClick={()=>triggerVibration(10000)} className="bg-slate-100 text-slate-700 text-xs font-bold py-3 rounded">10 Sec</button>
                           <button onClick={toggleVibrationLoop} className={`text-xs font-bold py-3 rounded ${stateRef.current.isVibrating?'bg-red-50 text-red-600':'bg-slate-100 text-slate-700'}`}>
                              {stateRef.current.isVibrating ? 'Stop' : 'Infinite'}
                           </button>
                       </div>
                    </div>

                    {/* Polling */}
                    <div className="glass-card rounded-xl p-6">
                        <h4 className="text-sm font-bold text-slate-500 uppercase mb-2">Polling Rate</h4>
                        <div className="flex items-end gap-2 text-slate-900 font-mono font-bold text-4xl">{pollingRateUI} <span className="text-lg text-slate-400 mb-1">Hz</span></div>
                        <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                            <div className={`h-full transition-all duration-300 ${pollingRateUI<100?'bg-red-500':pollingRateUI<200?'bg-yellow-500':'bg-green-500'}`} style={{width: Math.min((pollingRateUI/250)*100, 100)+'%'}}></div>
                        </div>
                    </div>

                    {/* Circularity */}
                    <div className="glass-card rounded-xl p-6">
                       <h4 className="text-sm font-bold text-slate-500 uppercase mb-4">Stick Precision</h4>
                       {[0, 2].map(base => {
                         const lbl = base===0?'LEFT STICK':'RIGHT STICK';
                         const canvasR = base===0?canvasLeft:canvasRight;
                         return (
                           <div key={base} className="mb-6 last:mb-0">
                               <div className="flex justify-between text-xs mb-2 font-bold text-slate-800">
                                 <span>{lbl}</span>
                               </div>
                               <div className="flex gap-4 items-center">
                                  <div className="relative w-32 h-32 bg-slate-50 rounded-full border border-slate-200 overflow-hidden shadow-inner flex-shrink-0">
                                      <canvas ref={canvasR} className="w-full h-full relative z-10"></canvas>
                                  </div>
                                  <div className="text-sm text-slate-500 w-full">
                                      Move stick to visualize layout.
                                  </div>
                               </div>
                           </div>
                         )
                       })}
                    </div>

                    {/* Raw List */}
                    <div className="glass-card rounded-xl p-6">
                       <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4">Raw Input</h4>
                       <div className="font-mono text-xs text-slate-600 h-64 overflow-y-auto pr-2 custom-scrollbar">
                           <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-4">
                              {gpData?.axes.map((a, i) => (
                                 <div key={i}>
                                     <div className="flex justify-between text-xs mb-1"><span>Axis {i}</span><span className="font-bold">{a.toFixed(5)}</span></div>
                                     <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden relative border border-slate-200">
                                         <div className="absolute top-0 bottom-0 w-px bg-slate-300 left-1/2 opacity-50"></div>
                                         <div className={`h-full absolute transition-all duration-75 ${Math.abs(a)>0.05?'bg-blue-600':'bg-slate-300'}`} style={{width: Math.abs(a)*50+'%', left: a<0?50-Math.abs(a)*50+'%':'50%'}}></div>
                                     </div>
                                 </div>
                              ))}
                           </div>
                           <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                               {gpData?.buttons.map((b, i) => (
                                  <div key={i} className={`px-2 py-1 rounded border text-xs font-mono transition-all ${b.pressed?'bg-blue-600 text-white':'bg-slate-50 text-slate-400'}`}>
                                      B{i} {b.value > 0 && <span className="opacity-70 ml-1">{b.value.toFixed(1)}</span>}
                                  </div>
                               ))}
                           </div>
                       </div>
                    </div>
                </div>

            </div>
        )}
    </main>
  );
}
