
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/data/products";

const HDPEPipes = () => {
  const hdpeProducts = products.filter(product => product.category === 'hdpe');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">HDPE Pipes</h1>
            <p className="text-xl text-blue-100">
              High-density polyethylene pipes for water supply, gas distribution, and industrial applications
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Premium HDPE Solutions</h2>
            <p className="text-lg text-gray-600">
              Our HDPE pipes are manufactured using the finest PE100 grade material, ensuring 
              superior performance, durability, and reliability for critical infrastructure projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">100</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Year Design Life</h3>
              <p className="text-gray-600">Long-lasting performance guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">100%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Leak-Free Joints</h3>
              <p className="text-gray-600">Advanced fusion welding technology</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">PE100</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Grade</h3>
              <p className="text-gray-600">Highest quality material standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <ProductGrid products={hdpeProducts} />

      <Footer />
    </div>
  );
};

export default HDPEPipes;
