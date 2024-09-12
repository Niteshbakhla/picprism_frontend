import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const       Navbar = () => {
            const { pathname } = useLocation();
            return (
                        <header className={`${["/user-auth", "/home", "/seller/dashboard"].includes(pathname) && "hidden"} sticky top-0 x-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground`}>
                                    <Link to="#" className="flex items-center gap-2 font-semibold">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l.4 2M7 7h10l1.4 3.6M17 7h2l1 5v9H4v-9l1-5m0 0L5 5M12 10v4m-4 0v4m8-4v4m-6 4h4" />
                                                </svg>
                                                <span className="text-white">Acme Seller Dashboard</span>
                                    </Link>
                                    <nav className="ml-auto flex gap-4 lg:flex items-center lg:gap-6">
                                                <Link to="#home" className="text-sm text-white font-medium lg:hover:text-accent px-2 rounded-full">
                                                            Home
                                                </Link>
                                                <Link to="#featured" className="text-sm text-white font-medium lg:hover:text-accent px-2 rounded-full">
                                                            Featured
                                                </Link>
                                                <Link to="#about" className="text-sm text-white font-medium lg:hover:text-accent px-2 rounded-full">
                                                            About
                                                </Link>
                                                <Link to="#contact" className="text-sm text-white font-medium lg:hover:text-accent px-2 rounded-full">
                                                            Contact
                                                </Link>
                                    </nav>
                        </header>
            );
};

export default Navbar;
