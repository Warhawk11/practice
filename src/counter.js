// import React from 'react';
// import { useDispatch,useSelector } from 'react-redux';
// import { increment,decrement } from './Actions/counterAction';

// const Counter = ()=>{
//     const count  =  useSelector(state => state.count)
//     const dispatch = useDispatch()

//     return(
//         <div>
//             <h1>Counetr App</h1>
//             <p>Count : {count}</p>
//             <button onClick={()=>dispatch(increment)}>Increment</button>
//             <button onClick={()=>dispatch(decrement)}>Decrement</button>
//         </div>
//     )
// }
// // const mapStateToProps = state =>{
// //     return {
// //         count : state.count
// //     }
// // }


// export default Counter;
// -------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { connect } from 'react-redux';
// import { increment, decrement, incrementAsync } from './actions';

// const Counter = ({ counter, increment, decrement, incrementAsync }) => {
//   return (
//     <div>
//       <h1>Counter: {counter}</h1>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={incrementAsync}>Increment Async</button>
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   counter: state.counter
// });

// const mapDispatchToProps = {
//   increment,
//   decrement,
//   incrementAsync
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
import React, { useState } from 'react';

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;









