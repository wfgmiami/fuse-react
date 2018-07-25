import React from 'react';
import Iframe from 'react-iframe';

const LeapContent = () => {
    return (
        <div>
            <Iframe url="http://leap.lordabbett.com"
            // width="450px"
            height="800px"
            // id="myId"
            // className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
        </div>
    );
};

export default LeapContent;
