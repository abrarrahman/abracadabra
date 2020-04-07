import React from 'react';
import classes from './Image.module.css';

const image = ({path,alt}) => (
    <div className={classes.container}>
        <img className={classes.image} src={path} alt={alt}></img>
    </div>
)

export default image;