import React from 'react'


const Images = [
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/6/18384116/88b5656ff0190728dcb2eb606bffc6f0.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
]

export const Photo = () => {
    return (
        <div className="bg-white rounded-md flex flex-wrap justify-evenly pb-6">
            {
              Images.map((image) => (
                <div className='w-1/5 m-1 md:m-4 rounded-md shadow-md border border-gray-300'>
                  <img
                    src={image}
                    alt="Burger"
                    className="w-full h-full rounded-md"
                  />
                </div>
              ))
            }
        </div>
      )
}


const Photos = () => {
    return (
        <div className="hidden md:block lg:px-32">
            <Photo/>
        </div>
    )
}

export default Photos