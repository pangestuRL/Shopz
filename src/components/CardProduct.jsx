import { Link } from 'react-router-dom';
import {useState} from 'react';
import {FiHeart} from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa';


export default function CardProduct({ product }) {
  const finalPrice = product.price - (product.price * product.discountPercentage) / 100;
  const [liked, setLiked] = useState(false);
  const toggleLike = (e) => {
    e.preventDefault();
    setLiked(prev => !prev);
  }

  return (
    <div className="relative w-full max-w-xs">
        <button onClick={toggleLike} className="absolute z-20 hover:text-red-500 transition">{liked ? (<FaHeart className="w-5 h-5 text-red-500"/>) : (<FiHeart className="w-5 h-5 text-gray-500"/>)}</button>
    <Link to={`/product/${product.id}`}>
        <div className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 duration-300 w-full max-w-xs flex flex-col justify-between">
            <div className="h-36 bg-white flex items-center justify-center">
                <img
                src={product.thumbnail}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
                />
            </div>

            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-sm font-semibold truncate" title={product.title}>
                {product.title}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                <span className="text-green-600 font-bold text-sm">${finalPrice.toFixed(2)}</span>
                <span className="text-gray-400 text-xs line-through">${product.price.toFixed(2)}</span>
                </div>
                <div className="text-xs text-yellow-500 mt-1 mb-2">
                    ⭐ {product.rating.toFixed(1)}
                    <span className="text-gray-500 ml-1">
                        ({product.reviews?.length ?? 0} reviews)
                    </span>
                </div>

                <div className="hidden group-hover:flex">
                <button
                    onClick={() => alert(`Added "${product.title}" to cart`)}
                    className="w-full bg-green-600 text-white text-sm py-2 rounded-full transition duration-300 shadow-md"
                >
                    Add to Cart
                </button>
                </div>
            </div>
        </div>
    </Link>
    </div>
  );
}
