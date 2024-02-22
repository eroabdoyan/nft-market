'use client'

import React from 'react'
import Header from '../components/banner/Header/Header'
import SlideItems from '../components/SlideItems/SlideItems'
import SomeNfts from '../components/someNFTs/SomeNfts'
import TopSellers from '../components/topSellersWeek/TopSellers'
import Footer from '../components/footer/Footer'
import { UserProvider } from '../context/UserContext'

const page: React.FC = () => {
  return (
    <div className="bg-[url('/images/heading-bg.jpg')] h-auto bg-no-repeat">
        <UserProvider>
          <header className='py-10'>
              <Header />
              <div className='text-center mt-48 text-white'>
                  <h1 className='text-xl my-5'>Liberty NFT Market</h1>
                  <h1 className='uppercase text-5xl font-bold'>Discover Some Top Items</h1>
              </div>
          </header>
          <div className="bg-[url('/images/dark-bg.jpg')] h-full]">
              <SlideItems />
              <SomeNfts />    
          </div>
          <TopSellers />
          <Footer /> 
        </UserProvider>
        
    </div>
  )
}

export default page
