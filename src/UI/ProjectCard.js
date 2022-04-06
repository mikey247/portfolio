import classes from './ProjectCard.module.css'

const ProjectCard = (props) => {
    // console.log(props.image);
    return ( 
        <div className={classes.projectCardContainer}>
        <div className={classes.projectCard}>  
         <a href={props.link}>
         <img src={`${props.image}`} alt="" />
            <h3> {props.title}</h3>
            <p>{props.description}</p>
          </a> 
            
            <a href={props.github}>GitHub</a>
            <div className={classes.tools}>
            {props.tools && props.tools.map(tool=> (
                <p key={tool}>{tool}</p>
            ))}
            </div>
        </div>
        </div>
     );
}
 
export default ProjectCard;