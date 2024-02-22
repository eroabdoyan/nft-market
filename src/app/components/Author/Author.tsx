"use client"


import { User } from '@/app/interface/types';
import Image from 'next/image'
import React from 'react'
import AuthorItems from './AuthorItems';
import { fetchUsers } from '@/app/utils/fetchUsers';
import axios from 'axios';
import { useUser } from '@/app/context/UserContext';

interface AuthorProps {
    username: string;
}

const Author: React.FC<AuthorProps> = ({username}) => {
    const [users, setUsers] = React.useState<User[]>([])
    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const users = await fetchUsers()
                setUsers(users)
            }catch (error) {
                console.log("Error fetching data: " + error)
            }
        }
        fetchingData()
    }, [])
    const currentUser: User | undefined = users.find(user => user.username === username)

    const { user } = useUser()

    // const handleFollow = async () => {
    //     try {
    //       if (currentUser) {
    //         // Make a PATCH request to update the followers array in your API
    //         await axios.patch(`/api/users/${currentUser.userId}`, {
    //             followers: [...currentUser.followers, user?.username],
    //           });
    
           
    //         setUsers((prevUsers) =>
    //           prevUsers.map((u) =>
    //             u.userId === currentUser.userId
    //               ? { ...u, followers: [...u.followers, username] }
    //               : u
    //           )
    //         );
    //       }
    //     } catch (error) {
    //       console.error('Error following user:', error);
    //     }
    //   };
    
  return (
    <div className='ml-32 mr-32 py-32 text-white'>
        {currentUser &&
            <div className='flex justify-between items-center'> 
                <div className='flex items-center'>
                    <Image src={currentUser.userImg} alt={currentUser.username} width={100} height={100} className='rounded-full h-44 w-44'/> 
                    <div className='ml-10'>
                        <h1 className='text-2xl font-semibold'>{currentUser.name + ' ' + currentUser.lastName}</h1>
                        <p className='text-[#7453fc] font-semibold'>@{currentUser.username}</p>   
                    </div>
                </div>
                <div className='bg-[#282b2f] border border-[#404245] rounded-2xl py-6 w-[550px]'>
                    <div className='flex justify-evenly text-xl'>
                        <div className='text-[#7453fc] '>
                            {/*Heart Icon*/}
                            <h1 className='flex font-bold'>1234 <p className='ml-3 text-white'>Likes</p></h1>
                        </div>
                        <div className='text-[#7453fc]'>
                            {/*Dollar Icon*/}
                            <h1 className='flex font-bold'>1234 <p className='ml-3 text-white'>Margin</p></h1>
                        </div>    
                    </div>
                    <div className='flex justify-evenly items-center mt-10'>
                        <h1 className='text-[#afafaf] font-bold text-xl'>{currentUser.followers.length}</h1>
                        <button className='border border-[#7453fc] bg-[#7453fc] w-48 text-center p-3 rounded-full font-medium hover:bg-white hover:text-[#7453fc] transition-all ease-in-out duration-[.3s]'>
                            Follow {currentUser.username}
                        </button>
                    </div>
                </div>
            </div>
        }
        
        <div className='mt-32'>
            {currentUser && <AuthorItems user={currentUser}/>}
        </div>
    </div>
  )
}

export default Author
