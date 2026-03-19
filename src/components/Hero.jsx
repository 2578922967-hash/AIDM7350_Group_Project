export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#F8F6F2] py-24 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
         <div className="rounded-full w-[800px] h-[800px] bg-[#A78BFA] blur-[120px] absolute -top-[200px] -right-[200px]"></div>
         <div className="rounded-full w-[600px] h-[600px] bg-[#C08497] blur-[100px] absolute top-[400px] -left-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="mx-auto max-w-2xl">
          <h1 className="text-5xl font-bold tracking-tight text-[#1F2937] sm:text-7xl font-serif mb-6">
            Love, Care, or <span className="text-[#B85C5C]">Harm?</span>
          </h1>
          <p className="mt-4 text-xl leading-8 text-[#6B7280] font-light max-w-prose mx-auto italic">
            Understanding AI Companions in Contemporary Digital Life
          </p>
          <p className="mt-8 text-lg leading-relaxed text-[#1F2937] font-sans">
            AI companions are becoming part of everyday digital culture. They promise emotional support, intimacy, 
            and always-available conversation, yet they also raise difficult questions about dependency, privacy, and harm.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#facts"
              className="rounded-full bg-[#1F2937] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#C08497] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C08497] transition-all duration-300"
            >
              Start Exploring
            </a>
            <a href="#about" className="text-sm font-semibold leading-6 text-[#1F2937] hover:text-[#C08497] transition-colors group flex items-center">
              Learn more <span aria-hidden="true" className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
