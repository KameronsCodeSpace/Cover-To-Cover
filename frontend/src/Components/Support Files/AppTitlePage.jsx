import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from "./Button"
import background from '../../img/bg-shape.svg';

class AppTitlePage extends Component {

    // onQuoteSubmit = () => {
    //     const storyQuotes = [];

    //     const [randomQuote, setQuote] = useState(0);
    //     storyQuotes[0] = 'People are like people';
    //     storyQuotes[1] = 'Boats are like Boats';
    //     storyQuotes[2] = 'Moats are like Moats';
    //     setQuote(Math.floor(Math.random() * (storyQuotes.length)));
    // }

    redirectToLogin = () => {
        const { history } = this.props;
        if (history) history.push('/login');
    }

    redirectToExplore = () => {
        const { history } = this.props;
        if (history) history.push('/explore');
    }

    render() {
        return (
            <div>
                <img src={background} alt='Background Shape' id='bg' />
                <h1>Cover<br />To <span>Cover</span></h1>
                <hr />

                <p>Explore the stories of people all over the world <br />and find out what makes you special @ Group 6</p>
                <div className='quotes'>
                    {/* {storyQuotes[randomQuote]} */}
                </div>
                <div className='bottom'>
                    <div className='buttons'>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--landing">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-in-alt" class="svg-inline--fa fa-sign-in-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"></path></svg>
                            </Button>
                            <p>Login</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToExplore}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--landing">
                                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="wpexplorer" class="svg-inline--fa fa-wpexplorer fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 256c0 141.2-114.7 256-256 256C114.8 512 0 397.3 0 256S114.7 0 256 0s256 114.7 256 256zm-32 0c0-123.2-100.3-224-224-224C132.5 32 32 132.5 32 256s100.5 224 224 224 224-100.5 224-224zM160.9 124.6l86.9 37.1-37.1 86.9-86.9-37.1 37.1-86.9zm110 169.1l46.6 94h-14.6l-50-100-48.9 100h-14l51.1-106.9-22.3-9.4 6-14 68.6 29.1-6 14.3-16.5-7.1zm-11.8-116.3l68.6 29.4-29.4 68.3L230 246l29.1-68.6zm80.3 42.9l54.6 23.1-23.4 54.3-54.3-23.1 23.1-54.3z"></path></svg>
                            </Button>
                            <p>Explore</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--landing">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-right" class="svg-inline--fa fa-quote-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>
                            </Button>
                            <p>Quotes</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--landing">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg>
                            </Button>
                            <p>Global</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--landing">
                                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="address-card" class="svg-inline--fa fa-address-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2zM360 320h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8z"></path></svg>
                            </Button>
                            <p>About</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(AppTitlePage);