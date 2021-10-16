import './App.css';
import Temp from './components/temp';
import HomeHOC from './HOC/Home.HOC';
import Master from "./components/master";
import ParticularFood from './components/ParticularFood/index';

function App() {
  return (
    <>
    <HomeHOC path="/" exact component={Temp}/>
    <HomeHOC path="/:type" exact component={Master}/>
    {/* <ParticularFood/> */}
    </>
  )
}

export default App;