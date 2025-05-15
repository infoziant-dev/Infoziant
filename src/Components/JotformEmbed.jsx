import React, { useEffect } from "react";

const JotformChatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jotfor.ms/agent/embedjs/0196c83366b37995aa24907c2f61e9c41a50/embed.js?skipWelcome=1&maximizable=1";
    script.async = true;
    document.body.appendChild(script);

    // Optional: Cleanup if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // It will render as a floating widget, so no visible React element is needed
};

export default JotformChatbot;
