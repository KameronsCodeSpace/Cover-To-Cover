import React from 'react';
import background from '../../img/bg-shape.svg'

import { useHistory } from 'react-router-dom';
import { Button } from "./Button"

function AppTitlePage() {
    const history = useHistory();

    function onLoginSubmit() {
        let userFound = false;

        if (!userFound) {
            history.push('/login')
        } else {
            history.push('/explore')
        }
    }

    function onExploreSubmit() {
        history.push('/explore')
    }

    return (
        <div>
            <img src={background} alt='Background Shape' id='bg' />
            <h1>Cover<br />To <span>Cover</span></h1>
            <hr />

            <p>Explore the stories of people all over the world <br />and find out what makes you special @ Group 6</p>
            <div className='bottom'>
                <div className='buttons'>
                    <div className='btn-holder'>
                        <Button onClick={onLoginSubmit}
                            type="button"
                            buttonStyle="btn--landing--solid"
                            buttonSize="btn--tall">L</Button>
                        <p>Login</p>
                    </div>
                    <div className='btn-holder'>
                        <Button onClick={onExploreSubmit}
                            type="button"
                            buttonStyle="btn--landing--solid"
                            buttonSize="btn--tall">E</Button>
                        <p>Explore</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppTitlePage;