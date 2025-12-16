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
                                At Hawlett Print, we're more than just a store—we're your partner in making printing easy, reliable, and budget-friendly. Whether you need the latest printers, quality inks, or essential office supplies, we've got everything delivered right to your door. Perfect for home offices, growing businesses, or creative projects of any size.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                What drives us? Combining premium products with customer care that actually cares. We work with trusted brands, ship fast, and offer expert support—so you can focus on what matters while we handle the rest.
                            </p>
                        </div>
                        <div>
                            <img
                                src="/printer-use.jpg"
                                alt="About Hawlett Print"
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
                                    Finding what you need shouldn't be complicated. At Hawlett Print, we've built a platform where premium printers, cartridges, and accessories are just a few clicks away. No hassle, no confusion—just straightforward shopping.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Browse our catalog, compare your options, and pick what fits. With secure checkout, live inventory updates, and competitive prices, getting the right printing solution has never been easier.
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
                                    Wherever you are, we'll get your order to you—fast and secure. From major cities to remote locations, Hawlett Print partners with trusted carriers to ensure timely delivery every single time.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Choose your shipping speed, track your package in real time, and rest easy knowing everything arrives safely packed. Whether it's urgent office supplies or specialty accessories, we've got you covered.
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
                                    Our goal is simple: make printing smarter, easier, and more affordable for everyone. We connect everyday users with professional-grade solutions—no tech jargon, no hidden fees, just quality products that work.
                                </p>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    But we're not just selling supplies. We're empowering businesses, students, and creators with tools that actually make their lives easier. By expanding our catalog, upgrading our service, and listening to what you need, every purchase becomes a win.
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
                                    No matter where you're located, Hawlett Print gets your essentials to you quickly and safely. Urgent business order or personal project—we deliver on time, every time.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Customer Support That Cares:
                                </h3>
                                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                    Questions? Concerns? Need advice on which product to choose? Our support team is here with real answers, expert recommendations, and solutions that actually help.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Seamless Mobile Shopping:
                                </h3>
                                <p className="text-gray-700 mb-6 text-sm sm:text-base leading-relaxed">
                                    Shop whenever, wherever. Our mobile-friendly platform makes browsing, comparing, and ordering your printing supplies as simple as a few taps.
                                </p>

                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    Flexible Shopping Options
                                </h3>
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    Like shopping online? Great. Prefer seeing products in person? We've got you. Hawlett Print offers the best of both—digital ease meets hands-on experience.
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
