import * as React from 'react';

const beforeAfterData = [
  {
    before: '/images/before1.jpg',
    after: '/images/after1.jpg',
    caption: 'Living Room Deep Cleaning',
  },
  {
    before: '/images/before2.jpg',
    after: '/images/after2.jpg',
    caption: 'Office Carpet Restoration',
  },
  {
    before: '/images/before3.jpg',
    after: '/images/after3.jpg',
    caption: 'Bathroom Sanitization',
  },
];

const BeforeAfterGallery: React.FC = () => (
  <section className="py-20 bg-gray-50" id="before-after">
    <div className="container mx-auto px-4 md:px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Before & After</h2>
        <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          See the difference our professional cleaning makes! Swipe or compare the images below.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {beforeAfterData.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
            <div className="flex w-full gap-2">
              <div className="flex-1 flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-1">Before</span>
                <img src={item.before} alt={`Before - ${item.caption}`} className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col items-center">
                <span className="text-xs text-gray-500 mb-1">After</span>
                <img src={item.after} alt={`After - ${item.caption}`} className="rounded-lg object-cover w-full h-40 md:h-48" loading="lazy" />
              </div>
            </div>
            <div className="mt-4 text-center text-base font-medium text-gray-800">{item.caption}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BeforeAfterGallery; 