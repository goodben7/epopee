import { motion, useMotionValue, useMotionValueEvent, animate } from 'framer-motion';
import { useMemo, useState } from 'react';
import { Search, Send, CheckCircle, Package } from 'lucide-react';

const HowItWorks = () => {
  const progress = useMotionValue(0);
  const thresholds = useMemo(() => [0.2, 0.45, 0.7, 0.95], []);
  const [activeCount, setActiveCount] = useState(0);
  useMotionValueEvent(progress, 'change', (v) => {
    setActiveCount(thresholds.filter((t) => v >= t).length);
  });
  const listVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Choisissez un package',
      description: 'Sélectionnez le package qui correspond à vos besoins et votre budget parmi notre large gamme d\'offres.',
    },
    {
      icon: Send,
      number: '02',
      title: 'Envoyez photos + texte',
      description: 'Transmettez-nous vos photos, textes et instructions via WhatsApp ou email. Nous sommes à votre écoute.',
    },
    {
      icon: CheckCircle,
      number: '03',
      title: 'Validation de la conception',
      description: 'Recevez un aperçu de votre création. Validez ou demandez des modifications jusqu\'à satisfaction totale.',
    },
    {
      icon: Package,
      number: '04',
      title: 'Livraison du produit',
      description: 'Recevez votre cadre ou fichier imprimé. Livraison rapide à Kinshasa ou téléchargement numérique.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comment <span className="text-[#641717]">ça marche</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processus simple et transparent en 4 étapes
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            onViewportEnter={() =>
              animate(progress, 1, {
                duration: 3,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'loop',
              })
            }
            onViewportLeave={() => progress.set(0)}
            style={{ transformOrigin: 'left', scaleX: progress }}
            className="hidden lg:block absolute left-0 right-0 top-14 h-[2px] bg-gradient-to-r from-[#641717] via-[#641717] to-transparent opacity-40"
          />

          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={itemVariants} className="relative z-10" whileHover={{ y: -6, scale: 1.02 }}>
                <div className="text-center">
                  <motion.div className="relative inline-block mb-6" whileHover={{ scale: 1.03 }}>
                    <div className="absolute -inset-4 bg-[#641717]/10 rounded-full" />
                    <motion.div
                      className="relative bg-white border-4 border-[#641717] w-20 h-20 rounded-full flex items-center justify-center"
                      animate={activeCount > index ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <step.icon className="w-8 h-8 text-[#641717]" />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0, y: -6, opacity: 0 }}
                      whileInView={{ scale: 1, y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                      animate={activeCount > index ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                      className="absolute -top-2 -right-2 bg-[#641717] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    >
                      {step.number}
                    </motion.div>
                  </motion.div>

                  <motion.h3 className="text-xl font-bold text-gray-900 mb-3" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    {step.title}
                  </motion.h3>
                  <motion.p className="text-gray-600 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    {step.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
