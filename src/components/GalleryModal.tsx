
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryModalProps {
  images: Array<{
    src: string;
    alt: string;
    title: string;
  }>;
  selectedImageIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export const GalleryModal = ({ 
  images, 
  selectedImageIndex, 
  isOpen, 
  onClose, 
  onNavigate 
}: GalleryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full h-[90vh] p-0 border-0">
        <div className="relative w-full h-full bg-black/95 rounded-lg overflow-hidden">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => onNavigate('prev')}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white"
            onClick={() => onNavigate('next')}
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
  );
};
