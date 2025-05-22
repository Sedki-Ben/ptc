import './App.css';
import { FiSearch, FiArrowRight } from 'react-icons/fi';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-serif font-bold">MY FOOTBALL JOURNAL</h1>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/analysis" className="text-gray-700 hover:text-gray-900">Analysis</a>
            <a href="/stories" className="text-gray-700 hover:text-gray-900">Stories</a>
            <a href="/notable-work" className="text-gray-700 hover:text-gray-900">Notable Work</a>
            <a href="/archive" className="text-gray-700 hover:text-gray-900">Archive</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About</a>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              Subscribe
            </button>
            <a href="/signin" className="text-gray-700 hover:text-gray-900">Sign In</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-gray-900 to-gray-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">
            The Beautiful Game Through My Lens
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Analysis, stories, and insights from the world of football
          </p>
          <button className="flex items-center space-x-2 px-6 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 w-fit">
            <span>Read the Latest</span>
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* Most Popular Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-serif mb-8">Most Popular</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
                </div>
                <h4 className="font-serif text-xl mb-2 group-hover:text-blue-900">
                  Article Headline Placeholder
                </h4>
                <p className="text-sm text-gray-600">
                  John Doe • January 1, 2024
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis & Stories Sections (Commented out for future use)
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-serif">Analysis</h3>
            <a href="/analysis" className="text-blue-900 hover:text-blue-800">View All</a>
          </div>
        </div>
      </section>
      */}
    </div>
  );
}

export default App;
