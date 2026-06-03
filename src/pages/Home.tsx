import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const HomePage: React.FC = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Zap },
    { number: '20+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: TrendingUp },
    { number: '5+', label: 'Years Experience', icon: Zap },
  ];

  const services = [
    { title: 'Business Websites', description: 'Professional websites designed to convert visitors into customers.' },
    { title: 'Portfolio Websites', description: 'Showcase your work and talents with a stunning portfolio site.' },
    { title: 'E-Commerce Websites', description: 'Sell online with beautiful, secure e-commerce platforms.' },
    { title: 'Landing Pages', description: 'High-converting landing pages that drive results.' },
  ];

  const features = [
    { title: 'Mobile Responsive', description: 'Perfect on all devices' },
    { title: 'Fast Loading', description: 'Lightning-quick performance' },
    { title: 'SEO Optimized', description: 'Rank higher on Google' },
    { title: 'Modern Design', description: 'Latest design trends' },
    { title: 'Secure', description: 'SSL encrypted' },
    { title: 'Affordable', description: 'Great value for money' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/bg.jpg')"
  }}
>
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute w-96 h-96 bg-primary-600/20 rounded-full blur-3xl -top-20 -left-20"
          />
          <motion.div
            animate={{
              x: [0, -50, 0],
              y: [0, -100, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl -bottom-20 -right-20"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 lg:px-16 text-left">
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="max-w-3xl"
>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Transform Your Business</span>
              <br />
              with Professional Websites
            </h1>
           <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl">
              We build modern, fast, SEO-friendly websites that help businesses grow online. From design to deployment, we've got you covered.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-start mb-12"
          >
            <Link
              to="/contact"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-start gap-2 group"
            >
              Get Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-accent rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-secondary/50 transition-colors"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 text-sm"
          >
            Scroll to explore more
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <StaggerContainer>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass dark:glass p-6 rounded-xl text-center"
                  >
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary-600 dark:text-accent" />
                    <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer a wide range of web design and development services to meet your business needs.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-secondary/50 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-accent transition-colors"
                  >
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional results with a focus on quality, performance, and customer satisfaction.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white dark:bg-secondary/50 rounded-xl border border-gray-200 dark:border-gray-700 text-center"
                  >
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
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
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create something amazing together. Get in touch with us today for a free consultation.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Your Project
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
