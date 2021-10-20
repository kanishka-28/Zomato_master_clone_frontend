import Temp from './components/temp';
import HomeHOC from './HOC/Home.HOC';
import MasterRes from "./components/Master/MasterRes";
import Master from "./components/Master/Master";
import RestaurantHOC from './HOC/Restaurant.HOC';
import SignupApi from './ContextApi';
import { Login } from 'heroicons-react';
import SignUp from './components/Signup';


function App() {
  return (
    <>
    <HomeHOC path="/" exact component={Temp}/>
    <HomeHOC path="/home/:type" exact component={Master}/>
    <RestaurantHOC path="/food/:type" exact component={MasterRes}/>
    <SignupApi>
      <Login/>
      <SignUp/>
    </SignupApi>
    </>
  )
}

export default App;