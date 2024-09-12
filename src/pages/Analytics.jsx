import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import toast from 'react-hot-toast';


const Analytics = () => {
            const [tillNow, setTillNow] = useState([]);
            const [thisYear, setThisYear] = useState([]);
            const [thisMonth, setThisMonth] = useState([]);
            const [thisWeek, setThisWeek] = useState([]);
            const [postData, setPostData] = useState([])

            const { pathname } = useLocation();

            // useEffect(() => {
            //             const getPost = () => {
            //                         try {
            //                                     axios.get("https://pic-backend.onrender.com/api/post/getPostByDateRange", {
            //                                                 headers: {
            //                                                             Authorization: `Bearer ${localStorage.getItem("accessToken")}`
            //                                                 }
            //                                     })
            //                                                 .then(data => console.log(data))
            //                                                 .catch(error => console.log(error))

            //                                     // setTillNow(data.tillNow);
            //                                     // setThisYear(data.thisYear);
            //                                     // setThisMonth(data.thisMonth);
            //                                     // setThisWeek(data.thisWeek);


            //                         } catch (error) {
            //                                     console.log(error)
            //                         }
            //             }
            //             getPost()
            // }, [])



            const getPostByDateRange = async () => {
                        try {
                                    const res = await axios.get("https://pic-backend.onrender.com/api/post/getPostByDateRange", {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                },
                                    });
                                    const { data } = res.data;

                                    setTillNow(data.tillNow);
                                    setThisYear(data.thisYear);
                                    setThisMonth(data.thisMonth);
                                    setThisWeek(data.thisWeek);
                        } catch (error) {
                                    console.log(error.message);
                                    return toast.error(error.response.data.message)

                        }
            };

            useEffect(() => {
                        getPostByDateRange();

            }, []);

            const calculateTotalForSeller = (data) => data.reduce((acc, curr) => acc + (curr.price || 0), 0);
            const calculateTotalForBuyer = (data) => data.reduce((acc, curr) => acc + curr.price, 0);

            const renderChart = (data, title) => {

                        return data.length > 0 ? (
                                    <ResponsiveContainer width="100%" height={250}>
                                                <LineChart margin={{ top: 10, bottom: 10, left: 0 }} data={data}>
                                                            <XAxis dataKey="title" hide />
                                                            <YAxis />
                                                            <Tooltip />
                                                            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                                                </LineChart>
                                    </ResponsiveContainer>
                        ) : (
                                    <div className="flex items-center justify-center h-full">
                                                <p className="text-center text-lg">No data available</p>
                                    </div>
                        );
            };

            return (
                        <div className='w-full min-h-screen'>
                                    <div className='w-full max-w-6xl m-auto rounded-2xl shadow-xl p-4'>
                                                <h1 className='text-center text-2xl lg:text-3xl'>Analytics</h1>
                                                <h2 className='text-center mb-4'>{pathname === "/seller/analytics/profile" ? "Uploaded" : "Purchased"} This Year</h2>
                                                {renderChart(thisYear, "This Year")}
                                                <p className='text-center mt-2'><span className='font-medium'>Total Earned</span>: ₹{calculateTotalForSeller(thisYear) || "₹0"}</p>
                                    </div>

                                    <div className='flex flex-col gap-8 lg:flex-row w-full max-w-5xl m-auto mt-8'>
                                                <div className='w-full lg:w-1/3 px-2'>
                                                            <h1 className='text-center text-2xl lg:text-3xl'>This Week</h1>
                                                            {renderChart(thisWeek, "This Week")}

                                                </div>

                                                <div className='w-full lg:w-1/3 px-2'>
                                                            <h1 className='text-center text-2xl lg:text-3xl'>This Month</h1>
                                                            {renderChart(thisMonth, "This Month")}

                                                </div>

                                                <div className='w-full lg:w-1/3 px-2'>
                                                            <h1 className='text-center text-2xl lg:text-3xl'>Till Now</h1>
                                                            {renderChart(tillNow, "Till Now")}

                                                </div>
                                    </div>
                        </div>
            );
};

export default Analytics;
