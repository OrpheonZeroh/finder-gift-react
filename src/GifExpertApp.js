import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = ['goku'] }) => {

    //const [categories, setCategories] = useState(['Dragon Ball'])
    const [categories, setCategories] = useState( defaultCategories )

    // const handleAdd = () => {
         //setCategories([...categories, 'Orphen']); formas de agregar un elemento
    //     setCategories(cats=> [...cats, 'Orphen'])

    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category } 
                        />
                    ))
                }
            </ol>

        </>
    )
}
export default GifExpertApp;