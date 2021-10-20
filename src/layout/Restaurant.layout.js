import React from 'react'

//Components
import Navbar from "../components/Navbar";
import RestaurantTab from '../components/RestaurantTab';
import ParticularFood from '../components/ParticularFood/index';
import SignupApi from '../ContextApi';

const RestaurantLayout = (props) => {
    return( <>
    <div className="container mx-auto lg:px-10">
    <SignupApi>
   <Navbar />  
   </SignupApi>
    <ParticularFood/>
    <RestaurantTab className=""/>
    <div>{props.children}</div>
    </div>  
   </>
    )
}

export default RestaurantLayout;
