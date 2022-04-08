import classes from './ProjectCard.module.css'
// import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

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

      <div className={classes.projectCard}>
          <Card className="bg-dark text-white">
            <Card.Img src={`${props.image}`} alt="Card image"  className={classes.cardImage}/>
      <div className={classes.text}>
       <a href={props.link}>
          <Card.ImgOverlay opacity={1} >
         </Card.ImgOverlay >
           <h3>{props.title}</h3>
           <p>{props.description}</p>
        <div className={classes.tools}>
            {props.tools && props.tools.map(tool=> (
                <p key={tool}>{tool}</p>
            ))}
        </div>
       {/* <a href='/'>GitHub</a> */}
      </a> 
      <br />
  </div>
</Card>
      </div>
     );
}
 
export default ProjectCard;