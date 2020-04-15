import React, { useState, useEffect } from 'react';

import AppTitlePage from '../Support Files/AppTitlePage';
import Stories from '../Support Files/Stories';

function Landing() {

    const [randomData, setData] = useState([]);
    const [userName, setName] = useState([]);
    const [storyTitle, setTitle] = useState([]);
    const [storyImg, setImage] = useState([])

    useEffect(() => {
        (async function fetchData() {
            // possible await function for some api
            const response = ['Moscow', 'New York']
            console.log('Get this info', response)
            setData(response);
            //some more examples of using hooks and props 
            setName(['Akio Ostuka', 'Drake Anderson']);
            setTitle(['Metal Gear', 'Online Persona']);
            setImage(['https://images.squarespace-cdn.com/content/v1/58d66569b3db2b57ce7db1e2/1522601313393-6K0OVDA8KDS7MI048M4G/ke17ZwdGBToddI8pDm48kMm4aW_fDERSvfxGrBsAvC0UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2m3zK3svLWLcrfaJ51GFsfpc9KBPNtX5GL6Lnf5Th8F86liCGkj4dr9PBmyqqYlee/V+MGS01+copy.jpg?format=750w',
                'https://www.lovethispic.com/uploaded_images/107692-Colorful-Ocean-Wave.jpg'])
        })();
    }, []);

    return (
        <main>
            <AppTitlePage />
            <Stories randomData={randomData[0]} userName={userName[0]} storyTitle={storyTitle[0]} storyImg={storyImg[0]} />
            <Stories randomData={randomData[1]} userName={userName[1]} storyTitle={storyTitle[1]} storyImg={storyImg[1]} />
        </main>
    );
}

export default Landing;