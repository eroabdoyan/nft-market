"use client"

import React from 'react'
import Categories from './Categories'
import Items from './Items'
import { NFT, User } from '@/app/interface/types'
import { fetchUsers } from '@/app/utils/fetchUsers'
import { fetchNfts } from '@/app/utils/fetchNfts'

const CurrentlyNfts: React.FC = () => {
    const [users, setUsers] = React.useState<User[]>([])
    const [nfts, setNfts] = React.useState<NFT[]>([])
    const [selectedCategory, setSelectedCategory] = React.useState<string>('All Items');

    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const users = await fetchUsers()
                setUsers(users)
                const nfts = await fetchNfts()
                setNfts(nfts)
                
            }catch (error) {
                console.error("Error fetching data from server: " + error)
            }
        }
        fetchingData()
    }, [])
  return (
    <div>
        <div className='flex justify-between ml-28 text-white'>
            <div className='my-10'>
                <div className='w-24 h-[2px] my-8 bg-[#7453fc] shadow shadow-[#7453fc]'></div>
                <h1 className='flex text-3xl font-bold'>
                    <p className='text-[#7453fc] mr-2'>Items </p>
                    Currently In The Market.
                </h1>   
            </div>
            <div className='mr-28'>
                <Categories setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
            </div>
        </div>
        <div className='ml-28 flex flex-wrap mb-28 transition-all ease-in-out duration-700'>
            {
                nfts && 
                    users && 
                        nfts.map((nft, index) => selectedCategory === 'All Items' || nft.category === selectedCategory 
                        ? <Items key={nft.id} nft={nft} users={users} index={index}/>
                        : null
                        )
            }
        </div>   
    </div>
    
  )
}

export default CurrentlyNfts
