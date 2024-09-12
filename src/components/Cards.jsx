import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from './Modal';
import { IoMdAdd } from "react-icons/io";
import { Button } from 'rsuite';

const Cards = ({ image, price, title, author, datas, button1 }) => {
            const [selectedImage, setSelectedImage] = useState(null);
            const [modal, setModal] = useState(false);
            const { pathname } = useLocation()


            // Function to handle the image click and open the modal
            const handleImageClick = (data, e) => {

                        setSelectedImage(data);
                        setModal(true);

            };

            const deletePost = async (postId) => {
                        try {
                                    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/post/delete/${postId}`, {
                                                headers: {
                                                            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
                                                },
                                                withCredentials: true
                                    });

                                    if (response.data.success) {
                                                toast.success(response.data.message)
                                    } else {
                                                console.error("Failed to delete the post:", response.data.message);
                                                toast.error(response.data.message)
                                    }
                        } catch (error) {
                                    console.error("An error occurred while deleting the post:", error.message);
                        }
            };


            return (
                        <>
                                    <div className="relative lg:w-[250px]  lg:h-[200px] w-full  h-[200px]    group z-20 overflow-hidden rounded-md shadow-lg">
                                                {/* Image with hover effect
                                                 */}
                                                <img
                                                            src={image}
                                                            alt="Stock Image"
                                                            width="400"
                                                            height="300"
                                                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />

                                                {/* Overlay with details */}
                                                <div
                                                            onClick={(e) => handleImageClick(datas, e)}
                                                            className="absolute inset-0 bg-black/50 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer"
                                                >
                                                            <div className="flex h-full flex-col justify-between">
                                                                        <div className='flex justify-between items-center'>
                                                                                    <div>
                                                                                                <h3 className="text-lg font-semibold text-white">{title}</h3>
                                                                                                <p className="text-sm text-gray-300">by {author}</p>
                                                                                    </div>

                                                                                    <span className='z-24'>
                                                                                                <IoMdAdd color='white' size={24} />
                                                                                    </span>
                                                                        </div>

                                                                        {
                                                                                    !pathname === "/seller/dashboard" && <div className="flex items-center justify-between">
                                                                                                <div className="flex items-center gap-2 text-sm font-medium text-white">
                                                                                                            <DownloadIcon className="h-4 w-4" />
                                                                                                            ₹ {price}
                                                                                                </div>
                                                                                                <button className="px-3 py-1 text-sm bg-blue-500 rounded-md text-white">Buy</button>

                                                                                             
                                                                                    </div>
                                                                        }

                                                            </div>
                                                </div>
                                    </div>

                                    {/* Modal for image details */}
                                    {selectedImage && (
                                                <Modal
                                                            image={selectedImage.image}
                                                            title={selectedImage.title}
                                                            author={selectedImage.author}
                                                            price={selectedImage.price}
                                                            modal={modal}
                                                            setModal={setModal}
                                                            postId={selectedImage._id}
                                                />
                                    )}
                        </>
            );
};

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
            );
}

export default Cards;
