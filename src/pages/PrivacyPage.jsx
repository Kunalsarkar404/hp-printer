import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
                        Privacy Policy
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6">
                            At <strong>Hawlett Print</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect the personal information you share when using our website.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
                        <p className="text-gray-700 mb-3">We may collect the following types of information:</p>
                        <p className="text-gray-700 mb-3">
                            <strong>Personal Details:</strong> Your name, email address, phone number, and billing or shipping addresses.
                        </p>
                        <p className="text-gray-700 mb-6">
                            <strong>Device & Usage Information:</strong> IP address, browser type, operating system, and pages visited on our website, collected via cookies and similar technologies.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
                        <p className="text-gray-700 mb-3">We use your information to:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Fulfill orders and deliver products to you efficiently.</li>
                            <li>Communicate order updates, service announcements, or responses to your inquiries.</li>
                            <li>Provide promotional offers and newsletters if you have opted in.</li>
                            <li>Analyze and improve our website, products, and customer experience.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sharing Your Information</h2>
                        <p className="text-gray-700 mb-3">Your data is shared only as necessary to provide services:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>With shipping providers to deliver your purchases.</li>
                            <li>With payment processors to complete transactions.</li>
                            <li>With authorities or legal bodies if required by law.</li>
                        </ul>
                        <p className="text-gray-700 mb-6">
                            <strong>Note:</strong> We do not sell, trade, or rent your information to third parties.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking</h2>
                        <p className="text-gray-700 mb-6">
                            Our website uses cookies to enhance functionality, personalize your experience, and collect analytics. You can manage or disable cookies in your browser settings, though some features may not work properly without them.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Privacy Rights</h2>
                        <p className="text-gray-700 mb-3">You have the right to:</p>
                        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Access, update, or delete your personal information.</li>
                            <li>Opt out of receiving marketing emails at any time.</li>
                            <li>Exercise additional rights under CCPA if you are a California resident.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
                        <p className="text-gray-700 mb-6">
                            We implement robust technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
                        <p className="text-gray-700 mb-6">
                            We may update this Privacy Policy occasionally. The latest version will always be available on our website. Continued use of the site constitutes acceptance of the updated policy.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                            <p className="text-gray-700">
                                If you have questions or concerns regarding your privacy, email us at{' '}
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
