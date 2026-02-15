export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Montana Summer Adventures</h3>
            <p className="text-gray-300 leading-relaxed">
              Authentic Montana experiences in the heart of Big Sky Country.
              Creating unforgettable memories since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#activities" className="text-gray-300 hover:text-white transition-colors">
                  Adventures
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                📞{" "}
                <a href="tel:+14063608106" className="hover:text-white transition-colors">
                  (406) 360-8106
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:info@montanasummeradventures.com" className="hover:text-white transition-colors">
                  info@montanasummeradventures.com
                </a>
              </li>
              <li>📍 66 Swamp Creek Rd, Plains, MT 59859</li>
            </ul>
            {/* Social Media */}
            <div className="mt-4">
              <a
                href="https://www.facebook.com/p/Montana-Summer-Adventures-100064240896314/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Montana Summer Adventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
