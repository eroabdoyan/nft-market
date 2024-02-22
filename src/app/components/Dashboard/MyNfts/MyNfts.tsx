import { NFT, User } from '@/app/interface/types'
import { fetchNfts } from '@/app/utils/fetchNfts'
import Image from 'next/image';
import React from 'react'


interface MyNftsProps {
    user: User | null
}


const MyNfts: React.FC<MyNftsProps> = ({ user }) => {
    const [currentNft, setCurrentNft] = React.useState<NFT[]>([]);
  
    React.useEffect(() => {
      const fetchCurrentNft = async () => {
        try {
          const nfts = await fetchNfts();
          setCurrentNft(nfts);
        } catch (err) {
          console.log("Error fetching nfts: " + err);
        }
      };
      fetchCurrentNft();
    }, []);
  
    const filteredNfts = user && currentNft.filter(nft => nft.username === user.username);
  
    return (
      <div className='flex justify-center'>
        {filteredNfts ? (
          filteredNfts.map(nft => <div key={nft.id} className='text-white'>
          <div className='bg-[#282b2f] bg-opacity-70 w-80 mr-6 mb-20 rounded-2xl border border-[#404245] p-8'>
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
          </div>
        </div>)
        ) : (
          <p>No NFTs found for the user.</p>
        )}
      </div>
    );
  };
  
  export default MyNfts;
  
