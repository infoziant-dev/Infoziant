"use client"

import { useEffect, useState } from "react"

export function CodeIllustration() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const interval = setInterval(() => {
      setAnimate((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[320px]">
        {/* Code Editor */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
          {/* Editor Header */}
          <div className="bg-gray-900 p-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400">script.js</div>
          </div>

          {/* Code Content */}
          <div className="p-4 font-mono text-xs md:text-sm overflow-hidden">
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">1</div>
              <div>
                <span className="text-purple-400">const</span>
                <span className="text-blue-400"> app</span>
                <span className="text-white"> =</span>
                <span className="text-yellow-400"> {`{}`}</span>
                <span className="text-white">;</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">2</div>
              <div className="text-gray-400">// Initialize application</div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">3</div>
              <div>
                <span className="text-purple-400">function</span>
                <span className="text-green-400"> init</span>
                <span className="text-yellow-400">()</span>
                <span className="text-white"> {`{`}</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">4</div>
              <div className="pl-4">
                <span className="text-blue-400">app</span>
                <span className="text-white">.</span>
                <span className="text-green-400">config</span>
                <span className="text-white"> = {`{`}</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">5</div>
              <div className="pl-8">
                <span className="text-green-400">theme</span>
                <span className="text-white">:</span>
                <span className="text-orange-400"> 'dark'</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">6</div>
              <div className="pl-8">
                <span className="text-green-400">api</span>
                <span className="text-white">:</span>
                <span className="text-orange-400"> 'v2'</span>
                <span className="text-white">,</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">7</div>
              <div className="pl-8">
                <span className="text-green-400">debug</span>
                <span className="text-white">:</span>
                <span className="text-blue-400"> false</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">8</div>
              <div className="pl-4">
                <span className="text-white">{`};`}</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">9</div>
              <div className="pl-4">
                <span className="text-purple-400">return</span>
                <span className="text-white"> app;</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-500 mr-4 select-none">10</div>
              <div>
                <span className="text-white">{`}`}</span>
              </div>
            </div>
            <div className="flex mt-2">
              <div className="text-gray-500 mr-4 select-none">11</div>
              <div>
                <span className="text-blue-400">app</span>
                <span className="text-white">.</span>
                <span className="text-green-400">start</span>
                <span className="text-yellow-400">()</span>
                <span className="text-white">;</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className={`absolute -top-4 -right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-y-2" : ""}`}
        >
          JS
        </div>
        <div
          className={`absolute -bottom-4 -left-4 bg-orange-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-y-2" : ""}`}
        >
          HTML
        </div>
        <div
          className={`absolute top-1/2 -left-6 transform -translate-y-1/2 bg-teal-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-x-2" : ""}`}
        >
          CSS
        </div>
      </div>
    </div>
  )
}
