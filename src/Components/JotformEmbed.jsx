import { useEffect } from 'react';

const JotformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.jotfor.ms/agent/embedjs/0196c83366b37995aa24907c2f61e9c41a50/embed.js?skipWelcome=1&maximizable=1";
    script.async = true;
    script.crossOrigin = "anonymous"; // might not prevent errors, but safe

    // Optional: add script error handler
    script.onerror = (e) => {
      console.warn("Jotform script load failed", e);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup the script tag
      document.body.removeChild(script);
    };
  }, []);

  return <div id="jotform-agent" />;
};

export default JotformEmbed;
