import React, {useState} from "react";

// https://blog.logrocket.com/understanding-react-higher-order-components/


const UpdatedComponent = (OriginalComponent, increaseCount) => {
  
  function NewComponent(props) {
    const [counter, setCounter] = useState(10); //create a Hook
    console.log('increaseCount:', increaseCount)
    return <OriginalComponent 
              name="From OriginalComponent"
              counter={counter}
              incrementCounter={() => setCounter((counter) => counter + 1)} 
              >
                
              </OriginalComponent>;
  }
  return NewComponent;
};

export default UpdatedComponent;