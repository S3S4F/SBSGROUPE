import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBuilding, 
  FaTruck, 
  FaIndustry,
  FaHardHat,
  FaTools,
  FaMapMarkedAlt,
  FaCubes,
  FaWarehouse,
  FaCog,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle
} from 'react-icons/fa';
import { Card, SectionTitle } from '../components/common';

const Groupe = () => {
  const stats = [
    { number: '15', suffix: ' ans', label: 'D\'expérience', icon: FaBuilding },
    { number: '200', suffix: '+', label: 'Projets réalisés', icon: FaHardHat },
    { number: '3', suffix: '', label: 'Entreprises', icon: FaIndustry },
    { number: '150', suffix: '+', label: 'Employés', icon: FaTools },
  ];

  const groupServices = [
    {
      icon: FaHardHat,
      title: 'Construction',
      description: 'Bâtiments résidentiels, commerciaux et industriels'
    },
    {
      icon: FaMapMarkedAlt,
      title: 'Génie Civil',
      description: 'Routes, ponts, terrassements et VRD'
    },
    {
      icon: FaBuilding,
      title: 'Gros Œuvre',
      description: 'Structure et fondations solides'
    },
    {
      icon: FaCog,
      title: 'Rénovation',
      description: 'Modernisation et mise aux normes'
    },
  ];

  const logistiqueServices = [
    {
      icon: FaTruck,
      title: 'Location d\'Engins',
      description: 'Grues, pelleteuses, bulldozers...'
    },
    {
      icon: FaWarehouse,
      title: 'Matériel BTP',
      description: 'Équipements professionnels de qualité'
    },
    {
      icon: FaTools,
      title: 'Maintenance',
      description: 'Entretien et réparation sur site'
    },
    {
      icon: FaCog,
      title: 'Transport',
      description: 'Livraison de matériaux et équipements'
    },
  ];

  const industriesProducts = {
    beton: [
      'Béton prêt à l\'emploi',
      'Béton haute résistance',
      'Béton décoratif',
      'Béton armé',
    ],
    briques: [
      'Briques creuses',
      'Briques pleines',
      'Blocs de béton',
      'Parpaings',
    ],
  };

  const advantages = [
    { title: 'Expérience', description: '15 ans d\'expertise dans le secteur', icon: FaBuilding },
    { title: 'Qualité', description: 'Matériaux et services certifiés', icon: FaCheckCircle },
    { title: 'Innovation', description: 'Technologies modernes et efficaces', icon: FaCog },
    { title: 'Proximité', description: 'Présence locale et réactivité', icon: FaMapMarkerAlt },
    { title: 'Équipe', description: 'Professionnels qualifiés et formés', icon: FaTools },
    { title: 'Engagement', description: 'Respect des délais et budgets', icon: FaHardHat },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-dark to-gray-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Le Groupe <span className="text-secondary">SBS</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Trois entreprises, une vision : L'excellence dans la construction et les services associés
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6"
              >
                <stat.icon className="text-4xl text-secondary mx-auto mb-3" />
                <div className="text-4xl font-bold">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-300 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SBS-GROUP Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaBuilding className="text-3xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold">SBS-GROUP</h2>
                  <p className="text-secondary font-semibold">Construction & Génie Civil</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Entreprise leader dans le domaine de la construction et du génie civil au Sénégal.
                Nous réalisons des projets de grande envergure avec un savoir-faire reconnu et
                une équipe d'experts qualifiés.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre engagement envers l'excellence nous permet de livrer des projets respectant
                les normes internationales les plus strictes, dans les délais impartis et avec
                un souci constant de la qualité.
              </p>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Découvrir nos services
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {groupServices.map((service, index) => (
                <Card key={index} className="text-center">
                  <service.icon className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="font-heading font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SBS-Logistique Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 order-2 lg:order-1"
            >
              {logistiqueServices.map((service, index) => (
                <Card key={index} className="text-center">
                  <service.icon className="text-4xl text-secondary mx-auto mb-4" />
                  <h4 className="font-heading font-bold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <FaTruck className="text-3xl text-secondary" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold">SBS-Logistique</h2>
                  <p className="text-secondary font-semibold">Matériel & Équipements</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Spécialisée dans la location et la vente d'équipements de construction,
                SBS-Logistique met à votre disposition un parc moderne et diversifié de
                matériel professionnel.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nos équipements sont régulièrement entretenus et contrôlés pour garantir
                leur performance et leur sécurité sur vos chantiers.
              </p>

              {/* Contact Box */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <h4 className="font-heading font-bold text-lg mb-4">Besoin de matériel ?</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-primary" />
                    <a href="tel:+221338710861" className="hover:text-primary transition">
                      (+221) 221 33 871 08 61
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary" />
                    <a href="mailto:logistique@sbsgroupe.sn" className="hover:text-primary transition">
                      logistique@sbsgroupe.sn
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SBS-Industries Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaIndustry className="text-3xl text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold">SBS-Industries</h2>
                  <p className="text-secondary font-semibold">Béton & Briques</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Production et fourniture de béton prêt à l'emploi et de briques de haute qualité.
                SBS-Industries dispose d'installations modernes garantissant des produits
                conformes aux normes les plus exigeantes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Notre capacité de production nous permet de répondre aux besoins des projets
                de toutes tailles, avec une livraison rapide et fiable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <FaCubes className="text-4xl text-primary mb-4" />
                  <h4 className="font-heading font-bold text-lg mb-4">Production Béton</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {industriesProducts.beton.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card>
                  <FaWarehouse className="text-4xl text-primary mb-4" />
                  <h4 className="font-heading font-bold text-lg mb-4">Production Briques</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {industriesProducts.briques.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Nos Atouts"
            subtitle="Ce qui fait la force du Groupe SBS"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="text-3xl text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-2">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </Card>
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
              Rejoignez nos clients satisfaits
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Faites confiance au Groupe SBS pour tous vos projets de construction
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg"
                >
                  Contactez-nous
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
                >
                  Voir nos réalisations
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Groupe;
