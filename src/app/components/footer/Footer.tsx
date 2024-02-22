import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className='p-6 bg-[rgb(125,90,254)] bg-gradient-to-r from-[rgba(125,90,254,1)] to-[rgba(160,84,244,1)]'>
      <p className='text-white text-center'>Copyright © 2022 
        <Link href='/' className='font-bold ml-2 mr-2 hover:opacity-70 transition-all ease-in-out duration-300'>Liberty</Link>
        NFT Marketplace Co., Ltd. All rights reserved. Designed by Ero
      </p>
    </footer>
  )
}

export default Footer
