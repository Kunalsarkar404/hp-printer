import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section
                className="relative bg-gray-800 text-white min-h-[50vh] sm:min-h-[60vh] lg:min-h-[65vh] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/about-banner.jpg')"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">ABOUT US</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
                        <div>
                            <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                                At Print & Ink Online, we go beyond just selling products—we make printing simple, reliable, and affordable. From the latest printers to high-quality inks and office supplies, our store brings everything you need right to your doorstep. Whether it's for your home setup, your growing business, or creative projects that fit every requirement.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                Our mission is to combine top-quality products with exceptional customer service, ensuring a seamless and hassle-free shopping experience. From trusted brands, fast delivery, and expert support—making us your go-to partner for all your printing needs.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/printer-use.jpg"
                                alt="About Print & Ink"
                                className="w-full h-full"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Search, Choose & Order Online */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/printer-operator.jpg"
                                    alt="Search and Order"
                                    className="w-[650px] h-[359px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                    Search, Choose & Order Online
                                </h2>
                                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                                    Discover how easy printing can be with Print & Ink Online. From premium printers and cartridges to hard-to-find accessories, our platform is designed to help you find exactly what you need in just a few clicks.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Explore our wide catalog, compare options, and select products that fit your needs—all while enjoying secure checkout and real-time inventory updates. With competitive pricing and a smooth shopping experience, your ideal printing solution is always just a click away.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Fast & Reliable Worldwide Delivery */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                    Fast & Reliable Worldwide Delivery
                                </h2>
                                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                                    No matter where you're located, Print & Ink Online makes sure your printing essentials reach you quickly and securely. From bustling cities to remote destinations, we collaborate with trusted global carriers to ensure your orders are delivered on time.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Flexible shipping options, real-time tracking, and carefully packed products ensure a worry-free experience. Whether you need urgent office supplies or specialty printing accessories, your order is always just a doorstep away with Print & Ink Online.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/fastprinter.jpg"
                                    alt="Fast Delivery"
                                    className="w-[650px] h-[359px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Our Mission */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <img
                                    src="/iprinter.jpg"
                                    alt="Our Mission"
                                    className="w-[650px] h-[359px] object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <div className="order-1 lg:order-2">
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                                    Our Mission
                                </h2>
                                <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                                    Print & Ink Online is driven by a simple vision—making printing smarter, easier, and more affordable for everyone. We aim to bridge the gap between everyday users and advanced printing solutions by delivering products that combine quality, innovation, and value.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Our mission goes beyond selling supplies: we're here to empower businesses, students, and creators with reliable tools that simplify their work. By continually expanding our range, upgrading our services, and listening to our customers, we ensure that every purchase adds real value to their printing journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center lg:text-left">
                            Why Choose Us?
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Global Delivery You Can Trust:
                                </h3>
                                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                    No matter where you are, Print & Ink Online ensures your printing essentials reach you quickly and securely. From urgent business needs to personal projects, our shipping partners deliver on time, every time.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Customer Support That Cares:
                                </h3>
                                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                    Do you have questions, concerns, or need product recommendations? Our friendly support team is always ready to provide clear answers, expert recommendations, and hassle-free solutions.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Seamless Mobile Shopping:
                                </h3>
                                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                    Enjoy the convenience of shopping anytime, anywhere. With our user-friendly mobile platform, browsing, comparing, and ordering your printing supplies is just a tap away.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Flexible Shopping Options
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Whether you prefer shopping online or experiencing products in person, Print & Ink Online offers the best of both worlds—digital convenience and hands-on assistance.
                                </p>
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    src="/printermen.avif"
                                    alt="Why Choose Us"
                                    className="h-[540px] w-[480px] object-cover relative left-10"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
