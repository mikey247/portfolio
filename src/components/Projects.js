import { projects } from "../data";
import ProjectCard from "../UI/ProjectCard";
import classes from "./Projects.module.css";
import useInView from "../hooks/useInView";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      id="projects"
      className={`${classes.projectsSection} ${inView ? "scroll-show" : "scroll-hidden"}`}
    >
      <Container>
        <h1 className={classes.projects}>Projects</h1>
        <Row xxl={12} xl={12}>
          {projects &&
            projects.map((project) => (
              <Col
                key={project.title}
                sm={12}
                xl={6}
                lg={6}
                md={12}
                className={classes.projectItems}
              >
                <ProjectCard
                  key={project.title}
                  image={project.image}
                  description={project.description}
                  title={project.title}
                  link={project.link}
                  tools={project.tools}
                  github={project.github}
                />
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
