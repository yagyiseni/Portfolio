import PageHeader from '../PageHeader/PageHeader';
import classes from './About.module.css';
import me from './../../img/me.JPG';
const About = () => {
    return (
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About Me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I'm Rohan</h2>
                    <p>
                        I am a beginner at programming.
                        I have a passing knowledge of HTML, CSS and JavaScript. I am currently learning React. I have done
                        backend development in Laravel briefly. If I had to describe myself in one word, I would use "persistent"
                        to describe myself. I am a slow but a steady learner.
                        I have done my Bachelor's in Computer Engineering. I love reading, watching movies 
                        
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
     );
}
 
export default About;