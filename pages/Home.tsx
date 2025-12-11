import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROFILE_INFO, NAV_ITEMS, IMAGES, SOCIAL_LINKS } from '../constants';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-full p-8 pb-12">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mt-6 mb-8">
        <motion.div 
          className="relative mb-6 group"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="w-32 h-32 rounded-full p-1 bg-white/30 backdrop-blur-sm border border-white/50 shadow-xl overflow-hidden relative">
             <img 
               src={IMAGES.PROFILE} 
               alt={PROFILE_INFO.name} 
               className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
             />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-400 border-2 border-white rounded-full animate-pulse" title="Available for work"></div>
        </motion.div>
        
        <motion.h1 
          className="text-3xl font-bold text-gray-800 mb-2 font-sans tracking-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {PROFILE_INFO.name}
        </motion.h1>
        
        <motion.span 
          className="text-sm font-medium text-[#6C5CE7] bg-white/40 px-3 py-1 rounded-full backdrop-blur-sm border border-white/40 mb-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {PROFILE_INFO.role}
        </motion.span>

        <motion.p 
          className="text-gray-600 max-w-xs leading-relaxed text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {PROFILE_INFO.tagline}
        </motion.p>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full space-y-3 mb-8">
        {NAV_ITEMS.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
          >
            <Button 
              fullWidth 
              variant="glass" 
              onClick={() => navigate(item.path)}
              className="justify-between group h-16 px-5"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-white/40 text-[#6C5CE7]">
                  <item.icon size={20} />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-gray-800 text-sm">{item.label.split('(')[0]}</span>
                  <span className="text-xs text-gray-500 font-normal">{item.description}</span>
                </div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300 text-gray-400">
                →
              </div>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Footer Socials */}
      <motion.div 
        className="flex justify-center gap-4 mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {SOCIAL_LINKS.map((social, idx) => (
          <a 
            key={idx}
            href={social.url}
            className="p-3 rounded-full bg-white/20 hover:bg-white/50 text-gray-700 hover:text-[#6C5CE7] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm border border-white/20"
          >
            <social.icon size={18} />
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;