

import React from 'react'
import Header from '../components/banner/Header/Header'
import Login from '../components/Login/Login'
import { UserProvider } from '../context/UserContext'



const Page: React.FC = () => {  
  return (
    <div className="bg-[url('/images/banner-bg.jpg')] h-screen bg-no-repeat">
      
      <UserProvider>
        <div className='pt-10'>
          <Header />
        </div>
        <Login />  
      </UserProvider>
      
    </div>
  )
}
export default Page;
