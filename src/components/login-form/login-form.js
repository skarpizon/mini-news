import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authRequested, authSuccess, authError } from '../../actions';
import withDataService from '../hoc/with-data-service';
import './login-form.scss';
import Spinner from '../spinner';

class LoginForm extends React.Component {

    state = {
        login: '',
        pass: ''
    }

    componentDidMount(){
        if (localStorage.user) {
            this.props.authSuccess(JSON.parse(localStorage.user));
        }
    }

    handleLoginChange = (event) => {
        this.setState({login: event.target.value})
    }

    handlePassChange = (event) => {
        this.setState({pass: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        this.auth();
    }

    auth = () => {
        const {
            dataService,
            authRequested,
            authSuccess,
            authError
        } = this.props;
        
        authRequested();
        dataService.auth(this.state)
            .then((data) => {
                localStorage.user = JSON.stringify(data);
                authSuccess(data);
            })
            .catch(() => {
                authError();
            });
    }

    render() {
        const {login,pass} = this.state;
        const {isLoggedIn, loading, error} = this.props;

        if (isLoggedIn)
            return <Redirect to="/profile"/>

        if (loading)
            return <section className="sect-login-form"><div className="login-form"><Spinner/></div></section>
        
        return (
            <section className="sect-login-form">
                <div className="login-form">
                    <h4>Введите данные:</h4>
                    <form className="form" onSubmit={this.handleSubmit}>
                        <input value={login} onChange={this.handleLoginChange} 
                            maxLength="30" className="field" placeholder="Login" title="dev:Admin" required/>
                        <input value={pass} onChange={this.handlePassChange} 
                            type="password" maxLength="30" className="field" placeholder="Password" title="dev:12345" required/>
                        <p className={"error"+ (error?"":" hide")}>Логин или пароль введены неверно</p>
                        <button type="submit" className="btn">Войти</button>
                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = ({ userInfo:{ isLoggedIn, authLoading:loading, error } }) => {
    return { isLoggedIn, loading, error };
};

const mapDispatchToProps = {
    authRequested,
    authSuccess,
    authError
};

export default withDataService()(
    connect(mapStateToProps, mapDispatchToProps)(LoginForm));