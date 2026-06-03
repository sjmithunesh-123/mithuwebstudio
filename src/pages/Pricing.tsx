import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const PricingPage: React.FC = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹6000',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Responsive Website Design',
        'Up to 5 Pages',
        'Basic SEO Optimization',
        'Contact Form',
        'Mobile Friendly',
        '1 Month Free Support',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '₹10000',
      description: 'Ideal for growing businesses and established brands',
      features: [
        'Custom Website Design',
        'Up to 15 Pages',
        'Advanced SEO Optimization',
        'Blog Integration',
        'E-Commerce Features',
        'Analytics Dashboard',
        '6 Months Support',
        'Unlimited Revisions',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '₹18000',
      description: 'Comprehensive solution for enterprise needs',
      features: [
        'Fully Custom Website',
        'Unlimited Pages',
        'Advanced SEO & Marketing',
        'E-Commerce Platform',
        'API Integration',
        'Advanced Analytics',
        '12 Months Support',
        'Priority Support',
        'Free Maintenance',
      ],
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: 'Do you provide website hosting?',
      answer: 'Yes, we can help set up hosting on platforms like Vercel, Netlify, or AWS. Alternatively, you can host on your preferred provider.',
    },
    {
      question: 'How long does website development take?',
      answer: 'Typically 4-8 weeks depending on complexity. We provide regular updates and can expedite if needed.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely! We offer complete redesign services including migrating your content and data from the old site.',
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we provide ongoing maintenance, updates, and support packages tailored to your needs.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-secondary">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-accent/10 dark:from-secondary dark:to-secondary/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <motion.div className="text-center mb-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 gradient-text">
                Simple, Transparent Pricing
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Choose the perfect plan for your business. All plans include free consultation and 24/7 support.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={plan.popular ? { scale: 1.05, y: -20 } : { y: -12 }}
                    className={`relative h-full rounded-3xl p-8 sm:p-10 border transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-br from-primary-600 to-primary-700 dark:from-accent dark:to-accent/80 border-primary-600 dark:border-accent shadow-2xl scale-105 md:scale-100'
                        : 'bg-white dark:bg-secondary/70 border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-accent shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {plan.popular && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="absolute -top-5 left-1/2 transform -translate-x-1/2"
                      >
                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-lg">
                          Most Popular
                        </span>
                      </motion.div>
                    )}

                    {/* Plan Name */}
                    <h3
                      className={`text-3xl sm:text-4xl font-bold mb-2 ${
                        plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {plan.name}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm sm:text-base mb-6 ${
                        plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-8">
                      <span
                        className={`text-5xl sm:text-6xl font-bold ${
                          plan.popular ? 'text-white' : 'text-primary-600 dark:text-accent'
                        }`}
                      >
                        {plan.price}
                      </span>
                      <p
                        className={`text-sm mt-2 ${
                          plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        One-time project cost
                      </p>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg mb-8 transition-all duration-300 ${
                        plan.popular
                          ? 'bg-white dark:bg-secondary text-primary-600 dark:text-accent hover:shadow-2xl'
                          : 'bg-gradient-to-r from-primary-600 to-primary-700 dark:from-accent dark:to-accent/80 text-white hover:shadow-xl'
                      }`}
                      onClick={() =>
    window.open(
      `https://wa.me/916382100601?text=${encodeURIComponent(
         `Hi Mithu Web Studio, I am interested in the ${plan.name} plan`
      )}`,
      "_blank"
    )
  }
                    >
                      Get Started
                    </motion.button>

                    {/* Features List */}
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <Check
                            size={24}
                            className={`flex-shrink-0 ${
                              plan.popular ? 'text-yellow-300' : 'text-primary-600 dark:text-accent'
                            }`}
                          />
                          <span
                            className={`text-sm sm:text-base ${
                              plan.popular ? 'text-white' : 'text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <StaggerContainer>
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <StaggerItem key={index}>
                  <motion.details
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white dark:bg-secondary/70 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 cursor-pointer hover:border-primary-600 dark:hover:border-accent transition-all duration-300 hover:shadow-lg"
                  >
                    <summary className="flex items-center justify-between font-bold text-lg sm:text-xl text-gray-900 dark:text-white list-none">
                      <span>{item.question}</span>
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="group-open:rotate-180"
                      >
                        <svg
                          className="w-6 h-6 text-primary-600 dark:text-accent"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </motion.div>
                    </summary>
                    <motion.p className="mt-4 text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
                      {item.answer}
                    </motion.p>
                  </motion.details>
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
                Still Have Questions?
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us for a free consultation. We'll discuss your project requirements and find the perfect solution.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 sm:px-10 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
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
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
