
import { useEffect, useState } from "react"
import { GraduationCap, Briefcase, Award, TrendingUp, Users,Building2 } from "lucide-react"
// import { Button } from "@/components/ui/button"

export function CampusIllustration() {
  const [animate, setAnimate] = useState(false)
  const [progressValue, setProgressValue] = useState(0)
  const [companyHighlight, setCompanyHighlight] = useState(null)

  // Animation for progress bar
  useEffect(() => {
    // Initial animation
    setTimeout(() => {
      setAnimate(true)
      animateProgressBar()
    }, 500)

    // Company highlight animation
    const companyInterval = setInterval(() => {
      setCompanyHighlight((prev) => {
        if (prev === null) return 0
        return (prev + 1) % 5
      })
    }, 1500)

    return () => {
      clearInterval(companyInterval)
    }
  }, [])

  const animateProgressBar = () => {
    let value = 0
    const interval = setInterval(() => {
      value += 1
      setProgressValue(value)
      if (value >= 92) {
        clearInterval(interval)
      }
    }, 20)
  }

  const companies = [
    { name: "Microsoft", color: "bg-blue-900/30 text-blue-400 border-blue-800" },
    { name: "Google", color: "bg-green-900/30 text-green-400 border-green-800" },
    { name: "Amazon", color: "bg-yellow-900/30 text-yellow-400 border-yellow-800" },
    // { name: "Adobe", color: "bg-red-900/30 text-red-400 border-red-800" },
    // { name: "IBM", color: "bg-indigo-900/30 text-indigo-400 border-indigo-800" },
  ]

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[320px] bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
        <div className="relative p-5">
          {/* Header with Campus Tag */}
          <div className="absolute top-0 right-0">
            <div className="bg-violet-500 text-white text-xs px-4 py-1 rounded-bl-lg">Campus</div>
          </div>

          {/* Title with Icon */}
          <div className="flex items-center gap-3 mb-6 mt-2">
            <div className={`bg-violet-600 p-2 rounded-full ${animate ? "animate-bounce" : ""}`}>
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">Campus Connect</h3>
          </div>

          {/* Placement Rate with animated progress */}
          <div className="mb-5">
            <div className="flex justify-between mb-1">
              <span className="text-sm text-gray-300">Placement Success Rate</span>
              <span className="text-sm font-bold text-violet-400">{progressValue}%</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressValue}%` }}
              ></div>
            </div>
          </div>

          {/* Stats Grid with hover effects */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div className="bg-gray-800/50 p-3 rounded-lg border border-transparent hover:border-violet-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs text-gray-400 flex items-center">
                <Building2 className="h-3 w-3 mr-1 text-violet-400" />
                Colleges
              </div>
              <div className="text-xl font-bold text-white">67+</div>
            </div>
            {/* Companies */}
            <div className="bg-gray-800/50 p-3 rounded-lg border border-transparent hover:border-violet-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs text-gray-400 flex items-center">
                <Briefcase className="h-3 w-3 mr-1 text-violet-400" />
                Companies
              </div>
              <div className="text-xl font-bold text-white">115+</div>
            </div>

            {/* Students Placed */}
            <div className="bg-gray-800/50 p-3 rounded-lg border border-transparent hover:border-violet-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs text-gray-400 flex items-center">
                <Users className="h-3 w-3 mr-1 text-violet-400" />
                Students Placed
              </div>
              <div className="text-xl font-bold text-white">7510+</div>
            </div>

            {/* Avg Package */}
            

            {/* Highest Package */}
            <div className="bg-gray-800/50 p-3 rounded-lg border border-transparent hover:border-violet-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-xs text-gray-400 flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-violet-400" />
                Highest Package
              </div>
              <div className="text-xl font-bold text-white"> ₹1.02 Cr </div>
            </div>
          </div>

          {/* Company Logos with animation */}
          <div className="flex flex-wrap gap-2 mb-5">
            {companies.map((company, index) => (
              <div
                key={index}
                className={`${company.color} text-xs px-3 py-1 rounded border transition-all duration-300 ${
                  companyHighlight === index ? "transform scale-110 shadow-lg shadow-violet-900/50" : ""
                }`}
              >
                {company.name}
              </div>
            ))}
          </div>

          {/* Action Button with hover effect */}
          {/* <Button className="w-full bg-violet-600 hover:bg-violet-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/50">
            View Opportunities
          </Button> */}
        </div>
      </div>
    </div>
  )
}
