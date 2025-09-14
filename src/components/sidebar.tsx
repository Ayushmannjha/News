import { NewsCard } from './news-card';
import  {  trendingStories, mostReadStories } from '../data/newsData';
import { TrendingUp, Eye, ExternalLink } from 'lucide-react';
import type {NewsArticle} from '../data/newsData';
interface SidebarProps {
  articles: NewsArticle[];
  onArticleClick: (articleId: string) => void;
}

export function Sidebar({ articles, onArticleClick }: SidebarProps) {
  const getTrendingArticles = () => {
    return trendingStories.map(trending => 
      articles.find(article => article.id === trending.id)
    ).filter(Boolean) as NewsArticle[];
  };

  const getMostReadArticles = () => {
    return mostReadStories.map(mostRead => 
      articles.find(article => article.id === mostRead.id)
    ).filter(Boolean) as NewsArticle[];
  };

  return (
    <aside className="space-y-8">
      {/* Advertisement */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <div className="text-gray-500 text-sm mb-2">Advertisement</div>
        <div className="bg-white rounded p-8 border-2 border-dashed border-gray-300">
          <div className="text-gray-400">
            <div className="text-lg mb-2">Your Ad Here</div>
            <div className="text-sm">300 x 250</div>
          </div>
        </div>
      </div>

      {/* Trending Stories */}
      <div>
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-red-600 mr-2" />
          <h3 className="text-lg text-gray-900">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {getTrendingArticles().slice(0, 5).map((article, index) => (
            <div key={article.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <NewsCard
                  article={article}
                  onArticleClick={onArticleClick}
                  variant="compact"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Read */}
      <div>
        <div className="flex items-center mb-4">
          <Eye className="h-5 w-5 text-red-600 mr-2" />
          <h3 className="text-lg text-gray-900">Most Read</h3>
        </div>
        <div className="space-y-4">
          {getMostReadArticles().slice(0, 5).map((article, index) => (
            <div key={article.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm">
                {index + 1}
              </div>
              <div className="flex-1 min-w-0">
                <NewsCard
                  article={article}
                  onArticleClick={onArticleClick}
                  variant="compact"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg text-gray-900 mb-4">Quick Links</h3>
        <div className="space-y-2">
          {[
            'Weather Forecast',
            'Stock Market',
            'Currency Exchange',
            'Sports Scores',
            'Travel Updates',
            'Health Tips'
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors"
            >
              <ExternalLink className="h-3 w-3 mr-2" />
              {link}
            </a>
          ))}
        </div>
      </div>

      {/* Advertisement */}
      <div className="bg-gray-100 rounded-lg p-6 text-center">
        <div className="text-gray-500 text-sm mb-2">Advertisement</div>
        <div className="bg-white rounded p-8 border-2 border-dashed border-gray-300">
          <div className="text-gray-400">
            <div className="text-lg mb-2">Your Ad Here</div>
            <div className="text-sm">300 x 600</div>
          </div>
        </div>
      </div>
    </aside>
  );
}