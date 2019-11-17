import React from 'react';
import './error-indicator.scss';

const ErrorIndicator = () => {
    return <div className="error-ind-container">
        <div className="error">
            <h3>Что-то пошло не так!</h3>
            <p>Не волнуйтесь, мы уже начали разбираться с этой проблемой. А вы пока можете вернуться <a href="/">на главную страницу</a></p>
        </div>
    </div>;
};

export default ErrorIndicator;
