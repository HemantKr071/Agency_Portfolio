import { Navbar } from '../components/Navbar';
import { Users, Award, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const team = [
    {
      name: "Mr. Johnson",
      role: "Creative Director",
      image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop`,
      bio: "10+ years crafting digital experiences for Fortune 500 companies"
    },
    {
      name: "Marcus Chen",
      role: "Lead Developer",
      image: `https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop`,
      bio: "Full-stack expert passionate about scalable, innovative solutions"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: `https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop`,
      bio: "Human-centered design advocate with award-winning portfolio"
    },
    {
      name: "David Kim",
      role: "Tech Lead",
      image: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop`,
      bio: "AI and machine learning specialist driving next-gen solutions"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of trends and technologies to deliver cutting-edge solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client Partnership",
      description: "Your success is our success. We work as an extension of your team"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "Every project meets the highest standards of design and functionality"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion Driven",
      description: "We love what we do and it shows in every pixel and line of code"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-violet-50 to-indigo-50 pt-16">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              We Are
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Elite8Digital
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A passionate team of designers, developers, and strategists...
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop"
              alt="Creative workspace"
              className="rounded-2xl shadow-lg mt-8"
            />
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
          <p className="text-xl text-gray-600">The principles that guide everything we do</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl group-hover:shadow-lg transition-all duration-300">
                <div className="text-purple-600 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-20 px-6 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <p className="text-xl text-gray-600">
            The creative minds behind your next digital success
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-purple-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
        className="py-20 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="text-lg text-gray-600 space-y-6">
            <p>
              Founded in 2025, Elite8Digital emerged from a simple belief: every business...
            </p>
            <p>
              We've had the privilege of working with startups disrupting industries...
            </p>
            <p>
              Today, we continue to push boundaries, explore new technologies...
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
