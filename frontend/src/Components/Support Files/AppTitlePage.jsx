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
        if(history) history.push('/login');
    }

    redirectToExplore = () => {
        const { history } = this.props;
        if(history) history.push('/explore');
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
                                buttonSize="btn--tall">L</Button>
                            <p>Login</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToExplore}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--tall">E</Button>
                            <p>Explore</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--tall">Q</Button>
                            <p>Quotes</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--tall">G</Button>
                            <p>Global</p>
                        </div>
                        <div className='btn-holder'>
                            <Button onClick={this.redirectToLogin}
                                type="button"
                                buttonStyle="btn--landing--solid"
                                buttonSize="btn--tall">A</Button>
                            <p>About</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default withRouter(AppTitlePage);