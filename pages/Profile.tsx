import React from 'react';
import { PROFILE_INFO, TIMELINE_ITEMS, SKILLS } from '../constants';
import { Briefcase, Award, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  return (
    <div className="p-8 pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">About Me</h2>
        <div className="w-12 h-1 bg-[#6C5CE7] rounded-full mb-6"></div>
        <p className="text-gray-700 leading-relaxed bg-white/30 p-5 rounded-2xl border border-white/40 backdrop-blur-sm shadow-sm mb-8">
          {PROFILE_INFO.bio}
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div className="mb-8">
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <Briefcase size={20} className="text-[#6C5CE7]" />
          Experience
        </h3>
        <div className="relative pl-4 border-l-2 border-white/40 space-y-6">
          {TIMELINE_ITEMS.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
            >
              <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-[#6C5CE7] rounded-full border-2 border-white"></div>
              <span className="text-xs font-semibold text-[#6C5CE7] bg-white/40 px-2 py-0.5 rounded-md">{item.year}</span>
              <h4 className="text-gray-800 font-bold mt-1">{item.role}</h4>
              <p className="text-sm text-gray-600">{item.company}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="flex items-center gap-2 text-lg font-bold text-gray-800 mb-4">
          <Zap size={20} className="text-[#6C5CE7]" />
          Skills
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {SKILLS.map((skill, idx) => (
            <motion.div 
              key={idx}
              className="bg-white/30 border border-white/40 p-3 rounded-xl flex flex-col gap-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-800 text-sm">{skill.name}</span>
                <span className="text-xs text-gray-500">{skill.level}/5</span>
              </div>
              <div className="w-full bg-white/40 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#6C5CE7] rounded-full" 
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;