import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, className, ...rest }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  const loadingAnimation = (
    <div className={`${className} bg-gray-400 animate-pulse`}></div>
  );

  return (
    hasError
      ? loadingAnimation
      : <img src={src} alt={alt} className={className} onError={handleError} {...rest} />
  );
};

export default ImageWithFallback;
