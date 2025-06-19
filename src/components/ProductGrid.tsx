
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.shortDescription}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Diameter:</span>
                    <span className="font-medium">{product.specifications.diameter}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pressure:</span>
                    <span className="font-medium">{product.specifications.pressure}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Standard:</span>
                    <span className="font-medium">{product.specifications.standard}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" asChild>
                    <Link to={`/product/${product.id}`}>View Details</Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/contact">Inquire Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
