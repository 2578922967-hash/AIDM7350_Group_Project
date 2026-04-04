// src/components/LinksSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import linksData from '../data/links.json';

// Helper component for section headers
const SectionHeader = ({ title, subtitle, color }) => (
  <div className="mb-6">
    <h3 
      className="text-2xl font-serif font-bold text-[#1F2937] border-l-4 pl-4"
      style={{ borderColor: color }}
    >
      {title}
    </h3>
    {subtitle && <p className="text-[#6B7280] mt-2 ml-5 text-sm">{subtitle}</p>}
  </div>
);

// Helper component for link items
const LinkItem = ({ href, title, meta, description, mainColor, accentColor }) => (
  <div 
    className="mb-4 group p-4 rounded-lg transition-colors duration-200 border border-transparent hover:border-gray-100"
    style={{ 
      backgroundColor: `${accentColor}12`
    }}
  >
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="font-medium text-lg flex items-start gap-2 max-w-fit hover:underline"
      style={{ color: mainColor }}
    >
      {title}
      <svg className="w-4 h-4 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </a>
    <div className="text-sm text-[#6B7280] mt-1 ml-0.5">
      {meta && <span className="font-semibold">{meta}</span>}
      {meta && description && <span className="mx-2">•</span>}
      {description && <span>{description}</span>}
    </div>
  </div>
);

// Support Item specific style (simplified to match others but kept as cards if preferred, or just list? Let's make them list-like headers for consistency, as requested)
const SupportItem = ({ href, name, description, mainColor, accentColor }) => (
    <div 
      className="mb-4 block p-4 rounded-lg transition-colors duration-200 border border-transparent hover:border-[#E5E7EB] group"
      style={{ backgroundColor: `${accentColor}12` }}
    >
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="font-bold mb-1 text-lg flex items-center gap-2" style={{ color: mainColor }}>
            {name}
            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </div>
        <div className="text-sm text-[#6B7280]">{description}</div>
      </a>
    </div>
);


export default function LinksSection() {
  const { lang } = useLanguage();
  // Defined Palette
  const colors = {
    olive: '#A4AF69',
    yellow: '#EDE580',
    peach: '#FFE0B5',
    rose: '#D35269'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section id="links" className="scroll-mt-24 py-16 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-serif font-bold text-[#1F2937] mb-12 text-center"
        >
          {lang === 'en' ? 'Further Reading & Resources' : '延伸阅读与相关资源'}
        </motion.h2>

        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
            
            {/* 1. Academic Readings */}
            <motion.div variants={itemVariants}>
            <SectionHeader 
                title={lang === 'en' ? 'Academic Readings' : '学术研究与报告'} 
                subtitle={lang === 'en' ? 'Key research papers on AI intimacy, ethics, and psychological impacts.' : '关于AI伴侣、情感伦理和心理影响的关键学术研究。'}
                color={colors.olive}
            />
            <div className="pl-2">
                {linksData.academic.map((item, idx) => (
                <LinkItem
                    key={idx}
                    href={item.url}
                    title={item.title}
                    meta={item.author}
                    description={item.description}
                    mainColor={colors.olive}
                    accentColor={colors.yellow}
                />
                ))}
            </div>
            </motion.div>

            {/* 2. News and Media - Moved to its own full row */}
            <motion.div variants={itemVariants}>
                <SectionHeader 
                title={lang === 'en' ? 'News & Media' : '新闻与媒体'} 
                subtitle={lang === 'en' ? 'Recent coverage and public debates.' : '相关报道和公众讨论'} 
                color={colors.rose}
                />
                <div className="pl-2">
                {linksData.news_media.map((item, idx) => (
                    <LinkItem
                    key={idx}
                    href={item.url}
                    title={item.title}
                    meta={`${item.source} (${item.year})`}
                    mainColor={colors.rose}
                    accentColor={colors.peach}
                    />
                ))}
                </div>
            </motion.div>

            {/* 3. Platforms - Moved to its own full row */}
            <motion.div variants={itemVariants}>
                <SectionHeader 
                title={lang === 'en' ? 'Platforms' : '相关平台'} 
                subtitle={lang === 'en' ? 'The AI companion apps discussed.' : '受关注的主流AI伴侣应用'} 
                color={colors.olive}
                />
                <div className="pl-2">
                {linksData.platforms.map((item, idx) => (
                    <LinkItem
                    key={idx}
                    href={item.url}
                    title={item.name}
                    description={item.description}
                    mainColor={colors.olive}
                    accentColor={colors.yellow}
                    />
                ))}
                </div>
            </motion.div>

            {/* 4. Support Resources - Removed dark box, made consistent */}
            <motion.div variants={itemVariants}>
            <SectionHeader 
                title={lang === 'en' ? 'Mental Health & Support' : '心理健康与支持资源'} 
                subtitle={lang === 'en' ? 'Resources for digital wellbeing and professional help.' : '面向数字心理健康与专业援助的在线资源'} 
                color={colors.rose}
            />
            <div className="grid sm:grid-cols-2 gap-4">
                {linksData.support_resources.map((item, idx) => (
                <SupportItem 
                    key={idx}
                    href={item.url}
                    name={item.name}
                    description={item.description}
                    mainColor={colors.rose}
                    accentColor={colors.peach}
                />
                ))}
            </div>
            </motion.div>

      </motion.div>
      </div>
    </section>
  );
}
