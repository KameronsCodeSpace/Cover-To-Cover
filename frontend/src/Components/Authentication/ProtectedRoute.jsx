import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import Auth from './Auth'

export const ProtectedRoute = ({ auth, component:Component, ...rest }) => {
    console.log('What is this', auth)
    return (
        <Route
            {...rest}
            render = {() => auth? (
                <Component />
            ):
            (
                <Redirect to="/login" />
            )
            }
        />
    )
}