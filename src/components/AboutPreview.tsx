
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Shield, Users, Globe } from "lucide-react";

const AboutPreview = () => {
  const highlights = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "ISO certified manufacturing processes"
    },
    {
      icon: Shield,
      title: "Reliable Solutions",
      description: "Trusted by industries across Nigeria"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals at your service"
    },
    {
      icon: Globe,
      title: "Wide Coverage",
      description: "Serving customers nationwide"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CICO Pipes
            </h2>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              CICO Pipes is Nigeria's premier manufacturer of high-quality PVC pipes. 
              We are committed to providing reliable, durable, and cost-effective piping solutions that 
              meet the highest international standards.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With state-of-the-art manufacturing facilities and a team of experienced professionals, 
              we deliver excellence in every product, ensuring your projects are built to last.
            </p>
            <Button size="lg" asChild>
              <Link to="/about">Learn More About Our Story</Link>
            </Button>
          </div>
          
          <div>
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <highlight.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
