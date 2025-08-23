import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Natura Dairy</h3>
            <p className="mb-4 text-gray-400">
              Premium dairy products from our Holstein Friesian cows, raised with care in the serene environment of Gondia, Maharashtra.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-natura-green transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-natura-green transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-natura-green transition-colors">
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Our Approach</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Fresh Whole Milk</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Natural Yogurt</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Farm Butter</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Artisan Cheese</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Wholesale Options</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-natura-green mr-3 mt-1" />
                <span className="text-gray-400">Natura Dairy Farm, Gondia, Maharashtra, India - 441614</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="text-natura-green mr-3 mt-1" />
                <span className="text-gray-400">+91 92846 28559</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-natura-green mr-3 mt-1" />
                <span className="text-gray-400">info@naturadairy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Natura Dairy. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer