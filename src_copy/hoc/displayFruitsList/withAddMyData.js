import React, { useState, useEffect } from 'react';

/**
 * https://www.cronj.com/blog/hocs/#
 */

// const fruits_list = ['Bananas', 'Chiku', 'Orange', 'Pear', 'Grapes', 'Peach', 'Apple', 'WaterMelon'];

function withAddMyData(WrappedComponent, fruits_list, modify_cb) {
    function EnhanceElement(props) {
        const [fruits, setFruits] = useState([]);

        useEffect(() => {
            setFruits(modify_cb(fruits_list))
        }, []);



        return (
            <WrappedComponent enhance_fruits={fruits} />
        );

    };
    return EnhanceElement
}

export default withAddMyData;