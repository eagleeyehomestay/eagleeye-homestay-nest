
import { useState } from "react";
import { GalleryCarousel } from "./GalleryCarousel";
import { GalleryModal } from "./GalleryModal";

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
    },
    {
      src: "/lovable-uploads/2b499e0c-4a85-4ccb-8c60-29fa77386340.png",
      alt: "Scenic Kashmir meadows with traditional shepherd huts and local children playing cricket",
      title: "Kashmir Valley - Local Life"
    },
    {
      src: "/lovable-uploads/af684843-a208-4f32-8d9f-b809fc025e9b.png",
      alt: "Beautiful EagleEyeHomestay exterior with green tin roof and traditional Kashmiri architecture",
      title: "Homestay Exterior - Front View"
    },
    {
      src: "/lovable-uploads/662a5926-6692-4a61-aee3-eadbca2df3c9.png",
      alt: "Traditional Kashmiri village setting with pastoral landscapes and mountain backdrop",
      title: "Village Setting - Mountain Views"
    },
    {
      src: "/lovable-uploads/ba9f8d3c-d919-43bc-9476-eeb27c1818bb.png",
      alt: "Local children enjoying cricket in the beautiful Kashmir meadows near traditional homes",
      title: "Local Community - Cricket in the Meadows"
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

        <GalleryCarousel 
          images={images} 
          onImageClick={openModal} 
        />

        <GalleryModal
          images={images}
          selectedImageIndex={selectedImageIndex}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onNavigate={navigateImage}
        />

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
