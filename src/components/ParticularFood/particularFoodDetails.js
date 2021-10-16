import React from 'react'

const particularFoodDetails = () => {
    return (
        <div className="flex justify-center">
            <div className="container w-3/4">
                <div className="m-4 flex">
                    <img src="https://b.zmtcdn.com/data/pictures/9/19227209/1f3b5f252dc37e874e8e96e82e5ed277.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" className="w-2/3 h-2/3 mr-2"/>
                    <div>
                        <div className="flex">
                            <img src="https://b.zmtcdn.com/data/pictures/9/19227209/da93155e3b621000dd24fa992c107a80.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" className="w-52 h-52 m-2" />
                            <img src="https://b.zmtcdn.com/data/pictures/9/19227209/da93155e3b621000dd24fa992c107a80.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" className="w-52 h-52 m-2" />
                        </div>
                        <div className="flex">
                            <img src="https://b.zmtcdn.com/data/pictures/9/19227209/da93155e3b621000dd24fa992c107a80.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" className="w-52 h-52 m-2" />
                            <img src="https://b.zmtcdn.com/data/pictures/9/19227209/da93155e3b621000dd24fa992c107a80.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*" className="w-52 h-52 m-2" />
                        </div>
                    </div>
                </div>
                <div className="m-4 flex justify-between">
                    <h1 className="text-4xl font-semibold">Pizza King</h1>
                    <div className="text-gray-500 text-sm flex justify-between">
                        <div className="w-8 h-8 text-white rounded-md bg-gray-500 text-center items-center p-1 mt-2">-✴</div>
                        <div className="mr-6">
                            <div className="text-black mx-2 font-semibold">0</div>
                            <div className="border-gray-400 border-b-2 border-dashed mx-2 ">dining reviews</div>
                        </div>
                        <div className="w-12 h-8 text-white rounded-md bg-green-600 font-bold text-center p-1 mt-2">3.2 ✡</div>
                        <div>
                            <div className="text-black mx-2 font-semibold">9000</div>
                            <div className="border-gray-400 border-b-2 border-dashed mx-2 ">delivery reviews</div>
                        </div>
                    </div>
                </div>
                <div className="m-4 font-light">
                    <h1>Fast Food, Pizza</h1>
                    <h2 className="text-gray-500">Bhawar Kuan, Indore</h2>
                    <p className="text-gray-600">11am – 11pm (Today)</p>
                </div>
                <div className="flex">
                    <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-red-500 text-white">✡ Add Review</div>
                    <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500">🎯 Direction</div>
                    <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500">🔖 Bookmark</div>
                    <div className=" w-32 h-10 text-center m-1 rounded-lg border-gray-400 border py-1 bg-white text-red-500">🔜 Share</div>
                </div>
            </div>
        </div>
    )
}

export default particularFoodDetails;
