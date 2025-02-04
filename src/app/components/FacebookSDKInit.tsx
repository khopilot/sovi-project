'use client'

import Script from 'next/script';
import { useEffect, useState } from 'react';

export const FacebookSDKInit = () => {
  const [retryCount, setRetryCount] = useState(0);
  const maxRetries = 3;

  useEffect(() => {
    const initFacebookSDK = () => {
      try {
        if (!document.getElementById('fb-root')) {
          const fbRoot = document.createElement('div');
          fbRoot.id = 'fb-root';
          document.body.appendChild(fbRoot);
        }
      } catch (error) {
        console.error('Error initializing Facebook SDK:', error);
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
          }, 1000);
        }
      }
    };

    initFacebookSDK();
  }, [retryCount]);

  const handleScriptLoad = () => {
    if (window.FB) {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    }
  };

  const handleScriptError = () => {
    console.error('Failed to load Facebook SDK');
    if (retryCount < maxRetries) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
      }, 1000);
    }
  };

  return (
    <Script
      src="https://connect.facebook.net/en_US/sdk.js"
      strategy="lazyOnload"
      crossOrigin="anonymous"
      onLoad={handleScriptLoad}
      onError={handleScriptError}
    />
  );
}; 