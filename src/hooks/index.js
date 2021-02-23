import React from "react";

export const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
  const [src, setSrc] = React.useState(lowQualitySrc);

  React.useEffect(() => {
    setSrc(lowQualitySrc);

    const img = new Image();
    img.src = highQualitySrc;

    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  let blur = src === lowQualitySrc;
  return [src, blur];
};
