import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Business Websites',
      description: 'Professional websites designed to showcase your business and convert visitors into customers.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Mobile Friendly'],
      icon: '🏢',
    },
    {
      id: 2,
      title: 'Portfolio Websites',
      description: 'Showcase your work and talents with a stunning portfolio site that impresses potential clients.',
      features: ['Project Gallery', 'About Section', 'Contact Form', 'Smooth Animations'],
      icon: '🎨',
    },
    {
      id: 3,
      title: 'E-Commerce Websites',
      description: 'Sell online with beautiful, secure e-commerce platforms that drive sales.',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Inventory Management'],
      icon: '🛒',
    },
    {
      id: 4,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive conversions.',
      features: ['Lead Capture', 'A/B Testing', 'Analytics Integration', 'Mobile Optimized'],
      icon: '🚀',
    },
    {
      id: 5,
      title: 'Website Redesign',
      description: 'Modernize your existing website with a fresh design and improved functionality.',
      features: ['Modern Design', 'Better UX', 'Performance Boost', 'Migration Support'],
      icon: '🔄',
    },
    {
      id: 6,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive more organic traffic to your site.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Link Building'],
      icon: '📈',
    },
    {
      id: 7,
      title: 'Website Maintenance',
      description: 'Keep your website secure, updated, and running smoothly with ongoing support.',
      features: ['Regular Updates', 'Security Monitoring', 'Bug Fixes', 'Performance Optimization'],
      icon: '🔧',
    },
    {
      id: 8,
      title: 'WhatsApp Integration',
      description: 'Integrate WhatsApp chat directly into your website for better customer communication.',
      features: ['Chat Widget', 'Auto Responses', 'Customer Support', 'Analytics Tracking'],
      icon: '💬',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-secondary dark:to-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive web design and development solutions tailored to your business needs.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <StaggerItem key={service.id}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -10 }}
                    className="h-full bg-white dark:bg-secondary/50 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-accent transition-colors group"
                  >
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 text-sm">
                          <span className="w-2 h-2 bg-primary-600 dark:bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <motion.button
                      whileHover={{ gap: '12px' }}
                      className="flex items-center gap-2 text-primary-600 dark:text-accent font-semibold group/btn"
                       onClick={() =>
    window.open(
      `https://wa.me/916382100601?text=${encodeURIComponent(
         `Hi Mithu Web Studio, I am interested in the ${service.title} service`
      )}`,
      "_blank"
    )
  }
                    >
                      Learn More
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">Our Process</h2>
          </ScrollReveal>

          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discovery', description: 'We understand your business goals and requirements' },
                { step: '02', title: 'Design', description: 'Create beautiful, modern designs tailored to your brand' },
                { step: '03', title: 'Development', description: 'Build your website with clean, efficient code' },
                { step: '04', title: 'Launch', description: 'Deploy and optimize your website for maximum performance' },
              ].map((item, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-primary-600 dark:bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-primary-600 to-accent p-12 rounded-2xl text-white text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss which service is perfect for your needs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() =>
                  window.open(
                    `https://wa.me/916382100601?text=${encodeURIComponent(
                      'Hi Mithu Web Studio, I have some questions about your services.'
                    )}`,
                    "_blank"
                  )
                }
              >
                Schedule Consultation
              </motion.button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
