import { projects } from "../data";
import ProjectCard from "../UI/ProjectCard";
import classes from './Projects.module.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Projects = () => {


  return (
<div id="projects">

  <Container>
    <h1 className={classes.projects} >Projects</h1>
    <Row xxl={12} xl={12} >
      {projects && projects.map(project => (
        <Col sm={12} xl={6} lg={6} md={12} className="">
        <ProjectCard key={project.title} image={project.image} description={project.description} title={project.title} link={project.link} tools={project.tools} github={project.github}/>
        </Col>
      ))}
      
    </Row>
  
  </Container>

       {/* <h1 className={classes.projects} >Projects</h1> */}
       {/* <hr className={classes.underline} /> */}
      {/* <div className={classes.projectList}>
        <div className={classes.projectListDiv}>
        {projects && projects.map(project => (
          
          <ProjectCard key={project.title} image={project.image}  description={project.description} title={project.title} link={project.link} tools={project.tools} github={project.github}/> )
        )}
        </div>
     </div> */}
  </div>
  );
};

export default Projects;
