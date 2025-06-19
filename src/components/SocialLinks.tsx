
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
        <a href="https://instagram.com/cicopipes" target="_blank" rel="noopener noreferrer" title="Instagram">
          <Instagram className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
        <a href="https://facebook.com/cicopipes" target="_blank" rel="noopener noreferrer" title="Facebook">
          <Facebook className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
        <a href="https://twitter.com/cicopipes" target="_blank" rel="noopener noreferrer" title="Twitter">
          <Twitter className="h-4 w-4" />
        </a>
      </Button>
      <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110" asChild>
        <a href="https://linkedin.com/company/cicopipes" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
    </div>
  );
};

export default SocialLinks;
