import React from 'react';
//import logo from './logo.svg';
import './App.css'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ListUserComponent from './components/ListUserComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateUserComponent from './components/CreateUserComponent';
import ViewUserComponent from './components/ViewUserComponent';

import { createBrowserHistory} from 'history';

const history = createBrowserHistory();

function App() {
    return (
    
    <div>
        <Router history={history}>
              <HeaderComponent />
              {/* <h1>hello world!</h1> */}
                <div className="container">
                    <Routes>
                          <Route path = '/' element = {<ListUserComponent/>}/>
                          <Route path = '/users' element = {<ListUserComponent/>}/>
                          <Route path = '/add-user/:id' element = {<CreateUserComponent/>}></Route>
                          {/* <Route path = '/add-user/:id' element = {<CreateUserComponent/>}></Route> */}
                          <Route path = '/view-user/:id' element = {<ViewUserComponent/>}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateUserComponent}></Route> */}
                    </Routes>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default App;

// import React from 'react';
// //import logo from './logo.svg';
// import './App.css'; 
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import ListUserComponent from './components/ListUserComponent';
// import HeaderComponent from './components/HeaderComponent';
// import FooterComponent from './components/FooterComponent';
// import CreateUserComponent from './components/CreateUserComponent';
// import ViewUserComponent from './components/ViewUserComponent';

// import { createBrowserHistory} from 'history';

// const history = createBrowserHistory();

// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors()); // Enable CORS for all routes

// const port = 8080;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// function App() {
//     return (
    
//     <div>
//         <Router history={history}>
//               <HeaderComponent />
//               {/* <h1>hello world!</h1> */}
//                 <div className="container">
//                     <Routes>
//                           <Route path = '/' element = {<ListUserComponent/>}/>
//                           <Route path = '/users' element = {<ListUserComponent/>}/>
//                           <Route path = '/add-user/_add' element = {<CreateUserComponent/>}></Route>
//                           {/* <Route path = '/add-user/:id' element = {<CreateUserComponent/>}></Route> */}
//                           <Route path = '/view-user/:id' element = {<ViewUserComponent/>}></Route>
//                           {/* <Route path = "/update-employee/:id" component = {UpdateUserComponent}></Route> */}
//                     </Routes>
//                 </div>
//               <FooterComponent />
//         </Router>
//     </div>

//   );
// }

// export default App;






    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>