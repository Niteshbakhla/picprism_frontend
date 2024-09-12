import React, { useRef, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useUpload from '../../Hooks/UseUpload';
import axios from "axios"
import { useSelector } from 'react-redux';
import { Spinner } from '@material-tailwind/react';

const SellerUploadsProduct = () => {
            const [image, setImage] = useState(null);
            const [description, setDescription] = useState("");
            const [loader, setLoader] = useState(false);
            const [title, setTitle] = useState('');
            const author = useSelector(state => state.auth.author);
            const [price, setPrice] = useState('');

            const images = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPkm3Hhfm2fa7zZFgK0HQrD8yvwSBmnm_Gw&s";

            const inputRef = useRef(null);
            const handleClick = () => {
                        if (inputRef.current) {
                                    inputRef.current.click();
                        }
            };

            const imageHandle = (event) => {
                        const file = event.target.files[0];
                        setImage(file);
            };

            const addPost = async (e) => {
                        e.preventDefault();
                        if (!title || !price) return toast.error("Fill the required fields");
                        setLoader(true);

                        try {
                                    const { public_id, secure_url } = await useUpload({ image });

                                    if (!public_id || !secure_url) return toast.error("Image upload failed");

                                    const res = await axios.post(`${import.meta.env.VITE_API_URL}/post/create`, {
                                                title,
                                                price,
                                                image: secure_url,
                                                public_id,
                                                author
                                    }, {
                                                headers: {
                                                            "Authorization": "Bearer " + localStorage.getItem("accessToken")
                                                }
                                    });

                                    const data = await res.data;
                                    setLoader(false);
                                    if (data.success) {
                                                toast.success(data.message);
                                                e.target.reset();
                                                setImage(null);
                                                setTitle('');
                                                setPrice('');
                                    }
                        } catch (error) {
                                    setLoader(false);
                                    if (error.response.data.message === "Forbidden") {
                                                return toast.error("Please login again");
                                    }
                                    console.log(error.response.data);
                        }
            };

            return (
                        <div className="lg:p-4 bg-gray-100">
                                    <div className="grid gap-6 ">
                                                <Toaster position='top-center' />
                                                <div className="flex flex-col lg:w-full lg:h-[70vh]  md:flex-row gap-4  justify-between rounded-lg p-4 border border-black">
                                                            <div
                                                                        onClick={handleClick}
                                                                        className="flex-1 h-64 md:h-auto rounded-2xl cursor-pointer overflow-hidden border shadow-xl flex justify-center items-center"
                                                            >
                                                                        <img
                                                                                    src={image ? URL.createObjectURL(image) : images}
                                                                                    className="h-full w-full object-cover"
                                                                                    alt="Product"
                                                                        />
                                                            </div>
                                                            <div className="flex-1">
                                                                        <h2 className="text-lg font-semibold mb-4">Upload New Product</h2>
                                                                        <form onSubmit={addPost} className="grid gap-4">
                                                                                    <div className="grid gap-2">
                                                                                                <label htmlFor="product-name" className="block text-sm font-medium">Product Name</label>
                                                                                                <input
                                                                                                            onChange={(e) => setTitle(e.target.value)}
                                                                                                            id="product-name"
                                                                                                            placeholder="Enter product name"
                                                                                                            className="border rounded-md p-2 bg-black/5 w-full"
                                                                                                />
                                                                                    </div>
                                                                                    <div className="grid gap-2">
                                                                                                <label htmlFor="product-description" className="block text-sm font-medium">Description</label>
                                                                                                <textarea
                                                                                                            onChange={(e) => setDescription(e.target.value)}
                                                                                                            id="product-description"
                                                                                                            placeholder="Enter product description"
                                                                                                            rows={3}
                                                                                                            className="border rounded-md p-2 bg-black/5 w-full"
                                                                                                />
                                                                                    </div>
                                                                                    <div className="grid gap-2">
                                                                                                <label htmlFor="product-price" className="block text-sm font-medium">Price</label>
                                                                                                <input
                                                                                                            onChange={(e) => setPrice(e.target.value)}
                                                                                                            id="product-price"
                                                                                                            type="number"
                                                                                                            placeholder="Enter product price"
                                                                                                            className="border rounded-md p-2 bg-black/5 w-full"
                                                                                                />
                                                                                    </div>
                                                                                    <div className="grid gap-2">
                                                                                                <label htmlFor="product-image" className="block text-sm font-medium">Product Image</label>
                                                                                                <input
                                                                                                            ref={inputRef}
                                                                                                            onChange={imageHandle}
                                                                                                            id="product-image"
                                                                                                            type="file"
                                                                                                            className="border rounded-md p-2 w-full"
                                                                                                />
                                                                                    </div>
                                                                                    <button
                                                                                                type="submit"
                                                                                                className="bg-black flex justify-center text-white font-bold w-full py-2 px-4 rounded-md hover:bg-gray-800 transition-all"
                                                                                    >
                                                                                                {loader ? <Spinner /> : "Upload Product"}
                                                                                    </button>
                                                                        </form>
                                                            </div>
                                                </div>
                                                <div className="rounded-lg p-4 border border-black ">
                                                            <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
                                                            <div className="flex justify-between">
                                                                        <div className="flex flex-col">
                                                                                    <span className="text-2xl font-semibold">5,432</span>
                                                                                    <span className="text-sm text-gray-500">Total Sales</span>
                                                                        </div>
                                                                        <div className="flex flex-col">
                                                                                    <span className="text-2xl font-semibold">$23,546</span>
                                                                                    <span className="text-sm text-gray-500">Revenue</span>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </div>
            );
};

export default SellerUploadsProduct;
