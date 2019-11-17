import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import './profile.scss';


const imgPath = process.env.PUBLIC_URL + '/assets/images/';

const Profile = ({isLoggedIn, user, logOut}) => {

    if (!isLoggedIn)
        return (
            <Redirect to="/login" />
        );

    return (
        <section className="sect-profile">
            <div className="profile">
                <div className="i-block">
                    <img src={user.img?user.img:`${imgPath}logo512.png`}/>
                </div>
                <div className="i-block info">
                    <div>{user.name} <button className="btn-exit" onClick={() => {delete localStorage.user;logOut()}}>ЗАВЕРШИТЬ СЕССИЮ</button></div>
                    <div>Группа: {user.role===0?"Администраторы":"Пользователи"}</div>
                    <div>Дата регистрации: {user.regDate}</div>
                    <div>Новостей: {user.posts}</div>
                </div>
            </div>
        </section>
    )
}


const mapStateToProps = ({ userInfo:{ isLoggedIn, user } }) => {
    return { isLoggedIn, user };
};

const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Profile);