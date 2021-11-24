import { Link } from 'react-router-dom';
import classes from './Home.module.css';

function HomePage() {
    return (
        <div>
            <div className={[classes.btn, classes.btn]}>
                <Link to='/onboard/1'>Click me to start the wizard</Link>
            </div>
        </div>
    );
}

export default HomePage;