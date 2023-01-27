// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";

// import Test from "./Test";

import AllUserList from "./components/AllUserList";

const App =  () => {
  return (
      <div>
        {/* <Test key={1} />
        <Test key={2} />
        <Test key={3} />
        <Test key={4} />
        <Test key={5} />
        <Test key={6} />
        <Test key={7} />  */}

        <AllUserList/>
      </div>
  );
};

export default App;