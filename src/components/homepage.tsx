import { FeaturedNews } from './featured-news';
import { NewsGrid } from './news-grid';
import { Sidebar } from './sidebar';
import  {  categories } from '../data/newsData';
import type {NewsArticle} from '../data/newsData';
interface HomepageProps {
  featuredArticle: NewsArticle;
  articles: NewsArticle[];
  currentCategory: string;
  onArticleClick: (articleId: string) => void;
  onViewAllCategory: (category: string) => void;
}

export function Homepage({ featuredArticle, articles, currentCategory, onArticleClick, onViewAllCategory }: HomepageProps) {
  const getArticlesByCategory = (category: string) => {
    if (category === "Home" || category === "Top Stories") {
      return articles.slice(0, 8);
    }
    return articles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    ).slice(0, 4);
  };

  const getCategoriesForHomepage = () => {
    if (currentCategory === "Home") {
      return categories.filter(cat => cat !== "Top Stories").slice(0, 4);
    }
    return [currentCategory];
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Featured News */}
      <FeaturedNews 
        article={featuredArticle}
        onArticleClick={onArticleClick}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Banner Ad */}
            <div className="bg-slate-100 rounded-lg p-6 text-center">
              <div className="text-slate-500 text-sm mb-2">Advertisement</div>
              <div className="bg-white rounded p-8 border-2 border-dashed border-slate-300">
                <div className="text-slate-400">
                  <div className="text-xl mb-2">Your Ad Here</div>
                  <div className="text-sm">728 x 90</div>
                </div>
              </div>
            </div>

            {/* News Sections */}
            {getCategoriesForHomepage().map((category) => {
              const categoryArticles = getArticlesByCategory(category);
              if (categoryArticles.length === 0) return null;
              
              return (
                <NewsGrid
                  key={category}
                  title={category}
                  articles={categoryArticles}
                  onArticleClick={onArticleClick}
                  onViewAll={() => onViewAllCategory(category)}
                />
              );
            })}

            {/* Mid-content Ad */}
            <div className="bg-slate-100 rounded-lg p-6 text-center">
              <div className="text-slate-500 text-sm mb-2">Advertisement</div>
              <div className="bg-white rounded p-12 border-2 border-dashed border-slate-300">
                <div className="text-slate-400">
                  <div className="text-xl mb-2">Your Ad Here</div>
                  <div className="text-sm">728 x 200</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar 
              articles={articles}
              onArticleClick={onArticleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}