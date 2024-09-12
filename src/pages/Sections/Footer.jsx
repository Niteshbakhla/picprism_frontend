import React from 'react'

const Footer = () => {
            return (
                        <footer className="w-[95%] m-auto mt-8 mb-8 rounded-xl bg-secondary text-white py-8">
                                    <div className="container px-4 md:px-6">
                                                <div className="flex flex-col items-center">
                                                            <p className="text-sm">
                                                                        &copy; 2024 Picture Perfect. All rights reserved.
                                                            </p>
                                                            <div className="flex space-x-4 mt-2">
                                                                        <a href="#" className="text-primary hover:bg-white hover:text-black lg:px-2 lg:rounded-lg transition-all">Privacy Policy</a>
                                                                        <a href="#" className="text-primary hover:bg-white hover:text-black lg:px-2 lg:rounded-lg transition-all">Terms of Service</a>
                                                                        <a href="#" className="text-primary hover:bg-white hover:text-black lg:px-2 lg:rounded-lg transition-all">Contact</a>
                                                            </div>
                                                </div>
                                    </div>
                        </footer>
            )
}

export default Footer