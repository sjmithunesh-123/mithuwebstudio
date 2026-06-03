import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const message = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
`;

  window.open(
    `https://wa.me/916382100601?text=${encodeURIComponent(message)}`,
    "_blank"
  );

  setIsSubmitted(true);

  setTimeout(() => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitted(false);
  }, 3000);
};

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sjmithunesh@gmail.com',
      link: 'mailto:sjmithunesh@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6382 100 601',
      link: 'tel:+916382100601',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+91 6382 100 601',
      link: 'https://wa.me/916382100601',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      link: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-secondary dark:to-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <ScrollReveal key={index}>
                <motion.a
                  href={method.link}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white dark:bg-secondary/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-accent transition-colors text-center group"
                >
                  <method.icon className="w-12 h-12 text-primary-600 dark:text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent transition-colors">
                    {method.value}
                  </p>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="bg-white dark:bg-secondary/50 rounded-xl border border-gray-200 dark:border-gray-700 p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg text-green-700 dark:text-green-400"
                  >
                    ✓ Thank you! We'll get back to you soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary focus:outline-none focus:border-primary-600 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary focus:outline-none focus:border-primary-600 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    type="submit"
                    className="w-full py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send size={18} />
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
            

            {/* Info */}
            <ScrollReveal direction="right">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Fast Response',
                      description: 'We respond to inquiries within 24 hours.',
                    },
                    {
                      title: 'Expert Team',
                      description: 'Our team has years of experience in web design and development.',
                    },
                    {
                      title: 'Custom Solutions',
                      description: 'We create tailored solutions that fit your specific needs.',
                    },
                    {
                      title: 'Transparent Pricing',
                      description: 'No hidden fees. You know exactly what you\'re paying for.',
                    },
                    {
                      title: 'Ongoing Support',
                      description: 'We\'re here to support you after the project is launched.',
                    },
                    {
                      title: 'Quality Guarantee',
                      description: 'We deliver high-quality work that exceeds expectations.',
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-600 text-white">
                          ✓
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12">Find Us Here</h2>
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Google Maps Integration Coming Soon</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
