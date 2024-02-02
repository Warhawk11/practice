// import React from 'react'
// import { Provider } from 'react-redux'
// import store from './Store/store'
// import Counter from './counter'
// const App = ()=>{
//   return(
//   <Provider store = {store} >
//     <Counter>
      
//     </Counter>
//   </Provider>
//   )
// }


// export default App;


// --------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from './Actions/action';

// const App = () => {
//   const dispatch = useDispatch();
//   const { loading, data, error } = useSelector((state) => state);

//   useEffect(() => {
//     dispatch(fetchData());
//   }, [dispatch]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Data fetched from JSONPlaceholder API</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
// -------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Provider } from 'react-redux';

// import postStore from './postStore'
// import PostForm from './component/PostForm';
// import PostLists from './component/PostLists';

// function App() {
//   return (
//     <Provider store={postStore}>
//       <div className="App">
//         <PostForm />
//         <hr />
//         <PostLists />
//       </div>
//     </Provider>
//   );
// }

// export default App;

// --------------------------------------------------------------------------------------------------------
// import React from 'react'
// import { BrowserRouter ,Route, Routes} from 'react-router-dom'
// import Home from './component/Home'

// import UserProfile from "./component/userProfile"


// const App = ()=>{
//   return(
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path ="/" exact element={<Home/>}/>
//           <Route path ="/user/:userId" exact element={<UserProfile/>}/>
//           {/* <Route  /> */}

//         </Routes>
//       </div>
//     </BrowserRouter>
//   )

//   }
// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import InputComponent from './component/inputname';

const App = () => {
  return (

    // <Router>
    // <Routes>
    //   <Route path='/' element={<Home />} />
    //   <Route path='/about' element={<About />} />
      <InputComponent/>
    //   </Routes>
    // </Router>
  );
}

export default App;














