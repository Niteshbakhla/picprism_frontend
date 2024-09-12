import React from 'react'
import { Link } from 'react-router-dom'


const Contact = () => {
            return (
                        <section id="contact" className="w-[95%]  m-auto py-12 rounded-xl md:py-24 lg:py-32 bg-white shadow-xl">
                                    <div className="container px-4 md:px-6 lg:w-[50%]  m-auto">
                                                <div className="text-center">
                                                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                                                            <p className="max-w-[600px] mx-auto text-muted md:text-xl/relaxed">
                                                                        Have questions or want to collaborate? Reach out to us through our contact form or connect with us on
                                                                        social media.
                                                            </p>
                                                </div>
                                                <div className="mt-8">
                                                            <form action="#" method="POST" className="space-y-4">
                                                                        <div>
                                                                                    <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
                                                                                    <input
                                                                                                type="text"
                                                                                                id="name"
                                                                                                name="name"
                                                                                                required
                                                                                                className="block w-full mt-1 border border-muted rounded-md px-3 py-2 text-foreground focus:ring-primary"
                                                                                    />
                                                                        </div>
                                                                        <div>
                                                                                    <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
                                                                                    <input
                                                                                                type="email"
                                                                                                id="email"
                                                                                                name="email"
                                                                                                required
                                                                                                className="block w-full mt-1 border border-muted rounded-md px-3 py-2 text-foreground focus:ring-primary"
                                                                                    />
                                                                        </div>
                                                                        <div>
                                                                                    <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
                                                                                    <textarea
                                                                                                id="message"
                                                                                                name="message"
                                                                                                rows="4"
                                                                                                required
                                                                                                className="block w-full mt-1 border border-muted rounded-md px-3 py-2 text-foreground focus:ring-primary"
                                                                                    />
                                                                        </div>
                                                                        <button
                                                                                    type="submit"
                                                                                    className="inline-flex h-10 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                                                        >
                                                                                    Send Message
                                                                        </button>
                                                            </form>
                                                </div>
                                    </div>
                        </section>
            )
}

export default Contact