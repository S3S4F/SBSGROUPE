import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBuilding, 
  FaTruck, 
  FaIndustry, 
  FaUsers,
  FaProjectDiagram,
  FaCheckCircle,
  FaHardHat,
  FaCogs,
  FaQuoteRight
} from 'react-icons/fa';
import { Card, Button, SectionTitle } from '../components/common';

const Home = () => {
  const stats = [
    { number: '2500', label: 'Projets Réalisés', icon: FaProjectDiagram },
    { number: '1500', label: 'Clients Satisfaits', icon: FaUsers },
    { number: '840', label: 'Secteurs Desservis', icon: FaHardHat },
    { number: '180', label: 'Rénovations', icon: FaCogs },
  ];

  const companies = [
    {
      name: 'SBS-GROUP',
      tagline: 'Construction & Génie Civil',
      description: 'Construction de bâtiments, infrastructures industrielles et projets miniers avec expertise et professionnalisme',
      icon: FaBuilding,
      color: 'primary',
      link: '/groupe',
    },
    {
      name: 'SBS-Logistique',
      tagline: 'Matériel & Équipements',
      description: 'Location d\'engins de chantier, matériel BTP et transport de matériaux avec un parc moderne et bien entretenu',
      icon: FaTruck,
      color: 'secondary',
      link: '/groupe',
    },
    {
      name: 'SBS-Industries',
      tagline: 'Béton & Briques',
      description: 'Production de béton prêt à l\'emploi et fabrication de briques de qualité supérieure pour tous vos projets',
      icon: FaIndustry,
      color: 'primary',
      link: '/groupe',
    },
  ];

  const services = [
    { title: 'Génie Civil', description: 'Routes, ponts, infrastructures' },
    { title: 'Construction', description: 'Bâtiments résidentiels et commerciaux' },
    { title: 'Location Matériel', description: 'Équipements professionnels' },
    { title: 'Production Béton', description: 'Béton prêt à l\'emploi' },
  ];

  const testimonials = [
    {
      name: 'Amadou Diop',
      role: 'Directeur de Projet',
      company: 'Ministère des Infrastructures',
      text: 'SBS-GROUP a réalisé nos projets d\'infrastructures avec un professionnalisme exemplaire. La qualité de leur travail et le respect des délais nous ont impressionnés.',
      rating: 5
    },
    {
      name: 'Fatou Sall',
      role: 'Promoteur Immobilier',
      company: 'Dakar Immobilier Plus',
      text: 'Une équipe compétente et réactive. Nous avons fait appel à SBS-GROUP pour plusieurs projets de construction et nous sommes toujours satisfaits du résultat.',
      rating: 5
    },
    {
      name: 'Moussa Ndiaye',
      role: 'Chef d\'Entreprise',
      company: 'Industries Sénégal',
      text: 'La location de matériel avec SBS-Logistique est fiable et professionnelle. Leur équipement est moderne et bien entretenu.',
      rating: 5
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-primary-dark to-gray-900">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6"
              >
                Leader de la construction au Sénégal
              </motion.span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                Créer une qualité de vie urbaine,
                <br />
                <span className="text-gradient">bâtir des communautés plus fortes</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Améliorer la qualité de vie avec une approche intégrée et unifiée. 
                SBS-GROUP réalise des prestations de qualité dans une recherche constante 
                de la satisfaction du client depuis 2010.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" className="text-lg">
                    Demander un devis
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                    Nos réalisations
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="text-3xl text-secondary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10"></div>
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800')" 
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Companies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Le Groupe SBS"
            subtitle="Trois entreprises complémentaires pour répondre à tous vos besoins"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link to={company.link}>
                  <Card className="text-center h-full group">
                    <div className={`w-20 h-20 bg-${company.color}/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${company.color} transition-all duration-300`}>
                      <company.icon className={`text-4xl text-${company.color} group-hover:text-white transition-colors duration-300`} />
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-2">{company.name}</h3>
                    <p className="text-secondary font-semibold mb-4">{company.tagline}</p>
                    <p className="text-gray-600">{company.description}</p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Nos Services"
            subtitle="Une gamme complète de solutions pour vos projets"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <FaCheckCircle className="text-3xl text-primary mb-4" />
                  <h4 className="text-xl font-heading font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/services">
              <Button variant="primary">Voir tous nos services</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Témoignages Section */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 text-white"
            >
              <span className="text-secondary">Témoignages</span> de nos clients
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto"
            >
              Ce que nos clients disent de nous
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full flex flex-col">
                  <FaQuoteRight className="text-4xl text-secondary mb-4" />
                  
                  <p className="text-gray-200 leading-relaxed mb-6 flex-1">
                    {testimonial.text}
                  </p>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <h5 className="font-bold text-white text-lg">{testimonial.name}</h5>
                    <p className="text-secondary text-sm">{testimonial.role}</p>
                    <p className="text-gray-300 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis gratuit
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="secondary" className="text-lg">
                  Obtenir un devis gratuit
                </Button>
              </Link>
              <a href="tel:+221338710861">
                <Button variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-primary">
                  Appelez-nous maintenant
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
