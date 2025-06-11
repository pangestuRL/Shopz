import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import CardProduct from '../components/CardProduct'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        fetch(`https://dummyjson.com/products/category/${data.category}`)
          .then(res => res.json())
          .then(cat => {
            const filtered = cat.products.filter(p => p.id !== data.id);
            setRelated(filtered.slice(0, 4));
          });
      });
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  const finalPrice = product.price - (product.price * product.discountPercentage) / 100;
  const shareUrl = window.location.href;

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <Link to="/" className="hover:text-green-600 font-medium">Home</Link>
        <FiChevronRight className="mx-2 text-gray-400" />
        <Link to={`/category/${product.category}`} className="hover:text-green-600 capitalize">
          {product.category.replace('-', ' ')}
        </Link>
        <FiChevronRight className="mx-2 text-gray-400" />
        <span className="text-gray-800 font-semibold truncate">{product.title}</span>
      </nav>

      {/* Detail Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Gambar produk */}
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center">
          <img
            src={product.images?.[0] || product.thumbnail}
            alt={product.title}
            className="h-80 object-contain rounded-md"
          />
        </div>

        {/* Informasi produk */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-green-600">${finalPrice.toFixed(2)}</span>
            <span className="line-through text-gray-400 text-sm">${product.price.toFixed(2)}</span>
            <span className="text-red-500 text-sm">-{product.discountPercentage}%</span>
          </div>

          <div className="flex items-center mb-4 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={i < Math.round(product.rating) ? '' : 'text-gray-300'}>★</span>
            ))}
            <span className="ml-2 text-sm text-gray-600">({product.rating.toFixed(1)})</span>
          </div>

          <div className="text-sm space-y-1">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Stock:</strong> {product.stock}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Weight:</strong> {product.weight}g</p>
            <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
            <p><strong>Warranty:</strong> {product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> {product.shippingInformation}</p>
            <p><strong>Status:</strong> {product.availabilityStatus}</p>
          </div>

          <button className="mt-5 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full shadow-md transition">
            Add to Cart
          </button>

          {/* Share Buttons */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm text-gray-600">Share:</span>
            <FacebookShareButton url={shareUrl}><FacebookIcon size={32} round /></FacebookShareButton>
            <TwitterShareButton url={shareUrl}><TwitterIcon size={32} round /></TwitterShareButton>
            <WhatsappShareButton url={shareUrl}><WhatsappIcon size={32} round /></WhatsappShareButton>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        {product.reviews?.length > 0 ? (
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{review.reviewerName}</span>
                  <span className="text-yellow-500 text-sm">⭐ {review.rating}/5</span>
                </div>
                <p className="text-gray-600 text-sm">{review.comment}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500 italic">No reviews available.</p>
        )}
      </div>

      {/* Related Products */}
        {related.length > 0 && (
        <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Related Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {related.map(item => (
                <CardProduct key={item.id} product={item} />
            ))}
            </div>
        </div>
        )}
    </motion.div>
  );
}
