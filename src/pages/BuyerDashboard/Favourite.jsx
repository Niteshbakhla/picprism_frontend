import React, { useEffect } from 'react'
import Cards from '../../components/Cards'
import { useDispatch, useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { setMyFavourite } from '../../store/slice/postSlice'
import { Button } from 'rsuite'
import { SidebarWithBurgerMenu } from '../../components/Homes/SidebarWithBurger'

const Favourite = () => {


            const posts = useSelector(state => state.post.myFavourite)
            const dispatch = useDispatch()

            const getFavouriteImage = async () => {
                        try {
                                    const { data } = await axios.get(import.meta.env.VITE_API_URL + "/post/favourite", {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                }
                                    })


                                    console.log(data)
                                    dispatch(setMyFavourite(data.data))

                        } catch (error) {

                                    toast.success(error.response.data.message)
                                    console.log(error.message)
                        }
            }


            const removeFromFavourites = async (postId) => {
                        try {
                                    const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/posts/removeFavourites/${postId}`, {}, {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                }
                                    })

                                    toast.success(data.message)


                        } catch (error) {
                                    console.log(error)
                        }
            }


            useEffect(() => {
                        getFavouriteImage()
            }, [])
            return (
                        <>
                                    <SidebarWithBurgerMenu />

                                    <div className='max-w-6xl p-8  mx-auto grid grid-cols-1 shadow-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-[600px] overflow-y-auto'>
                                                <Toaster position='top-center' />
                                                {
                                                            posts.length === 0 && <h1 className='text-6xl text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  '>No favourites</h1>
                                                }
                                                {
                                                            posts?.map(({ _id, title, image, author, price }) => (
                                                                        <Cards
                                                                                    key={Math.random()}
                                                                                    _id={_id}
                                                                                    title={title}
                                                                                    image={image}
                                                                                    price={price}
                                                                                    button1={<Button onClick={() => removeFromFavourites(_id)}>remove</Button>}

                                                                        />
                                                            ))
                                                }
                                    </div>

                        </>
            )
}

export default Favourite