// components/Card.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from './Modal';


const Card = ({ key, image, price, title, author, data }) => {
            const [selectedImage, setSelectedImage] = useState(null);
            const [modal, setModal] = useState(false)


            const imageDatas = (data) => {
                        setSelectedImage(data)
                        setModal(true)
            }



            return (
                        <>
                                    <Link
                                                onClick={(e) => e.preventDefault()}
                                                key={key}
                                                to="#"
                                                className="group  z-20 overflow-hidden rounded-md shadow-lg "
                                    >
                                                <img

                                                            src={image}
                                                            alt="Stock Image"
                                                            width="400"
                                                            height="300"
                                                            className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                                                            style={{ aspectRatio: '400/300', objectFit: 'cover' }}
                                                />
                                                <div onClick={() => imageDatas(data)} className="absolute  inset-0 bg-black/50 p-4 opacity-0  transition-all duration-300 group-hover:opacity-100">
                                                            <div className="flex h-full flex-col justify-between">
                                                                        <div>
                                                                                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                                                                                    <p className="text-sm text-gray-300">by {author}</p>
                                                                        </div>
                                                                        <div className="flex items-center justify-between">
                                                                                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                                                                                                <DownloadIcon className="h-4 w-4" />
                                                                                                ₹ {price}
                                                                                    </div>
                                                                                    <button className="px-3 py-1 text-sm bg-blue-500 rounded-md text-white">Buy</button>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </Link >
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

                                    )
                                    }
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

export default Card;
