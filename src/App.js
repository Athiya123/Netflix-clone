// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
    </div>
  );
}
// function App() {
//   return (
//     <h1>Netflix clone</h1>
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
//   );
// }

export default App;

