
import { Card, CardContent } from "@/components/ui/card";

interface GalleryCardProps {
  image: {
    src: string;
    alt: string;
    title: string;
  };
  index: number;
  onImageClick: (index: number) => void;
}

export const GalleryCard = ({ image, index, onImageClick }: GalleryCardProps) => {
  return (
    <div className="p-1">
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105">
        <CardContent className="p-0">
          <div 
            className="relative group"
            onClick={() => onImageClick(index)}
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
  );
};
