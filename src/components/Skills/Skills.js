import classes from './Skills.module.css'
import PageHeader from '../PageHeader/PageHeader';
import CodeThinking from './../../img/Code Thinking.svg';


const listTitleStyle = {
    fontWeight: 900, color: '#9B1FEB', marginBottom: '4px'
}
const backendSkills =
    <ul>
        <li style={listTitleStyle}>Backend</li>
        <li>Java-SQl</li>
        <li>SpringBoot</li>
        <li>Laravel</li>
    </ul>

const frontendSkills =
    <ul>
        <li style={listTitleStyle}>FrontEnd</li>
        <li>ReactJs- HTML- CSS</li>
    </ul>

const programmingLanguage =
    <ul>
        <li style={listTitleStyle}>Programming</li>
        <li>C - C++ </li>
    </ul>

const totalSkills = [backendSkills, frontendSkills, programmingLanguage];
const Skills = () => {
    return (
        <div className={classes.Skills} id="skills">
            <PageHeader title={'What about the skills?'} />
            <p>
                I am a slow but a steady kind of learner.
                I love laerning about New stuffs. Listed
                Below are some of the programming languages,
                framewrok and libraries I have worked with. The
                expertise may vary but I have worked on one of those
                at a point in my life.
            </p>
            <div className={classes.Container}>
                <img src={CodeThinking} alt="code thinking"/>
                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    )
                })}
            </div>
            
        </div>
     );
}
 
export default Skills;