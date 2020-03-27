import React, { useState } from 'react';
import loading from './icons/loading.svg';

const Loading = () => {
  const [hasLoaded, setLoaded] = useState(false);
  setTimeout(() => {
    setLoaded(true);
  }, 2000);
  return (
    <div className={`loading ${hasLoaded && 'loaded'}`}>
      {!hasLoaded && <img src={loading} alt="loading" />}
    </div>
  );
};

export default Loading;
