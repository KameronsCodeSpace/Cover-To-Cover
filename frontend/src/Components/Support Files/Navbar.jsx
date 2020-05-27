import React, { Component, Fragment } from 'react';

import { Link, withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { getSearches } from '../../Actions/SearchActions'
import { logout } from '../../Actions/authActions';

class Navbar extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired
    }

    render() {
        const { isAuthenticated } = this.props;

        const authLinks = (
            <Fragment>
                {/* <ul className='nav-links'> */}
                <li className='nav-item'>
                    <Link className='nav-link' to='/explore'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="window-restore"
                            className="svg-inline--fa fa-window-restore fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">

                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className='link-text'>Explore</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/travel'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="globe-africa"
                            className="svg-inline--fa fa-globe-africa fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 496 512"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm160 215.5v6.93c0 5.87-3.32 11.24-8.57 13.86l-15.39 7.7a15.485 15.485 0 0 1-15.53-.97l-18.21-12.14a15.52 15.52 0 0 0-13.5-1.81l-2.65.88c-9.7 3.23-13.66 14.79-7.99 23.3l13.24 19.86c2.87 4.31 7.71 6.9 12.89 6.9h8.21c8.56 0 15.5 6.94 15.5 15.5v11.34c0 3.35-1.09 6.62-3.1 9.3l-18.74 24.98c-1.42 1.9-2.39 4.1-2.83 6.43l-4.3 22.83c-.62 3.29-2.29 6.29-4.76 8.56a159.608 159.608 0 0 0-25 29.16l-13.03 19.55a27.756 27.756 0 0 1-23.09 12.36c-10.51 0-20.12-5.94-24.82-15.34a78.902 78.902 0 0 1-8.33-35.29V367.5c0-8.56-6.94-15.5-15.5-15.5h-25.88c-14.49 0-28.38-5.76-38.63-16a54.659 54.659 0 0 1-16-38.63v-14.06c0-17.19 8.1-33.38 21.85-43.7l27.58-20.69a54.663 54.663 0 0 1 32.78-10.93h.89c8.48 0 16.85 1.97 24.43 5.77l14.72 7.36c3.68 1.84 7.93 2.14 11.83.84l47.31-15.77c6.33-2.11 10.6-8.03 10.6-14.7 0-8.56-6.94-15.5-15.5-15.5h-10.09c-4.11 0-8.05-1.63-10.96-4.54l-6.92-6.92a15.493 15.493 0 0 0-10.96-4.54H199.5c-8.56 0-15.5-6.94-15.5-15.5v-4.4c0-7.11 4.84-13.31 11.74-15.04l14.45-3.61c3.74-.94 7-3.23 9.14-6.44l8.08-12.11c2.87-4.31 7.71-6.9 12.89-6.9h24.21c8.56 0 15.5-6.94 15.5-15.5v-21.7C359.23 71.63 422.86 131.02 441.93 208H423.5c-8.56 0-15.5 6.94-15.5 15.5z"
                                    className="fa-primary"
                                ></path>

                            </g>
                        </svg>
                        <span className='link-text'>Global</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/trending'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="chart-line"
                            className="svg-inline--fa fa-chart-line fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className='link-text'>Trends</span>
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' to='/userprofile'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="space-shuttle"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-space-shuttle fa-w-20 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M32 416c0 35.35 21.49 64 48 64h16V352H32zm154.54-232h280.13L376 168C243 140.59 222.45 51.22 128 34.65V160h18.34a45.62 45.62 0 0 1 40.2 24zM32 96v64h64V32H80c-26.51 0-48 28.65-48 64zm114.34 256H128v125.35C222.45 460.78 243 371.41 376 344l90.67-16H186.54a45.62 45.62 0 0 1-40.2 24z"
                                    className="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M592.6 208.24C559.73 192.84 515.78 184 472 184H186.54a45.62 45.62 0 0 0-40.2-24H32c-23.2 0-32 10-32 24v144c0 14 8.82 24 32 24h114.34a45.62 45.62 0 0 0 40.2-24H472c43.78 0 87.73-8.84 120.6-24.24C622.28 289.84 640 272 640 256s-17.72-33.84-47.4-47.76zM488 296a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8c31.91 0 31.94 80 0 80z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className='link-text'>Profile</span>
                    </Link>
                </li>

                <li className='nav-item' onClick={() => {
                    this.props.logout()
                }}>
                    <Link className='nav-link' to='/'>
                        <svg aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="sign-out-alt"
                            className="svg-inline--fa fa-sign-out-alt fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className='link-text'>Logout</span>
                    </Link>
                </li>
                {/* </ul> */}

            </Fragment>
        );

        const vistorLinks = (
            <Fragment>
                {/* <ul className='nav-links'> */}
                <li className='nav-item-vistor'>
                    <Link className='nav-link' to='/explore'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="far"
                            data-icon="window-restore"
                            className="svg-inline--fa fa-window-restore fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">

                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M464 0H144c-26.5 0-48 21.5-48 48v48H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-96 464H48V256h320v208zm96-96h-48V144c0-26.5-21.5-48-48-48H144V48h320v320z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                        <span className='link-text'>Explore</span>
                    </Link>
                </li>

                <li className='nav-item-vistor'>
                    <Link className='nav-link' to='/login'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="sign-in-alt"
                            class="svg-inline--fa fa-sign-in-alt fa-w-16"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <g className="fa-group">

                                <path
                                    fill="currentColor"
                                    d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                                    className='fa-primary'
                                ></path>
                            </g>
                        </svg>
                        <span className='link-text'>Login</span>
                    </Link>
                </li>

                <li className='nav-item-vistor'>
                    <Link className='nav-link' to='/registration'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="clipboard-list"
                            class="svg-inline--fa fa-clipboard-list fa-w-12"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512">
                            <path
                                fill="currentColor"
                                d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"
                                className='fa-primary'

                            ></path></svg>
                        <span className='link-text'>Signup</span>
                    </Link>
                </li>
                {/* </ul> */}
            </Fragment>
        );

        return (
            <header className='nav-area'>
                <div className='menu-wrapper'>
                    <Link className='logo' to='/'>
                        <h2>Cover To Cover</h2>
                    </Link>
                    <nav>
                        <ul className='right-nav'>
                            {isAuthenticated ? authLinks : vistorLinks}
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}
//         <nav className='navbar'>
//             <ul className='nav-links'>
//                 <li className='logo'>
//                     <Link className='nav-link' to='/'>
//                         <span className='link-text logo-text'>Cover To Cover</span>
//                         <svg
//                             aria-hidden="true"
//                             focusable="false"
//                             data-prefix="fad"
//                             data-icon="angle-double-right"
//                             role="img"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 448 512"
//                             className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
//                         >
//                             <g className="fa-group">
//                                 <path
//                                     fill="currentColor"
//                                     d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
//                                     className="fa-secondary"
//                                 ></path>
//                                 <path
//                                     fill="currentColor"
//                                     d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
//                                     className="fa-primary"
//                                 ></path>
//                             </g>
//                         </svg>
//                     </Link>
//                 </li>
//             </ul>
//             {/* <ul className="search-container">
//                 <li className="searchbox">
//                     <input type="text" className="searchbox__input" placeholder="Search..." onChange={event => this.props.getSearch(event.target.value)} />
//                     <svg className="searchbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
//                         <path className="iconColor" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
//                     </svg>
//                 </li>
//             </ul> */}
//             {isAuthenticated ? authLinks : vistorLinks}
//         </nav>
//     );
// }
// }

Navbar.propTypes = {
    getSearches: PropTypes.func.isRequired,
    search: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    search: state.search
})
export default withRouter(connect(
    mapStateToProps,
    { getSearches, logout }
)(Navbar));