"use client"

import { useUser } from '@/app/context/UserContext'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'


// ... (your existing imports)

const Header: React.FC = () => {
  const { user, setUser } = useUser();
  const router = useRouter(); // Add this line to get access to the router object
  const path = usePathname();
  
  const headerBtnsName = user
    ? ['Home', 'Explore', 'Create Yours', 'My Profile']
    : ['Home', 'Explore', 'Create Yours', 'Sign In', 'Sign Up'];

  const [activeLink, setActiveLink] = React.useState<string>('Home');

  const handleLogOut = () => {
    setUser(null);
    localStorage.removeItem('user');
  };
  

  React.useEffect(() => {
    const normalizedPath = path.slice(1);
    // const activeLink = headerBtnsName.find((name) =>
    //   normalizedPath.startsWith(`/${name.toLowerCase().replace(/\s/g, '')}`)
    // );
    console.log(normalizedPath)
    setActiveLink(normalizedPath || 'Home');
  }, [path, headerBtnsName]);
 
  return (
    <header className='bg-white flex justify-between p-10 items-center xl:w-[1350px] rounded-full relative xl:left-20 xl:h-24'>
      <Link href='/'>
        <div className=''>
          <Image src='/images/logo.png' alt='logo' width={200} height={200} />
        </div>
      </Link>

      <div className='flex list-none font-normal items-center text-center'>
        {headerBtnsName.map((name, i) => (
          <Link
            key={i}
            href={
              i === 0
                ? '/'
                : user === null
                ? i === 2
                  ? '/Signin'
                  : `/${name.charAt(0).toUpperCase()}${name
                      .slice(1)
                      .toLowerCase()
                      .replace(/\s/g, '')}`
                : i === 3
                ? '/Dashboard'
                : `/${name.charAt(0).toUpperCase()}${name
                    .slice(1)
                    .toLowerCase()
                    .replace(/\s/g, '')}`
            }
            onClick={() => setActiveLink(name)}
            className={
              name === activeLink
                ? 'bg-[#7453fc] text-white mr-5 p-2 w-20 rounded-full'
                : 'mr-5 p-2 text-lg hover:bg-[#7453fc] hover:text-white rounded-full transition-all ease-in-out duration-300'
            }
          >
            {name}
          </Link>
        ))}
        {user && (
          <button
            onClick={handleLogOut}
            className='mr-5 p-2 text-lg hover:bg-[#7453fc] hover:text-white rounded-full transition-all ease-in-out duration-300'
          >
            Log Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;

