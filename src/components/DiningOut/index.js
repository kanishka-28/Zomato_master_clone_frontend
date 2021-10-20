import React from 'react'
import DineInCarousel from '../Carousal/DiningCarousal'
import Cards from '../Cards/index'


const DiningOut = () => {
    return (
        <div className="lg:px-20">
           <DineInCarousel/>
           <h1 className="text-2xl font-semibold m-2 mt-8 ml-8" >Dine-Out Restaurants</h1>
            <Cards/>
        </div>
    )
}

export default DiningOut