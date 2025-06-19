
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ProductShowcase = () => {
  const productCategories = [
    {
      title: "PVC Pipes",
      description: "Durable and cost-effective PVC pipes for water distribution, sewerage, and drainage systems.",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=500&h=400&fit=crop",
      link: "/pvc-pipes#products",
      color: "bg-green-600"
    },
    {
      title: "(Coming Soon) HDPE Pipes",
      description: "High-density polyethylene pipes for water supply, gas distribution, and industrial applications.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=400&fit=crop",
      link: "/hdpe-pipes",
      color: "bg-blue-600"
    },
    {
      title: "(Coming Soon) PPR Pipes",
      description: "Polypropylene random copolymer pipes ideal for hot and cold water systems.",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&h=400&fit=crop",
      link: "/ppr-pipes",
      color: "bg-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of premium quality pipes designed to meet 
            diverse industrial and commercial requirements across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="space-y-2">
                  {category.title === "PVC Pipes" ? (
                    <Link 
                      to={category.link} 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3"
                    >
                      View Products <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  ) : (
                    <Link 
                      to={category.link} 
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2"
                    >
                      Learn More
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
