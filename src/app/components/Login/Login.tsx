"use client"

import { useUser } from '@/app/context/UserContext';
import { User, UserIn } from '@/app/interface/types';
import { fetchUsers } from '@/app/utils/fetchUsers';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'


const Login: React.FC = () => {
  const [loginData, setLoginData] = React.useState<UserIn>({ username: '', password: '' });
  //const [users, setUsers] = React.useState<User[]>([])
  const [showSuccessMessage, setShowSuccessMessage] = React.useState(false);
  const router = useRouter()
  const { setUser } = useUser()


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setLoginData((prevData) => ({ ...prevData, [field]: e.target.value }));
  };

  // React.useEffect(() => {
  //   const fetchingUsers = async () => {
  //       try {
  //         const users: User = await fetchUsers()
  //         setUser(users)
  //       }catch (error) {
  //         console.log(error)
  //       }
  //   }
  //   fetchingUsers()
  // }, []);

      
  const handleSignIn = async () => {
    try {
      const signedInUsers: User[] = await fetchUsers();
      const signedInUser = signedInUsers.length > 0 ? signedInUsers[0] : null;
      setUser(signedInUser);
  
      if (signedInUser && signedInUser.username === loginData.username && signedInUser.password === loginData.password) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          router.push('/');
        }, 5000);
        setLoginData({ username: '', password: '' });
        console.log('Sign-in successful');
      } else {
        console.error('Invalid username or password');
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const renderSuccessMessage = () => {
    return (
        <div className={`fixed top-44 right-0 w-60 h-20 bg-[#aa95ff] bg-opacity-60 p-4 transform ${showSuccessMessage ? '-translate-x-5' : 'translate-x-full'} rounded-md shadow-md transition-transform duration-700 ease-in-out`}>
          <p className="text-white my-2">Successfully Sign In!</p>
        </div>
    );
};

  return (
    <div className='text-white bg-[rgb(125,90,254)] bg-gradient-to-r from-[#dfd7ff] to-[rgba(160,84,244,1)] w-[500px] h-[500px] relative left-[35%] mt-14 rounded-2xl'>
        <h1 className='text-3xl font-bold text-center py-16'>Login</h1>
        <div className='text-center'>
          {/* Username */}
          <div className="relative">
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
              onChange={(e) => handleInputChange(e, 'username')}
              className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <span className="absolute inset-y-0 left-[90px] pl-3 flex items-center">
              <Image
                src="/images/icons8-password-24.png"
                alt="Password Icon" width={20} height={20}
                className="w-6 h-6 mt-6"
              />
            </span>
            <input 
              type='text' 
              placeholder='Password'
              onChange={(e) => handleInputChange(e, 'password')} 
              className="outline-none border-2 bg-transparent text-xl placeholder-white rounded-xl p-3 pl-10 mt-6"/>
          </div>
        </div>
        <div className='opacity-70 text-end mr-24 my-3 '><Link href='/'>Forgot password?</Link></div>

        <div className='mt-10'>
          <button
            onClick={handleSignIn}
            className='bg-[#aa95ff] w-56 p-2 ml-32 text-center uppercase text-lg cursor-pointer font-medium rounded-full text-white hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>
            Sign in
          </button>
          <div className='h-[2px] w-44 mr-10 ml-10 relative left-28 bottom-[2px] bg-white'></div>
        </div>

        <div className='opacity-70 text-center hover:opacity-100 my-3'>
          <Link href={'/SignUp'}>Don’t have an account? Sign up here.</Link>
        </div>
        {renderSuccessMessage()}
    </div>
  )
}

export default Login
