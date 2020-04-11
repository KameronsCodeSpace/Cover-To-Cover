import React from 'react';
import background from '../../img/bg-shape.svg'

function AppTitlePage() {
    return (
        <div>
            <img src={background} alt='Background Shape' id='bg' />
            <h1>Cover<br />To <span>Cover</span></h1>
            <hr />
            <p>Explore the stories of people all over the world <br />and find out what makes you special @ Group 6</p>
            <div className='bottom'>
                <div className='buttons'>
                    <div className='btn'>
                        <button>L</button>
                        <p>Login</p>
                    </div>
                    <div className='btn'>
                        <button>E</button>
                        <p>Explore</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppTitlePage;