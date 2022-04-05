import classes from './Footer.module.css'
import { FaLinkedin,FaGithub,FaWhatsappSquare } from 'react-icons/fa'

const Footer = () => {
    return ( 
        <>
        <footer>
            <div className={classes.footerdiv}>
                <div>
                    <h3>Mikey 24/7</h3>
                </div>

                <div>
                    <h3>© Copyright 2021. All right reserved</h3>
                </div>

                <div className={classes.linksDiv}>

                <a href="https://linkedin.com/in/michael-umeokoli-8780"><FaLinkedin size="2rem" /></a>
                <a href="https://github.com/mikey247"><FaGithub size="2rem"/></a>
                <a href="https://wa.me/+2348109867870"><FaWhatsappSquare size="2rem"/></a>
                    
                </div>
            </div>
        </footer>
        </>
     );
}
 
export default Footer;