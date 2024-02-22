import React from 'react'
import CountTop from './CountTop'

const TopSellers: React.FC = () => {
  return (
    <div className="bg-[url('/images/main-bg.jpg')] h-full bg-no-repeat">
        <div className='text-white text-center pt-28 pb-16'>
            <div className='w-24 h-[2px] relative left-[46%] bg-white shadow shadow-white'></div>
            <h1 className='text-3xl font-bold my-10'>Our Top Sellers This Week.</h1>
        </div>
        <CountTop />
    </div>
  )
}

export default TopSellers
