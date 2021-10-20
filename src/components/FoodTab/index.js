import React, {useState} from "react";
import { GiScooter, GiKnifeFork, GiWineBottle } from "react-icons/gi";
import { IoFootsteps } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { BsHandbag } from "react-icons/bs";
import { IoMdBeer } from "react-icons/io";
const MobileTab = () => {
    const { type } = useParams();

    const [allTypes] = useState([
        {
            id: `delivery`,
            icon: <BsHandbag/>,
            name: "Delivery",
            isActive: false
        },
        {
            id: `nightlife`,
            icon: <IoMdBeer/>,
            name: "Nightlife",
            isActive: false

        },
        {
            id: `dining`,
            icon: <IoFootsteps/>,
            name: "Dining Out",
            isActive: false

        }
    ]);
    
    return (
        <div className="md:hidden bg-white border pb-3 flex fixed justify-between bottom-0 z-30 w-full text-gray-500">
            {
                allTypes.map((item) => {
                    return (
                        <Link to={`/home/${item.id}`} >
                            <div className={
                                type===item.id ? "flex flex-col items-center text-xl pt-3 text-zomato-400 border-t-2 border-zomato-400 " : "flex flex-col items-center text-xl pt-3"
                            } >
                                {item.icon}
                                <h5>{item.name}</h5>
                            </div>
                        </Link>
                       
                    )

                }
                )
            }


            </div>
        )
};

const MdTab= ()=>{

    const { type } = useParams();

    const [allTypes] = useState([
        {
            id: `delivery`,
            icon: <GiScooter className="w-8 h-8"/>,
            name: "Delivery",
            isActive: false
        },
        {
            id: `nightlife`,
            icon: <GiWineBottle className="w-8 h-8"/>,
            name: "Nightlife",
            isActive: false

        },
        {
            id: `dining`,
            icon: <GiKnifeFork className="w-8 h-8"/>,
            name: "Dining Out",
            isActive: false

        }
    ]);
    
    return (
        <div className="hidden md:flex bg-white border-b px-36 pt-3 flex items-start gap-16  z-10 w-full text-gray-500">
            {
                allTypes.map((item) => {
                    return (
                        <Link to={`/home/${item.id}`}>
                        
                        <div className={
                            type===item.id? "flex gap-4 pt-4 pb-2 items-center text-xl text-zomato-400 border-b-2 border-zomato-400" : "flex gap-4 pt-4 pb-2  items-center text-xl"
                        } >
                            <span className={item.isActive?"bg-blue-100 rounded-full p-2":"bg-white p-2"}>

                            {item.icon}
                            </span>
                            <h5>{item.name}</h5>
                        </div>
                        </Link>
                    )

                }
                )
            }


            </div>
        )

};

export default function FoodTab() {
    return (
        <>
            <div>
                <MobileTab />
                <MdTab/>
            </div>
            {/* <div className=" w-full py-4 px-2 flex gap-4 border-b-2 border-gray100">
              <a className="flex gap-2 items-center  text-gray-500 text-lg" href="#"> <span> <MdOutlineDeliveryDining/> </span>Delivery</a>
              <a className="flex gap-2 items-center text-gray-500 text-lg" href="#">Dining Out</a>
              <a className="flex gap-2 items-center text-gray-500 text-lg" href="#">Nightlife</a>
        </div>   */}
        </>
    )
}

//master_url:type

//delivery, dining , nightlife -> type