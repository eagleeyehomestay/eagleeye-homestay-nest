
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GalleryCard } from "./GalleryCard";

interface GalleryCarouselProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  onImageClick: (index: number) => void;
}

export const GalleryCarousel = ({ images, onImageClick }: GalleryCarouselProps) => {
  return (
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
              <GalleryCard 
                image={image} 
                index={index} 
                onImageClick={onImageClick} 
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
