import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, Star, Truck, Lock, Headphones, LockIcon, LucideHeadset } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TruckIcon, LockClosedIcon } from '@heroicons/react/24/solid';


export default function HomePage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const prev = () =>
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );

    const next = () =>
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );

    const products = [
        {
            id: 1,
            name: 'Amazon Basics Multi-purpose Copy Printer Paper, A4...',
            category: 'Copy And Printing Paper',
            price: '$34',
            image: '/amazonbasic.jpg'
        },
        {
            id: 2,
            name: 'Brother DCP-J1140DW Wireless Colour Inkjet Printer...',
            category: 'Printers, Brother Printers',
            price: '$135',
            image: '/brotherprinter.jpg'
        },
        {
            id: 3,
            name: 'Brother DCP-L8410CDW Colour Laser Printer – All-in...',
            category: 'Printers, Brother Printers',
            price: '$418',
            image: '/brotherprinter2.jpg'
        },
        {
            id: 4,
            name: 'Brother HL-L3350DW Mono Laser Printer – Single Ful...',
            category: 'Printers, Brother Printers',
            price: '$137',
            image: '/brotherprinter3.jpg'
        }
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "The printer I ordesky works flawlessly. Setup was straightforward, and the print quality is great. exactly what I was looking for. Delivery arrived earlier than promised. I'll definitely buy back!",
            author: 'Michael T.'
        },
        {
            id: 2,
            rating: 5,
            text: "I was searching everywhere for genuine inks at reasonable prices, and I finally found them here. Ordering was smooth and the inks arrived securely packed!",
            author: 'Priya S.'
        },
        {
            id: 3,
            rating: 5,
            text: "I bought a multifunction printer and the experience was great overall. The staff helped guide me to the right model.",
            author: 'David L.'
        }
    ];
    const blogs = [
        { id: 1, title: "Quick and Simple Setup for Hassle-Free Printing", summary: "Streamline Your Printing Process: Connecting Your Printer to WiFi Printing do...", image: "/blog.jpeg", featusky: true },
        // add more...
    ];

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section
                className="relative bg-gray-600 text-white py-20 sm:py-32 lg:py-40 bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero-banner.jpg')"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                            Your Gateway to Printing Solutions
                        </h1>

                        <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200">
                            From the latest printers to original inks and must-have supplies, find everything in one place.
                        </p>

                        <button className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm sm:text-base">
                            Shop Now
                        </button>
                    </div>
                </div>

            </section>

            {/* Trending Products */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-3">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            Trending Products
                        </h2>
                        <Link
                            to="/shop"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-md transition-colors text-sm font-medium inline-flex items-center gap-2"
                        >
                            More Products
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="aspect-square bg-gray-50 p-4 flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="max-w-full max-h-full object-contain"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4 sm:p-5">
                                    <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                                    <h3 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base line-clamp-2 min-h-[2.5rem]">
                                        {product.name}
                                    </h3>
                                    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
                                        {product.price}
                                    </p>
                                    <div className="flex gap-2">
                                        {/* Heart – square */}
                                        <button className="w-9 h-9 flex items-center justify-center bg-white border-2 border-gray-300 text-gray-700 rounded-md hover:border-gray-400 hover:text-sky-500 transition-colors">
                                            <Heart className="w-4 h-4" />
                                        </button>
                                        {/* Cart */}
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded-md transition-colors text-sm font-medium">
                                            Cart
                                        </button>

                                        {/* View */}
                                        <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded-md transition-colors text-sm font-medium">
                                            View
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Smart Printers Banner */}
            <section className="py-10 sm:py-14 bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="inline-block bg-sky-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-4">
                                EXCLUSIVE DEAL
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                                Smart Printers
                                <br />
                                <span className="text-cyan-600">for Modern Workspaces</span>
                            </h2>
                            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                                Upgrade your printing experience today. Limited stock available — grab yours now!
                            </p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/illustration.png"
                                alt="Smart Printers"
                                className="max-w-full h-auto max-h-64 sm:max-h-80 object-contain"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Favorites & Latest Products */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
                        Customer Favorites & Latest Products
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Bestsellers */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 text-center">
                                🔥 Bestsellers
                            </h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src="/amazonbasic.jpg"
                                    alt="Amazon Basics"
                                    className="w-20 h-20 object-contain"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                        Amazon Basics Multi-purpose Copy Printer, A4...
                                    </h4>
                                    <p className="text-lg font-bold text-gray-900">$34</p>
                                </div>
                            </div>
                        </div>

                        {/* Our Newest Collection */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 text-center">
                                ⭐ Our Newest Collection
                            </h3>
                            <div className="flex items-center gap-4">
                                <img
                                    src="/hpprinter.webp"
                                    alt="HP DeskJet"
                                    className="w-20 h-20 object-contain"
                                    loading="lazy"
                                />
                                <div>
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                        HP DeskJet 2855e All-in-One Printer with 3 Month...
                                    </h4>
                                    <p className="text-lg font-bold text-gray-900">$149.99</p>
                                </div>
                            </div>
                        </div>

                        {/* Top Rated */}
                        <div className="bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center justify-center gap-2 text-center">
                                ⭐ Top Rated
                            </h3>
                            <div className="text-center py-4">
                                <p className="text-gray-500">No top-rated product available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* Desktop: Grid */}
            <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-4 mb-8 px-4 sm:px-6 lg:px-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200 text-center"
                    >
                        <div className="flex gap-1 mb-4 justify-center">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                            {testimonial.text}
                        </p>
                        <p className="font-semibold text-gray-900 text-center">
                            {testimonial.author}
                        </p>
                    </div>
                ))}
            </div>

            {/* Mobile: Slider */}
            <div className="md:hidden mb-8">
                <div className="bg-white p-6 rounded-lg text-center">
                    <div className="flex gap-1 mb-4 justify-center">
                        {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                        {testimonials[activeIndex].text}
                    </p>
                    <p className="font-semibold text-gray-900">
                        {testimonials[activeIndex].author}
                    </p>
                </div>
            </div>

            <div className="flex justify-center gap-2">
                <button
                    onClick={prev}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={next}
                    className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Latest Blogs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-12">
                        Latest Blogs
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                            >
                                <div className="relative">
                                    {blog.featusky && (
                                        <span className="absolute top-4 left-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                            Featusky Post
                                        </span>
                                    )}
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-48 sm:h-64 object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-3">{blog.title}</h3>
                                    <p className="text-gray-600 mb-4 text-sm sm:text-sm">{blog.summary}</p>
                                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2">
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section >

            {/* Why Shop With Us */}
            < section className="py-12 sm:py-16 lg:py-20 bg-gray-50" >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
                        Why Shop With Us?
                    </h2>
                    <p className="text-center text-gray-600 mb-10 sm:mb-12 text-sm sm:text-base">
                        Your trusted partner for printers, inks, and accessories.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Fast Delivery */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TruckIcon className="w-8 h-8 text-sky-800" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Fast & Free Delivery
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Get your orders delivesky quickly, with free shipping on qualifying purchases.
                            </p>
                        </div>

                        {/* Secure Payments */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <LockClosedIcon className="w-8 h-8 text-sky-800" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Hassle-Free Payments
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Pay securely with multiple trusted options designed for convenience.
                            </p>
                        </div>

                        {/* Support */}
                        <div className="bg-white p-8 rounded-lg shadow-md text-center">
                            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <LucideHeadset className="w-8 h-8 text-sky-800" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Always Here to Help
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Our dedicated team ensures a smooth shopping experience and provides support whenever you need.
                            </p>
                        </div>
                    </div>
                </div>
            </section >


            <Footer />
        </div >
    );
}
