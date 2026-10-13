import { GRAMMAR_MATERIALS } from '../data/programs';

export const PortraitGrammarAndStories: React.FC = () => {
  return (
    <section className="w-full space-y-6">
      <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200 inline-block mb-1">
              Materi Tata Bahasa Praktis (Arsip Blogspot)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Modul Grammar Inti Mr. Entis Sutisna
            </h3>
          </div>
          <span className="text-xs text-slate-500">Materi Teruji di Kelas Percakapan</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {GRAMMAR_MATERIALS.map((mat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:bg-white transition-all shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
                    0{i + 1}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{mat.title}</h4>
                </div>
                <p className="text-xs font-semibold text-blue-700 mb-1">{mat.rule}</p>
                <p className="text-xs font-mono text-slate-600 bg-white p-2 rounded-lg border border-slate-200 mb-2">
                  {mat.example}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">{mat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
