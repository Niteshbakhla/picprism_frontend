import React from 'react'
import { Link } from 'react-router-dom';

import { Cursor, useTypewriter } from 'react-simple-typewriter';


const Main = () => {

            const [text] = useTypewriter({
                        words: ["Buy", "Sell"],
                        loop: {},
                        typeSpeed: 50,
                        deleteSpeed: 60
            })
            return (
                        <section id="home" className="w-[95%] mx-auto mt-12 rounded-xl py-12 md:py-24 lg:py-32 border border-black/20 bg-white">
                                    <div className="container px-4 md:px-6">
                                                <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                                                            <img
                                                                        src="https://images.unsplash.com/photo-1724963608433-d5a85cb961c2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                                        alt="Hero"
                                                                        className="mx-auto aspect-[2/1] h-full overflow-hidden rounded-xl object-cover w-full max-w-full"
                                                            />
                                                            <div className="flex flex-col justify-center space-y-4">
                                                                        <div className="space-y-2">
                                                                                    <h1 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter">
                                                                                                Discover and <div className="lg:w-32 w-20 inline-block ">{text}</div> Stunning Photographs
                                                                                    </h1>
                                                                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-black/60">
                                                                                                Browse our curated collection of high-quality photographs or list your own for sale. Connect with a global community of photography enthusiasts.
                                                                                    </p>
                                                                        </div>
                                                                        <div className="flex flex-col gap-2 sm:flex-row">
                                                                                    <a
                                                                                                href="#featured"
                                                                                                className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-6 sm:px-8 text-sm font-medium text-white shadow transition-colors hover:bg-accent/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                                                                    >
                                                                                                Browse Photos
                                                                                    </a>
                                                                                    <Link
                                                                                                to="/user-auth"
                                                                                                className="inline-flex h-10 items-center justify-center rounded-md border border-muted bg-background px-6 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-black/5 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                                                                    >
                                                                                                Sell Your Photos
                                                                                    </Link>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </section>

            )
}

export default Main