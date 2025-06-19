
import { Award, Users, Factory, Globe } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "25+" },
    { icon: Users, label: "Happy Customers", value: "5000+" },
    { icon: Factory, label: "Manufacturing Units", value: "3" },
    { icon: Globe, label: "Countries Served", value: "15+" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leading Innovation in Pipe Manufacturing
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over two decades, CICO PIPES has been at the forefront of pipe 
              manufacturing technology, delivering superior quality products that meet 
              the highest industry standards.
            </p>
            <p className="text-gray-600 mb-8">
              Our commitment to innovation, quality, and customer satisfaction has made 
              us a trusted partner for businesses worldwide. From residential plumbing 
              to large-scale industrial projects, we provide reliable piping solutions 
              that stand the test of time.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop" 
              alt="Manufacturing facility"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg">
              <div className="text-2xl font-bold">SON (MANCAP)</div>
              <div className="text-sm">Certified Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
