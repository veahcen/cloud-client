import React from 'react';
import './registration.css'
import formRegistration from '../../assets/forma.pdf'

const Registration = () => {
    return (
        <div className='registration'>
            <h1 className='registration__title'>Регистрация</h1>
            <p className='registration__subtitle'>Для регистрации в корпоративном облаке заполните
                данные в прекрипленном документе и отдайте распечатанную копию начальику</p>
            <a href={formRegistration} className='registration__link' download>Форма</a>
        </div>
    );
};

export default Registration;