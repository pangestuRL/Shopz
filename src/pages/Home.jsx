export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-100 flex items-center justify-center px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Welcome to <span className="text-green-600">Shopz</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Discover everything you need in one place. From fashion to electronics,
            Shopz is your ultimate online marketplace. Quality products. Great deals.
            Fast delivery.
          </p>
          <a
            href="/category/skin-care"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Start Shopping
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src="https://illustrations.popsy.co/gray/online-shopping.svg"
            alt="Online Shopping Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </div>
  );
}
