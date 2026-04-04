import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { lang } = useLanguage();

  // Staggered appearance for each word
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier
      },
    }),
  };

  // Continuous gentle wave animation
  const wave = {
    y: [0, -12, 0],
    transition: {
      duration: 3, // Slower, more gentle
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 2,
    },
  };

  const titleWords = lang === 'en' ? [
    { text: "Love,", color: "text-[#1F2937]" },
    { text: "Care,", color: "text-[#1F2937]" },
    { text: "or", color: "text-[#1F2937]" },
    { text: "Harm?", color: "text-[#B85C5C]" },
  ] : [
    { text: "爱？", color: "text-[#1F2937]" },
    { text: "关怀？", color: "text-[#1F2937]" },
    { text: "或", color: "text-[#1F2937]" },
    { text: "伤害？", color: "text-[#B85C5C]" },
  ];

  return (
    <div className="relative overflow-hidden bg-[#F8F6F2] py-24 sm:py-32">
        {/* Background Pattern - Animated Blobs */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             rotate: [0, 10, 0],
             x: [0, 50, 0],
           }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
           className="rounded-full w-[800px] h-[800px] bg-[#A78BFA] blur-[120px] absolute -top-[200px] -right-[200px]"
         />
         <motion.div 
           animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -15, 0],
            x: [0, -50, 0],
           }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
           className="rounded-full w-[600px] h-[600px] bg-[#C08497] blur-[100px] absolute top-[400px] -left-[100px]"
         />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="mx-auto max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl font-serif mb-6 flex flex-wrap justify-center gap-x-4">
             {titleWords.map((wordObj, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate={["visible"]} // Combine initial fade-in with continuous wave
                variants={fadeInUp}
                className={`inline-block ${wordObj.color}`}
              >
                <motion.span
                    animate={wave} // Nested motion for the continuous loop to separate from entrance
                    transition={{
                        delay: 1.5 + (i * 0.2), // Wait for entrance to finish before waving
                    }}
                    className="inline-block"
                >
                    {wordObj.text}
                </motion.span>
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          >
            <p className="mt-4 text-xl leading-8 text-[#6B7280] font-light max-w-prose mx-auto italic">
                {lang === 'en' ? 'Understanding AI Companions in Contemporary Digital Life' : '理解当代数字生活中的AI伴侣'}
            </p>
            <p className="mt-8 text-lg leading-relaxed text-[#1F2937] font-sans">
                {lang === 'en' ? 
                'AI companions are becoming part of everyday digital culture. They promise emotional support, intimacy, and always-available conversation, yet they also raise difficult questions about dependency, privacy, and harm.'
                : 
                'AI伴侣正日益成为日常数字文化的一部分。它们承诺提供情感支持、亲密感以及无处不在的对话体验，但也带来关于依赖、隐私和潜在伤害的严峻问题。'
                }
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.a
                whileHover={{ scale: 1.05, backgroundColor: "#C08497" }}
                whileTap={{ scale: 0.95 }}
                href="#facts"
                className="rounded-full bg-[#1F2937] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-300"
            >
                {lang === 'en' ? 'Start Exploring' : '开始探索'}
              </motion.a>
            <a href="#about" className="text-sm font-semibold leading-6 text-[#1F2937] hover:text-[#C08497] transition-colors group flex items-center">
                {lang === 'en' ? 'Learn more' : '了解更多'} <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  )
}
