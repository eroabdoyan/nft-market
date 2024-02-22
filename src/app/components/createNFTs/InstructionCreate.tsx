import Image from 'next/image'
import React from 'react'

const instructions = [
    {
        image: '/images/categoriesImgs/icon-02.png',
        title: 'Set Up Your Wallet',
        description: 'NFT means Non-Fungible Token that are used in digital cryptocurrency markets. There are many different kinds of NFTs in the industry.'
    },
    {
        image: '/images/categoriesImgs/icon-04.png',
        title: 'Add Your Digital NFT',
        description: 'There are 5 different HTML pages included in this NFT website template. You can edit or modify any section on any page as you required.'
    },
    {
        image: '/images/categoriesImgs/icon-06.png',
        title: 'Sell Your NFT & Make Profit',
        description: 'If you would like to support our TemplateMo website, please visit our contact page to make a PayPal contribution. Thank you.'
    }
]

const InstructionCreate: React.FC = () => {    
  return (
    <div className='flex justify-between mr-28'>
        {instructions.map((instruction, i) => (
            <div key={i} className='ml-28'>
                <div className='bg-white w-[60px] p-4 rounded-full flex items-center justify-center'>
                    <Image src={instruction.image} alt={instruction.title} width={100} height={100}/>
                </div>
                <div className='my-8'>
                    <h1 className='text-xl font-semibold'>{instruction.title}</h1>
                    <p className='my-5 w-80'>{instruction.description}</p>
                </div>
                <div className='w-[1px] h-60 opacity-40 relative bottom-[260px] right-28 bg-white shadow shadow-white'></div>
            </div>            
        ))}
    </div>
  )
}

export default InstructionCreate
