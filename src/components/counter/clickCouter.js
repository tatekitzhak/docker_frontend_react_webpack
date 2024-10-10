import React, {useState} from 'react';

import withCounter from '@/hoc/counter/withCounter';

function ClickIncrease(props) {
  const { counter, incrementCounter } = props;
  console.log('ClickIncrease:', props)
  return (
    <div>
      <button onClick={() => incrementCounter() }>  Increase with click </button>
      <p style={{ counter }}>Size of font in onClick function: {counter}</p>
    </div>
  );
}


export default withCounter(ClickIncrease, 100);