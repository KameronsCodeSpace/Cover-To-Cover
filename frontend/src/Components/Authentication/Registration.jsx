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
        Auth.setAuth(true);
        Cookies.set('user', 'loginTrue', { expires: 1 });
        history.push('/dashboard')
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
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Username'} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'password'} placeholder={'Password'} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Region'} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Info'} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Email'} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Avatar'} />
                    </div>

                    <div className='buttons'>
                        <div className='btn-holder'>
                            <Button onClick={onSignup}
                                type="button"
                                buttonStyle="btn--login--solid"
                                buttonSize="btn--large">Sign Up</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Registration;