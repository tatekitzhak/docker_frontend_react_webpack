import React, {useState} from 'react';
import UpdateComponent from '@/hoc/person/presonHOC'


function Person2({ mony, handleIncrease }) {
 
    return(
        <div>
            <h2>Ran is Earning ${mony} </h2>
            <button onClick={handleIncrease}>Increase Mony</button>
        </div>
    );
    
}

export default UpdateComponent(Person2);