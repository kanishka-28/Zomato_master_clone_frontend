import React from 'react'
import {RiStarLine, RiShareForwardLine, RiBookmark3Line, RiDirectionLine} from "react-icons/ri" 
import {HiOutlineInformationCircle} from "react-icons/hi"
import { MobOrder } from '../AllInOneTab/order';
import {Photo} from '../AllInOneTab/photos';

const imgSrc = "https://b.zmtcdn.com/data/reviews_photos/8ce/9366c2dbc68a6671933ae204f53bc8ce_1577727829.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*";
const sm1="https://b.zmtcdn.com/data/reviews_photos/e6c/471ebefbd9bf99017038856deb4a2e6c_1556599414.jpg?fit=around|300:273&crop=300:273;*,*"

    const MobileFoodDetails = () => {
        return (
            <div>
                <div>
                    <img src={imgSrc} className="" alt="bigImage"/>
                </div>
                <div className="m-2 flex justify-between">
                        <div className="text-gray-500 text-sm flex justify-between">
                            <div className="w-8 h-6 text-white rounded-md bg-gray-400 text-center items-center mt-4">-✴</div>
                            <div className="mr-6">
                                <div className="text-black mx-2 font-semibold">0</div>
                                <div className="border-gray-400 border-b-2 border-dashed mx-2 ">dining reviews</div>
                            </div>
                            <div className="w-12 h-6 text-white rounded-md bg-green-600 font-bold text-center mt-4">3.2 ✡</div>
                            <div>
                                <div className="text-black mx-2 font-semibold">9000</div>
                                <div className="border-gray-400 border-b-2 border-dashed mx-2 ">delivery reviews</div>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-2xl m-2 font-semibold">Choco Cake</h1>
                    <div className="mx-2 font-light text-sm mb-3">
                        <h1>Fast Food, Pizza</h1>
                        <h2 className="text-gray-500 my-0.5">Bhawar Kuan, Indore</h2>
                        <p className="text-gray-600 my-0.5 flex gap-1 items-center"><h1>11am – 11pm (Today)</h1><HiOutlineInformationCircle className="pt-0.5 w-5 h-5 text-gray-400"/></p>
                    </div>
                    <MobOrder/>
                    <h1 className="m-2 font-light text-xl font-semibold">Choco Cake Photos</h1>
                    <Photo/>
            </div>
        )
    }
    
    
    const LaptopFoodDetails = () => {
        return (
            <>
                <div className="w-full flex justify-center">
                    <div className="w-4/5 ">
                    <div className="m-4 flex items-center w-full  ">
                        <div className="w-10/12 overflow-hidden  ">
                            <img src={imgSrc} className="w-full h-full duration-1000 transform hover:scale-110" alt="bigImage"/>

                        </div>
                        <div className="m-1 w-1/2 ">
                            <div className=" flex my-1  w-full gap-2">
                                <div className=" w-1/2  overflow-hidden ">
                                    <img src={sm1} className="w-fullh-full duration-1000 transform hover:scale-110" alt="smallImage"/>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={sm1} className="w-full h-full  duration-1000 transform hover:scale-110" alt="smallImage"/>
                                </div>
                            </div>
                            <div className=" flex my-1 w-full gap-2">
                                <div className=" w-1/2  overflow-hidden ">
                                    <img src={sm1} className="w-fullh-full duration-1000 transform hover:scale-110" alt="smallImage"/>
                                </div>
                                <div className="w-1/2 overflow-hidden">
                                    <img src={sm1} className="w-full h-full  duration-1000 transform hover:scale-110" alt="smallImage"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4 flex justify-between">
                        <h1 className="text-4xl font-semibold">HBT Bakery</h1>
                        <div className="text-gray-500 text-sm flex justify-between">
                            <div className="w-8 h-7 text-white rounded-md bg-gray-500 text-center items-center p-1 mt-2">-✴</div>
                            <div className="mr-6">
                                <div className="text-black mx-2 font-semibold">0</div>
                                <div className="border-gray-400 border-b-2 border-dashed mx-2 ">dining reviews</div>
                            </div>
                            <div className="w-12 h-7 flex text-white rounded-md bg-green-600 font-bold justify-center items-center  mt-2">3.2 ✡</div>
                            <div>
                                <div className="text-black mx-2 font-semibold">9000</div>
                                <div className="border-gray-400 border-b-2 border-dashed mx-2 ">delivery reviews</div>
                            </div>
                        </div>
                    </div>
                    <div className="m-4 font-light">
                        <h1>Bakery</h1>
                        <h2 className="text-gray-500">Maharana Pratap Nagar, Bhopal</h2>
                        <p className="text-gray-600 my-0.5 flex gap-1 items-center"><h1>11am – 11pm (Today)</h1><HiOutlineInformationCircle className="pt-0.5 w-5 h-5 text-gray-400"/></p>
                    </div>
                    <div className="flex">
                        <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-red-500 text-white flex justify-center items-center gap-2"><RiStarLine/><p> Direction</p></div>
                        <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2"><RiDirectionLine/><p className="text-gray-500"> Add Review</p></div>
                        <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2"><RiBookmark3Line/><p className="text-gray-500"> Bookmark</p></div>
                        <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500 flex justify-center items-center gap-2"><RiShareForwardLine className="w-5 h-5"/> <p className="text-gray-500">Share</p></div>
                    </div>
                    </div>
                </div>
            </>
        )
    }
    
    const particularFoodDetails = () => {
        return (
        <>
           <div className="md:hidden">
                <MobileFoodDetails/>
            </div>
            <div className="hidden md:block">
                <LaptopFoodDetails/>
            </div>
           
        </>
        )
    }
    
   


export default particularFoodDetails