import { motion } from 'framer-motion';
import GalleryItem from '../components/GalleryItem';

const Gallery = () => {
  const galleryItems = [
    {
      imageUrl: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
      title: 'Cadre Famille Premium',
      category: 'Cadre A2',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg',
      title: 'Montage Mariage',
      category: 'Cadre A1',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
      title: 'Collection Souvenirs',
      category: 'Cadre A3',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1152351/pexels-photo-1152351.jpeg',
      title: 'Portrait Artistique',
      category: 'Cadre A4',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1164674/pexels-photo-1164674.jpeg',
      title: 'Magazine Anniversaire',
      category: 'Format A4',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg',
      title: 'Galerie Voyage',
      category: 'Cadre A0',
    },
  ];

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
            Notre <span className="text-amber-500">Galerie</span>
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
            className="inline-block bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300"
          >
            Créer mon projet
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
