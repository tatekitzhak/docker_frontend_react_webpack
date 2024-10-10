import React, { useState } from 'react';

/**
 * https://www.youtube.com/watch?v=J5P0q7EROfw
 */

function UpdateComponent(OrignalComponent) { // This return function

    function NewComponent(props) { // This return Component
        const [mony, setMony] = useState(10);
        console.log('NewComponent:', props)
        const handleIncrease = () => {
            setMony(mony * 10)
        }
        return (
            <OrignalComponent handleIncrease={handleIncrease} mony={mony}>
                <h1>HOC</h1>
            </OrignalComponent>
        )
    }
    return NewComponent
}


export default UpdateComponent;