import React from 'react'
import Brands from '../Brands';
import AllCards from '../Cards';
import DeliveryCarousal from './DeliveryCarousal';

const Delivery = () => {
    return (
        <div>
          <DeliveryCarousal/>
          <Brands/>
          <AllCards/>  
        </div>
    )
}

export default Delivery;
