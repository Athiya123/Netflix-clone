// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import requests from "./components/Banner/requests";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title={"NETFLIX ORIGINALS"} fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title={"TRENDING MOVIES"} fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title={"HISTORY MOVIES"} fetchUrl={requests.fetchHistoryMovies} isLargeRow/>
      <Row title={"ANIMATION MOVIES"} fetchUrl={requests.fetchAnimationMovies} isLargeRow/>
      <Row title={"FANTASY MOVIES"} fetchUrl={requests.fetchFantasyMovies} isLargeRow/>
      <Row title={"ROMANCE MOVIES"} fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
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

