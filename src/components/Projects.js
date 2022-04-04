import { projects } from "../data";
import ProjectCard from "../UI/ProjectCard";
import classes from './Projects.module.css'

const Projects = () => {


  return (
    <div id="projects">
     <div className={classes.projectList}>
        {projects && projects.map(project => (
          
          <ProjectCard key={project.title} image={project.image}  description={project.description} title={project.title} link={project.link} tools={project.tools} /> )
        )}
     </div>
    </div>
  );
};

export default Projects;
