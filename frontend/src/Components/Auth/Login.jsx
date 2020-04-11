import React, { Component } from 'react';

import GoogleIcon from '../../img/GoogleIcon.png';
import FacebookIcon from '../../img/facebookIcon.png';
import TwitterIcon from '../../img/TwitterIcon.png';

import background from '../../img/bg-shape.svg';

class Login extends Component {

    render() {
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
                        <div className={'btnAuth'}>Login</div>
                        <div className={'borderBox'}>
                            <div className={'line'} />
                            <div className={'text2 or'}>OR</div>
                        </div>
                        <div className={'socialMediaBox'}>
                            <div className={'icAuth google'}> <img src={GoogleIcon}></img></div>
                            <div className={'icAuth facebook'}><img src={FacebookIcon}></img></div>
                            <div className={'icAuth twitter'}><img src={TwitterIcon}></img></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;