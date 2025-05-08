import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { clients, testimonials } from '../data/clients';
import OptimizedImage from './OptimizedImage';
import './ClientsMarquee.css';

const Clients: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handlePrevious = () => {
    setCurrentTestimonial(current => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial(current => 
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="clients" className="py-20 bg-gradient-to-b from-gray-50 to-white" data-aos="fade-up" data-aos-delay="100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fadeIn">
            Our Valued Clients
          </h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-fadeIn animation-delay-200">
            We're proud to serve some of the most prestigious businesses and properties in Visakhapatnam.
          </p>
        </div>

        {/* Client Logo Marquee */}
        <div className="relative mb-16 overflow-x-hidden">
          <div className="clients-marquee flex items-center">
            {[...clients, ...clients].map((client, idx) => (
              <div key={idx} className="clients-marquee-logo">
                <OptimizedImage
                  src={client.logo}
                  alt={client.name}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                  title={client.name}
                  width={160}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12 animate-fadeIn" data-aos="fade-up" data-aos-delay="200">
            What Our Clients Say
          </h3>

          <div className="relative max-w-4xl mx-auto">
            <div 
              ref={sliderRef}
              className="overflow-hidden rounded-xl"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full p-4"
                    data-aos="zoom-in" data-aos-delay={200 + index * 100}
                  >
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <OptimizedImage
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-cyan-100"
                            width={64}
                            height={64}
                          />
                          <div className="absolute -bottom-1 -right-1 bg-cyan-600 text-white rounded-full p-1">
                            <Star size={16} className="fill-current" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                      <div className="mt-6 flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star 
                              key={star}
                              size={20}
                              className="text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">Verified Client</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:bg-gray-50 transition-colors duration-300 md:-translate-x-6"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-cyan-600" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg z-10 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:bg-gray-50 transition-colors duration-300 md:translate-x-6"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-cyan-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full focus:outline-none transition-all duration-300 ${
                    currentTestimonial === index 
                      ? 'bg-cyan-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Google Reviews Section */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 animate-fadeIn" data-aos="fade-up" data-aos-delay="200">
            Google Reviews
          </h3>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-4xl mx-auto">
            {/* Example reviews, replace with your real reviews */}
            {[
              {
                name: 'Srinivas Rao',
                rating: 5,
                text: 'Excellent service! The team was punctual, professional, and left my home spotless. Highly recommended.',
              },
              {
                name: 'Priya Sharma',
                rating: 5,
                text: 'Very satisfied with their deep cleaning. Staff were polite and thorough. Will book again!',
              },
              {
                name: 'Ramesh Kumar',
                rating: 4,
                text: 'Good value for money. They cleaned our office on a Sunday and did a great job.',
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex-1 flex flex-col justify-between" data-aos="fade-up" data-aos-delay={300 + idx * 100}>
                <div className="flex items-center mb-2">
                  <span className="font-bold text-cyan-700 mr-2">{review.name}</span>
                  <span className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </span>
                </div>
                <p className="text-gray-700 italic mb-2">"{review.text}"</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <a
              href="https://www.google.com/search?q=SLG+Housekeeping+Services+Visakhapatnam&ludocid=YOUR_PLACE_ID#lrd=0x0:0x0,1,,," // Replace with your actual Google Place link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
            >
              See all reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;