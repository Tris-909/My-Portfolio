import React from 'react';
import Fade from 'react-reveal/Fade';

const FadeAnimation = (props) => {
    return(
        <Fade bottom>
            {props.children}
        </Fade>
    );
}

export default FadeAnimation;