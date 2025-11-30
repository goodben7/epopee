import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-4"
            >
              <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-xl font-bold">Épopée Visuelle</span>
            </motion.div>
            <p className="text-white/80 text-sm leading-relaxed">
              Transformez vos moments en œuvres d'art. Studio créatif spécialisé dans la conception de cadres personnalisés et impressions premium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <motion.div className="flex items-center space-x-3 text-white/80" whileHover={{ x: 4 }}>
                <MapPin size={18} className="text-[#641717]" />
                <span className="text-sm">Kinshasa, RDC</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3 text-white/80" whileHover={{ x: 4 }}>
                <Phone size={18} className="text-[#641717]" />
                <span className="text-sm">+243 XXX XXX XXX</span>
              </motion.div>
              <motion.div className="flex items-center space-x-3 text-white/80" whileHover={{ x: 4 }}>
                <Mail size={18} className="text-[#641717]" />
                <span className="text-sm">contact@epopeevisuelle.com</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Suivez-nous</h3>
            <div className="flex space-x-4">
              <motion.a href="#" className="text-white/80 hover:text-white transition-colors duration-300" whileHover={{ scale: 1.1 }}>
                <FaWhatsapp size={24} />
              </motion.a>
              <motion.a href="#" className="text-white/80 hover:text-white transition-colors duration-300" whileHover={{ scale: 1.1 }}>
                <FaInstagram size={24} />
              </motion.a>
              <motion.a href="#" className="text-white/80 hover:text-white transition-colors duration-300" whileHover={{ scale: 1.1 }}>
                <FaFacebook size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
          <p>&copy; {new Date().getFullYear()} Épopée Visuelle. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
