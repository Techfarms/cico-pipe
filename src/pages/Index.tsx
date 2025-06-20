import { useEffect } from "react";
import { Search, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import AboutPreview from "@/components/AboutPreview";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  useEffect(() => {
    document.title = "CICO PIPES - Premium PVC Pipes Manufacturer | Nigeria's Leading Pipe Solutions";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <AboutPreview />
      <ProductShowcase />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
