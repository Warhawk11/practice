// import React from 'react'

// import { useNavigate } from "react-router-dom"

// const Home = () => {
//     const navigate = useNavigate();
//     const handleButtonClick= ()=>{
//         navigate('/about');
//     }
//     return (
//         <div><h2>Home</h2><button onClick={handleButtonClick}>Go to About</button></div>
//     )
// }
// export default Home
// ----------------------------------------------------------------------------------------------------------
import React from 'react'
import { Link } from 'react-router-dom'
const Home=()=>{
    return(
        <div>
            <h1>Welcome to the Home Page</h1>
            {/* <ul>
                <li><Link to="/user/1">User 1</Link></li>
                <li><Link to="/user/2">User 2</Link></li>
                <li><Link to="/user/3">User 3</Link></li>
            </ul> */}
        </div>
    )
}

export default Home