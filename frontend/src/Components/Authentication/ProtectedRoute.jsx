import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect, withRouter } from 'react-router-dom'
// import Auth from './Auth'

class ProtectedRoute extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    render() {
        const { isAuthenticated, component: Component, ...rest } = this.props
        console.log('Protected Auth is', isAuthenticated)

        return (

            <Route
                {...rest}
                render={() => isAuthenticated ? (
                    <Component />
                ) :
                    (
                        <Redirect to="/login" />
                    )
                }

            />
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default withRouter(connect(
    mapStateToProps
)(ProtectedRoute));