// import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // This code will run whenever the 'count' state changes
//     document.title = `Count: ${count}`;
//   }, [count]); // Dependency array

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }
// export default MyComponent

// ----------------------------------------------------------------------------------------------

// function TodoComponent() {
//     const [todo, setTodo] = useState({});
//     const [loading, setLoading] = useState(true);
  
//     useEffect(() => {
//       // Fetch data using the API
//       fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(todo => {
//           setTodo(data);
//           setLoading(false);
//         })
//         .catch(error => {
//           console.error('Error fetching data:', error);
//           setLoading(false);
//         });
//     }, []); // Empty dependency array to ensure the effect runs only once
  
//     return (
//       <div>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <div>
//             <h1>Todo</h1>
//             <p>ID: {todo.id}</p>
//             <p>Title: {todo.title}</p>
//             <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default TodoComponent;
// ----------------------------------------------------------------------------------------------------
// import React, { useReducer } from 'react';

// // Reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// const Counter = () => {
//   // Initial state
//   const initialState = { count: 0 };

//   // useReducer returns the current state and dispatch function
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;
// // ---------------------------------------------------------------------------------------------------
// import React, { useRef, useEffect } from 'react';

// function MyComponent() {
//   // Creating a ref
//   const inputRef = useRef(null);

//   useEffect(() => {
//     // Focus the input element when the component mounts
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//       <button onClick={() => console.log(inputRef.current.value)}>Log Value</button>
//     </div>
//   );
// }
// -------------------------------------------------------------------------------------
// useMemo
// import React, { useState, useMemo } from 'react';

// function ExpensiveComponent({ data }) {
//   const processedData = useMemo(() => {
//     console.log('Processing data...');
//     // Simulate some expensive computation
//     return data.map(item => item * 2);
//   }, [data]);

//   return (
//     <div>
//       <p>Processed Data: {processedData.join(', ')}</p>
//     </div>
//   );
// }

// function App() {
//   const [values, setValues] = useState([1, 2, 3, 4, 5]);

//   return (
//     <div>
//       <ExpensiveComponent data={values} />
//       <button onClick={() => setValues([...values, values.length + 1])}>
//         Add Value
//       </button>
//     </div>
//   );
// }

// export default App;
// --------------------------------------------------------------------------

// import React, { useState, useCallback } from 'react';

// function ParentComponent() {
//   const [count, setCount] = useState(0);

//   // Without useCallback
//   // const increment = () => {
//   //   setCount(count + 1);
//   // };

//   const increment = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <ChildComponent increment={increment} />
//     </div>
//   );
// }

// function ChildComponent({ increment }) {
//   console.log('ChildComponent rendered');
//   return <button onClick={increment}>Increment Count</button>;
// }

// export default ParentComponent

