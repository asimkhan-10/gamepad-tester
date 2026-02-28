'use client';

export default function SEOSection() {
    return (
      <section className="max-w-4xl mx-auto px-4 py-16 text-slate-600 border-t border-slate-200 bg-slate-50 w-full">
          {/*  1. Intro  */}
          <div className="mb-16">
              <h2 className="seo-heading text-slate-900">The Ultimate Online Gamepad Tester</h2>
              <p className="seo-text">
                  Welcome to ProGamepadTester, the most advanced, free online tool to test your controller's functionality, performance, and health. Whether you are a competitive gamer diagnosing input lag or a casual player checking for stick drift, our browser-based utility provides professional-grade diagnostics instantly. No downloads, no drivers—just plug and play.
              </p>
              <a href="#top" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-500/30">Test My Controller Now</a>
  
              <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Detect Controller Issues Before They Affect Gameplay</h3>
                      <p className="text-slate-500 leading-relaxed">
                          A game controller can feel “off” long before it completely fails. A button that sometimes doesn’t register. A stick that no longer returns to center. Triggers that respond unevenly depending on how lightly or firmly you press them. These issues are easy to miss in gameplay but frustrating when they start affecting aim, movement, or timing.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">See Exactly How Your Controller Responds</h3>
                      <p className="text-slate-500 leading-relaxed">
                          This tester is built to show exactly what your controller is sending to your system, in real time. The moment you connect a controller, every input is visualized as raw data, not guesses. Button states update instantly. Stick movement is shown as continuous motion instead of simple on-off indicators. Triggers behave like analog inputs, so you can see their full range instead of assuming they work.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Test Directly in Your Browser</h3>
                      <p className="text-slate-500 leading-relaxed">
                          Because everything runs directly in the browser, there’s no software to install and no drivers to configure. The tool reads controller input the same way modern games do, which makes the results practical and easy to relate to real gameplay. If something feels delayed, imprecise, or inconsistent, you can see it happen live instead of relying on trial and error inside a game.
                      </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-200">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Built for Diagnosis, Not Guesswork</h3>
                      <p className="text-slate-500 leading-relaxed">
                          This isn’t meant to replace calibration tools or firmware utilities. It’s meant to answer a simpler, more important question: is my controller behaving the way I expect it to? Whether you’re checking a new controller, troubleshooting an old one, or verifying a suspected hardware issue, the goal is clarity. You see what the controller does, not what it’s supposed to do.
                      </p>
                  </div>
              </div>
          </div>
  
          {/*  2. Why Use This Tool?  */}
          <div className="mb-16">
              <div>
                  <h2 className="seo-heading text-slate-900">Why choose this Gamepad Tester?</h2>
                  <ul className="space-y-3">
                      <li className="flex gap-3">
                          <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span><strong>Instant Feedback: </strong>See button presses, trigger sensitivity, and stick movements in real-time. No downloads, no extra software. </span>
                      </li>
                      <li className="flex gap-3">
                          <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span><strong>Stick Drift & Deadzone Detection: </strong>Identify analog stick misalignment and deadzones that can disrupt aiming in shooters or racing games.</span>
                      </li>
                      <li className="flex gap-3">
                          <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span><strong>Polling Rate & Input Lag Analysis: </strong>Check if your controller is responding fast enough for competitive gaming. Know exactly how your Xbox, PlayStation, or Nintendo controller performs. </span>
                      </li>
                      <li className="flex gap-3">
                          <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span><strong>Vibration & Haptic Testing: </strong>Verify that your rumble motors and haptic feedback are working properly, so immersive gaming stays intact. </span>
                      </li>
                      <li className="flex gap-3">
                          <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span><strong>Multi-Controller Support: </strong>Test multiple controllers simultaneously. Perfect for tournaments, families, or game rooms with several devices. </span>
                      </li>
                  </ul>
              </div>
          </div>
  
          {/*  3. Core Modules  */}
          <div className="mb-16">
              <h2 className="seo-heading">Core Diagnostic Modules</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="glass-card p-6 rounded-lg">
                      <div className="text-blue-600 mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Visualizer</h4>
                      <p className="text-sm text-slate-500">A real-time map of every button, trigger, and stick. Instantly see stuck buttons or ghost inputs.</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg">
                      <div className="text-blue-600 mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Circularity & Drift</h4>
                      <p className="text-sm text-slate-500">Advanced math calculates your stick's error rate. Perfect for checking if your joystick sensors are wearing out.</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg">
                      <div className="text-blue-600 mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Input Recorder</h4>
                      <p className="text-sm text-slate-500">Record a sequence of moves and play it back. Essential for checking macro consistency or fighting game inputs.</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg">
                      <div className="text-blue-600 mb-3">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                      </div>
                      <h4 className="font-bold text-slate-800 mb-2">Vibration & Haptics</h4>
                      <p className="text-sm text-slate-500">Test left/right rumble motors with variable durations or infinite loops. Ensure your immersion is intact.</p>
                  </div>
              </div>
          </div>
  
          {/*  4. How to Use  */}
          <div className="mb-16">
              <h2 className="seo-heading">How to use this Gamepad Tester</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                      <div className="aspect-[2/1] bg-slate-100 relative overflow-hidden">
                          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjHAC__inRg1TPGvQBBEcF_ZEHA8TgjUoURK5lcJudpSc4CJeALmdncvXnS8thNBfl6zZHsZa_eQdJQkoC3s6cSEWBMTX0peR2jYM7qoOk8B-EDxD1IJwjcHpz74-6-YQ_5-sggmW4_MJ97Sy_NMsimD5VkE8LrcfDysV_EByoPaoyVQ0v-pHYhThi2lk/s16000/connect-final.png" alt="Connecting controller via USB" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">1</div>
                      </div>
                      <div className="p-5">
                          <h4 className="font-bold text-slate-800 mb-2">Connect Your Controller</h4>
                          <p className="text-sm text-slate-500">Connect Your Controller Plug your controller into a USB port or pair it via Bluetooth. This works on PCs, Macs, Chromebooks, and modern browsers.</p>
                      </div>
                  </div>
                  <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                      <div className="aspect-[2/1] bg-slate-100 relative overflow-hidden">
                          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWWV64otkOo-DtgAdOdRv8lf388_HgBAa-scNNAG_WPUz3n7htT0OrYJwn_4A9VOP5Gm2pkyy8p9pK2A_L17BEjG82AMhtHNewbdS_eeQuVCX30596ovquJTnvTKNBhA4uyzVoG9Xhyphenhyphenc3BOSuckHzJUgAqpO_yIsnHRiryQqc_pSF6v4CTIHEuNIscNaU/s16000/pressed-buttons.png" alt="Pressing a button on the controller" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">2</div>
                      </div>
                      <div className="p-5">
                          <h4 className="font-bold text-slate-800 mb-2">Press Any Button</h4>
                          <p className="text-sm text-slate-500">Some browsers pause gamepad detection to save power. Press any button—like A, X, or Start—to wake up your controller. The tester will detect it instantly.</p>
                      </div>
                  </div>
                  <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                      <div className="aspect-[2/1] bg-slate-100 relative overflow-hidden">
                          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYAmbDaNzo4ng4RzTztwW4wO4kkGLptGWMQx4y1rvRLNEUDeZ_Tcm-QCs3KE1kiQtfGYM3iN5uS-BZpTrYy_njf43NyPl6iNWEn-YaGXt1DCaEzPXVK62IOO8CauA9xqrYvrBcOlfVQqyRIH10EollkMurej9lpANjLM09xTg69CayEZ47RouIRlfrrAM/s16000/rotate-sticks.png" alt="Rotating analog sticks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">3</div>
                      </div>
                      <div className="p-5">
                          <h4 className="font-bold text-slate-800 mb-2">Rotate the Analog Sticks</h4>
                          <p className="text-sm text-slate-500">To check stick circularity and detect drift, rotate both analog sticks in full 360-degree circles 3–4 times. This ensures the tool maps the outer boundaries accurately.</p>
                      </div>
                  </div>
                  <div className="glass-card rounded-xl overflow-hidden hover:shadow-lg transition-all group">
                      <div className="aspect-[2/1] bg-slate-100 relative overflow-hidden">
                          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo6UxbmLsUdwfl6NvK2dKrpDfL_Ohqu_QgumkfV4zDjsJth5iHu9BgiPpUKAff82aFUd4F1O7858JukXJvoDqAAKblh-6SQcnuixAPIjIGnuGZVhejzssponU6Z5K3IShULCUWC-_vLaFtLvUh7WE_cJLYIQrhNQU1mpfSlL-20Yq5aWC-mDGTF7av5J0/s16000/vibration.png" alt="Controller vibrating" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute top-3 left-3 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md">4</div>
                      </div>
                      <div className="p-5">
                          <h4 className="font-bold text-slate-800 mb-2">Test Rumble and Haptics</h4>
                          <p className="text-sm text-slate-500">Use the “Vibration Test” module to trigger your controller’s motors. Select “Infinite” for continuous feedback while moving the controller to detect loose parts or weak vibrations.</p>
                      </div>
                  </div>
              </div>
          </div>
  
          {/*  5. Supported Controllers  */}
          <div className="mb-16 glass-card rounded-xl p-8">
              <h2 className="seo-heading text-center mb-8">Supported Controllers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="font-bold text-slate-800">PlayStation</div>
                      <div className="text-xs text-slate-500">DualSense, DualShock 4, DS3</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="font-bold text-slate-800">Xbox</div>
                      <div className="text-xs text-slate-500">Series X/S, One, 360</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="font-bold text-slate-800">Nintendo</div>
                      <div className="text-xs text-slate-500">Switch Pro, JoyCons</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="font-bold text-slate-800">Generic / PC</div>
                      <div className="text-xs text-slate-500">Logitech, 8BitDo, HID</div>
                  </div>
              </div>
          </div>
  
          {/*  6. FAQ  */}
          <div className="mb-12">
              <h2 className="seo-heading">Frequently Asked Questions</h2>
              <div className="space-y-4">
                  <details className="glass-card rounded-lg overflow-hidden group">
                      <summary className="p-4 font-semibold cursor-pointer text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center">
                          My controller isn’t being detected. What should I do?
                          <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 pt-0 text-sm text-slate-500 bg-white border-t border-slate-100">
                          If your controller doesn’t show up, first make sure it’s connected properly with USB or Bluetooth. Some browsers require you to press any button on the controller before they start reading inputs. Trying a different USB port, reconnecting the controller, or switching to a modern browser like Chrome, Edge, or Firefox can help fix detection issues.
                      </div>
                  </details>
                  <details className="glass-card rounded-lg overflow-hidden group">
                      <summary className="p-4 font-semibold cursor-pointer text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center">
                          Does this tester work with wireless controllers?
                          <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 pt-0 text-sm text-slate-500 bg-white border-t border-slate-100">
                          Yes — wireless Bluetooth controllers are supported as long as your device has a Bluetooth connection and the controller is paired correctly. If the connection feels unstable, refreshing the page or reconnecting the controller often resolves minor issues.
                      </div>
                  </details>
                  <details className="glass-card rounded-lg overflow-hidden group">
                      <summary className="p-4 font-semibold cursor-pointer text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center">
                          Can I check stick drift or deadzones with this tool?
                          <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 pt-0 text-sm text-slate-500 bg-white border-t border-slate-100">
                          Yes. By moving the analog sticks and watching how their values behave when released, you can see if the stick returns to center cleanly. If values fluctuate when the stick is untouched, or don’t move until pushed far, that indicates drift or a deadzone issue.
                      </div>
                  </details>
                  <details className="glass-card rounded-lg overflow-hidden group">
                      <summary className="p-4 font-semibold cursor-pointer text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center">
                          How do I test vibration or rumble?
                          <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 pt-0 text-sm text-slate-500 bg-white border-t border-slate-100">
                          If your controller supports vibration (haptic feedback), this tester will activate the motors when you use the vibration test buttons. You can feel whether the left and right motors work as expected and listen for differences in strength or consistency.
                      </div>
                  </details>
                  <details className="glass-card rounded-lg overflow-hidden group">
                      <summary className="p-4 font-semibold cursor-pointer text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center">
                          Which controllers are supported?
                          <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 pt-0 text-sm text-slate-500 bg-white border-t border-slate-100">
                          Most modern gamepads that speak the standard Web Gamepad API are supported. This includes controllers like Xbox Series X/S, Xbox One, PlayStation DualSense and DualShock 4, Nintendo Switch Pro, and many generic USB/Bluetooth gamepads.
                      </div>
                  </details>
                  <details className="glass-card rounded-lg overflow-hidden group">
                      <summary className="p-4 font-semibold cursor-pointer text-slate-800 hover:bg-slate-50 transition-colors flex justify-between items-center">
                          Does it work on mobile devices?
                          <span className="text-blue-500 transform group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <div className="p-4 pt-0 text-sm text-slate-500 bg-white border-t border-slate-100">
                         Controller testing in the browser can work on mobile devices if the controller is connected through Bluetooth or an OTG cable, but support varies by device and browser. For the most complete experience, desktop browsers perform best.
                      </div>
                  </details>
              </div>
          </div>
  
          <div className="text-center mt-12">
              <button onClick={() => window.scrollTo(0,0)} className="inline-block bg-white hover:bg-slate-50 text-slate-700 font-semibold py-3 px-8 rounded-full transition-colors border border-slate-200 shadow-sm hover:shadow-md">
                  &uarr; Back to Tester
              </button>
          </div>
  
      </section>
    );
  }
