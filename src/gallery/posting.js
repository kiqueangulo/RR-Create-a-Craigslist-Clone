import React from 'react';

function Postings(props) {
    return (
        <div className='posting'>
            <span>{props.price}</span>
            <img src={props.image} alt='' />
            <p>{props.description}</p>
            <p>{props.title}</p>
        </div>
    )
};

export default Postings;