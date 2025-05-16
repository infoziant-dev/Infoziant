
import { useEffect, useState } from "react"
import { CheckCircle, XCircle, Play, Pause, RefreshCw } from "lucide-react"

export function TestingIllustration() {
  const [animate, setAnimate] = useState(false)
  const [testState, setTestState] = useState("idle") // One of: "idle", "running", "complete"
  const [testProgress, setTestProgress] = useState(0)
  const [testResults, setTestResults] = useState([
    { id: 1, name: "User Authentication", status: "idle" },
    { id: 2, name: "Data Validation", status: "idle" },
    { id: 3, name: "API Integration", status: "idle" },
    { id: 4, name: "Performance Check", status: "idle" },
  ])

  useEffect(() => {
    setAnimate(true)

    // Test animation sequence
    const runTests = () => {
      // Reset
      setTestState("idle")
      setTestProgress(0)
      setTestResults((prev) => prev.map((test) => ({ ...test, status: "idle" })))

      // Start tests
      setTimeout(() => {
        setTestState("running")

        // Test 1
        setTestResults((prev) => prev.map((test) => (test.id === 1 ? { ...test, status: "running" } : test)))

        setTimeout(() => {
          setTestProgress(25)
          setTestResults((prev) => prev.map((test) => (test.id === 1 ? { ...test, status: "passed" } : test)))

          // Test 2
          setTestResults((prev) => prev.map((test) => (test.id === 2 ? { ...test, status: "running" } : test)))

          setTimeout(() => {
            setTestProgress(50)
            setTestResults((prev) => prev.map((test) => (test.id === 2 ? { ...test, status: "passed" } : test)))

            // Test 3
            setTestResults((prev) => prev.map((test) => (test.id === 3 ? { ...test, status: "running" } : test)))

            setTimeout(() => {
              setTestProgress(75)
              setTestResults((prev) => prev.map((test) => (test.id === 3 ? { ...test, status: "failed" } : test)))

              // Test 4
              setTestResults((prev) => prev.map((test) => (test.id === 4 ? { ...test, status: "running" } : test)))

              setTimeout(() => {
                setTestProgress(100)
                setTestResults((prev) => prev.map((test) => (test.id === 4 ? { ...test, status: "passed" } : test)))
                setTestState("complete")
              }, 1000)
            }, 1000)
          }, 1000)
        }, 1000)
      }, 1000)
    }

    runTests()
    const interval = setInterval(runTests, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[320px]">
        {/* Testing Dashboard */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
          {/* Dashboard Header */}
          <div className="bg-gray-900 p-3 flex items-center justify-between">
            <div className="flex items-center">
              <RefreshCw
                className={`h-4 w-4 mr-2 ${testState === "running" ? "text-blue-400 animate-spin" : "text-gray-400"}`}
              />
              <div className="text-sm text-white font-medium">Automated Tests</div>
            </div>
            <div className="flex space-x-2">
              {testState === "running" ? (
                <Pause className="h-4 w-4 text-yellow-400" />
              ) : (
                <Play className="h-4 w-4 text-green-400" />
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="p-4 border-b border-gray-700">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm text-gray-300">Test Progress</div>
              <div className="text-sm font-bold text-blue-400">{testProgress}%</div>
            </div>

            <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-1000"
                style={{ width: `${testProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Test Results */}
          <div className="p-4">
            <div className="text-sm text-gray-300 mb-3">Test Results</div>

            <div className="space-y-3">
              {testResults.map((test) => (
                <div key={test.id} className="flex items-center justify-between bg-gray-700/30 p-2 rounded">
                  <div className="text-xs text-gray-300">{test.name}</div>
                  <div>
                    {test.status === "passed" && <CheckCircle className="h-4 w-4 text-green-400" />}
                    {test.status === "failed" && <XCircle className="h-4 w-4 text-red-400" />}
                    {test.status === "running" && <RefreshCw className="h-4 w-4 text-blue-400 animate-spin" />}
                    {test.status === "idle" && <div className="h-4 w-4 rounded-full border border-gray-500"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 border-t border-gray-700 flex justify-between items-center">
            <div className="text-xs text-gray-400">
              {testState === "complete"
                ? "Tests completed"
                : testState === "running"
                  ? "Running tests..."
                  : "Ready to run"}
            </div>
            <div className="flex space-x-2">
              <div className="flex items-center">
                <CheckCircle className="h-3 w-3 text-green-400 mr-1" />
                <span className="text-xs text-gray-300">{testResults.filter((t) => t.status === "passed").length}</span>
              </div>
              <div className="flex items-center">
                <XCircle className="h-3 w-3 text-red-400 mr-1" />
                <span className="text-xs text-gray-300">{testResults.filter((t) => t.status === "failed").length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className={`absolute -top-4 -right-4 bg-purple-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-y-2" : ""}`}
        >
          Testing
        </div>
        <div
          className={`absolute -bottom-4 -left-4 bg-green-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-y-2" : ""}`}
        >
          Quality
        </div>
        <div
          className={`absolute top-1/2 -right-16 transform -translate-y-1/2 bg-blue-500 text-white text-xs px-2 py-1 rounded transition-all duration-700 ${animate ? "translate-x-2" : ""}`}
        >
          Automation
        </div>
      </div>
    </div>
  )
}
