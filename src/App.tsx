import { useState } from 'react';
import { Header } from './components/header';
import { Homepage } from './components/homepage';
import { ArticlePage } from './components/article-page';
import { CategoryPage } from './components/category-page';
import { Footer } from './components/footer';
import { featuredArticle, newsArticles } from './data/newsData';

type ViewType = 'home' | 'article' | 'category';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentCategory, setCurrentCategory] = useState('Home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    if (category === 'Home') {
      setCurrentView('home');
    } else {
      setCurrentView('category');
    }
  };

  const handleViewAllCategory = (category: string) => {
    setCurrentCategory(category);
    setCurrentView('category');
  };

  const handleArticleClick = (articleId: string) => {
    setSelectedArticleId(articleId);
    setCurrentView('article');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedArticleId(null);
  };

  const getCurrentArticle = () => {
    if (!selectedArticleId) return null;
    if (selectedArticleId === featuredArticle.id) return featuredArticle;
    return newsArticles.find(article => article.id === selectedArticleId) || null;
  };

  const getRelatedArticles = (currentArticle: typeof featuredArticle) => {
    return newsArticles
      .filter(article => 
        article.category === currentArticle.category && 
        article.id !== currentArticle.id
      )
      .slice(0, 4);
  };

  const allArticles = [featuredArticle, ...newsArticles];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        currentCategory={currentCategory}
        onCategoryChange={handleCategoryChange}
      />
      
      <main className="flex-1">
        {currentView === 'home' ? (
          <Homepage
            featuredArticle={featuredArticle}
            articles={newsArticles}
            currentCategory={currentCategory}
            onArticleClick={handleArticleClick}
            onViewAllCategory={handleViewAllCategory}
          />
        ) : currentView === 'category' ? (
          <CategoryPage
            category={currentCategory}
            articles={[featuredArticle, ...newsArticles]}
            onBack={handleBackToHome}
            onArticleClick={handleArticleClick}
          />
        ) : (
          (() => {
            const currentArticle = getCurrentArticle();
            if (!currentArticle) {
              handleBackToHome();
              return null;
            }
            
            return (
              <ArticlePage
                article={currentArticle}
                relatedArticles={getRelatedArticles(currentArticle)}
                onBack={handleBackToHome}
                onArticleClick={handleArticleClick}
              />
            );
          })()
        )}
      </main>
      
      <Footer />
    </div>
  );
}