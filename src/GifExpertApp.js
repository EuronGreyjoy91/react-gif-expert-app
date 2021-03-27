import React, { Fragment, useState } from 'react';
import {AddCategory} from './components/AddCategory'; 
import {GifGrid} from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Super Smash Bros Ultimate']);

    /*const handleAdd = () => {
        setCategories(c => {
            return [...c, 'Shingeki']; //DEVUELVO UN NUEVO ARRAY CON LO QUE TENIA EL ANTERIOR MAS LO NUEVO!!!
        });
    };*/

    return (
        <Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}></AddCategory>
            <hr></hr>

            <ol>
                {
                    categories.map(category => {
                        return <GifGrid 
                                key = {category}
                                category = {category}>
                            </GifGrid>
                    })
                }
            </ol>

        </Fragment>
    );
}

export default GifExpertApp;