"use client"

import { useUser } from '@/app/context/UserContext'
import Image from 'next/image'
import React from 'react'
import MyNfts from './MyNfts/MyNfts'

const Dashboard: React.FC = () => {
 const { user } = useUser()
  return (
    <div>
      {user && 
        <div className='bg-[#282b2f] border border-[#404245] bg-opacity-70 ml-20 my-36 w-96 rounded-2xl text-white'>
          <div className='ml-16 py-10'>
            <Image src={user.userImg} alt={user.username} width={60} height={100} className='w-64 rounded-full'/>  
            <h1 className='text-center font-bold text-2xl mr-14 mt-7'>{user.username}</h1>
          </div>
          <div className='text-xl text-[#afafaf] font-semibold ml-10 mb-10'>
            <span className=''>Work sold: {user.countSold} ETH</span>
            <h1>Followers: {user.followers.length}</h1>
            <h1>Following: {user.following.length}</h1>
            <h1>Likes: {user.likes}</h1>
          </div>
        </div>
      }
      <MyNfts user={user}/>
    </div>
  )
}

export default Dashboard
