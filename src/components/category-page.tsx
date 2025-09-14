import { ArrowLeft, Calendar, User, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from './figma/ImageWithFallback';
import { NewsCard } from "./news-card";

interface CategoryPageProps {
  category: string;
  articles: Array<{
    id: string;
    title: string;
    summary: string;
    content: string;
    author: string;
    publishedDate: string;
    category: string;
    imageUrl: string;
    readTime: string;
  }>;
  onBack: () => void;
  onArticleClick: (articleId: string) => void;
}

export function CategoryPage({ category, articles, onBack, onArticleClick }: CategoryPageProps) {
  const categoryArticles = articles.filter(article => 
    category === 'Home' ? true : article.category.toLowerCase() === category.toLowerCase()
  );

  const featuredArticle = categoryArticles[0];
  const otherArticles = categoryArticles.slice(1);

  const getCategoryDescription = (category: string) => {
    const descriptions: { [key: string]: string } = {
      'World': 'International news, global events, and world affairs coverage',
      'Asia': 'Latest news and developments from across Asia and the Pacific region',
      'India': 'Breaking news, politics, business, and culture from India',
      'Business': 'Financial markets, corporate news, and economic developments',
      'Technology': 'Tech innovations, digital trends, and industry insights',
      'Entertainment': 'Movies, music, celebrities, and entertainment industry news',
      'Sports': 'Sports news, match results, and athletic achievements worldwide',
    };
    return descriptions[category] || 'Latest news and updates';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onBack}
                className="text-slate-600 hover:text-primary"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-slate-300"></div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">{category}</h1>
                <p className="text-slate-600 mt-1">{getCategoryDescription(category)}</p>
              </div>
            </div>
            <div className="text-sm text-slate-500">
              {categoryArticles.length} articles
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {featuredArticle && (
          <>
            {/* Featured Article */}
            <div className="mb-12">
              <div className="relative">
                <div className="aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/10] overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={featuredArticle.imageUrl}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => onArticleClick(featuredArticle.id)}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="max-w-2xl">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded mb-4">
                      Featured Story
                    </span>
                    <h2 
                      className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 cursor-pointer hover:text-red-200 transition-colors"
                      onClick={() => onArticleClick(featuredArticle.id)}
                    >
                      {featuredArticle.title}
                    </h2>
                    <p className="text-slate-200 mb-4 line-clamp-2">
                      {featuredArticle.summary}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-slate-300">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredArticle.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric',
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Articles */}
            {otherArticles.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">More {category} News</h2>
                  <div className="text-sm text-slate-500">
                    {otherArticles.length} more articles
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherArticles.map((article) => (
                    <NewsCard
                      key={article.id}
                      article={article}
                      onClick={() => onArticleClick(article.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {categoryArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Calendar className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">
              There are currently no articles in the {category} category.
            </p>
            <Button
              onClick={onBack}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white"
            >
              Back to Home
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}