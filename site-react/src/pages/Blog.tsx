import { motion } from 'framer-motion';
import { FaCalendar, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';
import { Card, SectionTitle } from '../components/common';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Les tendances de la construction durable en 2025',
      excerpt: 'Découvrez les innovations qui façonnent l\'avenir de la construction écologique au Sénégal.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      category: 'Innovation',
      author: 'Mamadou Diallo',
      date: '15 Octobre 2024',
      readTime: '5 min'
    },
    {
      id: 2,
      title: 'Guide complet pour choisir le bon béton',
      excerpt: 'Tout ce que vous devez savoir sur les différents types de béton et leurs applications.',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800',
      category: 'Guide Technique',
      author: 'Sara Benjelloun',
      date: '10 Octobre 2024',
      readTime: '8 min'
    },
    {
      id: 3,
      title: 'Sécurité sur les chantiers : nouvelles normes 2024',
      excerpt: 'Les dernières réglementations en matière de sécurité et santé au travail dans le BTP.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800',
      category: 'Sécurité',
      author: 'Karim Tazi',
      date: '5 Octobre 2024',
      readTime: '6 min'
    },
    {
      id: 4,
      title: 'L\'importance de la maintenance préventive',
      excerpt: 'Comment la maintenance préventive de vos équipements peut vous faire économiser.',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800',
      category: 'Logistique',
      author: 'Youssef El Idrissi',
      date: '1 Octobre 2024',
      readTime: '4 min'
    },
    {
      id: 5,
      title: 'Rénovation énergétique : les aides disponibles',
      excerpt: 'Tour d\'horizon des subventions et aides pour vos projets de rénovation énergétique.',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800',
      category: 'Rénovation',
      author: 'Fatima Zahra',
      date: '25 Septembre 2024',
      readTime: '7 min'
    },
    {
      id: 6,
      title: 'Génie civil : les grands projets au Sénégal',
      excerpt: 'Focus sur les projets d\'infrastructure qui transforment le paysage sénégalais.',
      image: 'https://images.unsplash.com/photo-1589132477815-87e2c1ccb9d7?w=800',
      category: 'Infrastructure',
      author: 'Ahmed Benali',
      date: '20 Septembre 2024',
      readTime: '10 min'
    },
    {
      id: 7,
      title: 'Location vs Achat d\'équipements de chantier',
      excerpt: 'Analyse comparative pour vous aider à faire le meilleur choix pour votre entreprise.',
      image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=800',
      category: 'Logistique',
      author: 'Omar Chahid',
      date: '15 Septembre 2024',
      readTime: '6 min'
    },
    {
      id: 8,
      title: 'Les certifications qualité dans le BTP',
      excerpt: 'Pourquoi les certifications ISO sont essentielles pour votre entreprise de construction.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Qualité',
      author: 'Nadia Kettani',
      date: '10 Septembre 2024',
      readTime: '5 min'
    },
    {
      id: 9,
      title: 'Construction modulaire : l\'avenir du BTP ?',
      excerpt: 'Exploration des avantages et défis de la construction modulaire au Sénégal.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      category: 'Innovation',
      author: 'Rachid Alaoui',
      date: '5 Septembre 2024',
      readTime: '8 min'
    },
  ];

  const categories = [
    'Innovation',
    'Guide Technique',
    'Sécurité',
    'Logistique',
    'Rénovation',
    'Infrastructure',
    'Qualité'
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
              Notre <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Actualités, conseils et expertise dans le domaine de la construction
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-6 left-6 px-4 py-2 bg-secondary text-white text-sm font-semibold rounded-full">
                  Article Featured
                </span>
              </div>

              <div>
                <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  {articles[0].category}
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-primary" />
                    {articles[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-primary" />
                    {articles[0].date}
                  </div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-primary" />
                    {articles[0].readTime}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Lire l'article
                  <FaArrowRight className="inline ml-2" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Catégories"
            subtitle="Explorez nos articles par thématique"
          />

          <div className="flex flex-wrap justify-center gap-3 mt-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2 bg-white text-gray-700 rounded-full font-medium hover:bg-primary hover:text-white transition-all shadow-md"
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            title="Derniers Articles"
            subtitle="Restez informé des actualités du secteur"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {articles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full overflow-hidden group cursor-pointer">
                  <div className="relative h-48 -m-6 mb-4 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <FaUser />
                      {article.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar />
                      {article.date}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="mt-4 text-primary font-semibold text-sm flex items-center gap-2"
                  >
                    Lire la suite
                    <FaArrowRight />
                  </motion.button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline"
            >
              Charger plus d'articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Restez informé de nos actualités
              </h2>
              <p className="text-xl mb-8">
                Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn-secondary whitespace-nowrap"
                >
                  S'inscrire
                </motion.button>
              </form>

              <p className="text-sm text-gray-200 mt-4">
                En vous inscrivant, vous acceptez de recevoir nos communications. Pas de spam, promis !
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
