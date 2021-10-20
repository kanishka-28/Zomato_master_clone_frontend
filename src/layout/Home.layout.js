import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
//Components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

import { getRestaurant } from "../Redux/Reducer/Restaurant/Restaurant.action";
import SignupApi from "../ContextApi";


const HomeLayout = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, [])

  return <>
   <div className="container mx-auto lg:px-20">
   <SignupApi>
   <Navbar />  
   </SignupApi>           {/* header */}
   <div className="z-40"><FoodTab/></div>  
   <div className="z-30">{props.children}</div>    {/* middle component */}
   </div><br/><br/><br/>          
  </>
};

export default HomeLayout;