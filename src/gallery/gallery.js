import React from 'react';
import Postings from './posting.js';
import { postings } from '../postings.js';

function Gallery() {
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            {postings.map(post => (
                <Postings
                    price={post.price}
                    image={post.imageURL}
                    description={post.description}
                    title={post.title}
                />
            ))}
        </div>
    )
};

export default Gallery;