import * as React from 'react';
import { Users, Award, Heart } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SLG Housekeeping Services was founded in 2015 by <b>K T Naidu</b> with a simple mission: to provide top-quality cleaning services to homes and businesses in Visakhapatnam and surrounding areas.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our team of skilled professionals is committed to delivering exceptional service with attention to detail. We use eco-friendly products and advanced cleaning techniques to ensure your spaces are not just clean, but healthy too.
            </p>
            <div className="bg-cyan-50 rounded-lg p-6 mb-6 shadow-sm">
              <h3 className="font-bold text-cyan-900 mb-2">Company Info</h3>
              <ul className="text-gray-800 text-base space-y-1">
                <li><b>Owner:</b> K T Naidu</li>
                <li><b>Established:</b> 2015</li>
                <li><b>Office:</b> 39-9-100/A near Skating Park, Murali Nagar, Visakhapatnam.</li>
                <li><b>Services available all days, including Sundays</b></li>
              </ul>
            </div>
            <div className="bg-cyan-100 rounded-lg p-6 shadow-sm">
              <h3 className="font-bold text-cyan-900 mb-2">Contact Us</h3>
              <ul className="text-gray-800 text-base space-y-1">
                <li><b>Phone:</b> <a href="tel:9949191912" className="text-cyan-700 hover:underline">9949191912</a></li>
                <li><b>Email:</b> <a href="mailto:slghousekeepingservices@gmail.com" className="text-cyan-700 hover:underline">slghousekeepingservices@gmail.com</a></li>
                <li><b>Address:</b> 39-9-100/A near Skating Park, Murali Nagar, Visakhapatnam.</li>
              </ul>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-cyan-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Skilled Team</h3>
              </div>
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="text-cyan-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Certified</h3>
              </div>
              <div className="text-center">
                <div className="bg-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-cyan-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900">Reliable</h3>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <OptimizedImage 
                src="https://images.pexels.com/photos/5591579/pexels-photo-5591579.jpeg" 
                alt="SLG Housekeeping team member cleaning" 
                className="w-full h-auto object-cover"
                width={800}
                height={600}
                priority={true}
              />
            </div>
            <div className="absolute bottom-8 right-8 bg-white p-4 md:p-6 rounded-lg shadow-lg z-20 max-w-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Founder</h3>
              <p className="text-gray-700">
                With over 15 years of experience in the cleaning industry, our founder established SLG Housekeeping with a vision to transform cleaning services in Visakhapatnam.
              </p>
            </div>
            <div className="absolute top-0 -right-4 w-3/4 h-3/4 bg-cyan-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;