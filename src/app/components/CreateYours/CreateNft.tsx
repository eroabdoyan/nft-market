import React from 'react'
import FormCreate from './FormCreate'

const CreateNft: React.FC = () => {
  return (
    <div className="bg-[url('/images/dark-bg.jpg')] h-full ">
       <div>
            <div className='w-24 relative xl:top-24 xl:left-[47%] h-[2px] bg-[#7453fc]'></div>
            <h2 className='xl:my-32 flex justify-center text-3xl font-bold text-white'>
                Apply For
                <p className='text-[#7453fc] mr-2 ml-2'>Your NFT</p> Here.
            </h2>
      </div>
      <FormCreate />
    </div>
  )
}

export default CreateNft
