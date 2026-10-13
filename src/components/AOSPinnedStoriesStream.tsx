import { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Quote, Sparkles, ChevronDown, CheckCircle2, ChevronLeft, ChevronRight, MousePointerClick } from 'lucide-react';
import { ALL_BLOG_TESTIMONIALS } from '../data/programs';

export const AOSPinnedStoriesStream: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);

  // Scroll tracking inside a dedicated container for smooth pinned story morphing
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  scrollYProgress.on('change', (latest) => {
    const total = ALL_BLOG_TESTIMONIALS.length;
    const calculatedIdx = Math.min(
      total - 1,
      Math.floor(latest * total)
    );
    if (calculatedIdx !== activeStoryIdx) {
      setActiveStoryIdx(calculatedIdx);
    }
  });

  // Function to navigate by click and optionally sync scroll container position
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
    <div ref={containerRef} className="relative h-[280vh] w-full">
      {/* Pinned Viewport Container (Tetap Diam di Layar Saat Di-scroll) */}
      <div className="sticky top-24 h-[calc(100vh-6rem)] w-full flex flex-col justify-center items-center px-3 sm:px-6">
        <div className="w-full max-w-4xl bg-white rounded-3xl border border-amber-200/80 p-6 sm:p-10 shadow-xl shadow-amber-900/5 relative overflow-hidden flex flex-col justify-between">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

          {/* 1. Header Tag & Direct Click Indicators */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-amber-100 gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-black rounded-full shadow-xs flex items-center gap-1.5 font-nunito">
                <Sparkles className="w-3.5 h-3.5" />
                <span>AOS Story #{activeStoryIdx + 1} dari {ALL_BLOG_TESTIMONIALS.length}</span>
              </span>
              <span className="px-2.5 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 text-[11px] font-bold rounded-lg flex items-center gap-1 font-nunito">
                <MousePointerClick className="w-3 h-3 text-orange-600" />
                <span>Bisa Scroll (AOS) & Bisa Klik</span>
              </span>
            </div>

            {/* Quick Step Clickable Indicators */}
            <div className="flex items-center gap-1.5 self-end sm:self-auto bg-slate-50 p-1.5 rounded-full border border-slate-200/80">
              {ALL_BLOG_TESTIMONIALS.map((t, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => selectStory(i)}
                  title={`Lihat Testimoni #${i + 1}: ${t.name}`}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeStoryIdx
                      ? 'w-7 bg-gradient-to-r from-amber-500 to-orange-500 shadow-xs'
                      : 'w-3 bg-slate-300 hover:bg-amber-300'
                  }`}
                  aria-label={`Pindah ke testimoni ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 2. Mini Name Selector Tabs (Quick Click by Alumni Name) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none mb-3 -mx-2 px-2">
            {ALL_BLOG_TESTIMONIALS.map((item, idx) => {
              const isSelected = idx === activeStoryIdx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => selectStory(idx)}
                  className={`shrink-0 px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer font-nunito flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-amber-600 text-white shadow-sm shadow-amber-600/30 ring-2 ring-amber-300'
                      : 'bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-900 border border-slate-200/60'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-slate-400'}`} />
                  <span className="truncate max-w-[130px]">{item.name.split(',')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* 3. Testimonial Quote Body with Side Navigation Arrows */}
          <div className="relative my-auto py-2">
            {/* Left Nav Arrow Button */}
            <button
              type="button"
              onClick={handlePrev}
              disabled={activeStoryIdx === 0}
              title="Testimoni Sebelumnya"
              className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
                activeStoryIdx === 0
                  ? 'opacity-30 bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border border-slate-200 hover:border-amber-300 cursor-pointer hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              type="button"
              onClick={handleNext}
              disabled={activeStoryIdx === ALL_BLOG_TESTIMONIALS.length - 1}
              title="Testimoni Selanjutnya"
              className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md ${
                activeStoryIdx === ALL_BLOG_TESTIMONIALS.length - 1
                  ? 'opacity-30 bg-slate-100 text-slate-400 cursor-not-allowed'
                  : 'bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-700 border border-slate-200 hover:border-amber-300 cursor-pointer hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <motion.div
              key={activeStoryIdx}
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="px-6 sm:px-8 space-y-4 sm:space-y-6"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 shadow-xs">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-medium italic text-slate-800 leading-relaxed pt-1 font-nunito">
                  "{activeTestimonial.content}"
                </p>
              </div>

              {/* Alumni Author Details */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 font-nunito">
                      {activeTestimonial.name}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 font-nunito">
                      {activeTestimonial.year}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 font-semibold font-nunito">
                    {activeTestimonial.role}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 font-nunito">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Testimoni Blogspot ELC</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 4. Bottom Hint Dual Controls (Scroll AOS & Click) */}
          <div className="pt-3 border-t border-amber-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 font-nunito">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-600">Navigasi:</span>
              <span className="text-slate-400">Gunakan panah & tombol nama di atas, atau putar scroll mouse</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-700 font-bold">
              <ChevronDown className="w-4 h-4 animate-bounce" />
              <span>AOS Pinned Scroll Active</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

