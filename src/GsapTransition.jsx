import React, { useEffect, useRef } from 'react'
import LoginPage from './pages/Login'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import SellerDashboard from './pages/Seller/SellerDashboard'
import { useSelector } from 'react-redux'
import { Route, Routes, useLocation } from 'react-router-dom'
import BuyerDashboard from './pages/BuyerDashboard/BuyerDashboard'
import gsap from "gsap"
import Purchased from './pages/BuyerDashboard/Purchased'
import Order from './pages/Order'
import Favourite from './pages/BuyerDashboard/Favourite'
import PaymentSuccess from './pages/PaymentSuccess'
import CancelPaymentPage from './pages/CancelPayment'
import Navbar from './components/Navbar'

const GsapTransition = () => {
            const role = useSelector(state => state.auth.role)
            const nodeRef = useRef(null)
            const location = useLocation()


            useEffect(() => {
                        if (nodeRef.current) {
                                    gsap.fromTo("#target", { opacity: 0, scale: 0.8 }, { opacity: 1, duration: 0.1, scale: 1, })
                        }
            }, [location])

            return (
                        <div ref={nodeRef} id='target' >

                                    <Routes location={location}>
                                                <Route path='/' element={<LandingPage />} />
                                                <Route path='/home' element={<Home />} />
                                                <Route path='/user-Auth' element={<LoginPage />} />
                                                <Route path={`/${role}/dashboard`} element={role === "Seller" || "seller" ? <SellerDashboard /> : <BuyerDashboard />} />
                                                <Route path='/your/favourite' element={<Favourite />} />
                                                <Route path='/success' element={<PaymentSuccess />} />
                                                <Route path='/cancel' element={<CancelPaymentPage />} />
                                                <Route path='/your/order' element={<Order />} />

                                    </Routes>
                        </div>
            )
}

export default GsapTransition