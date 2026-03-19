export default function Footer() {
  return (
    <footer className="bg-[#E5E7EB]/30 mt-16 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="font-serif text-2xl font-bold text-[#1F2937] mb-4">
          Love, Care, or Harm?
        </h3>
        <p className="text-center text-[#6B7280] max-w-2xl mb-8 font-sans">
          This educational website is part of the AIDM7350 Group Project (Topic: AI Companions).
          It aims to explore how digital intimacy reshapes human relationships.
        </p>

        <div className="flex space-x-6 mb-8 text-[#C08497] font-serif italic">
          <span>Richyy</span>
          <span>Small7</span>
          <span>Big7</span>
          <span>LIN</span>
        </div>

        <div className="text-sm text-[#6B7280] border-t border-[#E5E7EB] pt-8 w-full text-center">
          &copy; 2026 AIDM7350 Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
