import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
                        Terms & Conditions
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6">
                            Welcome to <strong>Hawlett Print</strong>. By accessing or using our website at hawlettprint.online, you agree to comply with the following terms and conditions. Please read them carefully before making a purchase.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Use of Website</h2>
                        <p className="text-gray-700 mb-3">You agree to use our website for lawful purposes only.</p>
                        <p className="text-gray-700 mb-3">You must not attempt to access, interfere with, or misuse any part of the website or its services.</p>
                        <p className="text-gray-700 mb-3">All products and prices are listed in USD.</p>
                        <p className="text-gray-700 mb-6">Product descriptions and availability are provided in good faith but may contain errors.</p>
                        <p className="text-gray-700 mb-6">Prices and promotions may change at any time without prior notice.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Orders and Payment</h2>
                        <p className="text-gray-700 mb-3">Orders are confirmed only after successful payment.</p>
                        <p className="text-gray-700 mb-3">We accept credit/debit cards, PayPal, and other secure payment methods.</p>
                        <p className="text-gray-700 mb-6">Hawlett Print reserves the right to cancel orders if fraud or suspicious activity is detected.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Shipping and Delivery</h2>
                        <p className="text-gray-700 mb-3">We ship across the United States using standard and express delivery options.</p>
                        <p className="text-gray-700 mb-3">Delivery times are estimated and may vary due to factors beyond our control.</p>
                        <p className="text-gray-700 mb-6">Customers are responsible for providing accurate shipping information.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Returns and Refunds</h2>
                        <p className="text-gray-700 mb-6">Please review our Refund Policy for details regarding returns, refunds, and exchanges.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
                        <p className="text-gray-700 mb-3">All content on the website, including text, images, logos, and designs, is the property of Hawlett Print or its licensors.</p>
                        <p className="text-gray-700 mb-6">You may not copy, reproduce, or use any content without prior written permission.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
                        <p className="text-gray-700 mb-3">Hawlett Print is not liable for indirect, incidental, or consequential damages arising from the use of our website or products.</p>
                        <p className="text-gray-700 mb-6">We do not guarantee uninterrupted or error-free access to the website.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Privacy</h2>
                        <p className="text-gray-700 mb-6">Your personal information is handled according to our Privacy Policy, which is incorporated by reference.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Governing Law</h2>
                        <p className="text-gray-700 mb-3">These terms are governed by the laws of the United States, specifically the State of California.</p>
                        <p className="text-gray-700 mb-6">Any disputes arising from these terms will be resolved in the courts located in California.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Changes to Terms</h2>
                        <p className="text-gray-700 mb-3">We may update these terms at any time without prior notice.</p>
                        <p className="text-gray-700 mb-6">Continued use of our website after changes constitutes acceptance of the updated terms.</p>

                        <div className="bg-blue-50 p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="text-2xl mr-2">📞</span> Contact Us
                            </h3>
                            <p className="text-gray-700">
                                For questions about these Terms & Conditions, email us at{' '}
                                <a href="mailto:Info@hawlettprint.online" className="text-cyan-600 hover:text-cyan-700">
                                    Info@hawlettprint.online
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
