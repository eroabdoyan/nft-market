"use client"

import { useUser } from '@/app/context/UserContext'
import { useRouter } from 'next/navigation'
import React from 'react'
import Header from '../banner/Header/Header'
import Link from 'next/link'
import CreateNft from './CreateNft'
import Footer from '../footer/Footer'


const Main: React.FC = () => {
  const { user } = useUser()
  const router = useRouter()

  React.useEffect(() => {
    if (!user) {
      router.push('/Signin')
    }
  }, [user, router])

  return (
    <div>
        <div className="bg-[url('/images/heading-bg.jpg')] h-full bg-no-repeat">
            <header className='py-10'>
                <Header />
                <div className='text-center mt-48 text-white'>
                    <h1 className='text-xl my-5'>Liberty NFT Market</h1>
                    <h1 className='uppercase text-5xl font-bold'>Create Your NFT Now</h1>
                </div>
                <div className='text-white flex underline underline-offset-[17px] justify-center my-10'>
                    <div className='border border-[#7453fc] bg-[#7453fc] w-48 text-center p-3 rounded-full font-medium mr-5 hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                        <Link href='/'>Create Your NFT</Link>
                    </div>
                    <div className='border border-[#7453fc] bg-transparent w-48 text-center p-3 rounded-full font-medium hover:bg-[#7453fc] transition-all duration-[.3s]'>
                        <Link href='/Explore'>Explore Our NFTs</Link>
                    </div>
                </div>
            </header>
        </div>
      {user && <CreateNft />}
      <Footer />
    </div>
  )
}

export default Main
