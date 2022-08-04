import React, { useState } from 'react';

const Test = () => {
    let [count, setCount] = useState(0)
    // console.log(count);



let minus = () =>{
    if (count>0) {
        setCount(count - 1)
    }
}

/* let plus = () =>{
    // let oldCount = count
    // let newCount = oldCount + 1
    // setCount(newCount) 
    setCount(count + 1)
} */

    return (
        <div>
            <h3>{count}</h3>
            {/* <button onClick={plus} className='ms-3 mt-5'>+</button> */}
            <button onClick={()=>{setCount(count + 1)}} className='ms-3 mt-5'>+</button>
            <button onClick={minus} className='ms-3 mt-5'>-</button>
        </div>
    );
};

export default Test;