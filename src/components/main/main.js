import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className="sect-main">
            <div className="main">
                <h4>Приветствуем вас на нашем новостном портале <span className="text-logo">Mini-News</span>!</h4>
                <p>Наш скромный уголок находится в разработке, однако вы уже можете ознакомиться со следующими разделами:</p>
                <div className="link-list">
                    <Link to="/news">
                        Свежие новости
                    </Link>
                    <Link to="/profile">
                        Профиль
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Main;