import React, {useContext} from 'react'
import {BlogContext} from '../../Context/BlogContext'
import classes from './SingleBlog.module.css'

import SubTitle from '../../components/SubTitle/SubTitle';
import WrappedImage from '../../components/WrappedImage/WrappedImage'

export default function SingleBlog(props) {
    const context = useContext(BlogContext);

    const slug = props.match.params.slug;
    const {getBlog} = context;
    const blog = getBlog(slug)

    console.log(blog);

    const {title, text, images, ingridents, preparation} = blog;

    console.log(title, text)

    return (
        <div>
            <SubTitle color="var(--primary-color)">
                <h1>{title}</h1>
            </SubTitle>

            <div className={classes.BlogMain}>

                <WrappedImage img={images[0]}>
                    {text.map((item, index) => {
                        return <p className={classes.BlogMainText}>{item}</p>
                    })}
                </WrappedImage>
       
            </div>

            <div className={classes.Recipe}>
                <div className={classes.Ingredients}>
                    <SubTitle>
                        <h2>Ingredients</h2>
                    </SubTitle>
                    <ul className={classes.IngredientsList}>
                        {ingridents.map((item,index) => {
                            return <li>{item}</li>
                        })}
                    </ul>
                    <img className={classes.IngredientsImage} src={images[1]} alt=""/>
                </div>


                <div className={classes.Preperation}>
                    <SubTitle>
                        <h2>Preperation</h2>
                    </SubTitle>
                    <ol className={classes.PreperationList}>
                        {preparation.map((item, index) => {
                        return <li className={classes.PreperationItem} key={index}>{item}</li>
                        })}
                    </ol>
                </div>

            </div>
            
        </div>
    )
}
