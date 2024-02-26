// import React, { useState } from 'react';

// import './App.css';
// import Navbar from './components/Navbar/Navbar'
// import StateCount from './components/State/State'
// import UserState from './components/State/UserState'
// import FormState from './components/State/FormState'
// import Props from './components/Props/ParentProps'
// import ParentRecieve from './components/Props/ParentRecieve'
// import CountInitial from './components/UseEffect/CountInitial'
// import checkAuth from "./components/Authenticate/CheckAuth";




// function App() {

//   return (
//     <div>
//       <div className="customBg">
//       <Navbar />
//       <div className='container customArea'>
//           <p className='customText'>Hola Globo</p>
//           <div className='row'>
//             <div className='col'>
//               <div className='container bg-white rounded'>
//                 {/* <StateCount /> */}
//                 {/* <UserState /> */}
//                 {/* <FormState /> */}
//                 {/* <Props /> */}
//                 {/* <ParentRecieve /> */}
//                 {/* <CountInitial /> */}
//                 <p>Home component </p>
//               </div>
//             </div>
//           </div>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default checkAuth(App);



import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import checkAuth from "./components/Authenticate/CheckAuth";

function App() {
  return (
    <div>
      <div className="customBg">
        <Navbar />
        <div className='container customArea'>
          <p className='customText'>Hola Globo</p>
          <div className='row'>
            <div className='col'>
              <div className='container bg-white rounded'>
                <div className="section">
                  <h2>Welcome to PharamLore</h2>
                  <p>Your go-to platform for all things related to medicines and health.</p>
                </div>
                <div className="section" style={{ backgroundColor: '#ffda9c' }}>
                  <h2>Featured Medicines</h2>
                  <p>Discover our curated list of featured medicines.</p>
                  {/* Add your content here */}
                </div>
                <div className="section" style={{ backgroundColor: '#531251', color: '#ffda9c' }}>
                  <h2>Latest Additions</h2>
                  <p>Explore the newest additions to our medicine catalog.</p>
                  {/* Add your content here */}
                </div>
                <div className="section">
                  <h2>About PharamLore</h2>
                  <p>Learn more about us and our mission to provide valuable health information.</p>
                  {/* Add your content here */}
                </div>
                {/* Add more sections as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
