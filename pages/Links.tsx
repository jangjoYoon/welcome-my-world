import React from 'react';
import { LINK_ITEMS } from '../constants';
import { ExternalLink, Bookmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Links: React.FC = () => {
  return (
    <div className="p-8 pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Curated Links</h2>
        <div className="w-12 h-1 bg-[#6C5CE7] rounded-full mb-6"></div>
        <p className="text-sm text-gray-600 mb-8">
          Design resources, tools, and content I highly recommend.
        </p>
      </motion.div>

      <div className="space-y-4">
        {LINK_ITEMS.map((link, idx) => (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/40 border border-white/50 rounded-2xl hover:bg-white/60 hover:scale-[1.02] hover:shadow-lg transition-all duration-300 group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + (idx * 0.1) }}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white rounded-xl shadow-sm text-gray-700 group-hover:text-[#6C5CE7] transition-colors">
                <Bookmark size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-[#6C5CE7] mb-0.5 uppercase tracking-wider">{link.category}</span>
                <span className="font-bold text-gray-800 text-sm group-hover:text-[#6C5CE7] transition-colors">{link.title}</span>
              </div>
            </div>
            <ExternalLink size={16} className="text-gray-400 group-hover:text-[#6C5CE7] transition-colors" />
          </motion.a>
        ))}
      </div>
      
      <motion.div 
        className="mt-10 p-5 bg-[#6C5CE7]/10 rounded-2xl border border-[#6C5CE7]/20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs text-gray-600 italic">"Good design is obvious. Great design is transparent."</p>
      </motion.div>
    </div>
  );
};

export default Links;