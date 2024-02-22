import React from 'react'

const categories: string[] = [
    "All Items",
    "Music Art",
    "Digital Art",
    "Blockchain",
    "Virtual"
]

interface CategoriesProps {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
}

const Categories: React.FC<CategoriesProps> = ({setSelectedCategory, selectedCategory}) => {
  return (
    <ul className='flex font-medium'>
        {categories.map((category, i ) => (
            <li key={i} onClick={() => setSelectedCategory(category)} className={selectedCategory === category ? 'bg-[#7453fc] cursor-pointer p-2 my-20 mr-3 w-28 text-center rounded-full' : 'bg-transparent cursor-pointer p-2 my-20 mr-3 w-28 text-center rounded-full hover:bg-[#7453fc] transition-all ease-in-out duration-400'}>{category}</li>
        ))}
    </ul>
  )
}

export default Categories
