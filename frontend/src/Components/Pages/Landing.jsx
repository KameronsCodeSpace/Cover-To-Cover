import React from 'react';
import background from '../../img/bg-shape.svg'


function Landing() {
    return (
        <div>
            <img src={background} alt='Background Shape' id='bg'/>
            <h1>Cover<br/>To <span>Cover</span></h1>
            <hr />
            <p>Explore the stories of people all over the world <br />and find out what makes you special @ Group 6</p>
        </div>
    );
}

export default Landing;