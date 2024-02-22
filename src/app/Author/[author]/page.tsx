import React from 'react'
import Header from '../../components/banner/Header/Header'
import Link from 'next/link'
import Author from '../../components/Author/Author'
import CreateNFT from '@/app/components/createNFTs/HowCreateNFT'
import Footer from '@/app/components/footer/Footer'
import { UserProvider } from '@/app/context/UserContext'



const Page = async ({params: { author } }: { params: { author: string } }) => {
  return (
    <div>
      <div className="bg-[url('/images/heading-bg.jpg')] h-full bg-no-repeat py-10">
        <UserProvider>
          <Header />
        </UserProvider>
        <div className='text-center mt-48 text-white'>
            <h1 className='text-xl my-5'>Author Details</h1>
            <h1 className='uppercase text-5xl font-bold'>View Details About {author}</h1>
        </div>
        <div className='text-white flex underline underline-offset-[17px] justify-center my-10'>
            <div className='border border-[#7453fc] bg-transparent w-48 text-center p-3 rounded-full font-medium mr-5 hover:bg-[#7453fc] transition-all ease-in-out duration-[.3s]'>
                <Link href='/'>Create Your NFT</Link>
            </div>
            <div className='border border-[#7453fc] bg-[#7453fc] w-48 text-center p-3 rounded-full font-medium hover:bg-white hover:text-[#7453fc] transition-all ease-in-out duration-[.3s]'>
                <Link href='/Explore'>Explore Our NFTs</Link>
            </div>
        </div>
      </div>
      <div className="bg-[url('/images/dark-bg.jpg')] h-full bg-no-repeat">
        <UserProvider>
          <Author username={author}/>
        </UserProvider>
      </div>
      <CreateNFT />
      <Footer />
    </div>
  )
}


export default Page;
