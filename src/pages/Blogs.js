import React, {useContext} from 'react'
import {BlogContext} from '../Context/BlogContext';

import BlogCard from '../components/BlogCards/BlogCard';


export default function Blogs() {
    const context = useContext(BlogContext)
    const blogs = context.Blogs
    console.log(blogs)

    return (
        <div>
            {blogs.map((blog, index) => {
                return <BlogCard blog={blog}/>
            })}
        </div>
    )
}
