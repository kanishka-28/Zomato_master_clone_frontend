import React from "react";
import { useParams } from "react-router-dom";

//Components
import Menu from "../AllInOneTab/menu/index"
import Overview from "../AllInOneTab/overview/index"
import Order from "../AllInOneTab/order/index"
import Reviews from "../AllInOneTab/reviews/index"
import Photos from "../AllInOneTab/photos/index"

const MasterRes = () => {
  const { type } = useParams();

  return (<>
    <div className="m-4">
    {type === "overview" && <Overview /> }
    {type === "menu" && <Menu /> }
    {type === "order" && <Order /> }
    {type === "reviews" && <Reviews /> }
    {type === "photos" && <Photos /> }
    </div>
    </>);
};

export default MasterRes;