import Navbar from './components/Navbar'
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
    <div id="home" className="min-h-screen bg-[#F8F6F2] font-sans selection:bg-[#E58C73]/30">
      <Navbar />

      <Hero />

      {/* Main Content Sections */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Entry Cards Section (Table of Contents) */}
        <section id="features" className="scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1F2937] mb-4">Core Sections</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Explore the four key dimensions of our research into AI companionship.
            </p>
          </div>
          
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
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-[#C08497] font-bold text-sm uppercase tracking-widest mb-2 block">Key Insight</span>
            <h3 className="text-3xl font-serif text-[#1F2937] mb-6">Harm is Relational.</h3>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-6 font-light italic">
              "Harm should not be treated as a fixed or purely technical problem. In the context of AI companions, harm is often relational. It depends on what users expect the system to be, what role they assign to it, and how the system behaves when those expectations are challenged."
            </p>
            <div className="flex items-center gap-4">
               <span className="h-px bg-[#E5E7EB] flex-grow w-16"></span>
               <span className="text-sm text-[#1F2937] font-medium">AIDM7350 Group</span>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <LinksSection />

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-[#E5E7EB]">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#C08497] font-bold text-sm uppercase tracking-widest mb-2 block">About</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1F2937] mb-5">
              About This Project
            </h2>
            <p className="text-[#4B5563] leading-relaxed mb-4">
              This website is developed for the AIDM7350 Group Project to examine how AI companions reshape
              intimacy, emotional expectations, and perceptions of harm in digital life.
            </p>
            <p className="text-[#6B7280] leading-relaxed">
              We combine concept explanations, literature reviews, myth debunks, and curated resources to help
              readers build a clearer and more critical understanding of AI companionship.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}

export default App
