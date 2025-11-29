import { motion } from 'framer-motion';
import { Award, Heart, Zap, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Qualité premium garantie sur chaque projet',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Chaque création est réalisée avec soin et dévouement',
    },
    {
      icon: Zap,
      title: 'Rapidité',
      description: 'Délais respectés et livraisons rapides',
    },
    {
      icon: Users,
      title: 'Satisfaction',
      description: '100% de clients satisfaits et fidèles',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos <span className="text-amber-500">d'Épopée Visuelle</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl opacity-20 blur-xl" />
              <div className="relative bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl aspect-square"
                   style={{
                     backgroundImage: 'url(https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800)',
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                   }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Votre partenaire créatif à Kinshasa
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-amber-500">Épopée Visuelle</span> est un studio créatif basé à Kinshasa, spécialisé dans la conception de cadres personnalisés, montages photo et impressions premium.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nous transformons vos souvenirs en œuvres d'art uniques, alliant créativité, qualité et professionnalisme. Chaque projet est une nouvelle aventure, une nouvelle épopée visuelle que nous créons avec passion pour vous.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Notre engagement : offrir des créations exceptionnelles qui racontent votre histoire et subliment vos moments précieux.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-amber-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-amber-500" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
