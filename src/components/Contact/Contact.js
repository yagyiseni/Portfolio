import { FaFacebookSquare,FaGithub,FaLinkedin } from "react-icons/fa";
import classes from './Contact.module.css';


const handleURl = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
            <FaFacebookSquare color='white' size='30px'
                style={{ padding: '1%' }}
                onClick={handleURl('https://www.facebook.com/')} />
            <FaGithub color='white' size='30px'
                style={{ padding: '1%' }}
                onClick={handleURl('https://github.com/yagyiseni')} />
            <FaLinkedin color='white' size='30px'
                style={{ padding: '1%' }}
                onClick={handleURl('https://www.https://www.linkedin.com/in/rohan-thapa-7013ba138/')} />
            </div>
        </div>
     );
}
 
export default Contact;