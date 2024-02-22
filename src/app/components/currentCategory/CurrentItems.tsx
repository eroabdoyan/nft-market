import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CurrentItemsProps {
    item: {id: string; name: string; image: string; price: string;}
}

const CurrentItems: React.FC<CurrentItemsProps> = ({item}) => {
  return (
    <div className='flex justify-center'>
      <div className='bg-[#282b2f] w-80 mr-6 my-20 rounded-2xl border border-[#404245] p-8'>
        <Image src={item.image} alt={item.name} width={200} height={200} className='w-[270px] h-[250px] rounded-2xl'/>
        <h1 className='text-xl font-bold my-10'>{item.name}</h1>
        <div className='w-full h-[2px] my-5 bg-[#404245] '></div>
        <div className='flex justify-between'>
            <div>
                Current Bid: <br/>
                <span className='text-xl font-bold'>{item.price} ETH</span>
            </div>
            <div>
                Ends In: <br/>
                <span className='text-xl font-bold'>25th Nov</span>
            </div>
        </div>
        <Link href={`/Details/${item.id}`}>
            <div className='bg-[#7453fc] p-2 w-36 ml-14 text-center font-medium underline underline-offset-[13px] relative top-12 rounded-full text-white hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                View Details
            </div>
        </Link>
      </div>
    </div>
  )
}

export default CurrentItems
