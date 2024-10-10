import React, {useState} from 'react';

import withCounter from '@/hoc/counter/withCounter'

function HoverIncrease(props) {
  const { counter, incrementCounter } = props;
  return (
    <div>
      <button onMouseOver={() => incrementCounter()}> Increase on hover </button>
      <p style={{ counter }}>
        Size of font in onMouseOver function: {counter}
      </p>
    </div>
  );
}


export default withCounter(HoverIncrease, '200');