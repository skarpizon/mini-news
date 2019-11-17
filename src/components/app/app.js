import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import StaticHeader from '../static-header/static-header';
import './app.scss';
import Main from '../main';
import NewsBox from '../news-box';
import Profile from '../profile/';
import LoginForm from '../login-form/login-form';

const App = () => {
    
    return (
        <React.Fragment>
            <StaticHeader />
            <Switch>
                <Route path="/" component={Main} 
                    exact />
                <Route path="/news" component={NewsBox}
                    exact />
                <Route path="/profile" component={Profile} 
                        exact />
                <Route path="/login" component={LoginForm}
                    exact />
                <Route path="" component={Main}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
