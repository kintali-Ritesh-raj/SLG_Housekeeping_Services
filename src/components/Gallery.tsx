import * as React from 'react';

// List your gallery images here. Add/remove filenames as you add/remove images in /public/gallery/
const galleryImages = [
  '/gallery/work1.jpg',
  '/gallery/work2.jpg',
  '/gallery/work3.jpg',
  '/gallery/work4.jpg',
  '/gallery/work5.jpg',
];

const Gallery: React.FC = () => {
  const [selected, setSelected] = React.useState<string | null>(null);

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Gallery</h2>
          <div className="w-20 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Explore our recent work! Click any image to view it larger.
          </p>
        </div>
        {galleryImages.length === 0 ? (
          <div className="text-center text-gray-500">No images yet. Add your work images to <code>/public/gallery/</code>.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((src, idx) => (
              <button
                key={src}
                className="group relative overflow-hidden rounded-lg shadow hover:shadow-lg focus:outline-none"
                onClick={() => setSelected(src)}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                aria-label="View image larger"
              >
                <img
                  src={src}
                  alt={`Gallery work ${idx + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            ))}
          </div>
        )}
        {/* Lightbox */}
        {selected && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
            <img src={selected} alt="Enlarged work" className="max-w-full max-h-[80vh] rounded-lg shadow-2xl border-4 border-white" />
            <button
              className="absolute top-8 right-8 text-white text-3xl font-bold bg-black/50 rounded-full px-4 py-2 hover:bg-black/80 focus:outline-none"
              onClick={e => { e.stopPropagation(); setSelected(null); }}
              aria-label="Close image preview"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 