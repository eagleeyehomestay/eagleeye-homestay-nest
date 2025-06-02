
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      src: "/lovable-uploads/d9ad913c-3130-43bd-bd61-d145e3cdc9d9.png",
      alt: "Comfortable guest room with traditional decor and mountain views",
      title: "Guest Room - Green Decor"
    },
    {
      src: "/lovable-uploads/29a1a3d5-af74-4c1c-a3b0-43b1fce59ffd.png",
      alt: "Spacious room with vibrant red curtains and traditional Kashmiri carpets",
      title: "Guest Room - Traditional Style"
    },
    {
      src: "/lovable-uploads/3094c021-0223-40c7-a832-6a8ac8ff920a.png",
      alt: "Cozy room with wooden beams and scenic valley views",
      title: "Premium Room with Valley View"
    },
    {
      src: "/lovable-uploads/4cd82fb9-66a1-44d4-a737-11e0c00b043d.png",
      alt: "Well-appointed room with traditional Kashmiri furnishings",
      title: "Traditional Kashmiri Room"
    },
    {
      src: "/lovable-uploads/3782f137-ad86-42a2-86b5-c53685d03a31.png",
      alt: "Modern bathroom facilities with traditional tile work",
      title: "Modern Bathroom Facilities"
    },
    {
      src: "/lovable-uploads/655f68b1-66ae-4f4a-a5b6-f9821eed209a.png",
      alt: "Clean and modern bathroom with hot water facilities",
      title: "Clean Modern Bathroom"
    },
    {
      src: "/lovable-uploads/a6443dea-9819-4fb5-8691-601befeeee78.png",
      alt: "Beautiful exterior view of EagleEyeHomestay with lush green surroundings in Kashmir",
      title: "Homestay Exterior - Kashmir Valley"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setSelectedImageIndex((prev) => prev === 0 ? images.length - 1 : prev - 1);
    } else {
      setSelectedImageIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience Our Homestay
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a virtual tour of our beautiful homestay nestled in the scenic valleys of Kashmir. 
            Each room is thoughtfully designed to provide comfort while maintaining authentic local charm.
            Click on any image to view it in full size.
          </p>
        </div>

        <div className="relative">
          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
                      <CardContent className="p-0">
                        <div 
                          className="relative group"
                          onClick={() => openModal(index)}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover rounded-t-lg"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 rounded-t-lg transition-all duration-300 flex items-center justify-center">
                            <div className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1 rounded">
                              Click to expand
                            </div>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {image.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {image.alt}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Modal for expanded images */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-6xl w-full h-[90vh] p-0 border-0">
            <div className="relative w-full h-full bg-black/95 rounded-lg overflow-hidden">
              {/* Close button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Image */}
              <div className="w-full h-full flex items-center justify-center p-8">
                <img
                  src={images[selectedImageIndex].src}
                  alt={images[selectedImageIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Image info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {images[selectedImageIndex].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {images[selectedImageIndex].alt}
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  {selectedImageIndex + 1} of {images.length}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Located in Beautiful Kashmir
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
              Our homestay is perfectly situated in the breathtaking Kashmir valley, 
              surrounded by snow-capped mountains, lush green meadows, and pristine natural beauty. 
              Experience the warmth of Kashmiri hospitality in this paradise on earth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
