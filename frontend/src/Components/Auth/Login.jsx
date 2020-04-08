import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div className={'authBox'}>
                <div className={'leftBox'}>
                    <div className={'bgColor'} />
                    <div className={'imageAuth'} />
                    <div className={'imageTextTop'}>MeowMeow</div>
                    <div className={'imageTextBottom'}>Build it</div>
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
                            <div className={'icAuth google'} />
                            <div className={'icAuth facebook'} />
                            <div className={'icAuth twitter'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;