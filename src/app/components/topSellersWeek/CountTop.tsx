import { User } from '@/app/interface/types'
import { fetchUsers } from '@/app/utils/fetchUsers'
import Image from 'next/image'
import React from 'react'

const CountTop: React.FC = () => {
    const [data, setData] = React.useState<User[]>([])
    React.useEffect(() => {
        const fetchingData = async () => {
            try {
                const users = await fetchUsers();
                setData(users)
            }catch (error) {
                console.error("Error fetching data: ", error)
            }
        }
        fetchingData()
    }, [])
    const sortedUsers = data.sort((a,b) => b.countSold - a.countSold)
    
  return (
    <div className='flex flex-wrap justify-between text-white mx-20'>
        {sortedUsers.map((item,i) => <div key={i} className='flex items-center mb-10 mx-10'>
            <span className='text-2xl font-bold mr-3'>{`${++i}` + `.`}</span>
            <Image src={item.userImg} alt={item.username} width={100} height={100} className='rounded-full w-16 h-16'/>
            <div className='ml-3'>
                <h1 className='text-xl font-bold'>{item.username}</h1>
                <span className='text-sm'>{`${item.countSold}` + ' ETH'}</span>
            </div>
                
        </div>)}
    </div>
  )
}

export default CountTop
