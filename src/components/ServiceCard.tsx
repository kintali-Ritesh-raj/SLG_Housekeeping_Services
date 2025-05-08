import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  Icon: React.ElementType;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, Icon }) => (
  <div className="service-glass-card relative shadow-lg p-8 rounded-2xl flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 group overflow-hidden">
    <div className="absolute inset-0 z-0 service-glass-bg" />
    <div className="relative z-10">
      <div className="bg-cyan-100 rounded-full p-4 mb-4 inline-block group-hover:shadow-xl transition-all duration-300">
        <Icon className="text-cyan-600" size={32} />
      </div>
      <h3 className="font-bold text-lg text-cyan-900 mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <span className="inline-block bg-cyan-50 text-cyan-700 font-semibold px-4 py-1 rounded-full text-sm shadow-sm mb-2">{price}</span>
    </div>
    <div className="service-animated-border"></div>
  </div>
);

export default ServiceCard;