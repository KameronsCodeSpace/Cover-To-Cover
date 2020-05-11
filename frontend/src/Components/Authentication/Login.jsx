import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../Actions/authActions'
import { clearErrors } from '../../Actions/errorActions'
import { withRouter } from 'react-router-dom';
import { Button } from "../Support Files/Button"

import background from '../../img/bg-shape.svg';
import GoogleIcon from '../../img/GoogleIcon.png';
import FacebookIcon from '../../img/facebookIcon.png';
import TwitterIcon from '../../img/TwitterIcon.png';


class Login extends Component {
    state = {
        username: '',
        password: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { isAuthenticated, history, error } = this.props
        if (error !== prevProps.error) {
            // Check for login error
            if (error.id === 'LOGIN_FAIL') {

                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // Login
        if (isAuthenticated) {
            history.push('/userprofile')
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.state;

        // Create user object
        const user = {
            username,
            password
        };

        // Attempt to login
        this.props.login(user);
        window.localStorage.setItem('password', password)
    }

    toRegistration = () => {
        const { history } = this.props;

        if (history) {
            this.props.clearErrors()
            history.push('/registration')
        }
    }

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
                        {this.state.msg ? (<div>{this.state.msg}</div>
                        ) : null}
                        <form onSubmit={this.handleSubmit}>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'text'} name='username' id='username' placeholder={'Username'} onChange={this.handleChange} />
                            </div>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'password'} name='password' id='password' placeholder={'Password'} onChange={this.handleChange} />
                            </div>
                            <div className={'contentBox'}>
                                <div className={'checkboxBox'}>
                                    <input type={'checkbox'} className={'checkbox'} />
                                    <label className={'checkboxLabel'}>Remember</label>
                                </div>
                                <div className={'text1'}>Forgot Password?</div>
                            </div>

                            <div className='buttons'>
                                <div className='btn-holder'>
                                    <Button
                                        buttonStyle="btn--login--solid"
                                        buttonSize="btn--large">Login</Button>
                                </div>
                                <div className='btn-holder'>
                                    <Button
                                        onClick={this.toRegistration}
                                        type="button"
                                        buttonStyle="btn--login--solid"
                                        buttonSize="btn--large">Register</Button>
                                </div>
                            </div>
                        </form>

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
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default withRouter(connect(
    mapStateToProps,
    { login, clearErrors }
)(Login));