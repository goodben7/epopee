import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const CountUp = ({ end, duration = 1500, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const next = Math.floor(start + (end - start) * progress);
      setValue(next);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return <>{value}{suffix}</>;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('/img/Image_Hero.png')] bg-cover bg-center opacity-10" />


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center space-x-2 mb-6"
        >
          <Sparkles className="w-6 h-6 text-[#641717]" />
          <span className="text-[#641717] font-semibold tracking-wider uppercase text-sm">
            Studio Créatif
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Transformez vos moments<br />
          <span className="text-[#641717]">en œuvres d'art</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Conception graphique, impressions premium, cadres personnalisés et montages photo d'exception à Kinshasa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#packages"
            className="group bg-[#641717] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#641717] transition-all duration-300 flex items-center space-x-2 shadow-lg"
          >
            <span>Voir les Packages</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Commander maintenant
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { end: 500, suffix: '+', label: 'Projets réalisés' },
            { end: 100, suffix: '%', label: 'Satisfaction client' },
            { end: 24, suffix: 'h', label: 'Délai moyen' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#641717] mb-2">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#641717] rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[#641717] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
