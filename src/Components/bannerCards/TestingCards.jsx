import { RefreshCcw, CheckCircle, RotateCcw, Circle } from "lucide-react"

export default function TestingCard() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <div className="relative max-w-md mx-auto">
          <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium z-10">
            Testing
          </div>

          <div className="relative border-2 border-gray-700 rounded-lg p-4 bg-gray-900 shadow-lg">
            <div className="absolute right-0 top-1/3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Automation
            </div>

            <div className="absolute bottom-0 left-0 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium mb-2 ml-8">
              Quality
            </div>

            <div className="bg-gray-950 rounded-md p-6">
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <RefreshCcw className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-xl font-bold">Automated Tests</span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300">Test Progress</span>
                  <span className="text-blue-400 font-bold">50%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>

              <div className="mb-2">
                <span className="text-gray-300 text-lg">Test Results</span>
              </div>

              <div className="space-y-3 mb-6">
                <div className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
                  <span className="text-gray-300">User Authentication</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
                  <span className="text-gray-300">Data Validation</span>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>

                <div className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
                  <span className="text-gray-300">API Integration</span>
                  <RotateCcw className="w-5 h-5 text-blue-500" />
                </div>

                <div className="bg-gray-800 p-3 rounded-md flex justify-between items-center">
                  <span className="text-gray-300">Performance Check</span>
                  <Circle className="w-5 h-5 text-gray-500" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Running tests...</span>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-green-500">2</span>
                  </div>
                  <div className="flex items-center">
                    <Circle className="w-4 h-4 text-red-500 mr-1" />
                    <span className="text-red-500">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 text-left">
        <div className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-medium inline-block mb-2">
          Testing
        </div>
        <h3 className="text-2xl font-bold mb-4 flex items-center">
          <RefreshCcw className="mr-2 text-purple-500" /> Automated Testing Solutions
        </h3>

        <p className="text-gray-300 mb-6">
          Our comprehensive testing framework ensures your applications are robust, reliable, and ready for production.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Unit Testing</h4>
            <p className="text-gray-400 text-sm">
              Validate individual components and functions to ensure they work as expected.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Integration Testing</h4>
            <p className="text-gray-400 text-sm">
              Verify that different parts of your application work together seamlessly.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-medium mb-2">Performance Testing</h4>
            <p className="text-gray-400 text-sm">
              Ensure your application performs well under various load conditions.
            </p>
          </div>
        </div>

        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md font-medium transition-colors">
          Learn More
        </button>
      </div>
    </div>
  )
}
