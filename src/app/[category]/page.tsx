import React from 'react'
import Header from '../components/banner/Header/Header'
import CurrentCategory from '../components/currentCategory/CurrentCategory'
import { UserProvider } from '../context/UserContext'

const Page = ({
        params: {category},
    } : {
        params: {category: string}
    }
) => {
  const categorySpace = category.replace(/([a-z])([A-Z])/g, '$1 $2')
  return (
    <div>
      <div className="bg-[url('/images/heading-bg.jpg')] h-full bg-no-repeat py-10">
        <UserProvider>
          <Header />
        </UserProvider>
        <div className='text-center mt-48 text-white'>
                <h1 className='text-xl my-5'>Liberty NFT Market</h1>
                <h1 className='uppercase text-5xl font-bold'>View {categorySpace} NFT`s</h1>
            </div>
      </div>
      <CurrentCategory category={categorySpace}/>
    </div>
  )
}

export default Page
