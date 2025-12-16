import React from 'react';
import { useForm } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
    const [state, handleSubmit] = useForm("xqaylanz"); // Replace with your Formspree form ID

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section
                className="relative bg-gray-800 text-white min-h-[50vh] sm:min-h-[60vh] lg:min-h-[65vh] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/contact-banner.webp')"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        CONTACT US
                    </h1>
                </div>
            </section>



            {/* Contact Form Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Contact Image */}
                        <div>
                            <img
                                src="/contactus.avif"
                                alt="Contact Us"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                            <div className="mt-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Contact Email:
                                </h3>
                                <a
                                    href="mailto:Info@hawlettprint.online"
                                    className="text-cyan-600 hover:text-cyan-700 transition-colors text-lg"
                                >
                                    Info@hawlettprint.online
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                Contact Form
                            </h2>

                            {state.succeeded && (
                                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                                    Thank you for contacting us! We'll get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                                        required
                                        disabled={state.submitting}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your e-mail"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                                        required
                                        disabled={state.submitting}
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                                        required
                                        disabled={state.submitting}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows="6"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none text-sm sm:text-base"
                                        required
                                        disabled={state.submitting}
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={state.submitting}
                                    className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-md font-medium transition-colors text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {state.submitting ? 'Sending...' : 'Send a message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Location Section */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div>
                            <img
                                src="/guideprinter.avif"
                                alt="Our Location"
                                className="w-full h-auto rounded-md shadow-lg"
                                loading="lazy"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                Our location
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Have a question or need assistance? Reach out to us anytime—we're happy to help and ensure you find exactly what you're looking for.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
