// src/components/LinksSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
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
        '--hover-bg': accentColor + '40' // Add 40 for approx 25% opacity
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
    
    {/* Style for hover background via inline style to use dynamic colors */}
    <style jsx>{`
      .group:hover {
        background-color: ${accentColor}33; /* 33 hex = ~20% opacity */
      }
    `}</style>
  </div>
);

// Support Item specific style (simplified to match others but kept as cards if preferred, or just list? Let's make them list-like headers for consistency, as requested)
const SupportItem = ({ href, name, description, mainColor, accentColor }) => (
    <div 
      className="mb-4 block p-4 rounded-lg transition-colors duration-200 border border-transparent hover:border-[#E5E7EB] group"
      style={{ '--hover-bg': accentColor }}
    >
        <style jsx>{`
            .group:hover {
                background-color: ${accentColor}33;
            }
        `}</style>
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
          Further Reading & Resources
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
                title="Academic Readings" 
                subtitle="Key research papers on AI intimacy, ethics, and psychological impacts."
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
                title="News & Media" 
                subtitle="Recent coverage and public debates." 
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
                title="Platforms" 
                subtitle="The AI companion apps discussed." 
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
                title="Mental Health & Support" 
                subtitle="Resources for digital wellbeing and professional help." 
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
