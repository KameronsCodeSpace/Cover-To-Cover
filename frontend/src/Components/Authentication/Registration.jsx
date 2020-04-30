import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { register } from '../../Actions/authActions'
import { clearErrors } from '../../Actions/errorActions'

import background from '../../img/bg-shape.svg';
import { withRouter } from 'react-router-dom';
import { Button } from "../Support Files/Button"

class Registration extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        region: '',
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    };

    componentDidUpdate(prevProps) {
        const { isAuthenticated, history, error } = this.props
        if (error !== prevProps.error) {
            // Check for register error
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }

        // Complete Registration and Login
        if (isAuthenticated) {
            history.push('/explore')
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, password, region } = this.state;

        // Create user object
        const newUser = {
            username,
            email,
            password,
            region
        };

        // Attempt to register
        this.props.register(newUser);
    }

    backToLogin = () => {
        const { history } = this.props;

        if (history) {
            this.props.clearErrors()
            history.push('/login')
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
                        <div className={'titleAuth'}>Registration</div>
                        {this.state.msg ? (<div>{this.state.msg}</div>
                        ) : null}
                        <form onSubmit={this.handleSubmit}>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'text'} name='username' id='username' placeholder={'Username'} onChange={this.handleChange} />
                            </div>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'password'} name='password' id='password' placeholder={'Password'} onChange={this.handleChange} />
                            </div>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'email'} name='email' id='email' placeholder={'Email'} onChange={this.handleChange} />
                            </div>
                            <div className={'inputSBox'}>
                                <input className={'inputS'} type={'text'} name='region' id='region' placeholder={'Region'} onChange={this.handleChange} />
                            </div>
                            {/* <div className={'inputSBox'}>
                                <input className={'inputS'} type={'text'} name='info' id='info' placeholder={'Info'} onChange={this.handleChange} />
                            </div> */}
                            {/* <div className={'inputSBox'}>
                                <input className={'inputS'} type={'text'} name='avatar' id='avatar' placeholder={'Avatar'} onChange={this.handleChange} />
                            </div> */}

                            <div className='buttons'>
                                <div className='btn-holder'>
                                    <Button
                                        buttonStyle="btn--login--solid"
                                        buttonSize="btn--large">Sign Up</Button>
                                </div>
                                <div className='btn-holder'>
                                    <Button
                                        onClick={this.backToLogin}
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
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default withRouter(connect(
    mapStateToProps,
    { register, clearErrors }
)(Registration));