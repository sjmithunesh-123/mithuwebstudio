import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Lightbulb, Zap } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const AboutPage: React.FC = () => {
  const achievements = [
    { year: '2020', title: 'Started Mithu Web Studio', description: 'Founded with a vision to create amazing websites' },
    { year: '2021', title: 'First 10 Clients', description: 'Helped businesses establish their online presence' },
    { year: '2022', title: 'Reached 25 Projects', description: 'Expanded team and capabilities' },
    { year: '2024', title: '50+ Projects Delivered', description: 'Became a trusted partner for businesses' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and design trends.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Every project is crafted with attention to detail and excellence.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'We build fast, reliable websites that convert visitors into customers.',
    },
    {
      icon: Briefcase,
      title: 'Professionalism',
      description: 'We treat your project like our own and deliver results on time.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-secondary dark:to-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">About Mithu Web Studio</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We're a premium web design and development agency dedicated to helping businesses grow online through beautiful, high-performance websites.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-4xl font-bold mb-4">Meet Mithunesh</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  Founder & Web Developer
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Mithu Web Studio specializes in creating high-performance websites for businesses, startups and personal brands. With a passion for clean code and beautiful design, we transform ideas into digital experiences that drive results.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our mission is to make professional web design and development accessible to businesses of all sizes. We believe that every business deserves a website that looks great and works flawlessly.
                </p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-3xl font-bold">50+</p>
                    <p className="text-gray-600 dark:text-gray-300">Projects</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">20+</p>
                    <p className="text-gray-600 dark:text-gray-300">Clients</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold">5+</p>
                    <p className="text-gray-600 dark:text-gray-300">Years</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="relative"
              >
                <div className="w-full aspect-square bg-gradient-to-br from-primary-600 to-accent rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                  M
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50 dark:bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">Our Journey</h2>
          </ScrollReveal>

          <StaggerContainer delay={0.1}>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex gap-8 items-start"
                  >
                    <div className="min-w-fit">
                      <div className="w-20 h-20 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                        {achievement.year}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          </ScrollReveal>

          <StaggerContainer delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="p-8 bg-white dark:bg-secondary/50 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <value.icon className="w-12 h-12 text-primary-600 dark:text-accent mb-4" />
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
