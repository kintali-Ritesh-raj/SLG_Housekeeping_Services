import * as React from 'react';
import { ChevronDown, Search } from 'lucide-react';

const faqs = [
  {
    question: 'What areas do you serve?',
    answer: 'We serve all of Visakhapatnam and surrounding areas. Contact us to check availability in your locality.'
  },
  {
    question: 'Are your services available on Sundays?',
    answer: 'Yes! We provide cleaning services 7 days a week, including Sundays.'
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use eco-friendly and safe cleaning products to protect your family, staff, and the environment.'
  },
  {
    question: 'How do I book a service?',
    answer: 'You can book by filling out our contact form, calling us at 9949191912, or messaging us on WhatsApp.'
  },
  {
    question: 'Do you offer commercial and industrial cleaning?',
    answer: 'Yes, we offer residential, commercial, and industrial cleaning services tailored to your needs.'
  },
  {
    question: 'Is your staff background-checked?',
    answer: 'Absolutely. All our staff are background-checked and professionally trained.'
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing varies based on the type of service, area size, and specific requirements. We offer competitive rates and can provide a free quote upon request.'
  },
  {
    question: 'Do you provide cleaning supplies and equipment?',
    answer: 'Yes, we bring all necessary cleaning supplies and equipment. However, if you prefer to use specific products, we can accommodate that as well.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We require 24 hours notice for cancellations. This helps us manage our schedule and serve other clients effectively.'
  },
  {
    question: 'Do you offer deep cleaning services?',
    answer: 'Yes, we offer comprehensive deep cleaning services for both residential and commercial spaces, including hard-to-reach areas and specialized cleaning needs.'
  }
];

function highlightMatch(text: string, query: string) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')})`, 'gi');
  return text.split(regex).map((part, i) =>
    regex.test(part) ? <mark key={i} className="bg-yellow-200 text-cyan-900 rounded px-1">{part}</mark> : part
  );
}

const FAQ: React.FC = () => {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="faq-animated-border rounded-2xl p-1">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
                Find answers to common questions about our cleaning services
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={faq.question} 
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <button
                    className="w-full text-left px-6 py-4 bg-cyan-50 hover:bg-cyan-100 font-medium text-cyan-900 focus:outline-none flex justify-between items-center transition-colors duration-200"
                    onClick={() => setOpen(open === idx ? null : idx)}
                    aria-expanded={open === idx ? 'true' : 'false'}
                    aria-controls={`faq-panel-${idx}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`ml-4 transition-transform duration-200 ${
                        open === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    id={`faq-panel-${idx}`}
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                      open === idx ? 'max-h-40 py-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;