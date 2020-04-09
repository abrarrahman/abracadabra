import React from 'react';
import classes from './Card.module.css';

const card = props => (
    <div className={classes.Card + ' px-4 py-5 m-2'}>
        {props.children}
    </div>
)

export default card;