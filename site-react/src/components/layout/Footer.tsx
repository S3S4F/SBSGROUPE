import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'À propos', path: '/about' },
      { label: 'Groupe SBS', path: '/groupe' },
      { label: 'Services', path: '/services' },
      { label: 'Nos Projets', path: '/projects' },
    ],
    support: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Contact', path: '/contact' },
      { label: 'Blog', path: '/blog' },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black text-gray-300 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info - Enhanced with brand colors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-6 group">
              <div className="relative">
                {/* Animated gradient border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-30 group-hover:opacity-60 blur transition-opacity duration-500"></div>
                
                {/* Logo container with glassmorphism effect */}
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl group-hover:shadow-2xl transform group-hover:scale-105 transition-all duration-300 border border-white/20">
                  <img 
                    src="/logo.png" 
                    alt="SBS-GROUP" 
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>
            </Link>
            
            <p className="text-sm mb-6 leading-relaxed text-gray-400">
              Créer une qualité de vie urbaine, bâtir des communautés plus fortes. 
              SBS-GROUP réalise des prestations de qualité dans une recherche constante 
              de la satisfaction du client depuis 2010.
            </p>
            
            {/* Social links with gradient hover */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gray-800 group-hover:bg-transparent transition-colors duration-300"></div>
                  <social.icon className="relative z-10 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links - Company with gradient accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-heading font-semibold text-white mb-6 relative inline-block">
              Entreprise
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links - Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-heading font-semibold text-white mb-6 relative inline-block">
              Support
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with icons gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-heading font-semibold text-white mb-6 relative inline-block">
              Contact
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <FaMapMarkerAlt className="text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Ville Neuve, Mbao<br />Dakar, Sénégal</span>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <FaPhone className="text-primary group-hover:text-white transition-colors" />
                </div>
                <a href="tel:+221338710861" className="text-gray-400 hover:text-white transition-colors">
                  (+221) 221 33 871 08 61
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <FaEnvelope className="text-primary group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:sbsgroup15@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  sbsgroup15@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm group">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                  <FaEnvelope className="text-primary group-hover:text-white transition-colors" />
                </div>
                <a href="mailto:sbsenegal15@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  sbsenegal15@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer with gradient border */}
      <div className="border-t border-gradient-to-r from-transparent via-gray-700 to-transparent relative z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">SBS-GROUP</span>. 
              Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
