import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckCircle, Phone, Mail, ArrowRight, Droplets, Shield, Recycle, Award, Factory, Zap, Thermometer } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/products";
import { toast } from "sonner";

export const specifications = [
  { diameter: "20mm", thickness: "2.3mm", length: "6m"},
  { diameter: "25mm", thickness: "2.3mm", length: "6m"},
  { diameter: "32mm", thickness: "3.0mm", length: "6m"},
  { diameter: "40mm", thickness: "3.7mm", length: "6m"},
  { diameter: "50mm", thickness: "4.6mm", length: "6m"},
  { diameter: "63mm", thickness: "5.8mm", length: "6m"},
  { diameter: "75mm", thickness: "6.8mm", length: "6m"},
  { diameter: "90mm", thickness: "8.2mm", length: "6m"},
  { diameter: "110mm", thickness: "10.0mm", length: "6m"},
  { diameter: "125mm", thickness: "11.4mm", length: "6m"},
  { diameter: "140mm", thickness: "12.7mm", length: "6m"},
  { diameter: "160mm", thickness: "14.6mm", length: "6m"},
  { diameter: "200mm", thickness: "18.2mm", length: "6m"},
  { diameter: "250mm", thickness: "22.7mm", length: "6m"},
];

export const products: Product[] = specifications.map((spec, index) => ({
  id: `pvc-${index + 1}`,
  name: `PVC Pipe ${spec.diameter}`,
  category: "pvc",
  diameter: spec.diameter,
  thickness: spec.thickness,
  length: spec.length,
  price: 1000 + (index * 500), // Base price + increment
  specifications: `Diameter: ${spec.diameter}, Thickness: ${spec.thickness}, Length: ${spec.length}`,
  description: "High-quality PVC pipe suitable for water distribution and industrial applications",
  features: [
    "Chemical resistance",
    "Lightweight",
    "Smooth interior",
    "Long service life",
    "Cost-effective"
  ],
  images: [
    "/images/pvc-pipe.jpg" // You'll need to add actual product images
  ]
}));

const PVCPipes = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PVC Pipes | CICO Pipes";
    window.scrollTo(0, 0);
  }, []);
  const handleAddToCart = (product: Product) => {
    addToCart(product, 1);
  };

  const features = [
    "Chemical Resistance - Excellent resistance to chemicals and corrosion",
    "Lightweight - Easy to handle and install, reducing labor costs",
    "Smooth Interior - Minimal friction loss for efficient fluid flow",
    "Long Service Life - Over 50 years of reliable service",
    "Cost Effective - Lower installation and maintenance costs",
    "Leak-Proof Joints - Solvent welded joints ensure zero leakage",
    "UV Stabilized - Suitable for outdoor applications",
    "Recyclable - Environmentally friendly material",
    "Temperature Resistant - Operates effectively in varying temperatures",
    "Non-Toxic - Safe for potable water applications"
  ];

  const applications = [
    "Water Supply Systems",
    "Irrigation Networks", 
    "Swimming Pool Plumbing",
    "Industrial Process Piping",
    "Chemical Transportation",
    "Drainage Systems",
    "Fire Fighting Systems",
    "HVAC Systems",
    "Sewage Treatment Plants",
    "Agricultural Water Distribution",
    "Municipal Water Networks",
    "Commercial Building Plumbing"
  ];

  const advantages = [
    {
      icon: Factory,
      title: "Manufacturing Excellence",
      description: "State-of-the-art manufacturing facility with advanced extrusion technology ensuring consistent quality and dimensional accuracy."
    },
    {
      icon: Zap,
      title: "Superior Performance",
      description: "High impact strength and flexibility provide excellent resistance to stress cracking and ensure long-term performance."
    },
    {
      icon: Thermometer,
      title: "Temperature Stability",
      description: "Excellent thermal stability with operating temperature range from 0°C to 60°C, suitable for various climatic conditions."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="bg-white/20 text-white mb-4 sm:mb-6 px-4 sm:px-6 py-2 text-base sm:text-lg">
              Premium Quality PVC Pipes
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              PVC Pipes & Fittings
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-green-100 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              High-quality PVC pipes designed for water distribution, irrigation, and industrial applications. 
              Built to last with superior chemical resistance and durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold" asChild>
                <Link to="/contact">
                  Request Quote <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-green-800 hover:bg-gray-100 hover:text-green-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Overview */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose CICO PVC Pipes?</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Our PVC pipes are manufactured using the finest materials and latest technology to ensure 
                superior performance, durability, and value for your projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div className="text-center group animate-slide-in-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors">
                  <Droplets className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Water Tight</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">Zero leakage with solvent welded joints ensuring reliable water distribution</p>
              </div>
              
              <div className="text-center group animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Chemical Resistant</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">Excellent resistance to chemicals, acids, and corrosive substances</p>
              </div>
              
              <div className="text-center group animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-purple-200 transition-colors">
                  <Recycle className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Eco-Friendly</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">100% recyclable material contributing to environmental sustainability</p>
              </div>
              
              <div className="text-center group animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-orange-200 transition-colors">
                  <Award className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">SON Certified</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">Manufactured to international standards with quality assurance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">CICO PVC Pipe Advantages</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the superior benefits that make our PVC pipes the preferred choice for professionals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {advantages.map((advantage, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <advantage.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Specifications Table */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Technical Specifications</h2>
              <p className="text-lg sm:text-xl text-gray-600">
                Complete specifications for our PVC pressure pipes conforming to international standards
              </p>
            </div>
            
            <Card className="overflow-hidden shadow-xl animate-scale-in">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-green-900 hover:bg-green-900">
                        <TableHead className="text-white font-semibold py-3 sm:py-4 text-sm sm:text-base">Outside Diameter</TableHead>
                        <TableHead className="text-white font-semibold py-3 sm:py-4 text-sm sm:text-base">Wall Thickness</TableHead>
                        <TableHead className="text-white font-semibold py-3 sm:py-4 text-sm sm:text-base">Standard Length</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {specifications.map((spec, index) => (
                        <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                          <TableCell className="font-medium py-3 sm:py-4 text-sm sm:text-base">{spec.diameter}</TableCell>
                          <TableCell className="py-3 sm:py-4 text-sm sm:text-base">{spec.thickness}</TableCell>
                          <TableCell className="py-3 sm:py-4 text-sm sm:text-base">{spec.length}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section className="py-16 sm:py-20 bg-white" id="products">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Available PVC Pipe Sizes</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
                Browse our range of PVC pipes and add them to your cart
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {products.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-gray-900">
                          <Link to={`/product/${product.id}`} className="hover:text-green-600 transition-colors">
                            {product.name}
                          </Link>
                        </h3>
                        <Badge variant="outline" className="text-sm px-3 py-1">
                          ₦{`${product.price.toLocaleString()} (dummy)`}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Diameter: {product.diameter}</p>
                        <p className="text-sm text-gray-600">Thickness: {product.thickness}</p>
                        <p className="text-sm text-gray-600">Length: {product.length}</p>
                      </div>

                      <div className="flex space-x-2">
                        <Button 
                          onClick={() => {
                            addToCart(product, 1);
                            toast.success('Product added to cart!');
                            // navigate('/cart');
                          }}
                          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                        >
                          Add to Cart
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          className="flex-1"
                        >
                          <Link to={`/product/${product.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Applications */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
              {/* Features */}
              <div className="animate-slide-in-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Key Features & Benefits</h2>
                <div className="space-y-3 sm:space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 sm:space-x-4 group">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                      <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="animate-slide-in-right">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {applications.map((application, index) => (
                    <div key={index} className="bg-white p-3 sm:p-4 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer group">
                      <p className="font-medium text-gray-900 group-hover:text-green-600 transition-colors text-sm sm:text-base">{application}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Standards & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">SON (MANCAP)</h3>
                <p className="text-gray-600 text-sm sm:text-base">Quality Management System certification ensuring consistent product quality</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">ASTM D1785</h3>
                <p className="text-gray-600 text-sm sm:text-base">Standard specification for PVC plastic pipe manufactured to schedule dimensions</p>
              </div>
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">SON 4422</h3>
                <p className="text-gray-600 text-sm sm:text-base">International standard for PVC pipes for water supply systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>      

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl text-green-100 mb-6 sm:mb-8 px-4 sm:px-0">
              Contact our technical team for expert advice on selecting the right PVC pipes for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 font-semibold" asChild>
                <Link to="/contact" className="flex items-center justify-center">
                  <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Get Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-green-700 hover:bg-gray-100 hover:text-green-900 px-6 sm:px-8 py-3 sm:py-4 font-semibold">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call Now: +234 810 038 7889, +234 706 274 1237
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
export default PVCPipes;
