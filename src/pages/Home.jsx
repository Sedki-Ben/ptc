import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';


import heroImage from '../assets/images/heroes/football-stadium.jpg';
import article1Image from '../assets/images/articles/champions-league.jpg';
import article2Image from '../assets/images/articles/world-cup.jpg';
import article3Image from '../assets/images/articles/premier-league.png';

function Home() {
  const popularArticles = [
    {
      id: 1,
      title: "Tactical Analysis: Champions League Final",
      author: "John Doe",
      date: "January 15, 2024",
      image: article1Image,
      excerpt: "Breaking down the key moments that decided Europe's biggest game"
    },
    {
      id: 2,
      title: "World Cup 2026: Early Predictions",
      author: "Jane Smith",
      date: "January 10, 2024",
      image: article2Image,
      excerpt: "Which teams are shaping up to be contenders in North America"
    },
    {
      id: 3,
      title: "Premier League Title Race Heats Up",
      author: "Mike Johnson",
      date: "January 5, 2024",
      image: article3Image,
      excerpt: "Why this might be the closest title race in recent memory"
    }
  ];

  return (
    <>
      {/* Hero Section with real image */}
      <section className="relative h-[60vh]">
        <img 
          src={heroImage} 
          alt="Football stadium at night" 
          className="absolute inset-0 w-full h-full object-cover"
        />
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

      {/* Most Popular Section with real articles */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-serif mb-8">Most Popular</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularArticles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id} className="group cursor-pointer">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-serif text-xl mb-2 group-hover:text-blue-900">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {article.author} • {article.date}
                </p>
                <p className="text-gray-700 mt-2">{article.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// This is the crucial line that must exist:
export default Home;