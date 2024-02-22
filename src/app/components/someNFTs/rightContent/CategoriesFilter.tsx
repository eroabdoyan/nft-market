import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({categories, selectedCategory,onCategorySelect,}) => {
  const [showCategories, setShowCategories] = React.useState(false);

  const handleSelectChange = () => {
    setShowCategories((prev) => !prev);
  };

  const handleCategoryClick = (category: string) => {
    onCategorySelect(category);
    setShowCategories(false);
  };

  return (
    <div className='relative mr-5'>
      <div
        className='cursor-pointer w-44 border border-[rgba(255, 255, 255, 0.2)] text-white text-sm bg-transparent rounded-full p-3'
        onClick={handleSelectChange}
      >
        {selectedCategory || categories[0]}
      </div>
      {showCategories && (
        <div className='absolute top-10 left-0 bg-[#2a2a2a] text-white border cursor-pointer border-white w-44 rounded-md shadow'>
          {categories.map((category, index) => (
            <div
              key={index}
              className={selectedCategory === category ? 'bg-blue-500' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryFilter;