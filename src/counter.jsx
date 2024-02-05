import './counter.css'
import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count + 1)
    }

    const click = () => {
        setCount(0)
    }

    const minus = () => {
        setCount(count - 1)
    }


    return(
        <div className="stn">
            <h1>{count}</h1>
            <button onClick={add}>Increment</button>
            <button onClick={click}>Reset</button>
            <button onClick={minus}>Decrement</button>
        </div>
    )

}

export default Counter