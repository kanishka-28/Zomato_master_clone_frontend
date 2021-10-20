import React from 'react'
import { Route} from "react-router-dom"
import HomeLayout from '../layout/Home.layout'

const HomeHOC = ({component: Component, ...rest }) => {
    return (
        <>
        <Route
            {...rest}
            component={(props)=>(
                // home layout is wrapping up the component having rest 
            <HomeLayout>           
                <Component {...rest}/>
            </HomeLayout>
        )
    } 
    />
    </>
    )
}

export default HomeHOC;