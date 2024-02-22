"use client"

import { User } from '@/app/interface/types';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

const SignUp: React.FC = () => {
    const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
    const [newUser, setNewUser] = React.useState<User>({
        userId: 0,
        name: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        userImg: '',
        countSold: 0,
        followers: 0,
        following: 0,
        likes: 0
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setNewUser((prevUser) => ({ ...prevUser, [field]: e.target.value }));
    };

    const router = useRouter()

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newUserWithDefaults: User = {
                userId: 0,
                name: newUser.name,
                lastName: newUser.lastName,
                username: newUser.username,
                email: newUser.email,
                password: newUser.password,
                userImg: '/images/item.jpg',
                countSold: 0,
                followers: 0,
                following: 0,
                likes: 0
            };

            if (Object.values(newUserWithDefaults).some(value => value === '')) {
                throw new Error('One or more required fields are empty.');
            }
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                router.push('/');
            }, 5000);
            await axios.post('https://645fa5a1ca2d89f7e74af958.mockapi.io/users', newUserWithDefaults)
            console.log('User registered successfully');

            return newUserWithDefaults;
        } catch (error) {
            console.error('Error registering user:', error);
        }

        setNewUser({
            userId: 0,
            name: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            userImg: '',
            countSold: 0,
            followers: 0,
            following: 0,
            likes: 0
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
    <div className='text-white bg-[rgb(125,90,254)] bg-gradient-to-r from-[#62328b] to-[#a551ff] w-[500px] h-[620px] relative left-[35%] top-14  rounded-2xl'>
        <div className='absolute font-extralight top-2 ml-5'>
            <Link href='/'>← Home</Link>
        </div>
        <h1 className='text-2xl font-extralight text-center py-8'>Welcome to NFT Marketplace</h1>
        <p className='ml-24 my-5 text-xl font-extralight'>Create your account</p>
        
        <form className='text-center' onSubmit={(e) => handleSignUp(e)}>
            <div className="relative">
                {/* <span className="absolute inset-y-0 left-[90px] pl-3 flex items-center">
                <Image
                    src="/images/icons8-email-48.png"
                    alt="Email Icon" width={20} height={20}
                    className="w-6 h-6"
                />
                </span> */}
                <input
                    type='text'
                    placeholder='Name'
                    required
                    onChange={(e) => handleInputChange(e, 'name')}
                    className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10"
                />
            </div>

            <div className="relative mt-5">
                {/* <span className="absolute inset-y-0 left-[90px] pl-3 flex items-center">
                <Image
                    src="/images/icons8-email-48.png"
                    alt="Email Icon" width={20} height={20}
                    className="w-6 h-6"
                />
                </span> */}
                <input
                    type='text'
                    placeholder='Lastname'
                    required
                    onChange={(e) => handleInputChange(e, 'lastName')}
                    className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10"
                />
            </div>

            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-[90px] pl-3 flex items-center">
                <Image
                    src="/images/icons8-user-24.png"
                    alt="Username Icon" width={20} height={20}
                    className="w-6 h-6"
                />
                </span>
                <input
                    type='text'
                    placeholder='Username'
                    required
                    onChange={(e) => handleInputChange(e, 'username')}
                    className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10"
                />
            </div>

            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-[90px] pl-3 flex items-center">
                <Image
                    src="/images/icons8-email-48.png"
                    alt="Email Icon" width={20} height={20}
                    className="w-6 h-6"
                />
                </span>
                <input
                    type='email'
                    placeholder='Email'
                    required
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10"
                />
            </div>

            <div className="relative mt-5">
                <span className="absolute inset-y-0 left-[90px] pl-3 flex items-center">
                <Image
                    src="/images/icons8-password-24.png"
                    alt="Password Icon" width={20} height={20}
                    className="w-6 h-6"
                />
                </span>
                <input
                    type='password'
                    placeholder='Password'
                    required
                    onChange={(e) => handleInputChange(e, 'password')}
                    className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10"
                />
            </div>
            <div className='mt-10'>
                <button 
                    type='submit'               
                    className='bg-[#aa95ff] w-56 p-2 text-center uppercase text-lg cursor-pointer font-medium rounded-full text-white hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
                    Sign Up
                </button>
                <div className='h-[2px] w-44 mr-10 ml-10 relative left-28 bottom-[2px] bg-white'></div>
            </div>
            {renderSuccessMessage()}
        </form>
    </div>
  )
}

export default SignUp;
