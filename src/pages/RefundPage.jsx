import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RefundPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-100 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
                        Refund Policy
                    </h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 mb-6">
                            At <strong>Hawlett Print</strong>, we want you to shop with confidence. If you are not completely satisfied with your purchase, we offer a straightforward return and refund process.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Eligibility for Returns</h2>
                        <p className="text-gray-700 mb-3">Returns are accepted within 14 days of receiving your order.</p>
                        <p className="text-gray-700 mb-6">Items must be unused, unopened, and in their original packaging.</p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How to Initiate a Return</h2>
                        <ol className="list-decimal pl-6 text-gray-700 mb-6 space-y-2">
                            <li>Email our support team at <a href="mailto:Info@hawlettprint.online" className="text-cyan-600 hover:text-cyan-700">Info@hawlettprint.online</a> with your order ID and reason for return.</li>
                            <li>Our team will review your request and provide instructions for returning the item.</li>
                            <li>Ship the item back following the instructions provided.</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Refund Process</h2>
                        <p className="text-gray-700 mb-3">
                            Once we receive and inspect the returned product, we will issue a refund to the original payment method within 7–10 business days.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Shipping charges are non-refundable unless the return was due to our error.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Exchanges</h2>
                        <p className="text-gray-700 mb-3">
                            If your item is defective, damaged, or incorrect, we will replace it at no additional cost.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Please notify us within 48 hours of receiving the order to qualify for a replacement.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Damaged or Incorrect Items</h2>
                        <p className="text-gray-700 mb-3">
                            In the rare event that your order arrives damaged or incorrect, contact us immediately at{' '}
                            <a href="mailto:Info@hawlettprint.online" className="text-cyan-600 hover:text-cyan-700">
                                Info@hawlettprint.online
                            </a>.
                        </p>
                        <p className="text-gray-700 mb-6">
                            We will provide either a full refund or send a replacement at no extra cost.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Additional Notes</h2>
                        <p className="text-gray-700 mb-3">
                            Refunds may take several days to appear, depending on your bank or payment provider.
                        </p>
                        <p className="text-gray-700 mb-6">
                            Keep the original packaging and receipts until your return is processed.
                        </p>

                        <div className="bg-blue-50 p-6 rounded-lg mt-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                                <span className="text-2xl mr-2">📞</span> Contact Us
                            </h3>
                            <p className="text-gray-700">
                                For any questions regarding returns or refunds, email us at{' '}
                                <a href="mailto:Info@hawlettprint.online" className="text-cyan-600 hover:text-cyan-700">
                                    Info@hawlettprint.online
                                </a>.
                                <br />
                                Our team is here to help ensure a smooth and hassle-free experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
