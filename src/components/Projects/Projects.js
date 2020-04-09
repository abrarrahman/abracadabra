import React from 'react';
import Project from './Project/Project'

import burgerBuilderImage from '../../assets/project images/burger-logo.png';
import faceDetectorImage from '../../assets/project images/face-detector.PNG';
import colorGameImage from '../../assets/project images/color-game.PNG';

const Projects = React.forwardRef((props,ref) => {
  const projectList = [
    {
      id: 1,
      title: 'Burger Builder',
      description: 'Configure a burger by adding or removing ingredients and place an order. Built with React using Redux for advanced state management and the React Router for a multi-page feeling. Allows users to be authenticated and order history to be stored using firebase where the app is also deployed. The project has been converted to use only functional components using Hooks.',
      link: 'https://burger-builder-89672.firebaseapp.com/',
      path: burgerBuilderImage
    },
    {
      id: 2,
      title: 'Face Detector',
      description: 'Detect and mark a face in an image URL provided by a user. Server side API made with Express for Node to call the Clarifai API and link PostgreSQL database to store user information. Users can register and log in and have their usage tracked.',
      link: 'https://face-detector-97.herokuapp.com/',
      path: faceDetectorImage
    },
    {
      id: 3,
      title: 'RGB Game',
      description: 'A simple game where the objective is to guess which color matches the given RGB value. A fun project made using JavaScript, HTML and CSS, the fundamentals of web development',
      link: 'https://abrarrahman.github.io/color-guessing-game/',
      path: colorGameImage
    },
  ]


  return (
    <div className='container' ref={ref}>
      <h1 className='text-center my-5 py-5 '>Here's a look at some of my projects</h1>
      {
        projectList.map(project=>{
          return <Project project={project} key={project.id}/>
        })
      }
    </div>
  )
});

export default Projects;