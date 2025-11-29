import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nom complet
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#641717] focus:border-transparent transition-all"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#641717] focus:border-transparent transition-all"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Téléphone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#641717] focus:border-transparent transition-all"
            placeholder="+243 XXX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Votre projet
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#641717] focus:border-transparent transition-all resize-none"
            placeholder="Décrivez votre projet..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#641717] text-white py-4 rounded-full font-semibold hover:bg-[#641717] transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <span>Envoyer la demande</span>
          <Send size={18} />
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
