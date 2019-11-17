import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import { DataServiceProvider } from './services/data-service-context';
import store from './store';
import './index.scss'


import DataService from './services/data-service';
import ErrorBoundry from './components/error-boundry';

const dataService = new DataService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <DataServiceProvider value={dataService}>
                <Router>
                    <App />
                </Router>
            </DataServiceProvider>
        </ErrorBoundry>
    </Provider>,
document.getElementById('root'));