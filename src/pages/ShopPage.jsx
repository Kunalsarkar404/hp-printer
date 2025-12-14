import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Heart } from 'lucide-react';

export default function ShopPage() {
    const [currentPage, setCurrentPage] = useState(1);

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
        },
        {
            id: 5,
            name: 'Brother HL-L8260CDW Colour Laser Printer – Single...',
            category: 'Printers, Brother Printers',
            price: '$319',
            image: '/brotherprinter4.jpg'
        },
        {
            id: 6,
            name: 'Brother HL-L8360CDW Colour Laser Printer – Single...',
            category: 'Printers, Brother Printers',
            price: '$418',
            image: '/brotherprinter5.jpg'
        },
        {
            id: 7,
            name: 'Brother HL-L8310CDW Colour Laser Printer – Single...',
            category: 'Printers, Brother Printers',
            price: '$519',
            image: '/brotherprinter6.jpg'
        },
        {
            id: 8,
            name: 'Brother MFC-J3440DW Wireless Colour Inkjet Printer...',
            category: 'Printers, Brother Printers',
            price: '$164',
            image: '/brotherprinter7.png'
        },
        {
            id: 9,
            name: 'Brother MFC-J5340DW Wireless Colour Inkjet Printer...',
            category: 'Printers, Brother Printers',
            price: '$193',
            image: '/brotherprinter8.jpg'
        },
        {
            id: 10,
            name: 'Brother MFC-J6540DW Wireless Colour Inkjet Printer...',
            category: 'Printers, Brother Printers',
            price: '$215',
            image: '/brotherprinter9.webp'
        },
    ];

    const categories = [
        { name: 'All Printers', count: 120 },
        { name: 'Ink Printers', count: 45 },
        { name: 'Copy and Printing Paper', count: 89 },
        { name: 'Brother Printers', count: 67 },
        { name: 'Epson Printers', count: 34 },
        { name: 'Paper', count: 156 },
        { name: 'Copy and Multipurpose Paper', count: 78 },
        { name: 'Laser Printer Paper', count: 42 },
        { name: 'Laser Printer Paper', count: 42 },
        { name: 'All Printers', count: 98 },
        { name: 'Laser Printer Paper', count: 23 },
        { name: 'Laser Printers', count: 56 },
        { name: 'All Printers', count: 87 },
    ];

    const brands = [
        'Amazon',
        'Brother',
        'Canon',
        'Epson',
        'Ecocomix',
        'Epson',
        'HP',
        'Indigo',
        'Locffobo',
        'NU',
        'Nico Navigator',
        'PIXMA',
        'Ubit',
        'Mythback',
        'HP LaserJet Pro',
        'HP DeskJet 2855e',
    ];

    const totalPages = 10;

    const renderPagination = () => {
        const pages = [];
        const maxVisible = 5;

        if (currentPage > 1) {
            pages.push(
                <button
                    key="prev"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm"
                >
                    «
                </button>
            );
        }

        for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`px-3 py-2 border rounded-md text-sm transition-colors ${currentPage === i
                        ? 'bg-sky-500 text-white border-sky-500'
                        : 'border-gray-300 hover:bg-gray-100'
                        }`}
                >
                    {i}
                </button>
            );
        }

        if (totalPages > maxVisible) {
            pages.push(
                <button
                    key="next"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors text-sm"
                >
                    »
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section
                className="relative bg-gray-800 text-white min-h-[50vh] sm:min-h-[60vh] lg:min-h-[65vh] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/guideprinter.avif')"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Shop</h1>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="w-full lg:w-64 flex-shrink-0">
                            {/* Categories */}
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Categories</h3>
                                <div className="space-y-2 max-h-96 overflow-y-auto">
                                    {categories.map((category, index) => (
                                        <label key={index} className="flex items-center gap-2 cursor-pointer text-sm">
                                            <input type="checkbox" className="w-4 h-4 text-sky-500" />
                                            <span className="text-gray-700">{category.name}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Price</h3>
                                <div className="space-y-3">
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                                    />
                                </div>
                            </div>

                            {/* Make Filter */}
                            <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                                <h3 className="font-bold text-gray-900 mb-4 text-lg">Make</h3>
                                <div className="space-y-2 max-h-64 overflow-y-auto">
                                    {brands.map((brand, index) => (
                                        <label key={index} className="flex items-center gap-2 cursor-pointer text-sm">
                                            <input type="checkbox" className="w-4 h-4 text-sky-500" />
                                            <span className="text-gray-700">{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Reset Button */}
                            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md font-medium text-sm transition-colors">
                                Reset
                            </button>
                        </aside>

                        {/* Products Grid */}
                        <div className="flex-1">
                            <div className="mb-6">
                                <p className="text-gray-600 text-sm">
                                    Showing 1 to 12 of 120 results
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
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
                                        <div className="p-4">
                                            <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                                            <h3 className="font-semibold text-gray-900 mb-3 text-sm line-clamp-2 min-h-[2.5rem]">
                                                {product.name}
                                            </h3>
                                            <p className="text-xl font-bold text-gray-900 mb-4">
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

                            {/* Pagination */}
                            <div className="flex justify-center gap-1 flex-wrap">
                                {renderPagination()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
