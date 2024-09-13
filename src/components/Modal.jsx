import React, { useEffect, useState } from 'react';
import {
            Button,
            Dialog,
            DialogHeader,
            DialogBody,
            DialogFooter,
} from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { Spinner } from "@material-tailwind/react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Modal = ({ image, price, title, author, modal, setModal, postId }) => {
            const [loader, setLoader] = useState(false);
            const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
            const [icon, setIcon] = useState(false)

            const handleOpen = () => setModal(!modal);
            const addToFavourite = async (postId) => {
                        setLoader(true)
                        try {
                                    const res = await axios.put(import.meta.env.VITE_API_URL + `/posts/addToFavourites/${postId}`, {}, {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                }
                                    })
                                    if (res.data.success) {
                                                setIcon(true)

                                    }
                                    setLoader(false)
                                    return toast.success(res.data.message);
                        } catch (error) {
                                    console.log(error.message)
                                    return toast.error(error.response.data.message)
                        }
            }

            const removeFromFavourites = async (postId) => {
                        setLoader(true)
                        try {
                                    const { data } = await axios.put(`${import.meta.env.VITE_API_URL}/posts/removeFavourites/${postId}`, {}, {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                }
                                    })


                                    if (data.success) {
                                                localStorage.setItem("icon", icon)
                                                setIcon(false)
                                                setLoader(false)
                                                return toast.success(data.message)
                                    }

                        } catch (error) {
                                    console.log(error)
                        }
            }

            const paymentImage = async (postId) => {
                        if (!isAuthenticated) {
                                    toast.error("Please login to purchase asset");
                                    navigate("/login")
                                    return
                        }

                        try {
                                    const stripe = await stripePromise;
                                    const { data } = await axios.post(import.meta.env.VITE_API_URL + "/payment/generate",
                                                {
                                                            postId,
                                                },
                                                {
                                                            headers: {
                                                                        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                            },
                                                }
                                    );



                                    const { error } = await stripe.redirectToCheckout({ sessionId: data.id });
                                    if (error) {
                                                console.error('Stripe Checkout error:', error);
                                    }
                        } catch (error) {
                                    toast.error(error.response.data.message)
                                    console.log(error.message)
                                    console.log(error);
                        }
            }

            const deletePost = async (postId) => {
                        try {
                                    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/post/delete/${postId}`, {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                },
                                    });

                                    if (response.data.success) {
                                                toast.success(response.data.message)
                                    } else {
                                                console.error("Failed to delete the post:", response.data.message);
                                                toast.error(response.data.message)
                                    }
                        } catch (error) {
                                    console.error("An error occurred while deleting the post:", error.message);
                                    toast.error(error.message)
                        }
            };

            return (
                        <>
                                    {/* Material Tailwind Dialog */}
                                    <Dialog open={modal} handler={handleOpen} className='h-[75%] bg-primary absolute  '>
                                                <Toaster position='top-center' />
                                                <DialogFooter className=' flex justify-between flex-row-reverse'>
                                                            <button
                                                                        variant="text"
                                                                        color="red"
                                                                        onClick={handleOpen}
                                                                        className="mr-1 lg:hidden block w-fit h-fit bg-black rounded-full"
                                                            >

                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="size-5 rotate-45 ">
                                                                                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                                                        </svg>
                                                            </button>

                                                            <span className='w-8 h-8 bg-black rounded-full  grid place-content-center text-white'>
                                                                        {
                                                                                    loader && <Spinner />
                                                                        }
                                                                        {
                                                                                    icon ? <MdLibraryAddCheck size={24} className={`${loader && "hidden"} cursor-pointer`} onClick={() => removeFromFavourites(postId)} /> : <MdOutlineAddPhotoAlternate size={24} className={`${loader && "hidden"} cursor-pointer`} onClick={() => addToFavourite(postId)} />
                                                                        }
                                                            </span>

                                                </DialogFooter>
                                                <DialogHeader>{title.charAt(0).toUpperCase() + title.slice(1)}</DialogHeader>

                                                <DialogBody className=' h-[60%]'>

                                                            <img src={image} alt={title} className=" h-full w-full mb-4 rounded-lg" />

                                                            <div className='flex  flex-row justify-between items-center'>
                                                                        <div>
                                                                                    <p className="text-lg font-semibold bg-black w-fit text-white px-1 rounded-lg">by {author}</p>

                                                                                    <p className="text-lg font-bold ">₹{price}</p>
                                                                        </div>
                                                                        {
                                                                                    location.pathname === "/seller/dashboard" ? <Button onClick={() => deletePost(postId)} variant='gradient' color='red'>Delete</Button> : <Button variant="gradient" color="light-blue" >
                                                                                                <span onClick={() => paymentImage(postId)}>Buy Now</span>
                                                                                    </Button>
                                                                        }
                                                            </div>

                                                </DialogBody>

                                    </Dialog>
                        </>
            );
};


export default Modal;
