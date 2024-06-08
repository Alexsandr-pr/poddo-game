import Layout from 'pages/Layout/Layout';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import  { authRoutes, publicRoutes }  from '../../route'

const AppRouter = () => {

    const isAuth = false;

    return (
        <Routes>
            <Route  path="/" element={<Layout />}>
                {
                    isAuth &&
                    authRoutes.map((item) => {
                        return (
                            <Route key={item.path} path={item.path}  element={<item.Component/>} exact/>
                        )
                    })
                }
                {
                    publicRoutes.map((item) => {
                        return (
                            <Route key={item.path} path={item.path}  element={<item.Component/>} exact/>
                        )
                    })
                }
            </Route>
        </Routes>
        
    )
}

export default AppRouter