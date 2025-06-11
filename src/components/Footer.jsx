import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm px-4 mt-4">
      <div className="container mx-auto px-4 py-12 flex justify-between gap-10">
        {/* Company Info */}
        <div className="w-80">
          <h1 className="text-2xl font-bold text-white mb-4">Shopz</h1>
          <p className="text-justify">
            Online brand clothing founded in 2006 in Japan. Heavenly focuses on
            selling only quality and branded items, limited edition collections by
            best fashion designer.
          </p>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-white font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Information</a></li>
            <li><a href="#" className="hover:text-white text-sm">Store Locator</a></li>
            <li><a href="#" className="hover:text-white">Bulk Purchase</a></li>
            <li><a href="#" className="hover:text-white">Alteration Service</a></li>
            <li><a href="#" className="hover:text-white">Gift Delivery Service</a></li>
            <li><a href="#" className="hover:text-white">Live Station</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Online Shopping Guide</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-white font-semibold mb-4">Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Membership</a></li>
            <li><a href="#" className="hover:text-white">Profile</a></li>
            <li><a href="#" className="hover:text-white">Coupons</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Social Media</h3>
          <div className="flex flex-col space-y-2">
            <a href="#" className="flex items-center space-x-2 hover:text-white">
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-white">
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-white">
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:text-white">
              <FaYoutube /> <span>Youtube</span>
            </a>
          </div>
        </div>
      </div>

      <div className="py-6 px-4 text-center text-gray-400 flex flex-col sm:flex-row justify-between max-w-7xl mx-auto">
        <p className="mt-4 sm:mt-0">&copy; Shopz {new Date().getFullYear()}. All rights reserved.</p>
        <p className="mt-4 sm:mt-0">Privacy Policy - Terms and Conditions</p>
      </div>
    </footer>
  );
}