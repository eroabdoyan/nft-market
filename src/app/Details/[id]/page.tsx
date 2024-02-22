import Header from "@/app/components/banner/Header/Header"
import CreateNFT from "@/app/components/createNFTs/HowCreateNFT"
import Footer from "@/app/components/footer/Footer"
import SingleNft from "@/app/components/singleNFT/SingleNft"
import { UserProvider } from "@/app/context/UserContext"
import { preload, getSingleNft } from "@/app/utils/getSingleNft"
import Link from "next/link"


const Page = async ({
    params: { id },
  }: {
    params: { id: string }
  }) => {
    await preload(id)
    const ID = await getSingleNft(id)

    return (
        <main className="bg-[url('/images/heading-bg.jpg')] h-full bg-no-repeat">
            <header className='py-10'>
                <UserProvider><Header /></UserProvider>
                <div className='text-center mt-48 text-white'>
                    <h1 className='text-xl my-5'>Liberty NFT Market</h1>
                    <h1 className='uppercase text-6xl font-bold'>View NFT Details</h1>
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
            <div className="bg-[url('/images/dark-bg.jpg')] h-full]">
                <SingleNft id={ID}/>    
            </div>
            <div className="bg-[url('/images/dark-bg.jpg')] h-auto]">
                <CreateNFT />
                <Footer />
            </div>
            
        </main>
    )
}

export default Page;