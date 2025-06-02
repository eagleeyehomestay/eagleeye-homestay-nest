
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-800">EagleEyeHomestay</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-700 hover:text-blue-800 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-800 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-800 block px-3 py-2 text-base font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
