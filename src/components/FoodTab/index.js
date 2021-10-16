import React, {useState, useEffect} from "react";
import { GiScooter, GiKnifeFork, GiWineBottle } from "react-icons/gi";
import { IoFootsteps } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";


const MobileTab = () => {

const [allTypes, setAllTypes] = useState([
  {
    id: "delivery",
    icon: <BsHandbag />,
    name: "Delivery",
    isActive: false
  },
  {
    id: "night",
    icon: <GiWineBottle />,
    name: "Night Life",
    isActive: false
  },
  {
    id: "dining",
    icon: <IoFootsteps />,
    name: "Dining Out",
    isActive: false
  }
]);
  const {type} = useParams();


  return (
      <>
        <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };


const LaptopTab = () => {

const [allTypes, setAllTypes] = useState([
  {
    id: "delivery",
    icon: <GiScooter />,
    name: "Delivery",
    isActive: false
  },
  {
    id: "night",
    icon: <GiWineBottle />,
    name: "Night Life",
    isActive: false
  },
  {
    id: "dining",
    icon: <GiKnifeFork />,
    name: "Dining Out",
    isActive: false
  }
]);
  const {type} = useParams();


  return (
      <>
        <div className="sm:hidden md:block bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly text-gray-500 border">
          {allTypes.map((items) => (
            <Link to={`/${items.id}`}>
              <div
                className={
                  type === items.id
                    ? "flex flex-col relative items-center text-xl text-zomato-400 "
                    : "flex flex-col items-center text-xl "
                }
              >
                <div
                  className={
                    type === items.id &&
                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                  }
                />
                {items.icon}
                <h5 className="text-sm">{items.name}</h5>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };


const FoodTab = () => {
  return (
  <>
  <div>
    <MobileTab />
    {/* <LaptopTab/> */}
  </div>
  </>
  );
};

export default FoodTab;