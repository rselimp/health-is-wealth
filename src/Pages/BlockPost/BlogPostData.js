import React from 'react';

const BlogPostData = ({blog}) => {
    const{details,title,image} =blog
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{details}?</p>
                
            </div>
        </div>
    );
};

export default BlogPostData;