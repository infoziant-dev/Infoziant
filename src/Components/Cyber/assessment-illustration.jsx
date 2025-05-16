
import { useEffect, useState } from "react"
import { AlertTriangle, BarChart3, Activity } from "lucide-react"

export function AssessmentIllustration() {
  const [animate, setAnimate] = useState(false)
  const [threatLevel, setThreatLevel] = useState(0)

  useEffect(() => {
    setAnimate(true)

    // Animate threat level
    let level = 0
    const interval = setInterval(() => {
      level = (level + 1) % 5
      setThreatLevel(level)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[320px]">
        {/* Dashboard */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
          {/* Dashboard Header */}
          <div className="bg-gray-900 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="h-4 w-4 text-yellow-500 mr-2" />
              <div className="text-sm text-white font-medium">Security Dashboard</div>
            </div>
            <div className="text-xs text-gray-400">Live</div>
          </div>

          {/* Threat Level Indicator */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-300">Threat Level</div>
              <div
                className={`text-sm font-bold ${
                  threatLevel < 2 ? "text-green-400" : threatLevel < 4 ? "text-yellow-400" : "text-red-400"
                }`}
              >
                Level {threatLevel}
              </div>
            </div>

            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  threatLevel < 2 ? "bg-green-500" : threatLevel < 4 ? "bg-yellow-500" : "bg-red-500"
                }`}
                style={{ width: `${(threatLevel + 1) * 20}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 p-4">
            {/* Scan Duration */}
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Scan Duration</div>
              <div className="text-sm text-white font-medium">4m 32s</div>
              <div className="mt-2">
                <Activity className="h-4 w-4 text-blue-400" />
              </div>
            </div>

            {/* Resources */}
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Resources</div>
              <div className="text-sm text-white font-medium">{threatLevel * 3 + 5}</div>
              <div className="mt-2">
                <BarChart3 className="h-4 w-4 text-purple-400" />
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Avg Response Time</div>
              <div className="text-sm text-white font-medium">{threatLevel + 1}ms</div>
              <div className="mt-2">
                <Activity className="h-4 w-4 text-teal-400" />
              </div>
            </div>

            {/* Threats */}
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-xs text-gray-400 mb-1">Threats Identified</div>
              <div className="text-sm text-white font-medium">{threatLevel * 2}</div>
              <div className="mt-2">
                <AlertTriangle className="h-4 w-4 text-red-400" />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="p-4 border-t border-gray-700 flex justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-lg transition-colors">
              Show Full Report
            </button>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className={`absolute -top-4 -right-4 ${
            threatLevel < 2 ? "bg-green-500" : threatLevel < 4 ? "bg-yellow-500" : "bg-red-500"
          } text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-y-2" : ""}`}
        >
          Security
        </div>
        <div
          className={`absolute -bottom-4 -left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-y-2" : ""}`}
        >
          Analytics
        </div>
        <div
          className={`absolute top-1/2 -left-6 transform -translate-y-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-x-2" : ""}`}
        >
          Monitoring
        </div>
      </div>
    </div>
  )
}
