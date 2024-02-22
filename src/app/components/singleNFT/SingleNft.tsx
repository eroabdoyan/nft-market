"use client"

import { NFT, User } from '@/app/interface/types';
import { fetchNfts } from '@/app/utils/fetchNfts';
import { fetchUsers } from '@/app/utils/fetchUsers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface SingleNftProps {
    id: string
}

const SingleNft: React.FC<SingleNftProps> = ({ id }) => {
    const [nfts, setNfts] = React.useState<NFT[]>([])
    const [users, setUsers] = React.useState<User[]>([])
    React.useEffect(() => {
        const fetchSingleNft = async () => {
            try {
                const nfts = await fetchNfts()
                setNfts(nfts)
                const users = await fetchUsers()
                setUsers(users)
            }catch (err) {
                console.error(err)
            }   
        }
        fetchSingleNft()
    }, [])
    const nft: NFT | undefined = nfts.find(n => n.id === id)
    const user: User | undefined = users.find(user => nft && user.username === nft.username)
  return (
    <div className='text-white'>
        <div className='text-center py-20'>
            <div className='w-24 h-[2px] my-8 relative left-[47%] bg-[#7453fc] shadow shadow-[#7453fc]'></div>
            <h1 className='text-3xl font-bold flex justify-center'>View Details <p className='text-[#7453fc] text-3xl font-bold ml-2 mr-2'>For NFT</p> Here.</h1>
        </div>
        {nft && user && 
            <div key={id} className='flex mx-28 pb-32'>
                <Image src={nft.image} alt={nft.name} width={400} height={400} className='w-[700px] h-[600px] rounded-3xl'/>
                <div className='ml-12 my-14'>
                    <h1 className='text-xl font-bold'>{nft.name}</h1>
                    <div className='flex items-center my-10'>
                        <Image src={user.userImg} alt={user.username} width={100} height={100} className='rounded-full w-14 h-14'/>
                        <div className='ml-5 font-semibold'>
                            <h1>{user.name + " " + user.lastName}</h1>
                            <Link href={`/Author/${user.username}`} className='text-[#7453fc]'>@{user.username}</Link>
                        </div>
                    </div>
                    <p>{nft.description}</p>
                    <div className='flex my-10 text-nowrap'>
                        <div className='mr-12'>
                            <strong>Current Price</strong>
                            <br />
                            <h1 className='text-xl font-bold my-5 text-[#7453fc]'>{nft.price}</h1>
                        </div>
                        <div className='mr-12'>
                            <strong>Owner</strong>
                            <h1 className='text-xl font-bold my-5 text-[#7453fc] text-nowrap'>{user.name + " " + user.lastName}</h1>
                            <em className='text-[#afafaf]'>(@{user.username})</em>
                        </div>
                        <div>
                            <strong>Ends In</strong>
                            <h1 className='text-xl font-bold my-5 text-[#7453fc]'>3D, 05H, 20M, 58S</h1>
                            <em className='text-[#afafaf]'>(Jaunary 22nd, 2024)</em>
                        </div>
                    </div>
                    {/* <div className='flex items-center my-14'>
                        <label className='text-[#afafaf]'>Place Bid:</label>
                        <input type='text' placeholder='1 ETH' className='ml-6 w-28 p-3 rounded-full text-center bg-transparent border border-[#7453fc] placeholder-white'/>
                        <div className='text-white flex underline underline-offset-[17px] justify-center my-10'>
                            <div className='ml-6 border border-[#7453fc] bg-[#7453fc] w-40 text-center p-3 rounded-full font-medium mr-5 hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                                <Link href='/'>Buy NFT</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        }
    </div>
  )
};

export default SingleNft;