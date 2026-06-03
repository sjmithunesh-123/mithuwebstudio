import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  technologies: string[];
  whatsappText: string;
}

const PortfolioPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern SaaS Landing Page',
      category: 'Landing Pages',
      image: 'https://via.placeholder.com/500x350?text=SaaS+Landing+Page',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      whatsappText: 'Hi Mithu Web Studio, I\'m interested in the Modern SaaS Landing Page project.',
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'E-Commerce',
      image: 'https://via.placeholder.com/500x350?text=E-Commerce+Platform',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      whatsappText: 'Hi Mithu Web Studio, I\'m interested in the E-Commerce Platform project.',
    },
    {
      id: 3,
      title: 'Business Portfolio',
      category: 'Portfolio',
      image: 'https://via.placeholder.com/500x350?text=Business+Portfolio',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
      whatsappText: 'Hi Mithu Web Studio, I\'m interested in the Business Portfolio project.',
    },
    {
      id: 4,
      title: 'Creative Agency Website',
      category: 'Business',
      image: 'https://via.placeholder.com/500x350?text=Creative+Agency',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
      whatsappText: 'Hi Mithu Web Studio, I\'m interested in the Creative Agency Website project.',
    },
    {
      id: 5,
      title: 'Online Store',
      category: 'E-Commerce',
      image: 'https://via.placeholder.com/500x350?text=Online+Store',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
      whatsappText: 'Hi Mithu Web Studio, I\'m interested in the Online Store project.',
    },
    {
      id: 6,
      title: 'Startup Website',
      category: 'Business',
      image: 'https://via.placeholder.com/500x350?text=Startup+Website',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      whatsappText: 'Hi Mithu Web Studio, I\'m interested in the Startup Website project.',
    },
  ];

  const handleWhatsAppClick = (project: Project) => {
    const phoneNumber = '916382100601'; // Replace XXXXXXXXXX with actual phone number
    const encodedText = encodeURIComponent(project.whatsappText);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-secondary">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent/10 dark:from-secondary dark:to-secondary/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <motion.div className="text-center mb-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text">
                Our Portfolio
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Explore our collection of successful projects. Each website is designed with precision,
                built with excellence, and optimized for maximum client conversion.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <StaggerItem key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)' }}
                    className="h-full group bg-white dark:bg-secondary/70 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-accent transition-all duration-300 shadow-md hover:shadow-xl"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 h-56 sm:h-64">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                      />
                      {/* Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
                      />
                    </div>

                    {/* Content Container */}
                    <div className="p-6 sm:p-8">
                      {/* Category Badge */}
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="inline-block text-xs sm:text-sm font-bold uppercase tracking-wider text-primary-600 dark:text-accent bg-primary-100 dark:bg-accent/10 px-3 sm:px-4 py-1.5 rounded-full mb-4"
                      >
                        {project.category}
                      </motion.span>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Technologies */}
                      <div className="mb-6">
                        <p className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              whileHover={{ scale: 1.05 }}
                              className="text-xs sm:text-sm px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-accent/20 transition-colors"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleWhatsAppClick(project)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-primary-700 dark:from-accent dark:to-accent/80 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group/btn"
                      >
                        <MessageCircle size={18} className="group-hover/btn:rotate-12 transition-transform" />
                        <span>View Live Demo</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary-600 to-accent px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '6+', label: 'Premium Projects' },
                { number: '100%', label: 'Client Satisfaction' },
                { number: '2K+', label: 'Hours Invested' },
                { number: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</p>
                    <p className="text-sm sm:text-base opacity-90">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <motion.div
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-secondary/50 dark:to-secondary/80 rounded-3xl p-8 sm:p-12 text-center border border-gray-200 dark:border-gray-700"
              whileHover={{ boxShadow: '0 25px 50px rgba(37, 99, 235, 0.1)' }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                Impressed by Our Work?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your ideas into stunning, high-converting websites.
                Get in touch with us today via WhatsApp!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const phoneNumber = '91XXXXXXXXXX';
                  const text = encodeURIComponent('Hi Mithu Web Studio, I\'m interested in discussing a new project.');
                  window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
                }}
                className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
              >
                <MessageCircle size={20} />
                Start Your Project
              </motion.button>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
