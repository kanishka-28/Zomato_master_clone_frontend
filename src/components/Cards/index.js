import React from 'react'
import FoodCards from './FoodCards';

const AllCards = () => {
    return (
        <div className="flex justify-between">
            <div className="md:hidden">
                <FoodCards />
                <FoodCards />
                <FoodCards />
                <FoodCards />
            </div>
            <div className="hidden md:block">
                <div className="flex flex-wrap justify-between">
                    <div className="w-96 h-96 mb-16"><FoodCards/></div>
                    <div className="w-96 h-96 mb-16"><FoodCards/></div>
                    <div className="w-96 h-96 mb-16"><FoodCards/></div>
                    <div className="w-96 h-96 mb-16"><FoodCards/></div>
                    <div className="w-96 h-96 mb-16"><FoodCards/></div>
                    <div className="w-96 h-96 mb-16"><FoodCards/></div>
                </div>
            </div>
        </div>
    )
}

export default AllCards;
