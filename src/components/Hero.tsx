
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-slide-in-left">
              <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-blue-200 font-medium">Nigeria's Trusted Choice</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-poppins">
                Premium
                <span className="block bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent animate-gradient-x">
                  PVC Pipes
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-blue-200">
                  Manufacturing
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                CICO PIPES delivers world-class PVC piping solutions with unmatched quality, 
                durability, and affordability across Nigeria and West Africa.
              </p>
                            
              
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">SON Certified</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">20+ Year Lifespan</span>
                </div>
                <div className="flex items-center space-x-2 justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100">100% Recyclable</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group" asChild>
                  <Link to="/contact">
                    Get Quote Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
                <div className="mb-8">
                  <Link to="/pvc-pipes#products" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-400 hover:bg-blue-300 text-white px-6 py-3">
                    View Products <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in">
                <Award className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-blue-200 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in delay-100">
                <div className="text-3xl font-bold text-white mb-2">Multiple</div>
                <div className="text-blue-200 text-sm">Corporate Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in delay-200">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200 text-sm">Product Variants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300 animate-scale-in delay-300">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Customer Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
