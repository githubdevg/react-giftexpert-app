import React from 'react'

const GiftGridItem = ( {id, title, url}) => {
    return (
        <div className="card animate__animated animate__fadeIn animate__slow">   
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    );
}

export default GiftGridItem;