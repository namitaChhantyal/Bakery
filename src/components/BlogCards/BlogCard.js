import React from 'react'
import classes from './BlogCard.module.css'
import {Link} from 'react-router-dom'

import { FaComments,FaThumbsUp,FaThumbtack} from "react-icons/fa";

export default function BlogCard({blog}) {
    return (
        <div className={classes.Card}>
            <div className={classes.TextArea} >
                <h3>{blog.title}</h3>
                <p className={classes.Text}>{blog.text[0].substring(0, 150)}...</p>
                <div className={classes.Icons}>
                    <p><FaComments /></p>
                    <p><FaThumbsUp /></p>
                    <p><FaThumbtack /></p>
                </div>
                <Link className={classes.CardLink} to={`/blogs/${blog.slug}`} >
                    Continue Reading More
                </Link>
            </div>
            <figure className={classes.Image}>
                <img src={blog.images[0]} alt=""/>
            </figure>

        </div>
    )
}
