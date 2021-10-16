import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";
//Component
import {NextArrow, PrevArrow} from "./Arrows.component";


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MobileDelivery = () => {
  return (
    <div className="bg-white rounded-md shadow">
      <div className='w-24 h-24'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
          alt="Burger"
          className="w-full h-full rounded-md"
        />
      </div>
      <div>
        <h3 className="my-1 text-base font-small font-dark text-center text-gray-600">Burger</h3>
      </div>
    </div>
  )
}

const LaptopDelivery = () => {
  
  const settingsLg = {
    arrows: true,
    // autoplay: true,
    // centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }
  const images = [
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
    "https://b.zmtcdn.com/data/o2_assets/9694b563c793ea7bddf49f619dd4b7751632716697.png",
  ]
  return (
    <>

  <div className="hidden lg:block">
  <Slider {...settingsLg}>
  {/* {
    images.map((image) => (
      <div className='w-44 h-44 bg-red-500'>
        <img
          src={image}
          alt="Burger"
          className="w-full h-full rounded-md"
        />
      </div>
    ))
  } */}
 <div className='w-44 h-44'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
          alt="Burger"
          className="w-full h-full rounded-md"
        />
    </div>
 <div className='w-44 h-44'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
          alt="Burger"
          className="w-full h-full rounded-md"
        />
    </div>
 <div className='w-44 h-44'>
        <img
          src="https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png"
          alt="Burger"
          className="w-full h-full rounded-md"
        />
    </div>
  </Slider>
  </div>
    </>

  )
}
const DeliveryFoodCategory = () => {
  return (
    <>
      <div className="md:hidden"><MobileDelivery /></div>
      <div className="hidden md:block"><LaptopDelivery /></div>
      <div className="hidden md:block"><LaptopDelivery /></div>
    </>
  );
};

export default DeliveryFoodCategory;