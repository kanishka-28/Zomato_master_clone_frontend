import React from "react";
import { useParams } from "react-router-dom";

//Components
import Delivery from "../Delivery/index";
import DiningOut from "../DiningOut/index";
import NightLife from "../NightLife";

const Master = () => {
  const { type } = useParams();

  return (<>
    <div className="m-4">
    {type === "delivery" && <Delivery /> }
    {type === "nightlife" && <NightLife /> }
    {type === "dining" && <DiningOut /> }
    </div>
    </>);
};

export default Master;