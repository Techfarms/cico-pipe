
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { products } from "@/pages/PVCPipes";
import { ArrowLeft, CheckCircle, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const ProductDetail = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/pvc-pipes" className="text-blue-600 hover:underline">Return to PVC Pipes</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hdpe': return 'bg-blue-100 text-blue-800';
      case 'pvc': return 'bg-green-100 text-green-800';
      case 'ppr': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
    toast.success('Product added to cart!');
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <Button variant="ghost" asChild>
              <Link to="/pvc-pipes" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to PVC Pipes</span>
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Product Image */}
              <div className="flex-1">
                <div className="relative w-full h-96">
                  {product.images.map((image, index) => (
                    <img 
                      key={index}
                      src={`/images/${image}`}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <Badge variant="secondary" className={getCategoryColor(product.category)}>
                  {product.category.toUpperCase()}
                </Badge>
                <div className="mt-4">
                  <p className="text-2xl font-bold text-gray-900">₦{product.price.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Per unit</p>
                </div>

                {/* Specifications */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Diameter:</span> {product.diameter}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Thickness:</span> {product.thickness}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Length:</span> {product.length}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h3 className="text-lg font-medium text-gray-900">Features</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-4">
                  <Button
                    size="lg"
                    className="flex-1"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Add to Cart
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>


          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
