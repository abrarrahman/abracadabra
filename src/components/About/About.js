import React from 'react';
import classes from './About.module.css';
import profile from '../../assets/profile picture/profile.jpg';
import Image from '../Image/Image';

const about = props => (
  <div className='container'>
    <div className='row align-items-center justify-content-center '>
      <div className={`${classes.item} col-11 col-sm-10 col-md-8 col-lg-5`}>
        <Image path={profile} />
      </div>
      <div className={`${classes.item} col-11 col-sm-10 col-lg-5 text-center text-lg-left`}>
        <h1 className='font-weight-bold'>Hi I'm Abrar,</h1>
        <h3>I like making Web Applications, and I'd love to make one for you!</h3>
        <hr></hr>
        <h2 className='font-weight-bold'>This is my online portfolio</h2>
      </div>
    </div>
  </div>

)
export default about;