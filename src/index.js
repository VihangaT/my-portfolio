import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Suppress third-party browser extension errors from triggering the React dev overlay
if (typeof window !== 'undefined') {
  const originalErrorHandler = window.onerror;
  window.onerror = function (message, source, lineno, colno, error) {
    if (
      source &&
      (source.includes('chrome-extension://') ||
        source.includes('moz-extension://') ||
        source.includes('extension'))
    ) {
      return true; // Prevents error from bubbling up to create-react-app overlay
    }
    if (originalErrorHandler) {
      return originalErrorHandler(message, source, lineno, colno, error);
    }
    return false;
  };

  window.addEventListener(
    'error',
    (event) => {
      if (
        event.filename &&
        (event.filename.includes('chrome-extension://') ||
          event.filename.includes('moz-extension://'))
      ) {
        event.stopImmediatePropagation();
      }
    },
    true
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
