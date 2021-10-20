import React from 'react'
// import { useSelector } from 'react-redux';
import Brands from '../Brands';
import AllCards from '../Cards';
import DeliveryCarousal from './DeliveryCarousal';


const Delivery = () => {

  // const [restaurantList, setRestaurantList] = useState([]);

  // const reduxState = useSelector(
  //   (globalStore) => globalStore.restaurant.restaurants
  // );

  // useEffect(() => {
  //   setRestaurantList(reduxState.restaurants)
  // }, [reduxState.restaurants])

    return (
        <div className="lg:px-32">
          <DeliveryCarousal/>
          <Brands/>
          <AllCards/> 
        </div>
    )
}

export default Delivery;
