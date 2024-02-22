"use client"

import React from 'react'
import Header from './Header/Header'
import Image from 'next/image'
import Link from 'next/link'

const Banner: React.FC = () => {
    const imgsLink = [
        '/images/banner-01.png',
        '/images/banner-02.png'
    ]
    const [selectedImageIndex, setSelectedImageIndex] = React.useState<number>(0);
    const handlePrev = () => {
        const prevIndex = (selectedImageIndex - 1 + imgsLink.length) % imgsLink.length;
        setSelectedImageIndex(prevIndex);
      };
    
      const handleNext = () => {
        const nextIndex = (selectedImageIndex + 1) % imgsLink.length;
        setSelectedImageIndex(nextIndex);
      };
    
      const selectedImage = imgsLink[selectedImageIndex];

      React.useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 5000);

        return () => clearInterval(interval);
      });

  return (
    <div className="bg-[url('/images/banner-bg.jpg')] h-[850px] bg-no-repeat">
        <div className='py-10'>
            <Header />
        </div>
        <div className='flex my-32'>
            <div className='text-white w-1/2 ml-20'>
                <p className='text-xl my-5'>Liberty NFT Market</p>
                <h1 className='uppercase text-5xl font-bold w-[700px]'>Create, Sell & Collect Top NFT’s.</h1>
                <p className='w-[700px] my-10'>Liberty NFT Market is a really cool and professional design for your NFT websites. This HTML CSS template is based on Bootstrap v5 and it is designed for NFT related web portals. Liberty can be freely downloaded from TemplateMo’s free css templates.</p>
                <div className='flex underline underline-offset-[17px]'>
                    <div className='border border-[#7453fc] bg-transparent w-48 text-center p-3 rounded-full font-bold mr-5 hover:bg-[#7453fc] transition-all duration-[.3s]'>
                        <Link href='/Explore'>Explore Top NFTs</Link>
                    </div>
                    <div className='border border-[#7453fc] bg-[#7453fc] w-48 text-center p-3 rounded-full font-bold hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                        <Link href='/'>Watch Our Videos</Link>
                    </div>
                </div>
            </div>    
            <div className='text-[#7453fc] text-xl ml-20'>
                <div className="image-container transition-opacity duration-500 ease-in-out">
                    <Image src={selectedImage} alt="Selected Image" width={500} height={500} />    
                </div>
                <div className='ml-48 my-3'>
                    <button className='bg-white rounded-full w-[46px] h-[46px] mr-3' onClick={handlePrev}>‹</button>
                    <button className='bg-white rounded-full w-[46px] h-[46px]' onClick={handleNext}>›</button>    
                </div>
                
            </div>           
        </div>
        
    </div>
  )
}

export default Banner
