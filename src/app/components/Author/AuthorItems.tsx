import { NFT, User } from '@/app/interface/types'
import { fetchData } from '@/app/utils/fetchData';
import { fetchNfts } from '@/app/utils/fetchNfts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface AuthorItemsProps {
    user: User;
}

const AuthorItems: React.FC<AuthorItemsProps> = ({user}) => {
    const [currentNft, setCurrentNft] = React.useState<NFT[]>([])

    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const nfts = await fetchNfts()
                const filtered: NFT[] | undefined = nfts.filter((nft: NFT) => nft.username === user.username)
                setCurrentNft(filtered || [])
            }catch (err) {
                console.log("Fetching data failed: " + err)
            }
        }
        fetchingData()
    }, [user])
  return (
    <div>
        <div className='text-white'>
            <div className='w-24 h-[2px] my-8 bg-[#7453fc] shadow shadow-[#7453fc]'></div>
            <h1 className='text-4xl font-bold flex'>{user.name + ' ' + user.lastName}’s <p className='text-[#7453fc] text-4xl font-bold ml-4'>NFTs</p>.</h1>    
        </div>
        <div className='flex justify-center'>
        {currentNft.map(nft => (
            <div className='bg-[#282b2f] w-80 mr-6 my-20 rounded-2xl border border-[#404245] p-8' key={nft.id}>
                <Image src={nft.image} alt={nft.name} width={200} height={200} className='w-[270px] h-[250px] rounded-2xl'/>
                <h1 className='text-xl font-bold my-10'>{nft.name}</h1>
                <div className='w-full h-[2px] my-5 bg-[#404245] '></div>
                <div className='flex justify-between'>
                    <div>
                        Current Bid: <br/>
                        <span className='text-xl font-bold'>{nft.price}</span>
                    </div>
                    <div>
                        Ends In: <br/>
                        <span className='text-xl font-bold'>25th Nov</span>
                    </div>
                </div>
                <Link href={`/Details/${nft.id}`}>
                    <div className='bg-[#7453fc] p-2 w-36 ml-14 text-center font-medium underline underline-offset-[13px] relative top-12 rounded-full text-white hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                        View Details
                    </div>
                </Link>
            </div>
        ))}
        </div>
    </div>
  )
}

export default AuthorItems
