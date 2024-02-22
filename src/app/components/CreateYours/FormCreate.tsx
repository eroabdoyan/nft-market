import { NFT } from '@/app/interface/types';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'

const FormCreate: React.FC = () => {
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [newNft, setNewNft] = React.useState<NFT>({
        id: "",
        name: "",
        image: "",
        username: "",
        price: "",
        category: "",
        description: "",
        score: 0,
        quality: "High",
        community_engagement: 0,
        date: ""
      });
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewNft((prevUser) => ({ ...prevUser, [field]: e.target.value }));
    };
    
    const router = useRouter()
    const handleCreateNft = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newNftWithDefaults: NFT = {
                id: newNft.id,
                name: newNft.name,
                image: newNft.image,
                username: newNft.username,
                price: newNft.price,
                category: newNft.category,
                description: newNft.description,
                score: newNft.score,
                quality: newNft.quality,
                community_engagement: newNft.community_engagement,
                date: newNft.date
            };

            // if (Object.values(newUserWithDefaults).some(value => value === '')) {
            //     throw new Error('One or more required fields are empty.');
            // }
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                router.push('/');
            }, 5000);
            await axios.post('https://645fa5a1ca2d89f7e74af958.mockapi.io/nfts', newNftWithDefaults)
            console.log('NFT created successfully');

            return newNftWithDefaults;
        } catch (error) {
            console.error('Error createing NFT:', error);
        }

        setNewNft({
            id: "",
            name: "",
            image: "",
            username: "",
            price: "",
            category: "",
            description: "",
            score: 0,
            quality: "",
            community_engagement: 0,
            date: ""
        });
    };

    const renderSuccessMessage = () => {
        return (
            <div className={`fixed top-10 right-0 w-60 h-20 bg-[#aa95ff] bg-opacity-60 p-4 transform ${showSuccessMessage ? '-translate-x-5' : 'translate-x-full'} rounded-md shadow-md transition-transform duration-700 ease-in-out`}>
            <p className="text-white my-2">Successfully Registered!</p>
            </div>
        );
    };

  return (
    <div className='pb-32'>
        <div className='bg-[#37393c] border border-[#404245] text-white mx-24 rounded-2xl h-auto'>
            <form onSubmit={(e) => handleCreateNft(e)} className='p-10 flex flex-wrap'>
                <div className='w-72 mr-32'>
                    <label className='text-lg font-medium'>NFT Title</label>
                    <input 
                        type='text'
                        name='name'
                        onChange={(e) => handleInputChange(e, 'name')} 
                        placeholder='Ex. Lyon King' 
                        className='bg-[#282b2f] border border-[#404245] text-[#afafaf] rounded-full w-96 p-4 my-3'/>
                </div>
                <div className='w-72 mr-32'>
                    <label className='text-lg font-medium'>Description For Item</label>
                    <input 
                        type='text' 
                        name='description'
                        onChange={(e) => handleInputChange(e, 'description')}
                        placeholder='Give us your idea' 
                        className='bg-[#282b2f] border border-[#404245] text-[#afafaf] rounded-full w-96 p-4 my-3'/>
                </div>   
                <div className='w-72'>
                    <label className='text-lg font-medium'>Your Username</label>
                    <input 
                        type='text'
                        name='username'
                        onChange={(e) => handleInputChange(e, 'username')} 
                        placeholder='Ex. alansmithee' 
                        className='bg-[#282b2f] border border-[#404245] text-[#afafaf] rounded-full w-96 p-4 my-3'/>
                </div>
                <div className='w-72 my-10 mr-[340px]'>
                    <label className='text-lg font-medium'>Price Of Item</label>
                    <input 
                        type='text'
                        name='price'
                        onChange={(e) => handleInputChange(e, 'price')} 
                        placeholder='Price depends on quality. Ex. 0.06 ETH '
                        className='bg-[#282b2f] border border-[#404245] text-[#afafaf] rounded-full w-[600px] p-4 my-3'/>
                </div> 
                <div className='w-72 my-10'>
                    <label className='text-lg font-medium'>Category</label>
                    <input 
                        type='text'
                        name='category'
                        onChange={(e) => handleInputChange(e, 'category')}
                        placeholder='Common royalties 1-25%' 
                        className='bg-[#282b2f] border border-[#404245] text-[#afafaf] rounded-full w-[600px] p-4 my-3'/>
                </div>      
                <div className='w-72 mr-20'>
                    <label className='text-lg font-medium'>Your File</label>
                    <input 
                        type='file'
                        name='image'
                        onChange={(e) => handleInputChange(e, 'image')} 
                        className='my-3'/>
                </div>
                <div className='w-20 mr-20'>
                    <label className='text-lg font-medium'>Ends In</label>
                    <input 
                        type='datetime-local'
                        name='image'
                        onChange={(e) => handleInputChange(e, 'date')} 
                        className='my-3 text-black'/>
                </div>        
                <div className='my-3 ml-32'>
                    <button type='submit' className='border border-[#7453fc] bg-[#7453fc] w-[400px] text-center p-3 rounded-full font-medium mr-5 hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                        Submit Your Applying
                    </button>
                </div> 
            </form>
            {renderSuccessMessage()}
        </div>  
      </div>
  )
}

export default FormCreate
