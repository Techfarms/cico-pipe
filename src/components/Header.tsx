import { Search, Menu, X, ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import SocialLinks from "./SocialLinks";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl font-poppins">CP</span>
            </div>
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold text-gray-900 font-poppins tracking-tight">CICO PIPES</h1>
              <p className="text-sm text-blue-600 font-medium">Premium PVC Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 uppercase tracking-wide relative group">
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 uppercase tracking-wide relative group">
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/pvc-pipes" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 uppercase tracking-wide relative group">
              PVC PIPES
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 uppercase tracking-wide relative group">
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Search and Social */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative group">
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pr-12 border-gray-200 focus:border-blue-500 transition-all duration-300"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700 transition-all duration-300"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            <div className="animate-slide-in-right">
              <SocialLinks />
            </div>
          </div>

          {/* Cart Button */}
          <Link to="/cart" className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-blue-50"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 p-1 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-blue-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t animate-fade-in">
            <nav className="space-y-4">
              <Link to="/" className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide group">
                HOME
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/about" className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide group">
                ABOUT
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/pvc-pipes" className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide group">
                PVC PIPES
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link to="/contact" className="flex items-center justify-between text-gray-700 hover:text-blue-600 font-semibold uppercase tracking-wide group">
                CONTACT
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </nav>
            <div className="mt-6 pt-4 border-t">
              <form onSubmit={handleSearch} className="relative mb-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 h-8 w-8 p-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>
              <SocialLinks />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
