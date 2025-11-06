import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendar, FaBuilding, FaCheckCircle } from 'react-icons/fa';
import { Card, SectionTitle } from '../components/common';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('tous');

  const categories = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'residentiel', label: 'Résidentiel' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'infrastructure', label: 'Infrastructure' },
    { id: 'industriel', label: 'Industriel' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Résidence Les Jardins',
      category: 'residentiel',
      location: 'Dakar',
      year: '2024',
      description: 'Complexe résidentiel de 120 appartements avec espaces verts',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      details: ['8 étages', '120 unités', 'Parking souterrain', 'Espaces verts']
    },
    {
      id: 2,
      title: 'Centre Commercial Atlas',
      category: 'commercial',
      location: 'Rabat',
      year: '2024',
      description: 'Centre commercial moderne de 15,000 m²',
      image: 'https://images.unsplash.com/photo-1555529902-5261145633bf?w=800',
      details: ['15,000 m²', '80 boutiques', '3 niveaux', 'Parking 500 places']
    },
    {
      id: 3,
      title: 'Pont Ville Neuve, MbaoI',
      category: 'infrastructure',
      location: 'Tanger',
      year: '2023',
      description: 'Pont à haubans de 450m reliant deux quartiers',
      image: 'https://images.unsplash.com/photo-1589132477815-87e2c1ccb9d7?w=800',
      details: ['450m de longueur', '4 voies', 'Structure acier', 'Piétons & vélos']
    },
    {
      id: 4,
      title: 'Usine Pharmaceutique',
      category: 'industriel',
      location: 'Berrechid',
      year: '2023',
      description: 'Usine de production pharmaceutique aux normes GMP',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      details: ['8,000 m²', 'Salles blanches', 'Normes GMP', 'Zones de production']
    },
    {
      id: 5,
      title: 'Villa Contemporaine',
      category: 'residentiel',
      location: 'Marrakech',
      year: '2024',
      description: 'Villa de luxe avec piscine et jardin paysager',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
      details: ['500 m²', 'Piscine 15m', 'Jardin paysager', 'Domotique']
    },
    {
      id: 6,
      title: 'Route Nationale RN1',
      category: 'infrastructure',
      location: 'Settat',
      year: '2023',
      description: 'Réhabilitation de 25km de route nationale',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      details: ['25 km', '2x2 voies', 'Revêtement neuf', 'Signalisation']
    },
    {
      id: 7,
      title: 'Hôtel 5 Étoiles Oasis',
      category: 'commercial',
      location: 'Agadir',
      year: '2023',
      description: 'Hôtel de luxe avec vue mer et spa',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
      details: ['200 chambres', 'Spa & wellness', 'Vue mer', '3 restaurants']
    },
    {
      id: 8,
      title: 'Entrepôt Logistique',
      category: 'industriel',
      location: 'Dakar',
      year: '2024',
      description: 'Plateforme logistique moderne de 12,000 m²',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800',
      details: ['12,000 m²', 'Zone de stockage', 'Quais de chargement', 'Bureaux']
    },
    {
      id: 9,
      title: 'Immeuble de Bureaux',
      category: 'commercial',
      location: 'Dakar',
      year: '2024',
      description: 'Tour de bureaux moderne de 12 étages',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      details: ['12 étages', '6,000 m²', 'Climatisation', 'Parking']
    },
  ];

  const filteredProjects = activeCategory === 'tous'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const stats = [
    { number: '200+', label: 'Projets réalisés' },
    { number: '15+', label: 'Ans d\'expérience' },
    { number: '100%', label: 'Clients satisfaits' },
    { number: '50M+', label: 'm² construits' },
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
              Nos <span className="text-secondary">Réalisations</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12">
              Découvrez nos projets de construction à travers le Sénégal
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-3xl font-bold text-secondary">{stat.number}</div>
                  <div className="text-sm text-gray-200 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden h-full">
                  <div className="relative h-56 overflow-hidden rounded-t-xl -m-6 mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center gap-2 text-white text-sm mb-2">
                        <FaMapMarkerAlt />
                        <span>{project.location}</span>
                        <span className="ml-auto">{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                  <div className="grid grid-cols-2 gap-2">
                    {project.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-primary mt-0.5 flex-shrink-0 text-xs" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Aucun projet trouvé dans cette catégorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Notre Processus de Réalisation"
            subtitle="De la conception à la livraison"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { step: '01', title: 'Consultation', description: 'Analyse de vos besoins et faisabilité' },
              { step: '02', title: 'Conception', description: 'Études techniques et plans détaillés' },
              { step: '03', title: 'Construction', description: 'Réalisation avec suivi rigoureux' },
              { step: '04', title: 'Livraison', description: 'Réception et garantie qualité' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h4 className="text-lg font-heading font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
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
            <FaBuilding className="text-6xl text-secondary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Votre projet sera notre prochaine réalisation
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Parlez-nous de votre projet et découvrez comment nous pouvons le concrétiser
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary text-lg"
                >
                  Démarrer un projet
                </motion.button>
              </a>
              <a href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-lg"
                >
                  Nos services
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
