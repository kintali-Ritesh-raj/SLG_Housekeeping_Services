import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src="/images/hero.jpg"
          alt="SLG Housekeeping Services Hero Background"
          className="w-full h-full object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Morphing SVG Blobs with Parallax */}
      <svg className="absolute left-[-10vw] top-[10vh] w-[40vw] h-[40vw] z-0 opacity-30 animate-blob-morph" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path d="M120,-156.6C153.2,-128.2,172.2,-84.1,176.2,-41.6C180.2,0.9,169.2,41.8,146.2,74.2C123.2,106.6,88.2,130.5,48.2,148.2C8.2,165.9,-36.8,177.4,-77.2,165.2C-117.6,153,-153.4,117.1,-170.2,74.2C-187,31.3,-184.8,-18.6,-167.2,-61.2C-149.6,-103.8,-116.6,-139.1,-76.2,-165.2C-35.8,-191.3,12.1,-208.2,56.2,-197.2C100.3,-186.2,140.8,-147.1,120,-156.6Z" fill="#06b6d4">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
              values="M120,-156.6C153.2,-128.2,172.2,-84.1,176.2,-41.6C180.2,0.9,169.2,41.8,146.2,74.2C123.2,106.6,88.2,130.5,48.2,148.2C8.2,165.9,-36.8,177.4,-77.2,165.2C-117.6,153,-153.4,117.1,-170.2,74.2C-187,31.3,-184.8,-18.6,-167.2,-61.2C-149.6,-103.8,-116.6,-139.1,-76.2,-165.2C-35.8,-191.3,12.1,-208.2,56.2,-197.2C100.3,-186.2,140.8,-147.1,120,-156.6Z;
              M140.2,-168.2C175.2,-134.2,181.2,-67.1,170.2,-13.2C159.2,40.7,131.2,81.4,96.2,110.2C61.2,139,19.2,155.9,-23.2,163.2C-65.6,170.5,-109.4,168.2,-140.2,140.2C-171,112.2,-188.8,58.6,-181.2,13.2C-173.6,-32.2,-140.6,-67.4,-104.2,-101.4C-67.8,-135.4,-33.9,-168.2,14.2,-180.2C62.3,-192.2,124.6,-182.2,140.2,-168.2Z;
              M120,-156.6C153.2,-128.2,172.2,-84.1,176.2,-41.6C180.2,0.9,169.2,41.8,146.2,74.2C123.2,106.6,88.2,130.5,48.2,148.2C8.2,165.9,-36.8,177.4,-77.2,165.2C-117.6,153,-153.4,117.1,-170.2,74.2C-187,31.3,-184.8,-18.6,-167.2,-61.2C-149.6,-103.8,-116.6,-139.1,-76.2,-165.2C-35.8,-191.3,12.1,-208.2,56.2,-197.2C100.3,-186.2,140.8,-147.1,120,-156.6Z"/>
          </path>
        </g>
      </svg>

      {/* Floating Animated Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <span className="floating-shape bg-cyan-300 opacity-30" style={{ left: '10%', top: '20%', width: 80, height: 80 }} />
        <span className="floating-shape bg-pink-300 opacity-20" style={{ left: '70%', top: '30%', width: 100, height: 100 }} />
        <span className="floating-shape bg-blue-400 opacity-20" style={{ left: '40%', top: '70%', width: 60, height: 60 }} />
        <span className="floating-shape bg-cyan-400 opacity-20" style={{ left: '80%', top: '60%', width: 120, height: 120 }} />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-gradient-move" style={{
        background: 'linear-gradient(120deg, rgba(6,182,212,0.25) 0%, rgba(59,130,246,0.18) 50%, rgba(236,72,153,0.18) 100%)',
        mixBlendMode: 'lighten',
      }} />

      <div className="container mx-auto px-4 md:px-6 z-10 text-center md:text-left">
        <div className="max-w-3xl md:ml-8 lg:ml-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-fadeIn" data-aos="fade-up" data-aos-delay="100">
            Professional Cleaning Services in Visakhapatnam
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-fadeIn animation-delay-200" data-aos="fade-up" data-aos-delay="300">
            We provide top-quality cleaning and housekeeping services with a satisfaction guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn animation-delay-300">
            <a
              href="#services"
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
              data-aos="zoom-in" data-aos-delay="500"
            >
              Our Services
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 text-white border border-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
              data-aos="zoom-in" data-aos-delay="700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-8">
        <a 
          href="#about"
          className="animate-bounce bg-white/10 rounded-full p-2 backdrop-blur"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="white" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;