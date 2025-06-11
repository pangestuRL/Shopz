import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function CategoryPage() {
  const { category } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Search, filter, sort
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}?limit=100`)
      .then(res => res.json())
      .then(data => {
        setAllProducts(data.products);
        setIsLoading(false);
        setCurrentPage(1); // reset ke halaman 1 saat category berubah
      });
  }, [category]);

  const filteredProducts = allProducts
    .filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(p => (priceFilter ? p.price <= Number(priceFilter) : true))
    .sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price :
      sortOrder === 'desc' ? b.price - a.price :
      0
    );

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-green-600 font-medium">Home</Link>
        <FiChevronRight className="mx-2 text-gray-400" />
        <span className="capitalize text-gray-800 font-semibold">
          {category.replace('-', ' ')}
        </span>
      </nav>

      <h2 className="text-2xl font-semibold capitalize mb-6">
        {category.replace('-', ' ')}
      </h2>

      {/* Filter & Search */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="border px-3 py-2 rounded-md w-60"
        />
        <input
          type="number"
          placeholder="Max Harga"
          value={priceFilter}
          onChange={e => setPriceFilter(e.target.value)}
          className="border px-3 py-2 rounded-md w-40"
        />
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className="border px-3 py-2 rounded-md"
        >
          <option value="">Sortir</option>
          <option value="asc">Harga Termurah</option>
          <option value="desc">Harga Termahal</option>
        </select>
      </div>

      {/* Produk Grid */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: productsPerPage }).map((_, i) => (
            <div key={i} className="bg-gray-200 animate-pulse h-64 rounded-lg"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {currentProducts.map(product => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CardProduct product={product} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {!isLoading && (
        <div className="flex justify-center items-center gap-4 mt-8 text-sm text-gray-600">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-30"
          >
            ‹
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-30"
          >
            ›
          </button>
        </div>
      )}
    </motion.div>
  );
}
