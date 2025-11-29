import { motion } from 'framer-motion';
import PackageCard from '../components/PackageCard';

const Packages = () => {
  const framePackages = [
    {
      name: 'Package Mini',
      price: '5',
      features: ['Cadre A8', 'Impression incluse', 'Conception graphique', 'Montage 1-4 photos'],
    },
    {
      name: 'Package Compact',
      price: '10',
      features: ['Cadre A8', 'Impression incluse', 'Montage 1-6 photos', 'Finition premium'],
    },
    {
      name: 'Package Standard',
      price: '15',
      features: ['Cadre A4', 'Impression incluse', 'Montage écrit', '1-14 photos'],
      highlighted: true,
    },
    {
      name: 'Package Medium',
      price: '20',
      features: ['Cadre A3', 'Impression incluse', 'Montage écrit', '1-20 photos'],
    },
    {
      name: 'Package Large',
      price: '25',
      features: ['Cadre A2', 'Impression incluse', 'Montage créatif', '1-30 photos'],
    },
    {
      name: 'Package XL',
      price: '30',
      features: ['Cadre A2', 'Impression premium', 'Montage personnalisé', '1-30 photos'],
    },
    {
      name: 'Package XXL',
      price: '35',
      features: ['Cadre A1', 'Impression premium', 'Montage artistique', '1-40 photos'],
    },
    {
      name: 'Package Premium',
      price: '40',
      features: ['Cadre A1', 'Impression premium', 'Montage élaboré', '1-50 photos'],
    },
    {
      name: 'Package Prestige',
      price: '50',
      features: ['Cadre A0', 'Impression premium', 'Montage exceptionnel', '60+ photos'],
    },
  ];

  const designPackages = [
    {
      name: 'Conception A8',
      price: '10',
      features: ['Conception graphique', 'Impression A8', '2-6 pages', 'Format compact'],
    },
    {
      name: 'Conception A6',
      price: '15',
      features: ['Conception graphique', 'Impression A6', '2-6 pages', 'Format standard'],
    },
    {
      name: 'Conception A6 Plus',
      price: '20',
      features: ['Conception graphique', 'Impression A6', '6-14 pages', 'Format étendu'],
      highlighted: true,
    },
    {
      name: 'Conception A4',
      price: '30',
      features: ['Conception graphique', 'Impression A4', '6-14 pages', 'Format professionnel'],
    },
    {
      name: 'Pack 20 Pages',
      price: '40',
      features: ['Conception graphique', 'Impression premium', '2-20 pages', 'Tous formats'],
    },
    {
      name: 'Pack 30 Pages',
      price: '50',
      features: ['Conception graphique', 'Impression premium', '2-30 pages', 'Magazine complet'],
    },
  ];

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos <span className="text-[#641717]">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des offres adaptées à tous vos besoins et budgets
          </p>
        </motion.div>

        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Packages Cadres
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {framePackages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                index={index}
                highlighted={pkg.highlighted}
              />
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Packages Conception + Impression
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designPackages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                index={index}
                highlighted={pkg.highlighted}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
