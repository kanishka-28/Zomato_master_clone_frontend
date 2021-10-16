import React from "react";
import FoodTab from "../components/FoodTab";

//Components
import Navbar from "../components/Navbar";

const HomeLayout = (props) => {
  return <>
   <div className="container mx-auto lg:px-20">
   <Navbar />           {/* header */}
    <div className="z-30">{props.children}</div>    {/* middle component */}
   </div><br/><br/><br/>      
   <div className="sticky z-40"><FoodTab/></div>          
  </>
};

export default HomeLayout;