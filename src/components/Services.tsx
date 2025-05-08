import React from 'react';
import ServiceCard from './ServiceCard';
import { Home, Building2, Building, ShowerHead as Shower, CheckSquare, Sofa, Droplets, Building as BuildingCommunity, Factory } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Flat Cleaning',
    description: 'Comprehensive cleaning for apartments and flats with attention to every detail.',
    icon: Home,
    price: '₹1,200 onwards',
  },
  {
    id: 2,
    title: 'Duplex Cleaning',
    description: 'Specialized cleaning services for duplex homes with multiple floors.',
    icon: Building2,
    price: '₹2,500 onwards',
  },
  {
    id: 3,
    title: 'Villa Cleaning',
    description: 'Premium cleaning services for villas and luxury homes with tailored solutions.',
    icon: Building,
    price: '₹3,500 onwards',
  },
  {
    id: 4,
    title: 'Bathroom Cleaning',
    description: 'Deep cleaning and sanitization of bathrooms and toilets for a germ-free environment.',
    icon: Shower,
    price: '₹500 onwards',
  },
  {
    id: 5,
    title: 'Glass Cleaning',
    description: 'Professional cleaning of windows, glass doors, and other glass surfaces for a crystal clear finish.',
    icon: CheckSquare,
    price: '₹800 onwards',
  },
  {
    id: 6,
    title: 'Sofa Cleaning',
    description: 'Expert cleaning services for all types of sofas, removing stains and odors.',
    icon: Sofa,
    price: '₹1,000 onwards',
  },
  {
    id: 7,
    title: 'Water Tank Cleaning',
    description: 'Thorough cleaning and disinfection of water tanks for safe and clean water supply.',
    icon: Droplets,
    price: '₹1,500 onwards',
  },
  {
    id: 8,
    title: 'Commercial Cleaning',
    description: 'Specialized cleaning solutions for offices, retail spaces, and commercial properties.',
    icon: BuildingCommunity,
    price: 'Custom Quote',
  },
  {
    id: 9,
    title: 'Industrial Cleaning',
    description: 'Heavy-duty cleaning services for factories, warehouses, and industrial facilities.',
    icon: Factory,
    price: 'Custom Quote',
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We offer a wide range of cleaning and housekeeping services to meet all your needs.
            From residential cleaning to commercial spaces, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              Icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;