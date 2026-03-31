import { motion } from 'framer-motion';

const myths = [
  {
    myth: "Does knowing it's AI really stop us from falling in love?",
    reality:
      "Knowing does not always prevent attachment. Repeated emotionally responsive interaction can still create strong relational feelings.",
  },
  {
    myth: 'Are AI companions truly just harmless chatbots?',
    reality:
      'Not always. They can offer support, but can also introduce dependency, blurred boundaries, and emotional disappointment.',
  },
  {
    myth: 'Can AI companions actually cure loneliness?',
    reality:
      'They may reduce loneliness temporarily, but they usually do not replace reciprocal human relationships in the long term.',
  },
  {
    myth: 'Is making AI more human-like always the right move?',
    reality:
      'Human-like design improves engagement, but can also make emotional boundaries less clear and increase user vulnerability.',
  },
  {
    myth: 'Is the problem really just users being too dependent?',
    reality:
      'No. Design choices, business incentives, and platform policies also shape risk and user outcomes.',
  },
];

export default function DebunksSection() {
  return (
    <section id="debunks" className="scroll-mt-24 py-20 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#B85C5C] font-bold text-sm uppercase tracking-widest mb-2 block"
          >
            Part 3
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#1F2937] mb-6"
          >
            Debunks
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#B85C5C] mx-auto"
          />
        </div>

        <div className="space-y-5">
          {myths.map((item, index) => (
            <motion.article
              key={item.myth}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-xl border border-[#E5E7EB] bg-[#F8F6F2] p-6"
            >
              <h3 className="text-xl font-serif font-bold text-[#1F2937] mb-3">Myth: {item.myth}</h3>
              <p className="text-[#4B5563] leading-relaxed">
                <span className="font-semibold text-[#B85C5C]">Reality:</span> {item.reality}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}