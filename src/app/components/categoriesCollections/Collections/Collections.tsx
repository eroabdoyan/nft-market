"use client"


import { NFT, BestNFT } from '@/app/interface/types';
import { fetchData } from '@/app/utils/fetchData';
import { fetchNfts } from '@/app/utils/fetchNfts';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Collections: React.FC = () => {
  const [nfts, setNfts] = React.useState<NFT[]>([])
  const [bestNfts, setBestNfts] = React.useState<BestNFT[]>([])
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const fetchingData = async () => {
      try {
        
        const bestNfts = await fetchData()
        setBestNfts(bestNfts.best_nfts || [])
        const nfts = await fetchNfts()
        setNfts(nfts)
      }
      catch (error) {
        console.error('Error fetching NFTs:', error)
      }
    };

    fetchingData();
  }, []);

  React.useEffect(() => {
    const filteredNFTs = nfts.filter(nft => nft.score > 8.5);
    setBestNfts(filteredNFTs.map(({ id, name, image, score }) => ({ id, name, image, score })));
  }, [nfts]);


  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? bestNfts.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === bestNfts.length - 1 ? 0 : prevIndex + 1));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  });

  const rendereTopNFTs = () => {
    const renderedTopNFTs = [];
    for (let i = 0; i < Math.min(3, bestNfts.length); i++) {
      const itemIndex = (currentIndex + i) % bestNfts.length;
      const item = bestNfts[itemIndex];
      renderedTopNFTs.push(
        <div key={itemIndex} className={`text-white bg-[#282b2f] border border-[#404245] rounded-xl m-6`}>
          <Image src={item.image} alt='nft' width={400} height={400} className='rounded-t-xl w-[420px] h-80' />
          <div className='ml-10 mr-10 my-8'>
            <h4 className='text-lg font-bold'>{item.name}</h4>
            <div className='relative xl:w-full h-[1px] my-4 bg-white opacity-30'></div>
            <div className='flex justify-between'>
              <span>Items In Collection:
                <br />
                <strong className='text-xl'>310/340</strong>
              </span>
              <span>Category:
                <br />
                <strong className='text-xl'>Art</strong>
              </span>
            </div>
            <Link href='/Explore'>
              <div className='bg-[#7453fc] w-full p-2 text-xl text-center font-medium relative top-12 rounded-full text-white hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                Explore
              </div>
              <div className='h-[2px] mr-10 ml-10 relative top-[46px] bg-white'></div>
            </Link>
          </div>
        </div>
      );
    }
    return renderedTopNFTs;
  };


  return (
    <div>
      <div className='my-10'>
        <div className='w-24 relative xl:top-24 xl:left-[47%] h-[2px] bg-[#7453fc]'></div>
        <h2 className='xl:my-32 flex justify-center text-3xl font-bold text-white'>Explore Some Hot 
          <p className='text-[#7453fc] mr-2 ml-2'>Collections</p> In Market.
        </h2>    
      </div>

      <div className='flex justify-center'>
        <button onClick={handlePrev} className='bg-white text-[#7453fc] text-2xl rounded-full w-[46px] h-[46px] relative top-56 left-12'>‹</button>
        {rendereTopNFTs()}
        <button onClick={handleNext} className='bg-white text-[#7453fc] text-2xl rounded-full w-[46px] h-[46px] relative top-56 right-12'>›</button>
      </div>        
    </div>
  )
}

export default Collections
