import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaAward, 
  FaUsers, 
  FaHandshake, 
  FaChartLine,
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaCertificate
} from 'react-icons/fa';
import { Card, SectionTitle } from '../components/common';

const About = () => {
  const milestones = [
    { year: '2010', title: 'Création', description: 'Fondation de SBS-GROUP' },
    { year: '2013', title: 'Expansion', description: 'Création de SBS-Logistique' },
    { year: '2016', title: 'Production', description: 'Lancement de SBS-Industries' },
    { year: '2020', title: 'Leadership', description: 'Leader régional de la construction' },
    { year: '2025', title: 'Excellence', description: '200+ projets réalisés avec succès' },
  ];

  const values = [
    {
      icon: FaAward,
      title: 'Savoir-faire',
      description: 'Une expertise technique reconnue et un Bureau des Méthodes expérimenté pour la réussite de vos projets.'
    },
    {
      icon: FaHandshake,
      title: 'Engagement',
      description: 'Nous nous engageons pleinement dans chaque projet, garantissant qualité et satisfaction client.'
    },
    {
      icon: FaUsers,
      title: 'Disponibilité',
      description: 'Une équipe toujours à l\'écoute, réactive et présente pour répondre à vos besoins.'
    },
    {
      icon: FaChartLine,
      title: 'Responsabilité',
      description: 'Nous assumons nos engagements avec rigueur et professionnalisme dans chaque réalisation.'
    },
    {
      icon: FaCheckCircle,
      title: 'Confiance',
      description: 'Bâtir des relations durables basées sur la transparence et la fiabilité de nos prestations.'
    },
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Management de la qualité' },
    { name: 'ISO 14001:2015', description: 'Management environnemental' },
    { name: 'OHSAS 18001', description: 'Santé et sécurité au travail' },
    { name: 'Certification BTP', description: 'Qualification professionnelle' },
  ];

  const team = [
    { role: 'Direction Générale', description: 'Leadership stratégique et vision à long terme' },
    { role: 'Ingénierie', description: 'Conception et études techniques avancées' },
    { role: 'Gestion de Projets', description: 'Coordination et suivi de chantiers' },
    { role: 'Qualité & Sécurité', description: 'Conformité aux normes et sécurité' },
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6"
            >
              Depuis 2010
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              À propos de <span className="text-secondary">SBS-GROUP</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Créer une qualité de vie urbaine, bâtir des communautés plus fortes
            </p>
            <p className="text-lg text-gray-300 mt-4">
              Plus de 15 ans d'expérience dans le secteur avec une équipe de professionnels qualifiés et passionnés
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle 
                title="Notre Histoire" 
                subtitle="Un parcours de croissance et d'innovation"
                centered={false}
              />
              
              {/* Philosophie */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-xl mb-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-4">Notre Philosophie</h3>
                <p className="text-gray-700 leading-relaxed">
                  SBS-GROUP se distingue par son engagement dans la réalisation de prestations de qualité. 
                  Notre philosophie repose sur <strong>trois piliers fondamentaux</strong> : un Bureau des Méthodes 
                  expérimenté, une expertise terrain reconnue, et un personnel qualifié et dévoué.
                </p>
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Fondé en <strong className="text-primary">2010</strong>, SBS-GROUP est né de la vision 
                de créer une entreprise de construction d'excellence au Sénégal. Au fil des années, nous 
                avons élargi nos activités pour créer un groupe intégré couvrant tous les aspects de la 
                construction.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                En <strong className="text-primary">2013</strong>, nous avons créé <strong>SBS-Logistique</strong> pour 
                répondre aux besoins en équipements de nos chantiers. En <strong className="text-primary">2016</strong>, 
                <strong> SBS-Industries</strong> a vu le jour pour garantir la qualité et la disponibilité des matériaux.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nous sommes guidés par <strong className="text-primary">cinq valeurs essentielles</strong> : le Savoir-faire, 
                l'Engagement, la Disponibilité, la Responsabilité et la Confiance.
              </p>
              
              {/* Signature Direction */}
              <div className="border-t pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900">Direction SBS-GROUP</h4>
                    <p className="text-gray-600">Directeur Général</p>
                  </div>
                  <Link 
                    to="/contact" 
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ 
                    backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800')" 
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Notre Évolution" 
            subtitle="Les moments clés de notre parcours"
          />

          <div className="mt-12 relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <Card>
                    <div className="text-4xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-heading font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaEye className="text-4xl text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Notre Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Être le groupe de construction et services associés le plus respecté au Sénégal, 
                  reconnu pour notre excellence, notre innovation et notre engagement envers 
                  la satisfaction client. Nous aspirons à contribuer au développement durable 
                  des infrastructures sénégalaises.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaBullseye className="text-4xl text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">Notre Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fournir des solutions de construction intégrées et de haute qualité, en 
                  respectant les délais, les budgets et les normes de sécurité. Nous nous 
                  engageons à créer de la valeur pour nos clients, nos employés et la société 
                  à travers des pratiques durables et responsables.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Nos Valeurs" 
            subtitle="Les 5 valeurs essentielles qui guident SBS-GROUP"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-3xl text-primary" />
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle 
            title="Certifications & Qualifications" 
            subtitle="Notre engagement envers la qualité et la conformité"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <FaCertificate className="text-4xl text-secondary mx-auto mb-4" />
                  <h4 className="font-heading font-bold mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle 
            title="Notre Équipe" 
            subtitle="Des professionnels qualifiés et passionnés"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <FaCheckCircle className="text-3xl text-primary mb-4" />
                  <h4 className="text-lg font-heading font-bold mb-2">{member.role}</h4>
                  <p className="text-sm text-gray-600">{member.description}</p>
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
            <p className="text-lg text-gray-600 mb-6">
              Plus de <strong className="text-primary">150 employés qualifiés</strong> travaillent 
              chaque jour pour garantir le succès de vos projets
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Rejoignez notre équipe
              </motion.button>
            </Link>
          </motion.div>
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
              Construisons ensemble l'avenir
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Découvrez comment SBS-GROUP peut transformer vos projets en réalité
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg"
                >
                  Nos Services
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
                >
                  Nos Réalisations
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
