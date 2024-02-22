import React from 'react'
import Categories from './Categories/Categories';
import Collections from './Collections/Collections';

const CategoriesCollections: React.FC = () => {
  return (
    <div className="bg-[url('/images/dark-bg.jpg')] h-[1500px] bg-no-repeat">
        <Categories />
        <Collections />
    </div>
  )
}

export default CategoriesCollections;
