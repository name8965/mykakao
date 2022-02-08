import React, { useState } from "react";
import AppRouter from "./AppRouter";

// export default function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/Mytest" element={<MyTest />} />
//       </Routes>
//     </div>
//   );
// }

function App() {
  const [init, setInit] = useState(true);
  return <>{init ? <AppRouter /> : "Initializing.."}</>;
}
export default App;

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
