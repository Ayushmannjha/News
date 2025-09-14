import { NewsCard } from './news-card';
import type { NewsArticle } from '../data/newsData';

interface NewsGridProps {
  title: string;
  articles: NewsArticle[];
  onArticleClick: (articleId: string) => void;
  onViewAll?: () => void;
}

export function NewsGrid({ title, articles, onArticleClick, onViewAll }: NewsGridProps) {
  if (articles.length === 0) return null;

  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl text-slate-900 border-l-4 border-primary pl-4">
          {title}
        </h2>
        {onViewAll && (
          <button 
            onClick={onViewAll}
            className="text-primary hover:text-blue-700 text-sm font-medium transition-colors"
          >
            View all →
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {articles.map((article) => (
          <NewsCard
            key={article.id}
            article={article}
            onArticleClick={onArticleClick}
          />
        ))}
      </div>
    </section>
  );
}