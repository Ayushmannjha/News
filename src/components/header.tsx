import { Search, Menu, X, Home, Globe, MapPin, Building, Laptop, Film, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

interface HeaderProps {
  currentCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function Header({ currentCategory = "Home", onCategoryChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { name: "Home", icon: Home },
    { name: "World", icon: Globe }, 
    { name: "Asia", icon: MapPin },
    { name: "India", icon: MapPin },
    { name: "Business", icon: Building },
    { name: "Technology", icon: Laptop }, 
    { name: "Entertainment", icon: Film },
    { name: "Sports", icon: Trophy }
  ];

  const handleCategoryClick = (category: string) => {
    onCategoryChange?.(category);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-1">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-sm truncate mr-4">Breaking: Global Climate Summit Reaches Historic Agreement</div>
          <div className="text-sm hidden sm:block whitespace-nowrap">Sunday, September 14, 2025</div>
        </div>
      </div>
      
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-3xl font-bold text-primary tracking-tight">
              NEWS
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onCategoryChange?.(item.name)}
                className={`text-sm hover:text-primary transition-colors border-b-2 pb-1 ${
                  currentCategory === item.name 
                    ? "border-primary text-primary" 
                    : "border-transparent text-slate-700"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          {/* Search and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-700 hover:text-primary">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <SheetHeader className="p-6 bg-primary text-primary-foreground">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-primary-foreground text-2xl font-bold">
                        NEWS
                      </SheetTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-primary-foreground hover:bg-blue-700"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>
                    <SheetDescription className="text-blue-100 text-sm">
                      Navigate through different news categories
                    </SheetDescription>
                  </SheetHeader>
                  
                  {/* Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-2">
                      {menuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <button
                            key={item.name}
                            onClick={() => handleCategoryClick(item.name)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                              currentCategory === item.name
                                ? "bg-primary text-primary-foreground"
                                : "text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            <IconComponent className="h-5 w-5" />
                            <span className="text-base">{item.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </nav>
                  
                  {/* Footer */}
                  <div className="p-6 border-t border-slate-200">
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-start"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Search News
                      </Button>
                      <div className="text-sm text-slate-500 text-center">
                        © 2025 News Corporation
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      

    </header>
  );
}