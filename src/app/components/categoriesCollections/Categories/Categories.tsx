"use client"

import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IDataCategories {
  category: string;
  image: string;
}

const Categories: React.FC = () => {
  const [category, setCategory] = React.useState<IDataCategories[] | null>(null);
  const [isHovering, setIsHovering] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ categories: IDataCategories[] }>('/data.json');
        const data: IDataCategories[] = response.data.categories;
        setCategory(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const onMouseEnter = (i: number) => {
    setIsHovering(i);
  };

  const onMouseLeave = () => {
    setIsHovering(null);
  };

  return (
    <div>
      <div>
        <div className='w-24 relative xl:top-24 xl:left-[47%] h-[2px] bg-[#7453fc]'></div>
        <h2 className='xl:my-32 flex justify-center text-3xl font-bold text-white'>
          Browse Through Our
          <p className='text-[#7453fc] mr-2 ml-2'>Categories</p> Here.
        </h2>
      </div>
      <div className='flex justify-center items-center text-white'>
        {category &&
          category.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => onMouseEnter(i)}
              onMouseLeave={() => onMouseLeave()}
              className={`border border-white border-opacity-55 bg-[#282b2f] rounded-xl mr-5 text-center w-56 p-10 `}
              style={{
                transform: isHovering === i ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.5s ease-in-out',
              }}
            >
              <div className='bg-white ml-8 w-[80px] p-6 rounded-full flex items-center justify-center'>
                <Image src={item.image} alt='category' width={80} height={80} />
              </div>
              <h1 className='mt-4 text-xl font-bold'>{item.category}</h1>
              {isHovering === i ? (
                <div className='bg-white absolute w-12 p-2 text-xl my-4 left-[40%] rounded-full text-[#7453fc] transition-all duration-[.8s] ease-in-out'>
                  <Link href={`/${item.category.replace(/\s/g, '')}`}>❯</Link>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Categories;
