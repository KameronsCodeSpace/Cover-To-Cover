import React from 'react';
// import Auth from "./Auth"

import GoogleIcon from '../../img/GoogleIcon.png';
import FacebookIcon from '../../img/facebookIcon.png';
import TwitterIcon from '../../img/TwitterIcon.png';

import background from '../../img/bg-shape.svg';
import { useHistory } from 'react-router-dom';
import { Button } from "../Support Files/Button"

const Login = () => {
    const history = useHistory();

    const onLogin = () => {
        // Auth.login(() => {
            history.push('/explore')
        // })
    }

    const onRegister = () => {
        history.push('/registration')
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
                    <div className={'titleAuth'}>Log Into Cover to Cover</div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'text'} placeholder={'Username'} />
                    </div>
                    <div className={'inputSBox'}>
                        <input className={'inputS'} type={'password'} placeholder={'Password'} />
                    </div>
                    <div className={'contentBox'}>
                        <div className={'checkboxBox'}>
                            <input type={'checkbox'} className={'checkbox'} />
                            <label className={'checkboxLabel'}>Remember</label>
                        </div>
                        <div className={'text1'}>Forgot Password?</div>
                    </div>

                    {/* <div className={'btnAuth'}>Login</div> */}
                    <div className='buttons'>
                        <div className='btn-holder'>
                            <Button onClick={onLogin}
                                type="button"
                                buttonStyle="btn--login--solid"
                                buttonSize="btn--large">Login</Button>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={onRegister}
                                type="button"
                                buttonStyle="btn--login--solid"
                                buttonSize="btn--large">Register</Button>
                        </div>
                    </div>

                    {/* <br /> */}
                    {/* <div className={'btnAuth'}>Registration</div> */}

                    <div className={'borderBox'}>
                        <div className={'line'} />
                        <div className={'text2 or'}>OR</div>
                    </div>
                    <div className={'socialMediaBox'}>
                        <div className={'icAuth google'}> <img alt='google' src={GoogleIcon}></img></div>
                        <div className={'icAuth facebook'}><img alt='facebook' src={FacebookIcon}></img></div>
                        <div className={'icAuth twitter'}><img alt='twitter' src={TwitterIcon}></img></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;