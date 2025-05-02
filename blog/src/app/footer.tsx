import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white shadow-md border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">BlogSite</h3>
            <p className="mt-2 text-sm text-gray-600">
              Sharing insights, tutorials, and stories to inspire and educate developers.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link href="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link href="/categories" className="hover:text-blue-500">Categories</Link></li>
              <li><Link href="/about" className="hover:text-blue-500">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Follow Us</h4>
            <div className="flex space-x-4 text-gray-600 text-xl">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} BlogSite. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
