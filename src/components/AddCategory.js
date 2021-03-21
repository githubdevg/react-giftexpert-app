import React, { useState } from 'react'
import PropTypes from 'prop-types';



export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleAdd = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue ) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
        }
    };

    return (
        <form  onSubmit = { handleSubmit}>
            <input
                type="text"                
                value = { inputValue }
                onChange= { handleAdd }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired

}