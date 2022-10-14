import React from 'react';
import movie from '../assets/movie-roulette-homepage-screenshot.png'
import scheduler from '../assets/screenshot.PNG'
import project3 from '../assets/Project3.png'

export default function About() {
  const projects =[
    {
      title:"Movie Roulette",
      repo:"https://github.com/KuJo7721/Movie-Roulette",
      demo:"https://kujo7721.github.io/Movie-Roulette/",
      description:"Helps you pick a movie by Genre",
      image:movie,
      lang:"JavaScript, bootstrap, fetch, third party api's"
    },
    {
      title:"Work Day Scheduler",
      repo:"https://github.com/KuJo7721/work-day-scheduler",
      demo:"https://kujo7721.github.io/work-day-scheduler/",
      description:"Application that allows user to store workday tasks",
      image:scheduler,
      lang:"Bootstrap, Jquery, Local Storage"
    },
    {
      title:"Laser Leather Patches",
      repo:"https://github.com/KuJo7721/Project-3",
      demo:"https://leatherpatcheskj.herokuapp.com/",
      description:"Ordering website for custom leather patches",
      image:project3,
      lang:"MERN Stack with GraphQL and Apollo server"
    },
   
  ]
  return (
    <div>
      <h1>Projects</h1>
      <div className="row">
      {projects.map(project=>(
         <div class="col-sm-12 col-md-4">

         <div class="card">
             <img src={project.image} class="card-img-top" alt="..." />
             <div class="card-body">
                 <h5 class="card-title">{project.title}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">{project.lang}</h6>
                 <p class="card-text">{project.description}</p>
                 <a href={project.repo} class="card-link">Github Repo</a>
                 <a href={project.demo} class="card-link">Demo App</a>
             </div>
         </div>
     </div>
      ))}
      </div>
    </div>
  );
}
