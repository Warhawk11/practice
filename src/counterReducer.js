import React from 'react'
import { useDispatch,useSelector } from "react-redux";
import { increment,decrement,incrementByAmount } from './slice/counterSlice';

const CounterReducer = ()=>{
    const count  =  useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return(
        <div>
            <h1>Counetr App</h1>
            <p>Count : {count}</p>
            <button onClick={()=>dispatch(increment)}>Increment</button>
            <button onClick={()=>dispatch(decrement)}>Decrement</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By Amount</button>
        </div>
    )
}
export default CounterReducer;








