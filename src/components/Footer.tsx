
import { Phone, Mail, MapPin, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 animate-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg font-poppins">CP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins">CICO PIPES</h3>
                <p className="text-blue-400 text-sm">Premium PVC Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Leading manufacturer of premium PVC pipes in Nigeria. Committed to delivering 
              world-class piping solutions with unmatched quality, innovation, and reliability 
              for over 20 years.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">SON (MANCAP): Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300 text-sm">20+ Years Experience</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">Plot 82, Trans Amadi Industrial Layout, Rivoc Road, Port Harcourt, Rivers State.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+234 810 038 7889, +234 706 274 1237</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@cicopipes.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-in-left">
            <h4 className="text-lg font-semibold mb-6 text-white font-poppins">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                About Us
              </Link>
              <Link to="/pvc-pipes" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                PVC Pipes
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="animate-slide-in-right">
            <h4 className="text-lg font-semibold mb-6 text-white font-poppins">Our Services</h4>
            <div className="space-y-3">
              <div className="text-gray-300">PVC Pressure Pipes</div>
              <div className="text-gray-300">PVC Sewerage Pipes</div>
              <div className="text-gray-300">PVC Fittings</div>
              <div className="text-gray-300">Custom Solutions</div>
              <div className="text-gray-300">Technical Support</div>
              <div className="text-gray-300">Installation Services</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CICO PIPES. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
              <a href="https://facebook.com/cicopipes" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
              <a href="https://instagram.com/cicopipes" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
              <a href="https://twitter.com/cicopipes" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="h-10 w-10 p-0 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
              <a href="https://linkedin.com/company/cicopipes" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
