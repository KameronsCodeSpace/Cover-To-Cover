import React from 'react';
import sun from '../../img/sun-icon.svg';
// import snow from '../../img/snow-icon.svg';

const Stories = (props) => {
    return (
        <section>
            <div className='floater'>
                <div className='icon-temp'>
                    <img src={sun} alt='Sun' />
                    <p id='header'>90</p>
                </div>
                {/* the props coming from app go here and we can get info from the database later instead of string */}
                <p>{props.randomData}</p>
            </div>
            <img src={props.storyImg} alt='dog' id='story-img' />
            <div className='story'>

                <div>
                    <p>{props.storyTitle}</p>
                    <p>{props.userName}</p>
                </div>
            </div>
        </section>
    );
}

export default Stories;