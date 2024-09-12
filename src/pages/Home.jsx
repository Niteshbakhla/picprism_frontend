import { Link } from "react-router-dom";
import Sidebar from "../components/Homes/Sidebar";
import Card from "../components/Card";
import HomeFooter from "../components/Homes/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setAllPosts } from "../store/slice/postSlice";
import { useEffect, useState } from "react";
import axios from "axios";
import CardSkeleton from "../Loader/Loader"; // Ensure this is a skeleton loader component
import { SidebarWithBurgerMenu } from "../components/Homes/SidebarWithBurger";
import Cards from "../components/Cards";
// Ensure this import is correct

export default function Home() {
            const [loader, setLoader] = useState(false);
            const dispatch = useDispatch();
            const posts = useSelector(state => state.post.allPost);
            const num = posts.length || 8

            const getAllImages = async () => {
                        if (posts?.length > 0) return;
                        setLoader(true);
                        try {
                                    const { data } = await axios.get(import.meta.env.VITE_API_URL + "/post/getAll");
                                    dispatch(setAllPosts(data.data));
                        } catch (error) {
                                    console.error('Failed to fetch posts', error);
                        } finally {
                                    setLoader(false);
                        }
            };

            const handleSearch = async (e) => {
                        try {
                                    const search = e.target.value;
                                    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/search?search=${search}`);
                                    const { data } = res.data;
                                    dispatch(setAllPosts(data));
                        } catch (error) {
                                    console.error(error);
                        }
            };

            useEffect(() => {
                        getAllImages();
            }, []);


            return (
                        <div className="flex lg:h-[100vh]  text-gray-900 ">
                                    
                                    {/* <Sidebar /> */}

                                    <SidebarWithBurgerMenu />
                                    <div className=" flex-1   ">
                                                <header className=" py-4 shadow-sm w-full  m-auto rounded-2xl mt-4 ">
                                                            <div className=" flex lg:items-start items-center justify-between  lg:flex-row flex-col gap-8 lg:gap-0 px-4 md:px-6">
                                                                        <Link to="#" className="text-2xl font-bold text-gray-900 lg:ml-12   ">
                                                                                    StockSnap
                                                                        </Link>
                                                                        <div className="relative w-full max-w-md">
                                                                                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                                                                                    <input
                                                                                                onChange={(e) => handleSearch(e)}
                                                                                                type="search"
                                                                                                placeholder="Search for images..."
                                                                                                className="w-full lg:rounded-md border lg:border-gray-300 rounded-full border-black  bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
                                                                                    />
                                                                        </div>
                                                            </div>
                                                </header>

                                                <main className=" mx-auto lg:h-[80%]   lg:px-4 py-8 md:px-6 md:py-12 ">
                                                            <div className="  lg:w-[90%] h-full  m-auto   grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border lg:border-black p-4 rounded-md overflow-scroll">

                                                                        {loader ? (

                                                                                    Array.from({ length: num }).map((_, index) => (
                                                                                                <CardSkeleton key={index} />

                                                                                    ))
                                                                        ) : (
                                                                                    posts?.map((data) => (
                                                                                                <Cards
                                                                                                            image={data.image}
                                                                                                            price={data.price}
                                                                                                            title={data.title}
                                                                                                            author={data.author}
                                                                                                            datas={data}
                                                                                                />
                                                                                    ))
                                                                        )}
                                                            </div>
                                                </main>

                                                <HomeFooter />
                                    </div>
                        </div>
            );
}

function SearchIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/2000/svg"
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


function DownloadIcon(props) {
            return (
                        <svg
                                    {...props}
                                    xmlns="http://www.w3.org/2000/svg"
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