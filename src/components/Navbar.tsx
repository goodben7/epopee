import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | 'services' | 'packages'>(null);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y <= 0) {
        setHidden(false);
      } else if (y > lastY.current && y > 10 && !isOpen) {
        setHidden(true);
      } else if (y < lastY.current) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Galerie', href: '#gallery' },
    { label: 'À propos', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.25 }}
      className={`fixed top-0 w-full z-50 border-b transition-colors duration-300 ${
        (isOpen || scrolled)
          ? 'bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-md border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <img src={`${import.meta.env.BASE_URL}img/logo.png`} alt="Logo" className="w-9 h-9 rounded-full object-cover" />
            <span className="text-xl font-bold text-white">Épopée Visuelle</span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            <div className="relative group">
              <motion.a
                href="#services"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-1 text-white hover:text-[#641717] transition-colors duration-300"
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </motion.a>
              <div className="absolute left-0 mt-2 w-56 bg-black/90 border border-white/10 rounded-lg shadow-lg backdrop-blur hidden group-hover:block">
                <div className="py-2">
                  {[
                    { label: 'Conception graphique', href: '#services' },
                    { label: 'Impression premium', href: '#services' },
                    { label: 'Cadres personnalisés', href: '#services' },
                    { label: 'Montage photo', href: '#services' },
                    { label: 'Magazine & lettres', href: '#services' },
                  ].map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/5"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <motion.a
                href="#packages"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-1 text-white hover:text-[#641717] transition-colors duration-300"
              >
                <span>Packages</span>
                <ChevronDown size={16} />
              </motion.a>
              <div className="absolute left-0 mt-2 w-56 bg-black/90 border border-white/10 rounded-lg shadow-lg backdrop-blur hidden group-hover:block">
                <div className="py-2">
                  {[
                    { label: 'Packages Cadres', href: '#packages' },
                    { label: 'Conception + Impression', href: '#packages' },
                  ].map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/5"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {menuItems
              .filter((i) => !['Services', 'Packages'].includes(i.label))
              .map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white hover:text-[#641717] transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}
          </div>

          <motion.a
            href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block bg-[#641717] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#641717] transition-colors duration-300 hover:scale-105 active:scale-95"
          >
            Commander maintenant
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-transparent border-t border-transparent"
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => {
              if (item.label === 'Services') {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                      className="flex w-full items-center justify-between py-2 text-white"
                    >
                      <span>Services</span>
                      <ChevronDown size={18} className={`${openDropdown === 'services' ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    {openDropdown === 'services' && (
                      <div className="pl-4 space-y-1">
                        {[
                          { label: 'Conception graphique', href: '#services' },
                          { label: 'Impression premium', href: '#services' },
                          { label: 'Cadres personnalisés', href: '#services' },
                          { label: 'Montage photo', href: '#services' },
                          { label: 'Magazine & lettres', href: '#services' },
                        ].map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-white/90 hover:text-white"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              if (item.label === 'Packages') {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === 'packages' ? null : 'packages')}
                      className="flex w-full items-center justify-between py-2 text-white"
                    >
                      <span>Packages</span>
                      <ChevronDown size={18} className={`${openDropdown === 'packages' ? 'rotate-180' : ''} transition-transform`} />
                    </button>
                    {openDropdown === 'packages' && (
                      <div className="pl-4 space-y-1">
                        {[
                          { label: 'Packages Cadres', href: '#packages' },
                          { label: 'Conception + Impression', href: '#packages' },
                        ].map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-1 text-white/90 hover:text-white"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-white hover:text-[#641717] transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#641717] text-white px-6 py-2 rounded-full font-semibold mt-4 hover:scale-105 active:scale-95"
            >
              Commander maintenant
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
