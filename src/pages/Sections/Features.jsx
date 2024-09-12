
import React, { useEffect } from 'react'


const Features = () => {


            return (
                        <section id="featured" className="w-[95%] rounded-xl m-auto mt-4 mb-4 py-12 md:py-24 lg:py-32  ">

                                    <div className=" px-4 md:px-6">
                                                <div className="flex flex-col  items-center justify-center space-y-4 text-center">
                                                            <div className="space-y-2">
                                                                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Photographs</h2>
                                                                        <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                                                                    Explore our curated selection of stunning photographs available for purchase.
                                                                        </p>
                                                            </div>
                                                </div>
                                                <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-12">
                                                            <div className="flex flex-col  rounded-lg overflow-hidden shadow-sm border border-black/20">
                                                                        <img
                                                                                    src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                                                    width="400"
                                                                                    height="300"
                                                                                    alt="Photo"
                                                                                    className="aspect-[4/3] object-cover"
                                                                        />
                                                                        <div className="p-4 flex flex-col gap-2 border ">
                                                                                    <h3 className="text-lg font-semibold text-white bg-secondary w-fit px-2 rounded-lg ">Serene Landscape</h3>
                                                                                    <p className=" bg-primary font-bold text-black w-fit px-2 rounded-lg ">$99</p>
                                                                        </div>
                                                            </div>
                                                            <div className="flex flex-col  rounded-lg overflow-hidden shadow-sm border border-black/20">
                                                                        <img
                                                                                    src="https://images.unsplash.com/photo-1724856699034-e80a5799abf5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                                                    width="400"
                                                                                    height="300"
                                                                                    alt="Photo"
                                                                                    className="aspect-[4/3] object-cover"
                                                                        />
                                                                        <div className="p-4 flex flex-col gap-2">
                                                                                    <h3 className="text-lg font-semibold text-white bg-secondary w-fit px-2 rounded-lg">City Skyline</h3>
                                                                                    <p className="text-black font-bold bg-primary w-fit px-2 rounded-lg">$149</p>
                                                                        </div>
                                                            </div>
                                                            <div className="flex flex-col  rounded-lg overflow-hidden shadow-sm border border-black/20">
                                                                        <img
                                                                                    src="https://images.unsplash.com/photo-1724759401545-f0d37d5bbd27?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                                                    width="400"
                                                                                    height="300"
                                                                                    alt="Photo"
                                                                                    className="aspect-[4/3] object-cover"
                                                                        />
                                                                        <div className="p-4 flex flex-col gap-2">
                                                                                    <h3 className="text-lg font-semibold text-white bg-secondary w-fit px-2 rounded-lg">Autumn Leaves</h3>
                                                                                    <p className="text-black font-bold bg-primary w-fit px-2 rounded-lg">$79</p>
                                                                        </div>
                                                            </div>
                                                            <div className="flex flex-col  rounded-lg overflow-hidden shadow-sm border border-black/20">
                                                                        <img
                                                                                    src="https://plus.unsplash.com/premium_photo-1713184149457-ce10583b4ccd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                                                    width="400"
                                                                                    height="300"
                                                                                    alt="Photo"
                                                                                    className="aspect-[4/3] object-top"
                                                                        />
                                                                        <div className="p-4 flex flex-col gap-2">
                                                                                    <h3 className="text-lg font-semibold text-white bg-secondary w-fit px-2 rounded-lg">Vibrant Sunset</h3>
                                                                                    <p className="text-black font-bold bg-primary w-fit px-2 rounded-lg">$129</p>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </section>
            )
}

export default Features