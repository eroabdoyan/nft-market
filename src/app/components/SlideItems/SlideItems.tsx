import { NFT, User } from '@/app/interface/types';
import { fetchData } from '@/app/utils/fetchData';
import { fetchNfts } from '@/app/utils/fetchNfts';
import { fetchUsers } from '@/app/utils/fetchUsers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SlideItems: React.FC = () => {
    const [nfts, setNfts] = React.useState<NFT[]>([]);
    const [users, setUsers] = React.useState<User[]>([]);
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [hoveredIndex, setHoveredIndex] = React.useState<Number | null>(null);

    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const nfts = await fetchNfts();
                setNfts(nfts);
                const users = await fetchUsers()
                setUsers(users)
            }catch(error) {
                console.error('Fetching data failed: ' + error);
            }
        }
        fetchingData()
        
    }, [])
    const handlePrev = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? nfts.length - 1 : prevIndex - 1));
      };
    
    const handleNext = () => {
        setCurrentIndex(prevIndex => (prevIndex === nfts.length - 1 ? 0 : prevIndex + 1));
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
          handleNext();
        }, 4000);
    
        return () => clearInterval(interval);
      });

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const renderSlideNfts: any = () => {
        const renderSlideNfts = []
       
        for(let i = 0; i < Math.min(3, nfts.length); i++) {
            const itemIndex = (currentIndex + i) % nfts.length
            const item = nfts[itemIndex];
            renderSlideNfts.push(
                <div 
                    key={itemIndex}
                    onMouseEnter={() => handleMouseEnter(itemIndex)}
                    onMouseLeave={handleMouseLeave}
                    className='mr-4 ml-4 my-10 transition-all ease-in-out duration-500'>
                    <Image 
                        
                        src={item.image} alt='imgs' width={400} height={400}  
                        className='w-[500px] h-[400px] rounded-2xl'
                    /> 
                    {hoveredIndex === itemIndex && users[itemIndex]
                    ?   <div className='text-white  bg-[#282b2f] border border-[#404245] p-4 absolute top-[720px] ml-36 bg-opacity-80 w-72 rounded-2xl '>   
                            <h1 className='text-xl text-center font-bold'>{item.name}</h1>
                            <div className='flex items-center justify-center my-2'>
                                <Image 
                                    src={users[itemIndex].userImg} 
                                    alt={users[itemIndex].username} 
                                    width={100} height={100} 
                                    className='w-12 h-12 rounded-full mr-3'
                                />
                                <div className='ml-3 text-lg font-bold'>  
                                    <h1 className=''>{users[itemIndex].name + users[itemIndex].lastName}</h1>
                                    <Link href={`/Author/${users[itemIndex].username}`} className='text-[#7453fc] '>@{users[itemIndex].username}</Link>
                                </div>
                            </div>
                        </div> 
                    : null}
                </div>  
            )
        }
        return renderSlideNfts;
    }

  return (
    <div className="flex justify-evenly">
        <button onClick={handlePrev} className='bg-white text-[#7453fc] opacity-45 text-2xl rounded-full w-[46px] h-[46px] relative top-56 left-20 hover:opacity-100'>‹</button>
        {renderSlideNfts()}   
        <button onClick={handleNext} className='bg-white text-[#7453fc] opacity-45 text-2xl rounded-full w-[46px] h-[46px] relative top-56 right-20 hover:opacity-100'>›</button>             
    </div>
  )
}

export default SlideItems
