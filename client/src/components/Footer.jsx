import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Users, Target, ArrowRight } from 'lucide-react'

export const Footer = () => {
  return (
    <div className='pt-6 mx-auto'>
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">
              Full-service digital solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description:
                  "Custom websites and web applications that scale with your business",
                icon: <Zap className="w-8 h-8 text-purple-600" />,
              },
              {
                title: "Mobile Apps",
                description:
                  "Native and cross-platform mobile applications for iOS and Android",
                icon: <Users className="w-8 h-8 text-purple-600" />,
              },
              {
                title: "Digital Strategy",
                description:
                  "Complete digital transformation consulting and implementation",
                icon: <Target className="w-8 h-8 text-purple-600" />,
              },
            ].map((service) => (
              <div key={service.title} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how we can help you achieve your digital goals
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
