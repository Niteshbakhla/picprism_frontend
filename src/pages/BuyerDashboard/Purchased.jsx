import React, { useEffect } from 'react'
import { setOrders } from '../../store/slice/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMyPosts } from '../../store/slice/postSlice';
import toast, { Toaster } from 'react-hot-toast';
import { SidebarWithBurgerMenu } from '../../components/Homes/SidebarWithBurger';
import Cards from '../../components/Cards';

const Purchased = () => {

            const posts = useSelector((state) => state.post.myPost);

            const dispatch = useDispatch();
            const getMyPosts = async () => {
                        if (posts.length > 0) return;
                        try {
                                    const { data } = await axios.get(import.meta.env.VITE_API_URL + "/post", {
                                                headers: {
                                                            "Authorization": "Bearer " + localStorage.getItem("accessToken")
                                                },
                                    }
                                    )

                                    console.log(data)
                                    dispatch(setMyPosts(data))

                        } catch (error) {
                                    console.log(error)
                        }
            }



            useEffect(() => {
                        getMyPosts()


            }, [])
            return (
                        <>
                                    <SidebarWithBurgerMenu />
                                    <div className='grid grid-cols-1 lg:w-[90%] m-auto  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-black p-4 rounded-md'>
                                                <Toaster position='top-center' />

                                                {
                                                            posts.length > 0 ? posts?.map((data) => (

                                                                        < Cards
                                                                                    key={data._id}
                                                                                    title={data.title}
                                                                                    price={data.price}
                                                                                    author={data.author}
                                                                                    image={data.image}
                                                                                    data={data}
                                                                        />
                                                            )) : "Login again"
                                                }
                                    </div></>
            )
}

export default Purchased