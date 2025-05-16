
import React, { useEffect, useState } from "react"
import { Shield, Lock, CheckCircle, AlertTriangle, Fingerprint, Wifi } from "lucide-react"

export function SecurityIllustration() {
  const [animate, setAnimate] = useState(false)
  const [lockState, setLockState] = useState("unlocked") // lockState can be "unlocked", "locking", or "locked"
  const [scanActive, setScanActive] = useState(false)
  const [threatDetected, setThreatDetected] = useState(false)

  useEffect(() => {
    setAnimate(true)

    // Animation sequence
    const sequence = () => {
      // Reset states
      setLockState("unlocked")
      setScanActive(false)
      setThreatDetected(false)

      // Start scan
      setTimeout(() => setScanActive(true), 500)

      // Detect threat
      setTimeout(() => setThreatDetected(true), 1500)

      // Start locking
      setTimeout(() => setLockState("locking"), 2000)

      // Complete lock
      setTimeout(() => {
        setLockState("locked")
        setScanActive(false)
      }, 3000)
    }

    sequence()
    const interval = setInterval(sequence, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-full max-w-[320px]">
        {/* Security Shield Background */}
        <div className="absolute -inset-4 flex items-center justify-center opacity-10">
          <Shield className="w-full h-full text-blue-500" strokeWidth={0.5} />
        </div>

        {/* Phone mockup */}
        <div className="w-[200px] h-[380px] bg-gray-800 rounded-[36px] p-3 border-4 border-gray-700 shadow-xl relative overflow-hidden mx-auto">
          {/* Screen */}
          <div className="w-full h-full bg-gradient-to-b from-blue-900 to-indigo-900 rounded-[28px] overflow-hidden relative">
            {/* Status bar */}
            <div className="h-6 w-full bg-black/20 flex justify-between items-center px-4">
              <div className="text-white text-[10px]">9:41</div>
              <div className="flex space-x-1">
                <Wifi className="h-3 w-3 text-white/80" />
                <div className="w-3 h-3 rounded-full bg-white/80"></div>
                <div className="w-3 h-3 rounded-full bg-white/80"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col items-center justify-center h-[calc(100%-24px)] p-4">
              {/* Logo */}
              <div className="mb-6 flex items-center">
                <Shield
                  className={`h-8 w-8 ${lockState === "locked" ? "text-green-400" : lockState === "locking" ? "text-yellow-400" : "text-blue-400"} transition-colors duration-300`}
                />
                <span className="ml-2 text-white font-bold">SecureGuard</span>
              </div>

              {/* Security Scan Animation */}
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                {/* Scanning effect */}
                {scanActive && (
                  <div className="absolute inset-0 overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-400 animate-[scan_1.5s_linear_infinite]"></div>
                  </div>
                )}

                {/* Pulsing circles */}
                <div
                  className={`absolute inset-0 rounded-full ${
                    lockState === "locked"
                      ? "bg-green-500/20"
                      : lockState === "locking"
                        ? "bg-yellow-500/20"
                        : "bg-blue-500/20"
                  } transition-all duration-500 ${animate ? "animate-pulse" : ""}`}
                ></div>
                <div
                  className={`absolute inset-2 rounded-full ${
                    lockState === "locked"
                      ? "bg-green-500/30"
                      : lockState === "locking"
                        ? "bg-yellow-500/30"
                        : "bg-blue-500/30"
                  } transition-all duration-500`}
                ></div>
                <div
                  className={`absolute inset-4 rounded-full ${
                    lockState === "locked"
                      ? "bg-green-500/40"
                      : lockState === "locking"
                        ? "bg-yellow-500/40"
                        : "bg-blue-500/40"
                  } transition-all duration-500`}
                ></div>

                <div className="relative z-10">
                  {lockState === "locked" ? (
                    <Lock className="h-10 w-10 text-green-400" />
                  ) : lockState === "locking" ? (
                    <Lock className="h-10 w-10 text-yellow-400 animate-pulse" />
                  ) : (
                    <Lock className="h-10 w-10 text-blue-400" />
                  )}
                </div>
              </div>

              {/* Status text */}
              <div className="text-white text-center mb-6">
                {lockState === "locked" ? (
                  <div className="text-green-400 font-bold flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    SECURED
                  </div>
                ) : lockState === "locking" ? (
                  <div className="text-yellow-400 font-bold animate-pulse">SECURING...</div>
                ) : (
                  <div
                    className={`text-blue-400 font-bold ${threatDetected ? "text-red-400" : ""} transition-colors duration-300`}
                  >
                    {threatDetected ? (
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-1 animate-pulse" />
                        THREAT DETECTED
                      </div>
                    ) : (
                      "SCANNING"
                    )}
                  </div>
                )}
              </div>

              {/* Security Features */}
              <div className="w-full space-y-2">
                <div
                  className={`bg-white/10 rounded p-2 text-[10px] text-white/80 flex justify-between items-center ${threatDetected && lockState === "unlocked" ? "bg-red-500/20" : ""} transition-colors duration-300`}
                >
                  <span>Firewall</span>
                  <Shield className={`h-3 w-3 ${lockState === "locked" ? "text-green-400" : "text-white/60"}`} />
                </div>
                <div
                  className={`bg-white/10 rounded p-2 text-[10px] text-white/80 flex justify-between items-center ${threatDetected && lockState === "unlocked" ? "bg-red-500/20" : ""} transition-colors duration-300`}
                >
                  <span>Encryption</span>
                  <Lock className={`h-3 w-3 ${lockState === "locked" ? "text-green-400" : "text-white/60"}`} />
                </div>
                <div className={`bg-white/10 rounded p-2 text-[10px] text-white/80 flex justify-between items-center`}>
                  <span>Biometrics</span>
                  <Fingerprint className={`h-3 w-3 ${lockState === "locked" ? "text-green-400" : "text-white/60"}`} />
                </div>
                <button
                  className={`w-full rounded py-1 text-[10px] font-bold text-white ${
                    lockState === "locked"
                      ? "bg-green-500"
                      : lockState === "locking"
                        ? "bg-yellow-500"
                        : threatDetected
                          ? "bg-red-500 animate-pulse"
                          : "bg-blue-500"
                  } transition-colors duration-300`}
                >
                  {lockState === "locked" ? "SECURED" : threatDetected ? "SECURE NOW!" : "SCAN SYSTEM"}
                </button>
              </div>
            </div>
          </div>

          {/* Home button */}
          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
        </div>

        {/* Floating security elements */}
        <div
          className={`absolute -top-4 -right-4 bg-green-500/80 text-white text-xs px-2 py-1 rounded-full flex items-center transition-all duration-700 ${
            animate ? "translate-y-2" : ""
          }`}
        >
          <CheckCircle className="h-3 w-3 mr-1" />
          <span>Secure</span>
        </div>
        <div
          className={`absolute -bottom-4 -left-4 bg-blue-500/80 text-white text-xs px-2 py-1 rounded-full transition-all duration-700 ${
            animate ? "translate-y-2" : ""
          }`}
        >
          <span>Protected</span>
        </div>
        <div
          className={`absolute top-1/2 -right-16 transform -translate-y-1/2 bg-indigo-500/80 text-white text-xs px-2 py-1 rounded-full transition-all duration-700 ${
            animate ? "translate-x-2" : ""
          }`}
        >
          <span>Encrypted</span>
        </div>

        {/* Animated shield particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500 rounded-full opacity-70"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 3 + 2}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          50% { transform: translateY(96px); }
          100% { transform: translateY(0); }
        }
        
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(-20px) translateX(0); }
          75% { transform: translateY(-10px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </div>
  )
}
