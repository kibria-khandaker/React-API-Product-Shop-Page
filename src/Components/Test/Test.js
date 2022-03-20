import React, { useState } from 'react';

const Test = (props) => {
    const [count, setCount] = useState(11);
    
    const plus=()=>{
        setCount(count +1)
    }
    const minus=()=>{
        setCount(count -1)
    }

    return (
        <div>
            <p> Component-Test </p>
            <div className="count mt-5">
                
                <h1>{count}</h1>

                <button onClick={plus} className='px-4 py-2 m-1 bg-black text-light fe-bold'>
                    +</button>
                <button onClick={minus} className='px-4 py-2 m-1 bg-black text-light fe-bold'>
                    -</button>
            </div>
        </div>
    );
};

export default Test;