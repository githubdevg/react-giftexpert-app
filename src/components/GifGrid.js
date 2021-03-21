// import React, { useState, useEffect } from 'react';
import React from 'react';
// import { getGifts } from '../helpers/getGifts';
import { useFetchGifts } from '../hooks/useFetchGifts';
import GiftGridItem from './GiftGridItem';



const GiftGrid = ({ category }) => {

    // const [images, setImages] = useState([]);


    // useEffect(() => {
    //     getGifts( category ).then(setImages);
    // }, [category]);


    const {data:images, loading} = useFetchGifts(category);

    //getGifts();

    return (
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className="card-grid">
                {
                    images.map((img) => (
                        <GiftGridItem
                            key={img.id}
                            {...img} />
                    ))

                }
            </div>
        </>

    )
}


export default GiftGrid;