import { Routes, Route, Link } from 'react-router-dom';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import Home from './pages/Home';
import Analysis from './pages/Analysis';
import Stories from './pages/Stories';
import NotableWork from './pages/NotableWork';
import Archive from './pages/Archive';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Reusable across all pages */}
      <header className="px-6 py-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-xl font-serif font-bold">MY FOOTBALL JOURNAL</Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/analysis" className="text-gray-700 hover:text-gray-900">Analysis</Link>
            <Link to="/stories" className="text-gray-700 hover:text-gray-900">Stories</Link>
            <Link to="/notable-work" className="text-gray-700 hover:text-gray-900">Notable Work</Link>
            <Link to="/archive" className="text-gray-700 hover:text-gray-900">Archive</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800">
              Subscribe
            </button>
            <Link to="/signin" className="text-gray-700 hover:text-gray-900">Sign In</Link>
          </div>
        </div>
      </header>

      {/* Main Content - Dynamic based on route */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/notable-work" element={<NotableWork />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;