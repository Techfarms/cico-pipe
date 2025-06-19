
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Contact us today for a free consultation and quote. Our team of experts 
          is ready to help you find the perfect piping solution for your needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <div className="flex items-center space-x-3">
            <Phone className="h-6 w-6" />
            <span className="text-lg">+234 810 038 7889, +234 706 274 1237</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6" />
            <span className="text-lg">info@cicopipes.com</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-100 font-semibold" asChild>
            <Link to="/contact">Contact Us for Inquiry</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-blue-600 hover:bg-gray-100 hover:text-blue-800 font-semibold" asChild>
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
