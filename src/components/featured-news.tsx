import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../data/newsData';
import { Badge } from './ui/badge';

interface FeaturedNewsProps {
  article: NewsArticle;
  onArticleClick: (articleId: string) => void;
}

export function FeaturedNews({ article, onArticleClick }: FeaturedNewsProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div 
        className="relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        onClick={() => onArticleClick(article.id)}
      >
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="relative h-64 lg:h-96 overflow-hidden">
            <ImageWithFallback
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="destructive" className="bg-red-600">
                {article.category}
              </Badge>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-6 lg:p-8 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl mb-4 text-gray-900 group-hover:text-red-600 transition-colors">
              {article.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {article.summary}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <span>By {article.author}</span>
              <span>•</span>
              <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}