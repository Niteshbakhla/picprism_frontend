import React from 'react'

const About = () => {
            return (
                        <section id="about" className="w-[95%] mx-auto py-12 md:py-24 lg:py-32 border border-black/20 rounded-xl bg-white">
                                    <div className="px-4 md:px-6">
                                                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                                                            <div className="space-y-2">
                                                                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">About Picture Perfect</h2>
                                                                        <p className="max-w-[600px] text-muted md:text-xl lg:text-base xl:text-xl">
                                                                                    Picture Perfect is a platform that connects photographers and photography enthusiasts from around the world. Browse our curated collection of high-quality photographs or list your own for sale.
                                                                        </p>
                                                            </div>
                                                            <div className="flex flex-col gap-4">
                                                                        <div className="grid gap-1">
                                                                                    <h3 className="text-xl font-bold">Discover Stunning Photographs</h3>
                                                                                    <p className="text-muted">
                                                                                                Explore our diverse collection of photographs across a wide range of categories, including nature, architecture, and abstract art.
                                                                                    </p>
                                                                        </div>
                                                                        <div className="grid gap-1">
                                                                                    <h3 className="text-xl font-bold">Sell Your Work</h3>
                                                                                    <p className="text-muted">
                                                                                                List your photographs for sale and connect with a global audience of photography enthusiasts and buyers.
                                                                                    </p>
                                                                        </div>
                                                            </div>
                                                </div>
                                    </div>
                        </section>



            )
}

export default About