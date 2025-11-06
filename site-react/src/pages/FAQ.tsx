import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';
import { SectionTitle } from '../components/common';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'Général',
      questions: [
        {
          question: 'Depuis combien de temps SBS-GROUP est-il en activité ?',
          answer: 'SBS-GROUP a été fondé en 2010. Avec plus de 15 ans d\'expérience, nous avons réalisé plus de 200 projets de construction et génie civil au Sénégal.'
        },
        {
          question: 'Dans quelles régions intervenez-vous ?',
          answer: 'Nous intervenons principalement dans la région de Dakar (Mbao, Pikine, Rufisque) et ses environs. Cependant, pour les grands projets, nous pouvons intervenir partout au Sénégal.'
        },
        {
          question: 'Quelles sont les entreprises du Groupe SBS ?',
          answer: 'Le Groupe SBS comprend trois entreprises complémentaires : SBS-GROUP (construction et génie civil), SBS-Logistique (location de matériel et équipements), et SBS-Industries (production de béton et briques).'
        },
        {
          question: 'Êtes-vous certifiés ?',
          answer: 'Oui, nous sommes certifiés ISO 9001:2015 (management de la qualité), ISO 14001:2015 (management environnemental), et OHSAS 18001 (santé et sécurité au travail).'
        },
      ]
    },
    {
      category: 'Services & Projets',
      questions: [
        {
          question: 'Quels types de projets réalisez-vous ?',
          answer: 'Nous réalisons tous types de projets : bâtiments résidentiels, commerciaux et industriels, travaux de génie civil (routes, ponts, VRD), rénovations, et extensions. Consultez notre page Services pour plus de détails.'
        },
        {
          question: 'Proposez-vous des devis gratuits ?',
          answer: 'Oui, nous proposons des devis gratuits et sans engagement. Contactez-nous avec les détails de votre projet et nous vous répondrons dans les 48 heures.'
        },
        {
          question: 'Quel est le délai moyen pour un projet ?',
          answer: 'Le délai dépend de la nature et de l\'ampleur du projet. Pour une maison individuelle, comptez 6-12 mois. Pour les grands projets, nous établissons un planning détaillé lors de l\'étude.'
        },
        {
          question: 'Assurez-vous le suivi de chantier ?',
          answer: 'Absolument. Nous affectons un chef de projet dédié à chaque chantier qui assure un suivi quotidien et vous tient informé de l\'avancement des travaux.'
        },
      ]
    },
    {
      category: 'Location de Matériel',
      questions: [
        {
          question: 'Quel matériel proposez-vous à la location ?',
          answer: 'SBS-Logistique propose un large parc : grues, pelleteuses, bulldozers, nacelles, échafaudages, coffrages, et bien plus. Consultez notre page Services pour la liste complète.'
        },
        {
          question: 'Quelle est la durée minimale de location ?',
          answer: 'Nous proposons des locations à la journée, à la semaine ou au mois. Pour les projets de longue durée, nous offrons des tarifs dégressifs.'
        },
        {
          question: 'Le matériel est-il assuré ?',
          answer: 'Oui, tout notre matériel est assuré. Une franchise peut s\'appliquer en cas de dommages. Les détails sont précisés dans le contrat de location.'
        },
        {
          question: 'Assurez-vous la livraison et le transport ?',
          answer: 'Oui, nous assurons la livraison, l\'installation et la reprise du matériel sur votre chantier. Le transport est inclus dans nos tarifs.'
        },
      ]
    },
    {
      category: 'Béton & Matériaux',
      questions: [
        {
          question: 'Quels types de béton produisez-vous ?',
          answer: 'SBS-Industries produit du béton standard, béton haute performance, béton décoratif, et béton autoplaçant. Nous pouvons aussi réaliser des formulations sur mesure.'
        },
        {
          question: 'Quelle est votre capacité de production ?',
          answer: 'Notre centrale à béton a une capacité de production importante nous permettant de répondre aux besoins des petits comme des grands chantiers.'
        },
        {
          question: 'Livrez-vous le béton ?',
          answer: 'Oui, nous livrons le béton prêt à l\'emploi directement sur votre chantier avec nos camions malaxeurs. La livraison est ponctuelle et garantie.'
        },
        {
          question: 'Proposez-vous aussi des briques et parpaings ?',
          answer: 'Oui, SBS-Industries produit des briques creuses, briques pleines, blocs de béton et parpaings de haute qualité conformes aux normes sénégalaises.'
        },
      ]
    },
    {
      category: 'Tarifs & Paiement',
      questions: [
        {
          question: 'Comment sont calculés vos tarifs ?',
          answer: 'Nos tarifs sont calculés en fonction de la nature du projet, des matériaux utilisés, de la main-d\'œuvre nécessaire et du délai d\'exécution. Chaque devis est personnalisé.'
        },
        {
          question: 'Proposez-vous des facilités de paiement ?',
          answer: 'Oui, nous proposons des échéanciers de paiement adaptés à l\'avancement des travaux. Les modalités sont définies dans le contrat.'
        },
        {
          question: 'Y a-t-il des frais cachés ?',
          answer: 'Non, notre devis est transparent et détaillé. Tous les coûts sont clairement indiqués. En cas de modification du projet, un avenant est établi.'
        },
        {
          question: 'Acceptez-vous les paiements par traite ?',
          answer: 'Oui, nous acceptons les paiements par chèque, virement bancaire, et traite. Les modalités sont à convenir lors de la signature du contrat.'
        },
      ]
    },
    {
      category: 'Garanties & SAV',
      questions: [
        {
          question: 'Offrez-vous une garantie sur vos travaux ?',
          answer: 'Oui, nous offrons une garantie décennale sur les travaux de construction conformément à la réglementation en vigueur, ainsi que des garanties spécifiques selon les ouvrages.'
        },
        {
          question: 'Que faire en cas de problème après livraison ?',
          answer: 'Contactez-nous immédiatement. Notre service après-vente intervient rapidement pour résoudre tout problème couvert par la garantie.'
        },
        {
          question: 'Proposez-vous un service de maintenance ?',
          answer: 'Oui, nous proposons des contrats de maintenance pour les équipements loués et des services d\'entretien pour les ouvrages réalisés.'
        },
        {
          question: 'Comment suivre l\'avancement de mon projet ?',
          answer: 'Votre chef de projet vous fournit des rapports réguliers. Vous pouvez également visiter le chantier sur rendez-vous et nous restons disponibles pour toute question.'
        },
      ]
    },
  ];

  const allQuestions = faqCategories.flatMap((category, catIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.category,
      globalIndex: catIndex * 100 + qIndex
    }))
  );

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
            <FaQuestionCircle className="text-6xl text-secondary mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Questions <span className="text-secondary">Fréquentes</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Retrouvez les réponses aux questions les plus courantes sur nos services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-heading font-bold text-primary mb-6"
              >
                {category.category}
              </motion.h2>

              <div className="space-y-4">
                {category.questions.map((item, qIndex) => {
                  const globalIndex = catIndex * 100 + qIndex;
                  const isOpen = openIndex === globalIndex;

                  return (
                    <motion.div
                      key={qIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: qIndex * 0.05 }}
                      className="bg-white rounded-xl shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {item.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <FaChevronDown className="text-primary text-xl" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Vous ne trouvez pas de réponse ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg"
                  >
                    Contactez-nous
                  </motion.button>
                </a>
                <a href="tel:+221338710861">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline text-lg"
                  >
                    (+221) 221 33 871 08 61
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '15+', label: 'Ans d\'expérience' },
              { number: '200+', label: 'Projets réalisés' },
              { number: '150+', label: 'Employés qualifiés' },
              { number: '3', label: 'Entreprises du groupe' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
