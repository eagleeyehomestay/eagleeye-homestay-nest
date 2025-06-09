import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to book your stay or have questions? We're here to help make your Kashmir experience unforgettable.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                <p className="text-gray-600">8493865827</p>
                <p className="text-sm text-gray-500">Available 24/7 for bookings and inquiries</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600">eagleeyehomestay999@gmail.com</p>
                <p className="text-sm text-gray-500">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Check-in / Check-out</h4>
                <p className="text-gray-600">Check-in: 2:00 PM</p>
                <p className="text-gray-600">Check-out: 11:00 AM</p>
                <p className="text-sm text-gray-500">Flexible timing available on request</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-800" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Location</h4>
                <p className="text-gray-600">Kashmir Valley, India</p>
                <p className="text-sm text-gray-500">Exact address shared upon booking confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
