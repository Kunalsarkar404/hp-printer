import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <Link to="/" className="flex items-center mb-4">
                            <img
                                src="/new-hp-logo.svg"
                                alt="Print & Ink"
                                className="h-12 w-12"
                                loading="lazy"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            We provide high-quality printers, inks, and office essentials at competitive prices. With secure payments, fast delivery, and reliable support, we make shopping hassle-free and straight forward.
                        </p>
                    </div>

                    {/* Menu */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Menu</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white transition-colors">
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/shop" className="hover:text-white transition-colors">
                                    Shop
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/blogs" className="hover:text-white transition-colors">
                                    Blogs
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-white transition-colors">
                                    Terms
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/refund" className="hover:text-white transition-colors">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm sm:text-base">Contact</h4>
                        <div className="text-sm">
                            <a
                                href="mailto:contact@printandink.online"
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <span>📧</span> contact@printandink.online
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-40"
                aria-label="Scroll to top"
            >
                <ChevronUp className="w-5 h-5" />
            </button>
        </footer>
    );
}
