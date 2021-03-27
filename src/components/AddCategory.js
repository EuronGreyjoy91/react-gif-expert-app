import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const validInput = (value) => value.trim().length > 0;

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validInput(inputValue)){
            setCategories(c => [inputValue, ...c]);
            setInputValue("");
        }
    }
    
    return (
        <form onSubmit = {handleSubmit}>
            <h2>Add Category</h2>
            <input
                type = "text"
                placeholder = "Ingrese una categoria..."
                value = {inputValue}
                onChange = {handleInputChange}
                name = "addCategory">
            </input>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}