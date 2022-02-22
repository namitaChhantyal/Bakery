import React from 'react'
import classes from './WrappedImage.module.css';

export default function WrappedImage({img, imgAlt, children}) {
    return (
        <section className={classes.Content}>
            <img className={classes.Image} src={img} alt={imgAlt}/>
            {children}
        </section>
    )
}
