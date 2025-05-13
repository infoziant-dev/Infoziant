import React, { useEffect } from 'react';

const JotformEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/agent/embedjs/0196c83366b37995aa24907c2f61e9c41a50/embed.js?skipWelcome=1&maximizable=1';
    script.async = true;
    script.crossOrigin = 'anonymous'; // Optional, may help if Jotform supports CORS

    script.onerror = () => {
      console.error('Failed to load Jotform embed script.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="jotform-container" />;
};

export default JotformEmbed;
