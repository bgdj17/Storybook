import React, { useState, useEffect, FC } from 'react';
import  './FullScreenImage.scss'
import imagens from './imagem.json'

export type FullImageProps ={
  description: string
  initialImageSrc: string
  alternateImageSrc: string
  timeInSeconds: number
}

const FullScreenImage: FC<FullImageProps> = ({ initialImageSrc, alternateImageSrc, timeInSeconds }) => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [currentImageSrc, setCurrentImageSrc] = useState(initialImageSrc);

  // const toggleFullScreen = () => {
  //   setIsFullScreen(isFullScreen);
  // };
  function getApi(){
    const timer = setTimeout(() => {
      setCurrentImageSrc(alternateImageSrc);
    }, timeInSeconds * 1000);
}

  useEffect(() => {
    if (isFullScreen) {
      const timer = setTimeout(() => {
        setCurrentImageSrc(alternateImageSrc);
      }, timeInSeconds * 1000);

      return () => clearTimeout(timer);
    }
  }, [isFullScreen, alternateImageSrc, timeInSeconds]);

  return (
    <div className={`fullscreen-image ${isFullScreen ? 'fullscreen' : ''}`}>
      <img src={currentImageSrc} alt="Imagem"  />
    </div>
  );
};

export default FullScreenImage;
