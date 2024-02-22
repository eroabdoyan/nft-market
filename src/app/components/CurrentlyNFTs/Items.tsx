"use client"

import { User } from '@/app/interface/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface ItemsProps {
    users: User[]
    nft: {id: string; image: string; price: string; username: string; date: string}
    index: number;
}


const Items: React.FC<ItemsProps> = ({users, nft, index}) => {
    const [isHovered, setIsHovered] = React.useState<number | null>(null)

  return (    
    <div key={nft.id} className='bg-[#282b2f] flex mr-8 my-8 border border-[#404245] p-8 text-white w-[650px] rounded-2xl transition-all ease-in-out duration-700'>
        <Image
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(null)} 
            src={isHovered === index ? nft.image : '/images/item.jpg'}
            alt='item' width={200} height={200}  
            className='rounded-2xl w-[260px] h-[400px] transition-all ease-in-out duration-300'/>
        <div className='ml-6'> {/* right content */}
            <h1 className='text-xl font-semibold'>Music Art Super Item</h1>
            <span className='flex'>
                {users[index].userImg 
                    ? <Image src={users[index].userImg} alt='author' width={60} height={60} className='rounded-full my-8'/>
                    : <Image src='/images/item.jpg' alt='s' width={60} height={60} className='rounded-full my-8 w-[60px] h-[60px]'/>
                }
                <div className='my-8 ml-5'>
                    <h1>{users[index].name + ` ` + users[index].lastName}</h1>
                    <Link href={`/Author/${nft.username}`} className='text-[#7453fc] underline underline-offset-4 font-semibold'>@{nft.username}</Link>
                </div>
            </span>
            <div className='w-[300px] h-[2px] bg-white opacity-35 shadow shadow-white'></div>
            <div className='flex justify-between'>
                <div className='my-10'>
                    <h1 className='my-4'>Current Bid</h1>
                    <span className='text-xl font-bold'>{nft.price} ETH</span>
                </div>
                <div className='my-10'>
                    <h1 className='my-4'>Ends In</h1>
                    <span className='text-xl font-bold'>{nft.date.slice(11, 19)}</span>
                    <p className='my-4'>({nft.date.slice(0, 10)})</p>
                </div>
            </div>
            <Link href={`/Details/${nft.id}`} className='text-[#7453fc] underline underline-offset-4 font-bold'>View NFT Details</Link>
        </div>
    </div>
  )
}

export default Items
