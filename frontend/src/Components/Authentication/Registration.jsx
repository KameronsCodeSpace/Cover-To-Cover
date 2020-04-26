import React, { useContext } from 'react';
import AuthApi from './AuthApi';
import Cookies from 'js-cookie';

import background from '../../img/bg-shape.svg';
import { useHistory } from 'react-router-dom';
import { Button } from "../Support Files/Button"

const Registration = () => {
    const history = useHistory();
    const Auth = useContext(AuthApi)

    const onSignup = () => {
        // Auth.setAuth(true);
        // Cookies.set('user', 'loginTrue', { expires: 1 });
        // history.push('/dashboard')
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("WORKSING")
    }

    const backToLogin = () => {
        history.push('/login')
    }

    return (
        <div className={'authBox'}>
            <img src={background} alt='Background Shape' id='bg' />
            <div className={'leftBox'}>
                <div className={'bgColor'} />
                <div className={'imageAuth'} />
                <div className={'imageTextTop'}>Join The Adventure</div>
                <div className={'imageTextBottom'}>Share your experience</div>
            </div>
            <div className={'rightBox'}>
                <div className={'box'}>
                    <div className={'titleAuth'}>Registration</div>
                    <form onSubmit={handleSubmit}>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Username'} onChange={handleChange} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'password'} placeholder={'Password'} onChange={handleChange} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Region'} onChange={handleChange} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Info'} onChange={handleChange} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Email'} onChange={handleChange} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Avatar'} onChange={handleChange} />
                    </div>

                    <div className='buttons'>
                        <div className='btn-holder'>
                            <Button 
                                buttonStyle="btn--login--solid"
                                buttonSize="btn--large">Sign Up</Button>
                        </div>
                        <div className='btn-holder'>
                                <Button 
                                    onClick={backToLogin}
                                    type="button"
                                    buttonStyle="btn--login--solid"
                                    buttonSize="btn--large">Return</Button>
                            </div>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    );
}


export default Registration;