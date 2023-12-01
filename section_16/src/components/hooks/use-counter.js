import { useState, useEffect } from "react";

//forwards = true: default is true
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
  //whenever "forwards" changes, it will re-run  

  return counter;
}

export default useCounter;