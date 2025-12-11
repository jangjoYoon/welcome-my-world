import React, { useState } from 'react';
import { PROFILE_INFO } from '../constants';
import Button from '../components/Button';
import { Copy, Check, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Ask: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText(PROFILE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate network request
    setTimeout(() => {
      setFormStatus('success');
      // Reset after a few seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="p-8 pt-20 pb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Let's Talk</h2>
        <div className="w-12 h-1 bg-[#6C5CE7] rounded-full mb-6"></div>
        <p className="text-sm text-gray-600 mb-8">
          Project inquiry or just want to say hi? I'm always open to new opportunities.
        </p>
      </motion.div>

      {/* Copy Email Section */}
      <motion.div 
        className="mb-8 p-4 bg-white/40 border border-white/50 rounded-2xl flex items-center justify-between shadow-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 mb-1">Email Address</span>
          <span className="font-semibold text-gray-800 text-sm select-all">{PROFILE_INFO.email}</span>
        </div>
        <button 
          onClick={handleCopy}
          className="p-2 rounded-lg bg-white text-gray-600 hover:text-[#6C5CE7] transition-colors shadow-sm active:scale-95"
        >
          {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
        </button>
      </motion.div>

      {/* Form */}
      <motion.form 
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">Name</label>
          <input 
            type="text" 
            required
            className="w-full p-3 rounded-xl bg-white/30 border border-white/50 focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 outline-none transition-all placeholder-gray-400 text-sm text-gray-800"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">Email</label>
          <input 
            type="email" 
            required
            className="w-full p-3 rounded-xl bg-white/30 border border-white/50 focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 outline-none transition-all placeholder-gray-400 text-sm text-gray-800"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1 ml-1">Message</label>
          <textarea 
            rows={4}
            required
            className="w-full p-3 rounded-xl bg-white/30 border border-white/50 focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 outline-none transition-all placeholder-gray-400 text-sm text-gray-800 resize-none"
            placeholder="Tell me about your project..."
          ></textarea>
        </div>

        <Button 
          type="submit" 
          variant="primary" 
          fullWidth 
          disabled={formStatus === 'submitting' || formStatus === 'success'}
          className="mt-2"
        >
          {formStatus === 'submitting' ? (
            <span className="animate-pulse">Sending...</span>
          ) : formStatus === 'success' ? (
            <span className="flex items-center gap-2"><Check size={18}/> Sent!</span>
          ) : (
            <span className="flex items-center gap-2"><Send size={18}/> Send Message</span>
          )}
        </Button>
      </motion.form>

      <div className="mt-8 pt-6 border-t border-white/30">
        <Button variant="secondary" fullWidth icon={MessageCircle}>
          Open KakaoTalk Chat
        </Button>
      </div>
    </div>
  );
};

export default Ask;