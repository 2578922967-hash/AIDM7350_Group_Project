import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar'

const CoreSectionsText = () => {
    const { lang } = useLanguage();
    return (
      <div className="text-center mb-16">
        <h2 className="text-3xl font-serif font-bold text-[#1F2937] mb-4">
          {lang === 'en' ? 'Core Sections' : '核心版块'}
        </h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto">
          {lang === 'en' ? 'Explore the four key dimensions of our research into AI companionship.' : '探索我们关于AI伴侣研究的四个核心维度。'}
        </p>
      </div>
    );
};

const KeyInsightText = () => {
    const { lang } = useLanguage();
    return (
      <div className="relative z-10 max-w-3xl">
        <span className="text-[#C08497] font-bold text-sm uppercase tracking-widest mb-2 block">
          {lang === 'en' ? 'Key Insight' : '关键洞察'}
        </span>
        <h3 className="text-3xl font-serif text-[#1F2937] mb-6">
          {lang === 'en' ? 'Harm is Relational.' : '“伤害是建立在连结之上的。”'}
        </h3>
        <p className="text-lg text-[#6B7280] leading-relaxed mb-6 font-light italic">
          {lang === 'en' ? '"Harm should not be treated as a fixed or purely technical problem. In the context of AI companions, harm is often relational. It depends on what users expect the system to be, what role they assign to it, and how the system behaves when those expectations are challenged."' : '"不要把伤害仅仅当作一个固定的或者纯技术的问题。在AI伴侣的语境下，伤害往往是关联性的。它取决于用户对系统抱有什么样的期待、赋予它什么角色，以及当这些期待落空时系统作出了何种反应。"'}
        </p>
        <div className="flex items-center gap-4">
           <span className="h-px bg-[#E5E7EB] flex-grow w-16"></span>
           <span className="text-sm text-[#1F2937] font-medium">AIDM7350 Group</span>
        </div>
      </div>
    );
};

const AboutText = () => {
    const { lang } = useLanguage();
    return (
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-[#C08497] font-bold text-sm uppercase tracking-widest mb-2 block">
          {lang === 'en' ? 'About' : '关于'}
        </span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2937] mb-5">
          {lang === 'en' ? 'About This Project' : '关于本项目'}
        </h2>
        <p className="text-[#4B5563] leading-relaxed mb-4">
          {lang === 'en' ? 'This website is developed for the AIDM7350 Group Project to examine how AI companions reshape intimacy, emotional expectations, and perceptions of harm in digital life.' : '本网站为AIDM7350小组项目开发，旨在审视AI伴侣如何重塑当代数字生活中的亲密关系、情感期待以及对“伤害”的认知。'}
        </p>
        <p className="text-[#6B7280] leading-relaxed">
          {lang === 'en' ? 'We combine concept explanations, literature reviews, myth debunks, and curated resources to help readers build a clearer and more critical understanding of AI companionship.' : '我们通过概念解析、文献综述、观念辟谣以及精选资源结为一体，希望能帮助读者对AI伴侣建立更清晰、更具批判性的理解。'}
        </p>
      </div>
    );
};
import Hero from './components/Hero'
import Footer from './components/Footer'
import ArticleCard from './components/ArticleCard'
import LinksSection from './components/LinksSection'
import FactsSection from './components/FactsSection'
import ReviewsSection from './components/ReviewsSection'
import DebunksSection from './components/DebunksSection'
import outline from './outline.json'

const sectionAnchorMap = {
  facts: '#facts',
  reviews: '#reviews',
  debunks: '#debunks',
  links: '#links',
}

function App() {
  return (
    <LanguageProvider>
    <div id="home" className="min-h-screen bg-[#F8F6F2] font-sans selection:bg-[#E58C73]/30">
      <Navbar />

      <Hero />

      {/* Main Content Sections */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Entry Cards Section (Table of Contents) */}
        <section id="features" className="scroll-mt-24">
          <CoreSectionsText />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outline.map((item) => (
              <ArticleCard 
                key={item.id}
                category={item.id}
                title={item.title}
                summary={item.description}
                sections={item.sections}
                link={sectionAnchorMap[item.id] || '#home'}
              />
            ))}
          </div>
        </section>

        {/* Part 1: Facts */}
        <FactsSection />

        {/* Part 2: Reviews */}
        <ReviewsSection />

        {/* Part 3: Debunks */}
        <DebunksSection />

        {/* Example Insight Box from PDF */}
        <section className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E7EB] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z"/>
             </svg>
          </div>
          
          <KeyInsightText />
        </section>

        {/* Links Section */}
        <LinksSection />

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E7EB]">
          <AboutText />
        </section>

      </main>

      <Footer />
    </div>
    </LanguageProvider>
  )
}

export default App
