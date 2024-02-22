import React from 'react'
import CategoryFilter from './CategoriesFilter';
import FormsFilter from './FormsFilter';

const categories = ["All Category","Music","Digital","Blockchain","Virtual"]
const forms = ['Available','Ending Soon','Coming Soon','Closed']

interface selectedCategoryProps{
    selectedCategory: string
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
    formSelected: string;
    setSelectedForm: React.Dispatch<React.SetStateAction<string>>;
}

const RightContent: React.FC<selectedCategoryProps> = ({selectedCategory, setSelectedCategory, formSelected, setSelectedForm}) => {
   // const [showForm, setShowForm] = React.useState(false);

    const handleCategorySelect = async (category: string) => {
        setSelectedCategory(category);
    };
    const handleFormSelect = async (form: string) => {
        setSelectedForm(form);
    };

    // const handleSelectForm = () => {
    //     setShowForm((prev) => !prev);
    // };

    // const handleFormClick = (form: string) => {
    //     setSelectedForm(form);
    //     setShowForm(false);
    // };

  return (
    <div className='text-black flex items-center pt-10'>
        <input type='text' placeholder='Type Something..' 
            className='w-56 mr-5 text-sm border border-[rgba(255, 255, 255, 0.2)] text-white bg-transparent rounded-full p-3 placeholder-white'
        />
        <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
        />
        <FormsFilter 
            forms={forms}
            formSelected={formSelected}
            onFormSelect={handleFormSelect}
        />
        <button className='border underline underline-offset-[17px] border-[#7453fc] bg-[#7453fc]  text-white w-28 text-center p-3 rounded-full font-bold mr-5 hover:bg-white hover:text-[#7453fc] transition-all duration-[.3s]'>Search</button>
    </div>
  )
}

export default RightContent;
