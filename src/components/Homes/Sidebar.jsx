import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {

            const [sideHover, setSideHover] = useState(false);
            const navigate = useNavigate()
            return (
                        <div onMouseEnter={() => setSideHover(true)}
                                    onMouseLeave={() => setSideHover(false)} className={`fixed inset-y-0 left-2 z-10 top-16 transition-all hidden overflow-hidden w-16 flex-col border-r sm:flex rounded-full   ${sideHover ? "cursor-pointer " : " w-16 h-16  "} `}>
                                    <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 ">
                                                <Link
                                                            href="#"
                                                            className="group flex h-9 w-9  shrink-0 items-center justify-center gap-2 rounded-full  bg-black text-lg font-semibold text-white md:h-8 md:w-8 md:text-base"
                                                            prefetch={false}
                                                >
                                                            <Package2Icon className="h-4 w-4 transition-all group-hover:scale-110" />
                                                            <span className="sr-only">StockSnap</span>
                                                </Link>

                                                {/* Home */}
                                                <div className="relative group">
                                                            <Link
                                                                        href="#"
                                                                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-300 text-gray-700 transition-colors hover:text-gray-900 md:h-8 md:w-8"
                                                                        prefetch={false}
                                                            >
                                                                        <LayoutGridIcon className="h-5 w-5" />
                                                                        <span className="sr-only">Home</span>
                                                            </Link>
                                                            <div className="absolute left-full ml-2 hidden w-auto p-2 text-sm text-white bg-gray-800 rounded-md group-hover:block">
                                                                        Home
                                                            </div>
                                                </div>

                                                {/* Search */}
                                                <div className="relative group">
                                                            <Link
                                                                        href="#"
                                                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-900 md:h-8 md:w-8"
                                                                        prefetch={false}
                                                            >
                                                                        <SearchIcon className="h-5 w-5" />
                                                                        <span className="sr-only">Search</span>
                                                            </Link>
                                                            <div className="absolute left-full ml-2 hidden w-auto p-2 text-sm text-white bg-gray-800 rounded-md group-hover:block">
                                                                        Search
                                                            </div>
                                                </div>

                                                {/* Upload */}
                                                <div className="relative group">
                                                            <Link
                                                                        onClick={() => navigate("/")}
                                                                        href="#"
                                                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-900 md:h-8 md:w-8"
                                                                        prefetch={false}
                                                            >
                                                                        <UploadIcon className="h-5 w-5" />
                                                                        <span className="sr-only">Upload</span>
                                                            </Link>
                                                            <div className="absolute left-full ml-2 hidden w-auto p-2 text-sm text-white bg-gray-800 rounded-md group-hover:block">
                                                                        Upload
                                                            </div>
                                                </div>

                                                {/* Profile */}
                                                <div className="relative group">
                                                            <Link
                                                                        href="#"
                                                                        className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-900 md:h-8 md:w-8"
                                                                        prefetch={false}
                                                            >
                                                                        <UserIcon className="h-5 w-5" />
                                                                        <span className="sr-only">Profile</span>
                                                            </Link>
                                                            <div className="absolute left-full ml-2 hidden w-auto p-2 text-sm text-white bg-gray-800 rounded-md group-hover:block">
                                                                        Profile
                                                            </div>
                                                </div>
                                    </nav>
                        </div>

            )
}

function Package2Icon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/1600/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                        >
                                    <path d="M16.5 9.4 7.55 4.24" />
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73L13 2.27a2 2 0 0 0-2 0L4 6.27A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l8 4.63a2 2 0 0 0 2 0l8-4.63A2 2 0 0 0 21 16z" />
                                    <polyline points="3.29 7 12 12 16.71 7" />
                                    <line x1="12" x2="12" y1="22" y2="12" />
                        </svg>
            )
}


function DownloadIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/1600/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                        >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                        </svg>
            )
}

function LayoutGridIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/1600/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                        >
                                    <rect width="7" height="7" x="3" y="3" rx="1" />
                                    <rect width="7" height="7" x="14" y="3" rx="1" />
                                    <rect width="7" height="7" x="14" y="14" rx="1" />
                                    <rect width="7" height="7" x="3" y="14" rx="1" />
                        </svg>
            )
}


function SearchIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/1600/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                        >
                                    <circle cx="11" cy="11" r="8" />
                                    <line x1="21" x2="16.65" y1="21" y2="16.65" />
                        </svg>
            )
}

function UploadIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/1600/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                        >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="17 8 12 3 7 8" />
                                    <line x1="12" x2="12" y1="3" y2="15" />
                        </svg>
            )
}

function UserIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/1600/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                        >
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                        </svg>
            )
}

export default Sidebar