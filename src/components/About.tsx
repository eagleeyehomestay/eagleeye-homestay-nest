
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Car, Coffee, Mountain, Users, Shield } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet throughout the property"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Secure parking space for your vehicle"
    },
    {
      icon: Coffee,
      title: "Complimentary Breakfast",
      description: "Start your day with a delicious local breakfast"
    },
    {
      icon: Mountain,
      title: "Scenic Views",
      description: "Breathtaking views of the surrounding landscape"
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "Perfect for families and groups of all sizes"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "24/7 security for your peace of mind"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose EagleEyeHomestay?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We pride ourselves on providing exceptional hospitality with a personal touch. 
            Every detail is carefully crafted to ensure your stay is comfortable, memorable, and truly special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                EagleEyeHomestay was born from a passion for hospitality and a love for bringing people together. 
                We believe that travel is not just about the destination, but about the connections you make and 
                the memories you create along the way.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our carefully curated space offers the perfect blend of modern amenities and local charm, 
                ensuring every guest feels welcomed, comfortable, and truly at home.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/af684843-a208-4f32-8d9f-b809fc025e9b.png"
                alt="Beautiful EagleEyeHomestay exterior with traditional Kashmiri architecture"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
