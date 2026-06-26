"use client";

import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    { id: 1, name: "Premium Notebook", price: "$12.99", color: "bg-blue-100", icon: "📓", description: "High-quality 200-page notebook perfect for note-taking. Features smooth paper and durable binding. Available in multiple colors." },
    { id: 2, name: "Gel Pen Set", price: "$8.49", color: "bg-purple-100", icon: "✏️", description: "Set of 12 smooth-writing gel pens in vibrant colors. Quick-drying ink and comfortable grip for extended writing sessions." },
    { id: 3, name: "Highlighters Pack", price: "$6.99", color: "bg-yellow-100", icon: "🎨", description: "Pack of 6 neon highlighters with fluorescent ink. Perfect for marking important text in textbooks and notes." },
    { id: 4, name: "Backpack Pro", price: "$45.99", color: "bg-red-100", icon: "🎒", description: "Spacious and ergonomic backpack with padded shoulder straps. Multiple compartments for books, laptop, and accessories. Water-resistant material." },
    { id: 5, name: "Calculator", price: "$14.99", color: "bg-green-100", icon: "🧮", description: "Scientific calculator with 240 functions. Solar and battery powered. Perfect for algebra, trigonometry, and calculus." },
    { id: 6, name: "Index Cards", price: "$4.99", color: "bg-pink-100", icon: "📇", description: "Pack of 100 index cards (3x5 inches). Plain white cards ideal for studying, flashcards, and organization." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black font-sans">
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black dark:text-white">SchoolHub</h1>
          <div className="flex gap-6">
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Home</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">Shop</a>
            <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white">About</a>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">School Supplies for Success</h2>
          <p className="text-xl text-blue-100 mb-8">Everything you need for an amazing school year</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 w-full">
        <h3 className="text-3xl font-bold text-black dark:text-white mb-12">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`${product.color} h-40 flex items-center justify-center text-6xl`}>
                {product.icon}
              </div>
              <div className="p-6">
                <h4 className="text-lg font-semibold text-black dark:text-white mb-2">{product.name}</h4>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">{product.price}</p>
                <button onClick={() => setSelectedProduct(product)} className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-zinc-900 dark:bg-black text-white mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-400">© 2024 SchoolHub. All rights reserved.</p>
        </div>
      </footer>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-zinc-900 rounded-lg max-w-md w-full p-8">
            <div className="text-6xl mb-4 text-center">{selectedProduct.icon}</div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">{selectedProduct.name}</h2>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">{selectedProduct.price}</p>
            <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">{selectedProduct.description}</p>
            <div className="flex gap-3">
              <button onClick={() => setSelectedProduct(null)} className="flex-1 bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white py-2 rounded-lg font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors">
                Close
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      <button className="fixed bottom-6 left-6 px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-[#383838] dark:bg-white dark:text-black dark:hover:bg-[#ccc]">
        Open
      </button>
    </div>
  );
}
