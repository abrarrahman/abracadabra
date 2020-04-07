import React from 'react';
import classes from './About.module.css';
import profile from '../../assets/profile picture/profile.jpg';
import Image from '../Image/Image';
import Card from '../Card/Card';

const about = props => (
  <div className='container'>
    <div className='row align-items-center justify-content-center '>
      <div className={`${classes.item} col-12 col-lg-6`}>
        <Image path={profile}/>
      </div>
      <div className={`${classes.item} col-12 col-lg-6`}>
        <Card>
          <h2>Hi I'm Abrar,<br/>I'm a Web Developer.</h2>
          <h3 className='d-none d-sm-block'>
            I like making web applications...<br/> and I'd love to make one for you.
          </h3>
          <hr></hr>
          <h2>Welcome to my online portfolio</h2>
        </Card>
      </div>
    </div>
  </div>
    
)
export default about;