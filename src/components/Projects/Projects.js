import React from 'react';
import Card from '../Card/Card';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Burger Builder',
      description: 'Configure a burger by adding or removing ingredients and place an order. Built with React using Redux for advanced state management and the React Router for a multi-page feeling. Allows users to be authenticated and order history to be stored using firebase where the app is also deployed. The project has been converted to use only functional components using Hooks.Check out the live version using the link.',
      link: 'https://burger-builder-89672.firebaseapp.com/',
    },
    {
      id: 2,
      title: 'Face Detector',
      description: 'Detect and mark a face in an image URL provided by a user. Server side API made with Express for Node to call the Clarifai API and link PostgreSQL database to store user information. Users can register and log in and have their usage tracked.',
      link: 'https://face-detector-97.herokuapp.com/',
    },
    {
      id: 3,
      title: 'RGB Color Guessing Game',
      description: 'A simple game where the objective is to guess which color matches the given RGB value. A fun project made using JavaScript, HTML and CSS, the fundamentals of web development',
      link: 'https://abrarrahman.github.io/color-guessing-game/',
    },
  ]


  return (
    <div className='container'>
      <h1 className='text-center my-5 py-5 '>Here's a look at some of my projects</h1>
      {
        projectList.map(project=>{
          let classesHead = 'col-12 col-lg-4 text-center mb-3';
          let classesDesc = 'col-11 col-lg-6';
          if(project.id%2 === 0){
            classesHead = classesHead.concat(' order-lg-last');
            classesDesc = classesDesc.concat(' order-lg-first');
          }
          return <div className='row justify-content-center align-items-center my-5' key={project.id}>
            <div className={classesHead}>
              <h1>{project.title}</h1>
              <a href={project.link} target="_blank" rel="noopener noreferrer">check it out</a>
            </div>
            <div className={classesDesc}>
              <Card>
                <h5>{project.description}</h5>
              </Card>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Projects;