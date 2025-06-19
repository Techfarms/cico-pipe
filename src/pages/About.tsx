
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Target, Eye, Users, Factory, Globe, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We maintain the highest standards in manufacturing and quality control processes."
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Our customers' success is our primary goal and driving force in everything we do."
    },
    {
      icon: Eye,
      title: "Innovation",
      description: "Continuously advancing technology and manufacturing processes for better products."
    },
    {
      icon: Users,
      title: "Team Excellence",
      description: "Empowering our skilled team to deliver exceptional results every day."
    }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing",
      description: "Modern facilities equipped with the latest technology for precision manufacturing."
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Serving customers across Nigeria with reliable distribution networks."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage of production."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient logistics ensuring timely delivery of products to your location."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CICO Pipes</h1>
            <p className="text-xl text-blue-100">
              Nigeria's premiere pipes manufacturer, building the future with innovative solutions since our founding
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                CICO Pipes began as a visionary company with a commitment to provide Nigeria 
                with high-quality piping solutions. Over the years, we have established ourselves 
                as one of the leading pipe manufacturers in Nigeria, serving customers across 
                multiple industries and sectors.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic investments 
                in cutting-edge technology, and an unwavering commitment to quality. Today, we operate 
                state-of-the-art manufacturing facilities and serve customers throughout Nigeria 
                and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From our base in Port Harcourt, Rivers State to nationwide coverage, our story is one of dedication, 
                perseverance, and the relentless pursuit of excellence in manufacturing premium 
                PVC pipes and fittings. Our future expansion will include HDPE and PPR Pipes in the up coming years.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop" 
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To manufacture and deliver world-class piping solutions that exceed customer 
                expectations while contributing to Nigeria's infrastructure development. We strive 
                to be the preferred partner for all piping needs through innovation, quality, 
                and exceptional service at affordable prices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Nigeria's leading pipe manufacturer, recognized for our commitment 
                to quality, innovation, and sustainability. We envision a future where CICO Pipes 
                products are the first choice for customers nationwide, setting new standards 
                in the Nigerian pipe manufacturing industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Manufacturing Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 leading-relaxed">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to Quality</h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            At CICO Pipes, quality is not just a standard—it's our promise. Every pipe that leaves 
            our facility undergoes rigorous testing and quality assurance processes. We are committed 
            to providing Nigeria with piping solutions that stand the test of time, ensuring your 
            projects are built with reliability and excellence.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
