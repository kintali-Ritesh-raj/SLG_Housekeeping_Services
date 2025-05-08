import * as React from 'react';
import { ShieldCheck, Sparkles, ThumbsUp, Clock, Leaf } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted & Verified",
    text: "All our staff are background-checked and professionally trained for your peace of mind.",
    aos: "fade-up",
    delay: 100,
  },
  {
    icon: Sparkles,
    title: "Spotless Results",
    text: "We use advanced cleaning techniques and quality products for a sparkling clean every time.",
    aos: "fade-up",
    delay: 200,
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guarantee",
    text: "We're not happy until you are! Our work is backed by a 100% satisfaction guarantee.",
    aos: "fade-up",
    delay: 300,
  },
  {
    icon: Clock,
    title: "On-Time Service",
    text: "We value your time and always arrive promptly as scheduled.",
    aos: "fade-up",
    delay: 400,
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    text: "We use safe, eco-friendly products to protect your family and the environment.",
    aos: "fade-up",
    delay: 500,
  },
];

const WhyChooseUs: React.FC = () => (
  <section className="py-20 bg-cyan-50 relative" id="why-choose-us">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4" data-aos="fade-up">Why Choose SLG Housekeeping?</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
        <p className="text-lg text-cyan-800 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Discover what makes us the preferred choice for homes and businesses in Visakhapatnam.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {reasons.map((reason, idx) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
              data-aos={reason.aos}
              data-aos-delay={reason.delay}
            >
              <div className="bg-cyan-100 rounded-full p-4 mb-4 animate-bounce-slow">
                <Icon className="text-cyan-600" size={36} />
              </div>
              <h3 className="font-bold text-cyan-900 text-lg mb-2">{reason.title}</h3>
              <p className="text-cyan-800 text-base">{reason.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyChooseUs; 