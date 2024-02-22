import React from 'react'
import Header from '../components/banner/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'

import Footer from '../components/footer/Footer'
import { UserProvider } from '@/app/context/UserContext'


const Page: React.FC = () => {
  return (
    <div className="bg-[url('/images/5166950.jpg')] h-full bg-no-repeat">
        <UserProvider>
          <div className='pt-10'>
            <Header />
          </div>  
          <Dashboard />   
        </UserProvider> 
        <Footer />
    </div>
  )
}

export default Page
