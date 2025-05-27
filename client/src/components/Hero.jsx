import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, Target } from 'lucide-react';

export const Hero = () => {
  return (
    <div className='py-5 mx-6 w-full flex flex-col items-center justify-center pt-20'>
    <div className="flex flex-col items-center justify-center  text-center">
      <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight ">
        We Build
        <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          Digital Magic
        </span>
      </h1>
      <p className="text-xl text-gray-600 max-w-xl mt-6 mx-6">
        Transform your business with cutting-edge digital solutions. 
        We create websites, apps, and experiences that drive results for forward-thinking companies.
      </p>
    </div>
    <div className="flex flex-col sm:flex-row sm:justify-center gap-4  py-7">
        <Link
        to="/work"
        className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
        View Our Work
        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
        </Link>
        <Link
        to="/contact"
        className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-full font-medium hover:border-purple-600 hover:text-purple-600 transition-all duration-300"
        >
        Start Your Project
        </Link>
    </div>
      <div className="grid grid-cols-3 gap-8 pt-8">
        <div className="text-center">
        <div className="text-3xl font-bold text-purple-600">50+</div>
        <div className="text-sm text-gray-600">Projects Delivered</div>
        </div>
        <div className="text-center">
        <div className="text-3xl font-bold text-purple-600">25+</div>
        <div className="text-sm text-gray-600">Happy Clients</div>
        </div>
        <div className="text-center">
        <div className="text-3xl font-bold text-purple-600">5+</div>
        <div className="text-sm text-gray-600">Years Experience</div>
        </div>
        </div>
    </div>
  );
};
