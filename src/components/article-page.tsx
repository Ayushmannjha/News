import { ArrowLeft, Share2, BookmarkPlus, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../data/newsData';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { NewsCard } from './news-card';

interface ArticlePageProps {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
  onBack: () => void;
  onArticleClick: (articleId: string) => void;
}

export function ArticlePage({ article, relatedArticles, onBack, onArticleClick }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="text-gray-600 hover:text-red-600 mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to News
        </Button>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Article Content */}
          <div className="lg:col-span-2">
            <article>
              {/* Article Header */}
              <header className="mb-8">
                <div className="mb-4">
                  <Badge variant="destructive" className="bg-red-600">
                    {article.category}
                  </Badge>
                </div>
                
                <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900 leading-tight">
                  {article.title}
                </h1>
                
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {article.summary}
                </p>
                
                {/* Article Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-6 mb-8">
                  <div className="flex items-center text-sm text-gray-600 mb-4 sm:mb-0">
                    <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center mr-3">
                      {article.author.charAt(0)}
                    </div>
                    <div>
                      <div>By <span className="text-gray-900">{article.author}</span></div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {Math.floor(Math.random() * 10000) + 1000} views
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <BookmarkPlus className="h-4 w-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>
              </header>

              {/* Hero Image */}
              <div className="mb-8">
                <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Advertisement */}
              <div className="bg-gray-100 rounded-lg p-6 text-center mb-8">
                <div className="text-gray-500 text-sm mb-2">Advertisement</div>
                <div className="bg-white rounded p-12 border-2 border-dashed border-gray-300">
                  <div className="text-gray-400">
                    <div className="text-xl mb-2">Your Ad Here</div>
                    <div className="text-sm">728 x 90</div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-lg mb-4 text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['breaking news', article.category.toLowerCase(), 'global', 'politics', 'economy'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Related Articles Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Related Articles */}
              <div>
                <h3 className="text-xl mb-6 text-gray-900 border-l-4 border-red-600 pl-4">
                  Related Articles
                </h3>
                <div className="space-y-6">
                  {relatedArticles.slice(0, 4).map((relatedArticle) => (
                    <NewsCard
                      key={relatedArticle.id}
                      article={relatedArticle}
                      onArticleClick={onArticleClick}
                    />
                  ))}
                </div>
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}