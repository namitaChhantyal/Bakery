import React from 'react'
import classes from './PositionTag.module.css'

export default function PositionTag({title, pay}) {
    return (
        <div className={classes.Container}>
            <p className={classes.Title}>{title}</p>
            <p className={classes.Pay}>{pay}</p>
        </div>
    )
}
