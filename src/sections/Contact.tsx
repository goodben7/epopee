import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Kinshasa', 'République Démocratique du Congo'],
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+243 XXX XXX XXX'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@epopeevisuelle.com', 'info@epopeevisuelle.com'],
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun - Sam: 8h - 18h', 'Dimanche: Sur rendez-vous'],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-<span className="text-amber-500">nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Prêt à transformer vos souvenirs en œuvres d'art ? Parlons de votre projet
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-amber-500/10 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <FaWhatsapp size={32} />
                <h3 className="text-2xl font-bold">Commandez sur WhatsApp</h3>
              </div>
              <p className="mb-6 leading-relaxed">
                Pour une réponse rapide, contactez-nous directement sur WhatsApp. Notre équipe est prête à vous aider.
              </p>
              <a
                href="https://wa.me/243XXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-amber-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Ouvrir WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
