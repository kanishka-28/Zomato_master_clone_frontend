import React  from 'react'
import {Route} from "react-router-dom"
import RestaurantLayout from '../layout/Restaurant.layout';

const RestaurantHOC = ({component: Component, ...rest }) => {
    return (
        <>
        <Route
            {...rest}
            component={(props)=>(
                // restaurant layout is wrapping up the component having rest 
            <RestaurantLayout>           
                <Component {...rest}/>
            </RestaurantLayout>
        )
    } 
    />
    </>
    )
}

export default RestaurantHOC;