import { Navbar } from '../components/Navbar'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "FinTech Mobile App",
      description: "Revolutionary banking app for a leading financial institution with 100K+ users",
      image: `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop`,
      category: "mobile",
      client: "SecureBank Corp",
      tags: ["React Native", "Node.js", "AWS"],
      liveUrl: "#",
      results: "40% increase in user engagement"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Complete online marketplace solution handling $2M+ in monthly transactions",
      image: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop`,
      category: "web",
      client: "RetailPro Inc",
      tags: ["React", "Stripe", "MongoDB"],
      liveUrl: "#",
      results: "300% revenue growth"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      description: "Patient management system for modern healthcare providers",
      image: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop`,
      category: "web",
      client: "MedCare Solutions",
      tags: ["Vue.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      results: "50% time savings for staff"
    },
    {
      id: 4,
      title: "Brand Identity System",
      description: "Complete visual identity and design system for emerging tech startup",
      image: `https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop`,
      category: "design",
      client: "TechFlow Startup",
      tags: ["Figma", "Branding", "Guidelines"],
      liveUrl: "#",
      results: "Brand recognition up 200%"
    },
    {
      id: 5,
      title: "Logistics Platform",
      description: "Real-time tracking and management system for supply chain optimization",
      image: `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop`,
      category: "web",
      client: "LogiTech Corp",
      tags: ["Next.js", "GraphQL", "Docker"],
      liveUrl: "#",
      results: "60% operational efficiency"
    },
    {
      id: 6,
      title: "Food Delivery App",
      description: "Cross-platform delivery app connecting restaurants with hungry customers",
      image: `https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&h=400&fit=crop`,
      category: "mobile",
      client: "QuickEats",
      tags: ["Flutter", "Firebase", "Maps API"],
      liveUrl: "#",
      results: "1M+ downloads in 6 months"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design & Branding' }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-violet-50 to-indigo-50 pt-16">
      <Navbar />

      {/* Header */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence
            and achieve remarkable growth through innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 bg-white border-b border-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 px-3 py-2 bg-white/90 text-gray-900 rounded-lg text-sm font-medium hover:bg-white transition-colors"
                      >
                        <ExternalLink size={16} />
                        View
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-purple-600 font-medium mb-2">
                    {project.client}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="text-sm font-medium text-green-600 mb-4">
                    {project.results}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let's create something amazing together
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </Link>
        </motion.div>
      </section>
    </div>
  );
};
