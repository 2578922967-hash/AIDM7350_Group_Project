import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

const DebunkBlock = ({ myth, content, index }) => {
  const { lang: globalLang } = useLanguage();
  const [lang, setLang] = useState(globalLang);

  useEffect(() => {
      setLang(globalLang);
  }, [globalLang]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-xl border border-[#E5E7EB] bg-[#F8F6F2] p-6 mb-5"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <h3 className="text-xl font-serif font-bold text-[#1F2937] pr-4">
          <span className="text-[#B85C5C] mr-2">Myth:</span>
          {myth && myth[lang] ? myth[lang] : myth}
        </h3>
        
        {/* Language Switcher */}
        <div className="flex gap-2 mt-3 md:mt-0 flex-shrink-0 text-sm">
          <button 
            onClick={() => setLang('en')}
            className={`px-3 py-1 rounded-full transition-colors ${lang === 'en' ? 'bg-[#B85C5C] text-white font-bold' : 'bg-[#E5E7EB] text-[#6B7280] hover:bg-[#d1d5db]'}`}
          >
            English
          </button>
          <button 
            onClick={() => setLang('cn')}
            className={`px-3 py-1 rounded-full transition-colors ${lang === 'cn' ? 'bg-[#B85C5C] text-white font-bold' : 'bg-[#E5E7EB] text-[#6B7280] hover:bg-[#d1d5db]'}`}
          >
            中文
          </button>
        </div>
      </div>

      <div className="text-[#4B5563] leading-relaxed whitespace-pre-line">
        <span className="block font-semibold text-[#B85C5C] mb-2">{lang === 'en' ? 'Reality:' : '真相：'}</span>
        {content[lang]}
      </div>
    </motion.article>
  );
};

export default function DebunksSection() {
  const debunks = siteContent.debunks || [];
  const { lang: globalLang } = useLanguage();

  return (
    <section id="debunks" className="scroll-mt-24 py-20 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#B85C5C] font-bold text-sm uppercase tracking-widest mb-2 block"
          >
            {globalLang === 'en' ? 'Part 3' : '第三部分'}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#1F2937] mb-6"
          >
            {globalLang === 'en' ? 'Debunks' : '辟谣'}
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#B85C5C] mx-auto"
          />
        </div>

        <div className="space-y-5">
          {debunks.map((item, index) => (
            <DebunkBlock 
              key={item.title.en || index}
              myth={item.title}
              content={item.content}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}