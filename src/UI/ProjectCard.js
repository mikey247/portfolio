import classes from './ProjectCard.module.css'

const ProjectCard = (props) => {
    return ( 
        <>
        <div className={classes.projectCard}>  
         <a href={props.link}>
         <img src={props.image} alt="" />
            <h3>TITLE: {props.title}</h3>
            <p>{props.description}</p>
            <a href="/">GitHub{props.link}</a>
            </a> <br />
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