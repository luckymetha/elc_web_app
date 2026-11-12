import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ALL_BLOG_TESTIMONIALS } from '../data/programs';

export const AOSPinnedStoriesStream: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const total = ALL_BLOG_TESTIMONIALS.length;
    const calculatedIdx = Math.min(total - 1, Math.floor(latest * total));
    if (calculatedIdx !== activeStoryIdx) {
      setActiveStoryIdx(calculatedIdx);
    }
  });

  const selectStory = (index: number, syncScroll = true) => {
    const targetIdx = Math.max(0, Math.min(ALL_BLOG_TESTIMONIALS.length - 1, index));
    setActiveStoryIdx(targetIdx);

    if (syncScroll && containerRef.current) {
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const stepProgress = (targetIdx + 0.3) / ALL_BLOG_TESTIMONIALS.length;
      const targetScroll = containerTop + (containerHeight * stepProgress) - (window.innerHeight * 0.2);

      window.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectStory(activeStoryIdx - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectStory(activeStoryIdx + 1);
  };

  const activeTestimonial = ALL_BLOG_TESTIMONIALS[activeStoryIdx] || ALL_BLOG_TESTIMONIALS[0];

  return (
    <div ref={containerRef} className="relative h-[240vh] w-full">
      <div className="sticky top-24 h-[calc(100vh-7rem)] w-full flex flex-col justify-center items-center px-2 sm:px-4">
        <div className="w-full max-w-4xl bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm relative flex flex-col justify-between">
          {/* Header: Counter & Alumni Name Tabs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-slate-200 gap-3 mb-5">
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#C81E1E]">
                Testimoni Alumni
              </span>
              <span className="text-xs font-semibold text-slate-400">
                0{activeStoryIdx + 1} / 0{ALL_BLOG_TESTIMONIALS.length}
              </span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 sm:pb-0">
              {ALL_BLOG_TESTIMONIALS.map((item, idx) => {
                const isSelected = idx === activeStoryIdx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => selectStory(idx)}
                    className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B1F3A] text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                    }`}
                  >
                    {item.name.split(',')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quote Body */}
          <div className="relative my-auto py-4">
            <motion.div
              key={activeStoryIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <Quote className="w-8 h-8 text-slate-300 shrink-0 mt-1" />
                <p className="font-serif-editorial text-xl sm:text-2xl md:text-[26px] text-[#0B1F3A] leading-relaxed">
                  &ldquo;{activeTestimonial.content}&rdquo;
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-base font-bold text-[#0B1F3A]">
                      {activeTestimonial.name}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500 border-l border-slate-300 pl-2.5">
                      Angkatan {activeTestimonial.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {activeTestimonial.role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0B1F3A]" />
                  <span>Arsip Testimoni Resmi ELC</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Controls */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span className="hidden sm:inline">
              Gulir halaman atau gunakan panah untuk membaca kisah alumni lainnya.
            </span>
            <div className="flex items-center gap-2 ml-auto">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeStoryIdx === 0}
                className={`p-2 rounded-lg border transition-colors ${
                  activeStoryIdx === 0
                    ? 'opacity-35 border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer'
                }`}
                aria-label="Testimoni Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeStoryIdx === ALL_BLOG_TESTIMONIALS.length - 1}
                className={`p-2 rounded-lg border transition-colors ${
                  activeStoryIdx === ALL_BLOG_TESTIMONIALS.length - 1
                    ? 'opacity-35 border-slate-200 text-slate-400 cursor-not-allowed'
                    : 'border-slate-300 text-slate-700 hover:bg-slate-50 cursor-pointer'
                }`}
                aria-label="Testimoni Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
