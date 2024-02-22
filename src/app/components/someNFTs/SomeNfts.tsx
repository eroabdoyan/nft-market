import React from 'react';
import HeaderSomeNft from './header/HeaderSomeNft';
import ItemsNft from './items/ItemsNft';
import RightContent from './rightContent/RightContent';
import { fetchData } from '@/app/utils/fetchData';
import { NFT } from '@/app/interface/types';
import { fetchNfts } from '@/app/utils/fetchNfts';

const SomeNfts: React.FC = () => {
    const [data, setData] = React.useState<NFT[]>([]);
    const [selectedCategory, setSelectedCategory] = React.useState<string>('All Category');
    const [formSelected, setSelectedForm] = React.useState<string>('Available');

    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const nfts = await fetchNfts();
                setData(nfts);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchingData();
    }, []);

    return (
        <div className='text-white'>
            <div className='flex justify-between ml-20 mr-20 items-center'>
                <HeaderSomeNft />
                <RightContent 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory} 
                    formSelected={formSelected}
                    setSelectedForm={setSelectedForm}
                />
            </div>
            <div className='flex justify-center flex-wrap'>
                {data.map((item) =>
                    selectedCategory === 'All Category' || item.category === selectedCategory ? (
                        <ItemsNft key={item.id} item={item} />
                    ) : null
                )}
            </div>
        </div>
    );
};

export default SomeNfts;
