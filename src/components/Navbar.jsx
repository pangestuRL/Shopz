import { useState, useEffect } from 'react';
import { HiOutlineSearch, HiOutlineBell, HiOutlineHeart, HiOutlineShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [categories, setCategories] = useState([]);

  // Ambil data kategori dari API saat komponen dimuat
  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
      .then(res => res.json())
      .then(data => setCategories(data)); // Set data kategori ke state
  }, []);

  // Kelompokkan kategori yang relevan
  const groupedCategories = {
    'Men': ['mens-shirts', 'mens-shoes', 'mens-watches'],
    'Women': ['womens-bags', 'womens-dresses', 'womens-jewellery', 'womens-shoes', 'womens-watches'],
    'Electronics': ['smartphones', 'laptops', 'tablets', 'mobile-accessories'],
    'Home': ['furniture', 'groceries', 'home-decoration', 'kitchen-accessories', 'sports-accessories'],
    'Beauty & Health': ['beauty', 'fragrances', 'skin-care'],
    'Vehicle & Accessories': ['motorcycle', 'vehicle'],
    'Fashion & Accessories':['sunglasses', 'tops'],
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-10 items-center">
          <h1 className="text-2xl font-bold text-green-600">Shopz</h1>

          <div className="hidden md:flex space-x-8 font-medium text-gray-700">
            {/* Dropdown for Home */}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Home
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Home'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for Men */}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Men
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Men'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for Women */}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Women
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Women'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for Beauty & Health */}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Beauty & Health
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Beauty & Health'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for  Fashion & Accessories*/}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Fashion & Accessories
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Fashion & Accessories'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for Electronics */}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Electronics
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Electronics'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>

            {/* Dropdown for Vehicle & Accessories */}
            <div className="relative group">
              <button className="hover:text-green-600 text-sm">
                Vehicle & Accessories
              </button>
              <div className="absolute z-50 bg-white shadow-lg rounded-lg py-2 mt-2 w-40 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300">
                {groupedCategories['Vehicle & Accessories'].map((category, index) => (
                  <Link
                    key={index}
                    to={`/category/${category}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                  >
                    {category.replace('-', ' ')}
                  </Link>
                ))}
              </div>
            </div>
      </div>
      <div className="flex items-center space-x-8 text-white">
          <HiOutlineSearch className="w-5 h-5 text-white stroke-gray-500 stroke-2 hover:stroke-green-600" />
          <HiOutlineBell className="w-5 h-5 text-white stroke-gray-500 stroke-2 hover:stroke-green-600" />
          <HiOutlineHeart className="w-5 h-5 text-white stroke-gray-500 stroke-2 hover:stroke-green-600" />
          <HiOutlineShoppingCart className="w-5 h-5 text-white stroke-gray-500 stroke-2 hover:stroke-green-600" />
          <img
            src="https://i.pravatar.cc/32"
            alt="Profile"
            className="w-8 h-8 rounded-full border-4 border-gray-200 hover:border cursor-pointer"
          />
        </div>
      </div>
    </div>
    </nav>
  );
}
