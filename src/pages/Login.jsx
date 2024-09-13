// LoginSignupPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'rsuite';
import { Select, Spinner, Option } from "@material-tailwind/react";

const LoginSignupPage = () => {
            const [isLogin, setIsLogin] = useState(true);
            const [email, setEmail] = useState('');
            const [loader, setLoader] = useState(false)
            const [accountType, setAccount] = useState("")
            const [password, setPassword] = useState('');
            const [username, setUsername] = useState('');
            const dispatch = useDispatch()
            const navigate = useNavigate()
            const [image, setImage] = useState("https://images.unsplash.com/photo-1619878627081-85dd33d8667e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" || "loading...");

            const image1 = "https://images.unsplash.com/photo-1619878627081-85dd33d8667e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            const image2 = "https://images.unsplash.com/photo-1604056052817-b8d4a08f9b4d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            const image3 = "https://images.unsplash.com/photo-1594027859487-3cbd8092d9ef?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            const randomImage = [image1, image2, image3];

            useEffect(() => {
                        const interval = setInterval(() => {
                                    const num = Math.floor(Math.random() * (randomImage.length - 1));
                                    setImage(randomImage[num]);
                        }, 1000);
                        return () => clearInterval(interval); // Clean up the interval on component unmount
            }, []);

            const handleSubmit = async (e) => {
                        e.preventDefault();
                        setLoader(true)

                        if (isLogin) {
                                    try {
                                                const { data } = await axios.post(import.meta.env.VITE_API_URL + "/login", { email, password });

                                                dispatch(login(data))
                                                setLoader(false)

                                                if (data.success) {
                                                            toast.success(data.message)

                                                            if (data.role.toLowerCase() === "seller") {
                                                                        setTimeout(() => {
                                                                                    return navigate("/seller/dashboard")
                                                                        }, 1000)
                                                            } else {
                                                                        setTimeout(() => {
                                                                                    return navigate("/home")
                                                                        }, 1000)
                                                            }

                                                }


                                    } catch (error) {
                                                setEmail("")
                                                setPassword("")
                                                setUsername("")
                                                setLoader(false)
                                                console.error('Login failed:', error);
                                                toast.error(error.response.data.message)
                                    }
                        } else {
                                    try {
                                                const response = await axios.post(import.meta.env.VITE_API_URL + "/signup", { email, password, username, accountType });
                                                toast.success(response.data.message)
                                                setLoader(false)
                                                setEmail("")
                                                setPassword("")
                                                setUsername("")

                                                setTimeout(() => {
                                                            changeLoginToSignup()
                                                }, 1000)
                                    } catch (error) {
                                                setEmail("")
                                                setPassword("")
                                                setUsername("")
                                                setLoader(false)
                                                console.error('Signup failed:', error);
                                                toast.error(error.response.data.message)
                                    }
                        }
            };


            const handleSelectChange = (value) => {
                        setAccount(value)
            };
            const changeLoginToSignup = () => {
                        setEmail("")
                        setPassword("")
                        setLoader(false)
                        setIsLogin((prev) => !prev)
            }

            const handleGoogleSignIn = () => {
                        // Your logic for Google Sign-In
                        window.location.href = '/api/auth/google'; // Example redirect to Google OAuth
            };

            return (
                        <div className="flex h-screen w-full flex-col border ">
                                    <Toaster position='top-center' />
                                    <main className="flex-1 ">
                                                <div className=" mx-auto   flex h-full items-center justify-center px-4 py-12 md:px-6">
                                                            <div className="grid w-full max-w-4xl grid-cols-1 gap-8 rounded-lg bg-card p-6 shadow-lg md:grid-cols-2 md:gap-12 md:p-12">
                                                                        <div className="space-y-6">
                                                                                    <div className="space-y-2">
                                                                                                <h2 className="text-2xl font-bold text-card-foreground">{isLogin ? "Login" : "Sign Up"}</h2>
                                                                                                <p className="text-muted-foreground">
                                                                                                            {isLogin
                                                                                                                        ? "Enter your credentials to access your account"
                                                                                                                        : "Create a new account to start buying and selling images"}
                                                                                                </p>
                                                                                    </div>
                                                                                    <form onSubmit={handleSubmit} className="space-y-4">
                                                                                                <div className="space-y-2">
                                                                                                            <label htmlFor="email" className="block text-sm font-medium text-accent">Email</label>
                                                                                                            <input
                                                                                                                        id="email"
                                                                                                                        type="email"
                                                                                                                        placeholder="m@example.com"
                                                                                                                        required
                                                                                                                        value={email}
                                                                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                                                                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm"
                                                                                                            />
                                                                                                </div>
                                                                                                <div className="space-y-2">
                                                                                                            <label htmlFor="password" className="block text-sm font-medium text-accent">Password</label>
                                                                                                            <input
                                                                                                                        id="password"
                                                                                                                        type="password"
                                                                                                                        required
                                                                                                                        value={password}
                                                                                                                        onChange={(e) => setPassword(e.target.value)}
                                                                                                                        className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm"
                                                                                                            />
                                                                                                </div>
                                                                                                {!isLogin && (
                                                                                                            <div className="space-y-2">
                                                                                                                        <label htmlFor="username" className="block text-sm font-medium text-accent">Username</label>
                                                                                                                        <input
                                                                                                                                    id="username"
                                                                                                                                    required
                                                                                                                                    value={username}
                                                                                                                                    onChange={(e) => setUsername(e.target.value)}
                                                                                                                                    className="w-full px-3 py-2 border border-secondary rounded-md shadow-sm"
                                                                                                                        />
                                                                                                            </div>
                                                                                                )}

                                                                                                {
                                                                                                            !isLogin && (
                                                                                                                        <Select
                                                                                                                                    label="Select"
                                                                                                                                    onChange={(value) => handleSelectChange(value)}
                                                                                                                        >
                                                                                                                                    <Option value="Buyer">Buyer</Option>
                                                                                                                                    <Option value="Seller">Seller</Option>
                                                                                                                        </Select>
                                                                                                            )
                                                                                                }
                                                                                                <button
                                                                                                            disabled={loader}
                                                                                                            type="submit"
                                                                                                            className="w-full py-2 px-4 flex justify-center  bg-secondary text-white font-bold rounded-md shadow hover:bg-accent focus:outline-none focus:ring-2 focus:ring-accent"
                                                                                                >
                                                                                                            {
                                                                                                                        loader ? (
                                                                                                                                    <Spinner />

                                                                                                                        ) : (
                                                                                                                                    isLogin ? "Login" : "Sign Up"

                                                                                                                        )
                                                                                                            }
                                                                                                </button>
                                                                                    </form>
                                                                                    <div className="flex items-center justify-between">
                                                                                                <span className="text-muted-foreground text-sm">or</span>
                                                                                    </div>
                                                                                    <div className="text-center">
                                                                                                <button
                                                                                                            onClick={handleGoogleSignIn}
                                                                                                            className="inline-flex items-center justify-center w-full py-2 px-4 bg-white border border-secondary text-accent font-medium rounded-md shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent"
                                                                                                >
                                                                                                            <img
                                                                                                                        src="https://developers.google.com/identity/images/g-logo.png"
                                                                                                                        alt="Google logo"
                                                                                                                        className="w-4 h-4 mr-2"
                                                                                                            />
                                                                                                            {isLogin ? "Sign in with Google" : "Sign up with Google"}
                                                                                                </button>
                                                                                    </div>
                                                                                    <div className="text-center text-muted-foreground">
                                                                                                <button

                                                                                                            onClick={changeLoginToSignup}
                                                                                                            className="text-sm text-accent underline"
                                                                                                >
                                                                                                            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
                                                                                                </button>
                                                                                    </div>
                                                                        </div>
                                                                        <div className="hidden  p-6 md:block">

                                                                                    <img
                                                                                                src={image}
                                                                                                alt="Image"
                                                                                                width="400"
                                                                                                height="600"
                                                                                                className="h-full w-full rounded-lg object-cover"
                                                                                                style={{ aspectRatio: "400/600", objectFit: "cover" }}
                                                                                    />
                                                                        </div>
                                                            </div>
                                                </div>
                                    </main>
                        </div>
            );
};

export default LoginSignupPage;
