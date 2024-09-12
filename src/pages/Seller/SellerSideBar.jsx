import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function SellerUpload({ sidebarText, setSideBarText }) {

            const role = useSelector(state => state.auth.role);

            const sendText = (e) => {
                        localStorage.setItem("sideText", e.target.innerText);
                        setSideBarText(e.target.innerText);
            }

            return (
                        <div className="lg:flex justify-center hidden   w-full items-start lg:items-center p-4 ">

                                    <main className="w-full h-full lg:h-[80vh] max-w-4xl lg:w-[100%] ">
                                                <div className="rounded-lg p-4 border border-black lg:h-full">
                                                            <h2 className="text-lg font-semibold mb-4">Manage Products</h2>
                                                            <div className="space-y-4 flex flex-col gap-2 lg:flex-col lg:space-y-0 lg:space-x-4">
                                                                        <Link
                                                                                    href="#"
                                                                                    className={`flex items-center gap-2 lg:px-6   border lg:border-none  hover:text-primary hover:bg-black hover:rounded-md transition-all p-2 ${sidebarText === "Uploaded" && "bg-black text-white rounded-md"
                                                                                                }`}
                                                                                    onClick={sendText}
                                                                        >
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                className="h-4 w-4 hidden lg:block"
                                                                                    >
                                                                                                <path d="m7.5 4.27 9 5.15" />
                                                                                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                                                                                                <path d="m3.3 7 8.7 5 8.7-5" />
                                                                                                <path d="M12 22V12" />
                                                                                    </svg>
                                                                                    <span>Uploaded</span>
                                                                        </Link>
                                                                        <Link
                                                                                    href="#"
                                                                                    className={`flex items-center gap-2  border lg:border-none  hover:text-primary hover:bg-black hover:rounded-md transition-all p-2 ${sidebarText === "Add New Product" && "bg-black text-white rounded-md"
                                                                                                }`}
                                                                                    onClick={sendText}
                                                                        >
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                className="h-4 w-4 hidden lg:block"
                                                                                    >
                                                                                                <path d="M5 12h14" />
                                                                                                <path d="M12 5v14" />
                                                                                    </svg>
                                                                                    <span>Add New Product</span>
                                                                        </Link>
                                                                        <Link
                                                                                    href="#"
                                                                                    className={`flex items-center gap-2 mb-4 border lg:border-none hover:text-primary hover:bg-black hover:rounded-md transition-all p-2 ${sidebarText === "Analytics" && "bg-black text-white rounded-md"
                                                                                                }`}
                                                                                    onClick={sendText}
                                                                        >
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                className="h-4 w-4 hidden lg:block"
                                                                                    >
                                                                                                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                                                                                                <path d="M15 18H9" />
                                                                                                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
                                                                                                <circle cx="17" cy="18" r="2" />
                                                                                                <circle cx="7" cy="18" r="2" />
                                                                                    </svg>
                                                                                    <span>Analytics</span>
                                                                        </Link>
                                                                        <Link
                                                                                    href="#"
                                                                                    className={`flex items-center gap-2 border lg:border-none hover:text-primary hover:bg-black hover:rounded-md transition-all p-2 ${sidebarText === "Orders" && "bg-black text-white rounded-md"
                                                                                                }`}
                                                                                    onClick={sendText}
                                                                        >
                                                                                    <svg
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                                width="24"
                                                                                                height="24"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                stroke="currentColor"
                                                                                                strokeWidth="2"
                                                                                                strokeLinecap="round"
                                                                                                strokeLinejoin="round"
                                                                                                className="h-4 w-4 hidden lg:block"
                                                                                    >
                                                                                                <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                                                                                                <path d="M6 18h12" />
                                                                                                <path d="M6 14h12" />
                                                                                                <rect width="12" height="12" x="6" y="10" />
                                                                                    </svg>
                                                                                    <span>Orders</span>
                                                                        </Link>
                                                            </div>
                                                </div>
                                    </main>
                        </div>
            );
}
