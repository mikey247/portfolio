import { projects } from "../data";
import ProjectCard from "../UI/ProjectCard";
import classes from './Projects.module.css'

const Projects = () => {


  return (
    <div id="projects">
       <h1 className={classes.projects} >Projects</h1>
       {/* <hr className={classes.underline} /> */}
      <div className={classes.projectList}>
        <div className={classes.projectListDiv}>
        {projects && projects.map(project => (
          
          <ProjectCard key={project.title} image={project.image}  description={project.description} title={project.title} link={project.link} tools={project.tools} github={project.github}/> )
        )}
        </div>
     </div>
    </div>
  );
};

export default Projects;
