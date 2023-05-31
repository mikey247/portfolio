import classes from "./ProjectCard.module.css";
// import Col from 'react-bootstrap/Col'
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  // console.log(props.image);
  return (
    // <div className={classes.projectCardContainer}>
    // <div className={classes.projectCard}>
    //  <a href={props.link}>
    //  <img src={`${props.image}`} alt="" />
    //     <h2> {props.title}</h2>
    //     <Col  xxl={8} xs={8} sm={10} xl={12} lg={12} fluid={true}>
    //     {props.description}
    //     </Col>
    //   </a>
    //     <a className={classes.gitHub} href={props.github}><p>GitHub Link</p></a>

    //     <div className={classes.tools}>
    //     {props.tools && props.tools.map(tool=> (
    //         <p key={tool}>{tool}</p>
    //     ))}
    //     </div>
    // </div>
    // </div>

    // <div className={classes.projectCard}>
    <Card className={`bg-dark text-white ${classes.projectCardinner}`}>
      <Card.Img
        src={`${props.image}`}
        alt="Card image"
        className={classes.cardImage}
      />
      <div className={classes.text}>
        <a href={props.link} target="_blank" rel="noreferrer">
          <Card.ImgOverlay opacity={1}></Card.ImgOverlay>
        </a>
        <h3>{props.title}</h3>
        <h6>{props.description}</h6>
        <div className={classes.tools}>
          {props.tools && props.tools.map((tool) => <p key={tool}>{tool}</p>)}
        </div>

        {/* <a href={props.github}>Github Link</a> */}
      </div>
    </Card>
    // </div>
  );
};

export default ProjectCard;
