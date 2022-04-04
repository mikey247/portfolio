import classes from './ProjectCard.module.css'

const ProjectCard = (props) => {
    // console.log(props.image);
    return ( 
        <>
        {console.log(props.image)}
        <div className={classes.projectCard}>  
         <a href={props.link}>
         <img src={`${props.image}`} alt="" />
            <h3> {props.title}</h3>
            <p>{props.description}</p>
          </a> 
            <br />
            <a href="/">deployed site</a>
            <div className={classes.tools}>
            {props.tools && props.tools.map(tool=> (
                <p key={tool}>{tool}</p>
            ))}
            </div>
        </div>
        </>
     );
}
 
export default ProjectCard;