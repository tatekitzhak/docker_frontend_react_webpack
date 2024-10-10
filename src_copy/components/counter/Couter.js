import React from 'react';

import ClickIncrease from './clickCouter'; 
import HoverIncrease from './HoverCounter'

function Counter(props){
    return(
        <>
            <ClickIncrease />
            <HoverIncrease />
        </>
    )
}

export default Counter;
