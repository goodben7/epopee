import { motion } from 'framer-motion';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const localGalleryItems = [
    { imageUrl: '/img/Cadre_A0.png', title: 'Cadre A0 Premium', category: 'Cadre A0' },
    { imageUrl: '/img/Cadre_A2.png', title: 'Cadre A2', category: 'Cadre A2' },
    { imageUrl: '/img/Cadre_A4.png', title: 'Cadre A4', category: 'Cadre A4' },
    { imageUrl: '/img/Impression_A8.png', title: 'Impression A8', category: 'Impression' },
    { imageUrl: '/img/Impression_A6.png', title: 'Impression A6', category: 'Impression' },
    { imageUrl: '/img/Impression_A4.png', title: 'Impression A4', category: 'Impression' },
    { imageUrl: '/img/Impression_magazine.png', title: 'Impression Magazine', category: 'Magazine' },
    { imageUrl: '/img/Lettering.png', title: 'Lettrage', category: 'Lettrage' },
    { imageUrl: '/img/Montage_photos_1–6.png', title: 'Montage 1–6', category: 'Montage' },
    { imageUrl: '/img/Montage_photos_1–20.png', title: 'Montage 1–20', category: 'Montage' },
    { imageUrl: '/img/Montage_1–60.png', title: 'Montage 1–60', category: 'Montage' },
    { imageUrl: '/img/Image_Hero.png', title: 'Visuel Hero', category: 'Bannière' },
  ];
  const galleryItems = localGalleryItems;

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre <span className="text-[#641717]">Galerie</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              imageUrl={item.imageUrl}
              title={item.title}
              category={item.category}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-[#641717] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#641717] transition-colors duration-300 hover:scale-105 active:scale-95"
          >
            Commander maintenant
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
