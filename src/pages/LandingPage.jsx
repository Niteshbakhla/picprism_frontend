import React, { useEffect } from 'react'
import Main from '../pages/Sections/Main'
import About from "../pages/Sections/About"
import Features from "../pages/Sections/Features"
import Contact from "../pages/Sections/Contact"
import Footer from "../pages/Sections/Footer"

const LandingPage = () => {

            return (
                        <main className='flex-1 '>
                                    <Main />
                                    <Features />
                                    <About />
                                    <Contact />
                                    <Footer />
                        </main>
            )
}

export default LandingPage