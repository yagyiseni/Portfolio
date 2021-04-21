import classes from "./Home.module.css";
import code from './../../img/code.svg';
import binaryWorld from './../../img/binaryWorld.svg'; 
const Home = () => {
    return ( 
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Rohan Thapa Here</h1>
                <h1>Welcome To My Website.<br/>Find More About Me.</h1>
            </div>
            <img className={classes.Code} src={code} alt="code"></img>
            <img className={classes.BinaryWorld} src={binaryWorld} alt="Binary World"></img>
        </div>
     );
}
 
export default Home;