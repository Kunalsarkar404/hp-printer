import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [wirelessDropdownOpen, setWirelessDropdownOpen] = useState(false);
    const [mobileWirelessOpen, setMobileWirelessOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gray-900 text-white text-xs sm:text-sm py-2 px-4">
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-center sm:text-left">Available 24/7 at contact@printandink.online</p>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img
                                src="/new-hp-logo.svg"
                                alt="Print & Ink"
                                className="h-10 w-10 sm:h-12 sm:w-12"
                                loading="eager"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 -translate-x-1/2">
                            <Link
                                to="/"
                                className={`font-medium transition-colors ${isActive('/') ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                                    }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className={`font-medium transition-colors ${isActive('/about') ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                                    }`}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/shop"
                                className={`font-medium transition-colors ${isActive('/shop') ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                                    }`}
                            >
                                Shop
                            </Link>

                            {/* Wireless Printers Dropdown */}
                            <div className="relative">

                                <button
                                    onMouseEnter={() => setWirelessDropdownOpen(true)}
                                    onClick={() => setWirelessDropdownOpen(!wirelessDropdownOpen)}
                                    className="font-medium transition-colors flex items-center gap-1 text-gray-700 hover:text-sky-500"
                                >

                                    Wireless Printers
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {wirelessDropdownOpen && (
                                    <div
                                        onMouseLeave={() => setWirelessDropdownOpen(false)}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white shadow-lg rounded-md py-2 border border-gray-200">

                                        <Link
                                            to="/hp-printer"
                                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-sky-500 transition-colors"
                                        >
                                            HP Printer
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/contact"
                                className={`font-medium transition-colors ${isActive('/contact') ? 'text-sky-500' : 'text-gray-700 hover:text-sky-500'
                                    }`}
                            >
                                Contact
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-sky-500 transition-colors"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="fixed inset-0 z-50 bg-white lg:hidden">
                            {/* Close button */}
                            <div className="flex justify-end p-4">
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-gray-700 hover:text-sky-500"
                                >
                                    <X className="w-7 h-7" />
                                </button>
                            </div>

                            {/* Mobile Nav */}
                            <nav className="flex flex-col items-center justify-center gap-6 text-lg font-medium">
                                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                                <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
                                <Link to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</Link>
                                <Link to="/printers" onClick={() => setMobileMenuOpen(false)}>Printers</Link>
                                <Link to="/laser-printers" onClick={() => setMobileMenuOpen(false)}>Laser Printers</Link>
                                <div className="w-full text-center">
                                    <button
                                        onClick={() => setMobileWirelessOpen(!mobileWirelessOpen)}
                                        className="flex items-center justify-center gap-2 w-full text-lg font-medium"
                                    >
                                        Wireless Printers
                                        <ChevronDown
                                            className={`w-5 h-5 transition-transform ${mobileWirelessOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {mobileWirelessOpen && (
                                        <div className="mt-4 space-y-3">
                                            <Link
                                                to="/hp-printer"
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block text-base text-gray-600"
                                            >
                                                HP Printer
                                            </Link>
                                        </div>
                                    )}
                                </div>

                                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                            </nav>
                        </div>
                    )}
                </div>
            </header>
        </>
    );
}
