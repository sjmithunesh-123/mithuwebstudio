import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../components/ScrollReveal';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: '10 Web Design Trends for 2024',
      excerpt: 'Discover the latest web design trends that are shaping the digital landscape in 2024.',
      category: 'Design',
      author: 'Mithunesh',
      date: 'Jan 15, 2024',
      image: 'https://via.placeholder.com/400x250?text=Design+Trends',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'How to Optimize Your Website for SEO',
      excerpt: 'A comprehensive guide to improving your website\'s search engine rankings and visibility.',
      category: 'SEO',
      author: 'Mithunesh',
      date: 'Jan 12, 2024',
      image: 'https://via.placeholder.com/400x250?text=SEO+Guide',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'React Best Practices in 2024',
      excerpt: 'Learn the best practices for building efficient and maintainable React applications.',
      category: 'Development',
      author: 'Mithunesh',
      date: 'Jan 10, 2024',
      image: 'https://via.placeholder.com/400x250?text=React+Best',
      readTime: '7 min read',
    },
    {
      id: 4,
      title: 'The Importance of Mobile-First Design',
      excerpt: 'Why mobile-first design is crucial for modern web development and user experience.',
      category: 'Design',
      author: 'Mithunesh',
      date: 'Jan 8, 2024',
      image: 'https://via.placeholder.com/400x250?text=Mobile+First',
      readTime: '6 min read',
    },
    {
      id: 5,
      title: 'Website Performance Optimization Tips',
      excerpt: 'Practical tips to improve your website\'s loading speed and overall performance.',
      category: 'Development',
      author: 'Mithunesh',
      date: 'Jan 5, 2024',
      image: 'https://via.placeholder.com/400x250?text=Performance',
      readTime: '6 min read',
    },
    {
      id: 6,
      title: 'E-Commerce Website Best Practices',
      excerpt: 'Essential practices for building successful e-commerce websites that convert.',
      category: 'E-Commerce',
      author: 'Mithunesh',
      date: 'Dec 28, 2023',
      image: 'https://via.placeholder.com/400x250?text=Ecommerce',
      readTime: '7 min read',
    },
  ];

  const categories = ['All', 'Design', 'Development', 'SEO', 'E-Commerce'];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !selectedCategory || selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-accent/10 dark:from-secondary dark:to-secondary/50">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">Blog & Insights</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Stay updated with the latest web design and development trends, tips, and insights.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white dark:bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <ScrollReveal>
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary/50 focus:outline-none focus:border-primary-600 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      (selectedCategory === category || (selectedCategory === null && category === 'All'))
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 dark:bg-secondary text-gray-800 dark:text-white hover:bg-primary-100'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <StaggerContainer delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <StaggerItem key={post.id}>
                    <motion.article
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-secondary/50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-600 dark:hover:border-accent transition-colors group cursor-pointer"
                    >
                      {/* Image */}
                      <div className="relative overflow-hidden bg-gray-200 h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 dark:group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="space-y-3 mb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <User size={16} />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              {post.date}
                            </div>
                          </div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</p>
                        </div>

                        {/* Read More */}
                        <motion.button
  whileHover={{ gap: '8px' }}
  className="flex items-center gap-2 text-primary-600 dark:text-accent font-semibold"
  onClick={() =>
    window.open(
      `https://wa.me/916382100601?text=${encodeURIComponent(
        `Hi Mithu Web Studio, I am interested in "${post.title}"`
      )}`,
      "_blank"
    )
  }
>
  Read Article
  <ArrowRight size={16} />
</motion.button>
                      </div>
                    </motion.article>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          ) : (
            <ScrollReveal>
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  No articles found. Try adjusting your search or filters.
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent">
        <div className="max-w-4xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest web design and development tips delivered to your inbox.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
