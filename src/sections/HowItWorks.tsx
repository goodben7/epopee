import { motion } from 'framer-motion';
import { Search, Send, CheckCircle, Package } from 'lucide-react';

const HowItWorks = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-4 bg-[#641717]/10 rounded-full" />
                  <div className="relative bg-white border-4 border-[#641717] w-20 h-20 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-[#641717]" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#641717] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#641717] to-transparent transform -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
