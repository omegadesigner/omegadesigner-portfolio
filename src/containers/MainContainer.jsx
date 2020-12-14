import {Switch, Route} from 'react-router-dom';
import Home from '../screens/Home';
import Projects from '../screens/Projects';
import './MainContainer.css';

function MainContainer(props) {
    
    return (
        <div className='MainContainer-layout'>
            <Switch>
                <Route path='/projects'>
                    <Projects />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default MainContainer;