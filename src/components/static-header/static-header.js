import React from 'react';
import { Link } from 'react-router-dom';

const StaticHeader = () => {
    return (
        <section className="sect-header">
            <div className="header">
                <Link to="/">
                    Mini-News
                </Link>
                <Link to="/news">
                    Новости
                </Link>
                <Link to="/profile" className="prf">
                    Профиль
                </Link>
            </div>
        </section>
    )
}

export default StaticHeader;