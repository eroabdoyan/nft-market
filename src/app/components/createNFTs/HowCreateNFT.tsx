import Link from 'next/link';
import React from 'react'
import InstructionCreate from './InstructionCreate';

const CreateNFT: React.FC = () => {
  return (
    <div className="bg-[url('/images/main-bg.jpg')] h-[700px] text-white">
      <div className='flex justify-between ml-28 mr-28 py-16'>
        <div>
          <div className='w-28 h-[2px] bg-white my-10'></div>
          <h1 className='text-3xl font-bold'>Create Your NFT & Put It On The Market.</h1>  
        </div>
        <Link href='/'>
            <div className='bg-[#7453fc] w-52 p-3 text-center font-medium relative top-12 rounded-full text-white hover:bg-white hover:text-[#7453fc] transition-all ease-in-out duration-[.3s]'>
            Create Your NFT now
            </div>
            <div className='h-[2px] mr-10 ml-10 relative top-[46px] bg-white'></div>
        </Link>
      </div>
      <InstructionCreate />
    </div>
  )
}

export default CreateNFT;
