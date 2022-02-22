import React, {useState, createContext} from 'react'
import Blogs from './BlogsData'

export const BlogContext = createContext();


export const BlogProvider = (props) => {

    const [blogsData] = useState({
        Blogs,
    })

    const getBlog = (slug) => {
        let tempBlogs = [...blogsData.Blogs];
        
        const blog = tempBlogs.find(blog => blog.slug === slug);
        return blog;
    }

    return (
        <BlogContext.Provider value={{Blogs, getBlog}}>
            {props.children}
        </BlogContext.Provider>
    )
}
