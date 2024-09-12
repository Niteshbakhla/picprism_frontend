import React, { useEffect } from 'react'
import Card from "../../components/Card"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMyPosts } from '../../store/slice/postSlice';
import Cards from '../../components/Cards';
import { Spinner } from '@material-tailwind/react';
const SellerProducts = () => {

            // console.log(import.meta.vite.VITE_API_URL)
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

                                    dispatch(setMyPosts(data.data))

                        } catch (error) {
                                    console.log(error)
                        }
            }



            useEffect(() => {
                        getMyPosts()


            }, [])



            return (

                        <div className='grid grid-cols-1  gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-black p-4 rounded-md'>

                                    {
                                                posts.length > 0 ? posts?.map((data) => (

                                                            < Cards
                                                                        key={data._id}
                                                                        title={data.title}
                                                                        price={data.price}
                                                                        author={data.author}
                                                                        image={data.image}
                                                                        datas={data}
                                                            />
                                                )) :
                                                            <Spinner />



                                    }
                        </div>
            )
}

export default SellerProducts