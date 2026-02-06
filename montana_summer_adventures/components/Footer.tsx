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
                <a href="tel:+14065551234" className="hover:text-white transition-colors">
                  (406) 555-1234
                </a>
              </li>
              <li>
                ✉️{" "}
                <a href="mailto:info@montanasummeradventures.com" className="hover:text-white transition-colors">
                  info@montanasummeradventures.com
                </a>
              </li>
              <li>📍 Montana, USA</li>
            </ul>
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
