import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbarSection/Navbar'

const LayputPage : React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default LayputPage