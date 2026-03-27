import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../data/content';
import DataVisualizer from './DataVisualizer';

const ContentBlock = ({ title, content, index }) => {
    const [lang, setLang] = useState('en'); // 'en' or 'cn'

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-16 md:mb-24 last:mb-0"
        >
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 border-b border-[#E5E7EB] pb-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1F2937]">
                    <span className="text-[#A4AF69] mr-2 text-lg align-top">0{index + 1}.</span>
                    {title}
                </h3>
                
                {/* Language Switcher per block */}
                <div className="flex gap-2 mt-4 md:mt-0 text-sm">
                    <button 
                        onClick={() => setLang('en')}
                        className={`px-3 py-1 rounded-full transition-colors ${lang === 'en' ? 'bg-[#A4AF69] text-white font-bold' : 'bg-[#E5E7EB] text-[#6B7280] hover:bg-[#d1d5db]'}`}
                    >
                        English
                    </button>
                    <button 
                         onClick={() => setLang('cn')}
                         className={`px-3 py-1 rounded-full transition-colors ${lang === 'cn' ? 'bg-[#A4AF69] text-white font-bold' : 'bg-[#E5E7EB] text-[#6B7280] hover:bg-[#d1d5db]'}`}
                    >
                        中文
                    </button>
                </div>
            </div>

            <div className="prose prose-lg max-w-none text-[#4B5563] leading-relaxed whitespace-pre-line font-light">
                {lang === 'en' ? (
                   <div className="font-sans">{content.en}</div>
                ) : (
                   <div className="font-sans text-justify">{content.cn}</div>
                )}
            </div>
        </motion.div>
    );
};

const FactsSection = () => {
    return (
        <section className="py-20 bg-white" id="facts-content">
            <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#A4AF69] font-bold text-sm uppercase tracking-widest mb-2 block"
                    >
                        Part 1
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[#1F2937] mb-6"
                    >
                        Facts & Concepts
                    </motion.h2>
                    <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        className="w-24 h-1 bg-[#A4AF69] mx-auto"
                    />
                </div>

                {/* Content Blocks */}
                <div className="mb-24">
                    {siteContent.facts.map((item, index) => (
                        <ContentBlock 
                            key={index} 
                            title={item.title} 
                            content={item.content} 
                            index={index} 
                        />
                    ))}
                </div>
            </div>

            {/* Visualizations - Full Width */}
            <DataVisualizer />
        </section>
    );
};

export default FactsSection;