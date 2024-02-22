import React from 'react'

interface FormsFilterProps {
    forms: string[];
    formSelected: string | null;
    onFormSelect: (category: string) => void;
}

const FormsFilter: React.FC<FormsFilterProps> = ({forms, formSelected, onFormSelect}) => {
    const [showForm, setShowForm] = React.useState(false);
    const handleSelectForm = () => {
        setShowForm((prev) => !prev);
    };

    const handleFormClick = (form: string) => {
        onFormSelect(form);
        setShowForm(false);
    };
  return (
    <div className='relative mr-5'>
        <div
            className='cursor-pointer w-44 border border-[rgba(255, 255, 255, 0.2)] text-white text-sm bg-transparent rounded-full p-3'
            onClick={handleSelectForm}
        >
            {formSelected || forms[0]}
        </div>

        {showForm && (
            <div className='absolute top-10 left-0 bg-[#2a2a2a] text-white border cursor-pointer border-white w-44 rounded-md shadow'>
            {forms.map((form, index) => (
                <div
                key={index}
                className={formSelected === form ? 'bg-blue-500' : ''}
                onClick={() => handleFormClick(form)}
                >
                {form}
                </div>
            ))}
            </div> 
        )}
    </div>
    
  )
}

export default FormsFilter
