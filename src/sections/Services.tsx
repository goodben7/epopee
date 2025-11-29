import { motion } from 'framer-motion';
import { Palette, Printer, Frame, Image, BookOpen } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Conception Graphique',
      description: 'Designs créatifs et professionnels pour tous vos besoins visuels. Logos, affiches, cartes de visite et plus encore.',
    },
    {
      icon: Printer,
      title: 'Impression Premium',
      description: 'Impressions haute qualité de A8 à A0. Papier premium, couleurs vives et finitions professionnelles.',
    },
    {
      icon: Frame,
      title: 'Cadres Personnalisés',
      description: 'Encadrement sur mesure pour sublimer vos créations. Finitions élégantes et protectrices.',
    },
    {
      icon: Image,
      title: 'Montage Photo',
      description: 'Création de compositions uniques avec vos photos préférées. Assemblages artistiques et harmonieux.',
    },
    {
      icon: BookOpen,
      title: 'Magazine & Lettres',
      description: 'Impression de magazines personnalisés et lettres d\'anniversaire format premium.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services pour donner vie à vos idées créatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
