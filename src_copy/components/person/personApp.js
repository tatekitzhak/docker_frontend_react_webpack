import React from 'react';

import Person1 from '@/components/person/Person1';
import Person2 from '@/components/person/Person2';


function Person(){
    return(
        <>
            <Person1 person1={'Person1'}/>
            <Person2 person2={'Person2'}/>
        </>
    )
}

export default Person;
