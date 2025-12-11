import React from 'react';
import { WORK_ITEMS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Work: React.FC = () => {
  return (
    <div className="p-8 pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Selected Work</h2>
        <div className="w-12 h-1 bg-[#6C5CE7] rounded-full mb-6"></div>
      </motion.div>

      <div className="space-y-6">
        {WORK_ITEMS.map((work, idx) => (
          <motion.div 
            key={work.id}
            className="group relative bg-white/40 border border-white/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (idx * 0.1) }}
            whileHover={{ y: -5 }}
          >
            {/* Image Container */}
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-bold text-[#6C5CE7] bg-[#6C5CE7]/10 px-2 py-1 rounded-md">{work.category}</span>
                <div className="p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
                  <ArrowUpRight size={16} className="text-gray-800" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{work.title}</h3>
              <p className="text-sm text-gray-600 line-clamp-2">{work.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button className="text-sm font-semibold text-gray-500 hover:text-[#6C5CE7] transition-colors">
          View all projects on Behance →
        </button>
      </div>
    </div>
  );
};

export default Work;