import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  index: number;
  highlighted?: boolean;
}

const PackageCard = ({ name, price, features, index, highlighted = false }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? 'bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-2xl'
          : 'bg-white text-gray-900 shadow-lg border border-gray-100'
      } transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-amber-500 px-4 py-1 rounded-full text-sm font-semibold">
          Populaire
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <div className="flex items-baseline">
          <span className={`text-4xl font-bold ${highlighted ? 'text-white' : 'text-amber-500'}`}>
            ${price}
          </span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-white' : 'text-amber-500'}`} />
            <span className={`text-sm ${highlighted ? 'text-white' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
          highlighted
            ? 'bg-white text-amber-500 hover:bg-gray-100'
            : 'bg-amber-500 text-white hover:bg-amber-600'
        }`}
      >
        Commander maintenant
      </a>
    </motion.div>
  );
};

export default PackageCard;
