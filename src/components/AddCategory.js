import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories } ) => {

    const [inputValue, setinputValue] = useState('') //si lo dejas en blanco, queda como indefinido

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e)=> {

        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cats=> [inputValue, ...cats]);
            setinputValue('')
        }

        // console.log('Submit hecho')
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ inputValue }
                onChange={handleInputChange}
            />
        </form>
    )

}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}