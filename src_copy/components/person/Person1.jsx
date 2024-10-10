import React, {useState} from 'react';
import UpdateComponent from '@/hoc/person/presonHOC'

function Person1(props) {

    return(
       <>
        <div>
            <h2>Ran is Earning ${props.mony} </h2>
            <button onClick={props.handleIncrease}>Increase Mony</button>
        </div>
        {props.children}
       </>
    );
    
}

export default UpdateComponent(Person1);