"use client"

import { NFT } from '@/app/interface/types';
import React from 'react'
import CurrentItems from './CurrentItems';
import { fetchNfts } from '@/app/utils/fetchNfts';


interface CurrentCategoryProps {
    category: string;
}

const CurrentCategory: React.FC<CurrentCategoryProps> = ({category}) => {
    const [nfts, setNfts] = React.useState<NFT[]>([])
    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const nfts = await fetchNfts()
                setNfts(nfts)
            }catch (err) {
                console.error("Error fetching data: " + err)
            }
        }
        fetchingData()
    }, [])
    const filteredNfts: NFT[] | undefined = nfts.filter(nft => nft.category === category)
  return (
    <div className="bg-[url('/images/dark-bg.jpg')] h-full bg-no-repeat text-white">
        <div className='text-white pt-20 ml-20'>
            <div className='w-24 h-[2px] my-8 bg-[#7453fc] shadow shadow-[#7453fc]'></div>
            <h1 className='text-3xl font-bold flex'>View {category} <p className='text-[#7453fc] text-3xl font-bold ml-2'>NFTs</p>.</h1>  
        </div>
        <div className='flex justify-center flex-wrap'>
            {filteredNfts.length > 0 
                ? filteredNfts.map(item => <CurrentItems key={item.id} item={item}/>)
                : <h1 className='text-center text-4xl font-bold'>Nothing NFTs for this category</h1>
                
            }    
        </div>
        
    </div>
  )
}

export default CurrentCategory
