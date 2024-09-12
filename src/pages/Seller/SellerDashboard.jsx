import React, { useState } from 'react';
import SellerUpload from './SellerSideBar';
import SellerUploadsProduct from './SellerUploadsProduct';
import SellerProducts from './SellerProducts';
import { SidebarWithBurgerMenu } from '../../components/Homes/SidebarWithBurger';
import Order from '../Order';
import Analytics from '../Analytics';

const SellerDashboard = () => {
            const [sidebarText, setSideBarText] = useState(localStorage.getItem("sideText") || "Add New Product");
            const renderContent = () => {
                        switch (sidebarText) {
                                    case "Uploaded":
                                                return <SellerProducts />;
                                    case "Add New Product":
                                                return <SellerUploadsProduct />;
                                    case "Orders":
                                                return <Order />;
                                    case "Analytics":
                                                return <Analytics />;
                                    default:
                                                return <SellerUploadsProduct />;
                        }
            };

            console.log(sidebarText)
            return (
                        <div className='flex flex-col lg:flex-row min-h-screen bg-gray-100'>
                                    <SidebarWithBurgerMenu setSideBarText={setSideBarText} />
                                    {/* Sidebar */}
                                    <aside className='w-72 flex bg-gray-100 border-r border-gray-200 p-4'>
                                                <SellerUpload sidebarText={sidebarText} setSideBarText={setSideBarText} />
                                    </aside>

                                    {/* Main content */}
                                    <main className='flex-1 p-6'>
                                                {renderContent()}
                                    </main>
                        </div>
            );
};

export default SellerDashboard;
