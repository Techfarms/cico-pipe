
import { useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase()) ||
    product.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) ||
    product.features.some(feature => feature.toLowerCase().includes(query.toLowerCase())) ||
    Object.values(product.specifications).some(spec => 
      spec.toLowerCase().includes(query.toLowerCase())
    )
  );

  useEffect(() => {
    document.title = "Search Results | CICO Pipes";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </Button>

        {/* Search Results Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Results
          </h1>
          <p className="text-xl text-gray-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found for "{query}"
          </p>
        </div>

        {/* Results */}
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-gray-400">?</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600 mb-8">
              We couldn't find any products matching your search. Try different keywords or browse our categories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/hdpe-pipes">Browse HDPE Pipes</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/pvc-pipes">Browse PVC Pipes</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/ppr-pipes">Browse PPR Pipes</Link>
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
