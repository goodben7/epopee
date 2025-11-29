import { motion } from 'framer-motion';

interface GalleryItemProps {
  imageUrl: string;
  title: string;
  category: string;
  index: number;
}

const GalleryItem = ({ imageUrl, title, category, index }: GalleryItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-square"
    >
      <div
        className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#641717] text-sm font-semibold mb-1">{category}</p>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryItem;
