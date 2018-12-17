import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Feed from './src/components/Feed';
import Profile from './src/components/Profile';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key='root'>  
                <Scene key='feed' component={Feed} title='Feed'  />
                <Scene key='profile' component={Profile} title='Profile' initial/>

            </Scene>
        </Router>
    )
}

export default RouterComponent;