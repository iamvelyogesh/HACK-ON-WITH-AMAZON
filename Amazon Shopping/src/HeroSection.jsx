import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Cards from './Cards';
import Header from './Header';

const HeroSection = () => {
  const images = [
    "https://m.media-amazon.com/images/I/710ERVPesIL._SX3000_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Nord/NordCE4Lite/Launch/D138805427_WLD_OnePlus_NordCE4Lite_NewLaunch_DesktopTall_Hero_1500x600._CB555583893_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2024/PC_Hero_3000x1200_Electricityjpg._CB555882039_.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-[500px]">
      <div
        className="relative w-full h-full bg-cover"
        style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 0.3s ease-in-out' }}
      />
      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 hover:border-solid">
          <IconButton onClick={prevImage} className="pointer-events-auto h-[800px]">
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <div className="absolute right-0 top-0 bottom-0">
          <IconButton onClick={nextImage} className="pointer-events-auto h-full">
            <ChevronRightIcon />
          </IconButton>
        </div>
        <div className='flex gap-1'>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
