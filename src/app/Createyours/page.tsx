import React from 'react'
import { UserProvider } from '../context/UserContext'
import Main from '../components/CreateYours/Main'


const page: React.FC = () => {
  return (
    <div>
      <UserProvider>
        <Main />
      </UserProvider>
    </div>
  )
}

export default page
