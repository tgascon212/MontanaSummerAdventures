export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10"></div>

      {/* Background Image - Replace with actual Montana image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Experience the Real Montana
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white mb-8 drop-shadow-md max-w-3xl mx-auto">
          Authentic Western Adventures in the Heart of Big Sky Country
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#activities"
            className="bg-earth-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-earth-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Explore Adventures
          </a>
          <a
            href="#contact"
            className="bg-white text-earth-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            Book Your Adventure
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
