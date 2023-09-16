import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';

ReactDOM.hydrateRoot(
  document.getElementById('root')!,
  <React.StrictMode>
    <HelmetProvider>
      <Helmet>
        {/* Twitterカード */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:url"
          content="https://h-yoshikawa44.github.io/close-to-2/"
        />
        <meta property="og:title" content="Close to 2" />
        <meta property="og:description" content="2に近い式をあてるゲーム部屋" />
        <meta
          property="og:image"
          content="https://h-yoshikawa44.github.io/close-to-2/ogp.png"
        />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
