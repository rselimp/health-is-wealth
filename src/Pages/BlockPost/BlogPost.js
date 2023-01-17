import React from 'react';
import blog1 from '../../img/blog-1.jpg'
import blog2 from '../../img/blog-2.jpg'
import blog3 from '../../img/blog-3.jpg'
import BlogPostData from './BlogPostData';

const BlogPost = () => {

const blogsData =[
    {
        id:1,
        details:"Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
        image:blog1,
        title:"X-ray Test"
    },
    {
        id:2,
        details:"Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
        image:blog2,
        title:"Pressure Test"
    },
    {
        id:3,
        details:"Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
        image:blog3,
        title:"Different Patients"
    },
]





    return (
        <div className='mt-14'>
            <div>
                <p className='text-center text-accent font-bold underline underline-offset-8 mb-3'>BLOG POST</p>
                <h1 className='text-5xl text-center mb-14 font-bold'>Our Latest Medical <br /> Blog Posts</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    blogsData.map(blog =><BlogPostData key={blog.id} blog={blog}/>)
                }
            </div>
        </div>
    );
};

export default BlogPost;