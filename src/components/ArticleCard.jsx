export default function ArticleCard({ category, title, summary, link, variant = "base" }) {
  // Styles based on variant if needed
  const tagColors = {
    facts: "bg-[#7A9E7E]/10 text-[#7A9E7E]",
    reviews: "bg-[#A78BFA]/10 text-[#7A9E7E]",
    debunks: "bg-[#B85C5C]/10 text-[#B85C5C]",
    links: "bg-[#C08497]/10 text-[#C08497]",
    default: "bg-[#E5E7EB] text-[#1F2937]"
  };

  const tagCls = tagColors[category?.toLowerCase()] || tagColors.default;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-start border border-[#E5E7EB]">
      {category && (
        <span className={`px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wide mb-4 ${tagCls}`}>
          {category}
        </span>
      )}

      <h3 className="font-serif text-2xl text-[#1F2937] mb-3 leading-tight font-bold">
        {title}
      </h3>

      <p className="text-[#6B7280] font-sans text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
        {summary}
      </p>

      <a
        href={link || "#"}
        className="inline-flex items-center text-[#C08497] font-medium hover:text-[#B85C5C] transition-colors group"
      >
        Read More
        <svg
          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
}
