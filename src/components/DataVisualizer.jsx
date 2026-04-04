import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const DataVisualizer = () => {
  const { lang } = useLanguage();
  // Chart 1: User Perception (Vertical Bar Chart)
  // Data Source: "46% of teens view AI companions mainly as a tool or program. 33% use them for social interaction and relationships." (Common Sense Media)
  const perceptionDataOriginal = [
    { label: { en: 'Tool / Program', cn: '工具 / 程序' }, value: 46, height: 80, color: '#A4AF69', count: '46%' },
    { label: { en: 'Social / Relationship', cn: '社交 / 关系' }, value: 33, height: 60, color: '#D35269', count: '33%' },
    { label: { en: 'Mixed / Other', cn: '混合 / 其他' }, value: 21, height: 40, color: '#E5E7EB', count: '21%' },
  ];

  const perceptionData = perceptionDataOriginal.map(d => ({ ...d, label: d.label[lang] || d.label.en }));

  const _ignore1 = [
    { label: 'Tool / Program', value: 46, height: 80, color: '#A4AF69', count: '46%' }, // Olive (Dominant view)
    { label: 'Social / Relationship', value: 33, height: 60, color: '#D35269', count: '33%' }, // Rose (Emerging view)
    { label: 'Mixed / Other', value: 21, height: 40, color: '#E5E7EB', count: '21%' }, // Grey (Uncertainty)
  ];

  // Chart 2: Why Do People Use Them? (Horizontal Bar Chart)
  // Data Source: "30%: entertaining, 28%: curiosity, 18%: advice, 17%: always available, 14%: nonjudgmental, 12%: share things"
  const motivationDataOriginal = [
    { label: { en: 'Entertainment', cn: '娱乐' }, value: 30, color: '#A4AF69' },
    { label: { en: 'Curiosity', cn: '好奇心' }, value: 28, color: '#D35269' },
    { label: { en: 'Advice', cn: '建议' }, value: 18, color: '#EDE580' },
    { label: { en: 'Availability', cn: '随时可用' }, value: 17, color: '#C08497' },
    { label: { en: 'Non-judgmental', cn: '不评判' }, value: 14, color: '#B5C99A' },
    { label: { en: 'Safe Space', cn: '安全空间' }, value: 12, color: '#9CA3AF' },
  ];

  const motivationData = motivationDataOriginal.map(d => ({ ...d, label: d.label[lang] || d.label.en }));

  const _ignore2 = [
    { label: 'Entertainment', value: 30, color: '#A4AF69' }, // Olive
    { label: 'Curiosity', value: 28, color: '#D35269' },     // Rose
    { label: 'Advice', value: 18, color: '#EDE580' },        // Yellow
    { label: 'Availability', value: 17, color: '#C08497' },  // Light Rose
    { label: 'Non-judgmental', value: 14, color: '#B5C99A' },// Light Olive
    { label: 'Safe Space', value: 12, color: '#9CA3AF' },    // Grey
  ];

  return (
    <section id="data-visuals" className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
            <div className="absolute -left-20 top-20 w-64 h-64 bg-[#EDE580] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-[#C08497] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#A4AF69] font-bold text-sm uppercase tracking-widest mb-2 block">{ lang === 'en' ? 'Data Analysis' : '数据分析' }</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2937] mb-4">{ lang === 'en' ? 'The Data Behind the Connection' : '连接背后的数据' }</h2>
          <p className="text-[#6B7280] max-w-2xl mx-auto text-lg font-light">
            { lang === 'en' ? 'Understanding how users perceive and utilize AI companions based on recent studies.' : '基于近期研究：不同群体对智能伴侣的认知与使用动机差异。' }
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Chart 1: Vertical Bar Chart (Perception) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-[#E5E7EB] p-8 md:p-10 shadow-sm flex flex-col bg-[#F8F6F2]/50 backdrop-blur-sm h-full"
          >
            <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-2">{lang === 'en' ? 'User Perception' : '认知差异分析' }</h3>
            <p className="text-sm text-[#6B7280] mb-8">{lang === 'en' ? 'How teens view AI companions: As a functional tool vs. a social relationship.' : '不同年龄段人群倾向于将AI伴侣视为工具还是真正的社交关系？'}</p>
            
            <div className="flex-grow flex items-end justify-around gap-4 h-64 pb-2 border-b border-[#E5E7EB]">
              {perceptionData.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-3 group w-full justify-end h-full">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, type: "spring", stiffness: 50 }}
                    className="w-16 md:w-20 rounded-t-lg relative flex items-end justify-center pb-2"
                    style={{ backgroundColor: item.color }}
                  >
                     <span className="text-white font-bold text-sm drop-shadow-md">{item.count}</span>
                  </motion.div>
                  <span className="text-xs font-medium text-[#6B7280] text-center max-w-[80px] leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-[#9CA3AF] text-right italic">Source: Common Sense Media</div>
          </motion.div>

          {/* Chart 2: Horizontal Bars (Motivations) */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="rounded-2xl border border-[#E5E7EB] p-8 md:p-10 shadow-sm flex flex-col justify-center bg-[#F8F6F2]/50 backdrop-blur-sm h-full"
          >
            <h3 className="text-2xl font-serif font-bold text-[#1F2937] mb-2">{lang === 'en' ? 'Primary Motivations' : '主要使用动机'}</h3>
            <p className="text-sm text-[#6B7280] mb-6">{lang === 'en' ? 'Top reasons users engage with AI companions.' : '用户选择使用AI伴侣的主要原因。'}</p>

            <div className="space-y-4">
              {motivationData.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-1 text-sm font-medium text-[#1F2937]">
                    <span>{item.label}</span>
                    <span className="font-bold">{item.value}%</span>
                  </div>
                  <div className="w-full bg-[#E5E7EB] rounded-full h-2.5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-xs text-[#9CA3AF] text-right italic">Source: Common Sense Media</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DataVisualizer;
