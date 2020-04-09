import React from 'react';
import Card from '../../UI/Card/Card';
import classes from './Project.module.css';

const Project = ({project}) => {
  let classesHead = 'col-12 col-lg-4 text-center mb-3';
  let classesDesc = 'col-11 col-lg-6';
  if(project.id%2 === 0){
    classesHead = classesHead.concat(' order-lg-last');
    classesDesc = classesDesc.concat(' order-lg-first');
  }
  return <div className='row justify-content-center align-items-center my-5' key={project.id}>
    <div className={classesHead}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img className={classes.projectImg} width='200px' src={project.path} alt={project.title}></img>
      </a>
        <h1 className='mt-3'>{project.title}</h1>
      <a className={classes.link} href={project.link} target="_blank" rel="noopener noreferrer">check it out</a>
    </div>
    <div className={classesDesc}>
      <Card>
        <h5>{project.description}</h5>
      </Card>
    </div>
  </div>
}

export default Project;