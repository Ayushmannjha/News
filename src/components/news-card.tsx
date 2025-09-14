import { ImageWithFallback } from './figma/ImageWithFallback';
import type { NewsArticle } from '../data/newsData';
import { Badge } from './ui/badge';

interface NewsCardProps {
  article: NewsArticle;
  onArticleClick?: (articleId: string) => void;
  onClick?: (articleId: string) => void;
  variant?: 'default' | 'compact';
}

export function NewsCard({ article, onArticleClick, onClick, variant = 'default' }: NewsCardProps) {
  const handleClick = () => {
    if (onClick) onClick(article.id);
    else if (onArticleClick) onArticleClick(article.id);
  };
  if (variant === 'compact') {
    return (
      <div 
        className="flex space-x-3 cursor-pointer group"
        onClick={handleClick}
      >
        <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded">
          <ImageWithFallback
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h4>
          <div className="flex items-center text-xs text-slate-500 mt-1 space-x-2">
            <span>{article.category}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article 
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
      onClick={handleClick}
    >
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-primary text-primary-foreground text-xs">
            {article.category}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm mb-3 line-clamp-2">
          {article.summary}
        </p>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>By {article.author}</span>
          <div className="flex items-center space-x-2">
            <span>{new Date(article.publishedDate).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric' 
            })}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}