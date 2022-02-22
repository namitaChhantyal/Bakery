import React from 'react'
import classes from './TextBlock.module.css'

export default function TextBlock({children}) {
    return (
        <div className={classes.Container}>
            {children}
        </div>
    )
}
