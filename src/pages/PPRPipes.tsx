
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

const PPRPipes = () => {
  const pprProducts = products.filter(product => product.category === 'ppr');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">PPR Pipes</h1>
            <p className="text-xl text-orange-100">
              Premium polypropylene pipes for hot and cold water systems in residential and commercial buildings
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced PPR Technology</h2>
            <p className="text-lg text-gray-600">
              Our PPR pipes are manufactured using advanced polypropylene random copolymer technology, 
              providing exceptional performance for hot and cold water applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-red-600">95°C</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Temperature Rating</h3>
              <p className="text-gray-600">Handles hot water applications</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">50+</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Years Lifespan</h3>
              <p className="text-gray-600">Long-term reliability guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">0%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Toxicity</h3>
              <p className="text-gray-600">Food-grade safe material</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid products={pprProducts} />

      <Footer />
    </div>
  );
};

export default PPRPipes;
