import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBuilding,
  FaRoad,
  FaHardHat,
  FaWarehouse,
  FaTruck,
  FaTools,
  FaCog,
  FaCubes,
  FaIndustry,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { Card, SectionTitle } from '../components/common';

const Services = () => {
  const constructionServices = [
    {
      icon: FaBuilding,
      title: 'Construction de Bâtiments',
      description: 'Résidentiels, commerciaux et industriels',
      details: [
        'Immeubles d\'habitation',
        'Centres commerciaux',
        'Bureaux et locaux professionnels',
        'Usines et entrepôts',
      ]
    },
    {
      icon: FaRoad,
      title: 'Génie Civil',
      description: 'Infrastructures et travaux publics',
      details: [
        'Routes et autoroutes',
        'Ponts et ouvrages d\'art',
        'Réseaux VRD',
        'Terrassements',
      ]
    },
    {
      icon: FaHardHat,
      title: 'Gros Œuvre',
      description: 'Structure et fondations',
      details: [
        'Fondations spéciales',
        'Structures béton armé',
        'Charpentes métalliques',
        'Murs de soutènement',
      ]
    },
    {
      icon: FaWarehouse,
      title: 'Rénovation',
      description: 'Modernisation et réhabilitation',
      details: [
        'Rénovation complète',
        'Mise aux normes',
        'Extension de bâtiments',
        'Restauration de façades',
      ]
    },
  ];

  const logistiqueServices = [
    {
      icon: FaTruck,
      title: 'Location d\'Engins',
      description: 'Parc moderne et diversifié',
      details: [
        'Grues et nacelles',
        'Pelleteuses et bulldozers',
        'Chargeuses et niveleuses',
        'Compacteurs et rouleaux',
      ]
    },
    {
      icon: FaTools,
      title: 'Matériel de Construction',
      description: 'Équipements professionnels',
      details: [
        'Échafaudages et étais',
        'Coffrages et banches',
        'Outils électroportatifs',
        'Matériel de levage',
      ]
    },
    {
      icon: FaCog,
      title: 'Maintenance',
      description: 'Entretien et réparation',
      details: [
        'Maintenance préventive',
        'Réparations sur site',
        'Assistance technique 24/7',
        'Pièces détachées d\'origine',
      ]
    },
    {
      icon: FaTruck,
      title: 'Transport & Livraison',
      description: 'Logistique optimisée',
      details: [
        'Livraison de matériaux',
        'Transport d\'engins',
        'Camions et semi-remorques',
        'Service express disponible',
      ]
    },
  ];

  const industriesServices = [
    {
      icon: FaCubes,
      title: 'Béton Prêt à l\'Emploi',
      description: 'Production et livraison',
      details: [
        'Béton standard',
        'Béton haute performance',
        'Béton décoratif',
        'Béton autoplaçant',
      ]
    },
    {
      icon: FaIndustry,
      title: 'Production de Briques',
      description: 'Fabrication locale',
      details: [
        'Briques creuses',
        'Briques pleines',
        'Blocs de béton',
        'Parpaings',
      ]
    },
  ];

  const advantages = [
    { title: 'Qualité Certifiée', description: 'Normes ISO 9001:2015', icon: FaCheckCircle },
    { title: 'Équipe Qualifiée', description: '150+ professionnels expérimentés', icon: FaCheckCircle },
    { title: 'Délais Respectés', description: 'Planning rigoureux et suivi', icon: FaCheckCircle },
    { title: 'Prix Compétitifs', description: 'Rapport qualité-prix optimal', icon: FaCheckCircle },
    { title: 'SAV Réactif', description: 'Support technique disponible', icon: FaCheckCircle },
    { title: 'Garanties', description: 'Garantie décennale sur travaux', icon: FaCheckCircle },
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
              Nos <span className="text-secondary">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Des solutions complètes pour tous vos projets de construction
            </p>
          </motion.div>
        </div>
      </section>

      {/* SBS-GROUP Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FaBuilding className="text-3xl text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">SBS-GROUP</h2>
              <p className="text-lg text-secondary font-semibold">Construction & Génie Civil</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {constructionServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SBS-Logistique Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FaTruck className="text-3xl text-secondary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">SBS-Logistique</h2>
              <p className="text-lg text-secondary font-semibold">Matériel & Équipements</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {logistiqueServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-2xl text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-secondary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SBS-Industries Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
              <FaIndustry className="text-3xl text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">SBS-Industries</h2>
              <p className="text-lg text-secondary font-semibold">Béton & Briques</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industriesServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Avantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Pourquoi Nous Choisir ?" 
            subtitle="Les avantages de travailler avec le Groupe SBS"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="text-center">
                  <advantage.icon className="text-4xl text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-heading font-bold mb-2">{advantage.title}</h4>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Notre Processus" 
            subtitle="Comment nous travaillons avec vous"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { step: '01', title: 'Contact', description: 'Prise de contact et écoute de vos besoins' },
              { step: '02', title: 'Étude', description: 'Analyse technique et élaboration du devis' },
              { step: '03', title: 'Réalisation', description: 'Exécution des travaux avec suivi rigoureux' },
              { step: '04', title: 'Livraison', description: 'Réception et garantie de satisfaction' },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center relative">
                  <div className="text-6xl font-bold text-primary/10 mb-4">{process.step}</div>
                  <h4 className="text-xl font-heading font-bold mb-2">{process.title}</h4>
                  <p className="text-sm text-gray-600">{process.description}</p>
                  {index < 3 && (
                    <FaArrowRight className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-2xl text-primary/30" />
                  )}
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
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé gratuit
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg"
                >
                  Demander un devis
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

export default Services;
