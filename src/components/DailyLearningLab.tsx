import { useState } from 'react';
import { Volume2, Sparkles } from 'lucide-react';

interface VocabCard {
  word: string;
  pronunciation: string;
  meaning: string;
  sampleSentence: string;
  grammarTip: string;
  category: 'Conversation' | 'Workplace' | 'Grammar Rule';
}

const VOCAB_LIST: VocabCard[] = [
  {
    word: 'Active Speaking',
    pronunciation: '/ˈæktɪv ˈspiːkɪŋ/',
    meaning: 'Praktik berbicara spontan tanpa cemas atau takut salah',
    sampleSentence: 'At ELC, we encourage active speaking from the very first meeting.',
    grammarTip: 'Fokus pada keberanian dan kelancaran (fluency) sebelum mengoreksi tata bahasa (accuracy).',
    category: 'Conversation'
  },
  {
    word: 'Direct & Indirect Speech',
    pronunciation: '/daɪˈrɛkt ænd ˌɪndaɪˈrɛkt spiːtʃ/',
    meaning: 'Pola kalimat langsung dan kalimat tidak langsung',
    sampleSentence: 'He said, "I study at ELC" becomes: He said that he studied at ELC.',
    grammarTip: 'Perhatikan pergeseran tenses (backshift of tenses) saat mengubah kalimat langsung ke tidak langsung.',
    category: 'Grammar Rule'
  },
  {
    word: 'SKKNI & Competency',
    pronunciation: '/kəmˈpɪtənsi/',
    meaning: 'Standar Kompetensi Kerja Nasional Indonesia untuk LPK',
    sampleSentence: 'Our vocational training complies with national SKKNI standards for business administration.',
    grammarTip: 'Kombinasikan pemahaman teknis komputer dengan etos kerja profesional industri.',
    category: 'Workplace'
  },
  {
    word: 'Conditional Sentence',
    pronunciation: '/kənˈdɪʃənl ˈsɛntəns/',
    meaning: 'Kalimat pengandaian (Type 1, Type 2, & Type 3)',
    sampleSentence: 'If you join ELC today, you will master English without excessive burden.',
    grammarTip: 'Type 1 menggunakan Simple Present pada if-clause dan Will + Verb 1 pada main-clause.',
    category: 'Grammar Rule'
  }
];

export const DailyLearningLab: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const current = VOCAB_LIST[currentIndex];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      setIsPlayingAudio(true);
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/20 px-2.5 py-0.5 rounded-full border border-blue-400/30 inline-block mb-1">
            ELC Audio Lab Interactive
          </span>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Mini Laboratorium Audio & Materi Mr. Entis</span>
          </h3>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10 text-[11px]">
          {VOCAB_LIST.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                currentIndex === idx
                  ? 'bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Modul {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Left Side: Word & Pronunciation */}
        <div className="md:col-span-5 space-y-3">
          <span className="text-xs font-semibold text-blue-300 uppercase tracking-wide">
            Kategori: {current.category}
          </span>
          <h4 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {current.word}
          </h4>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-300 bg-white/10 px-2.5 py-1 rounded-md">
              {current.pronunciation}
            </span>
            <button
              onClick={() => handleSpeak(current.word)}
              disabled={isPlayingAudio}
              className={`p-2 rounded-xl border transition-all flex items-center gap-1.5 text-xs font-bold cursor-pointer ${
                isPlayingAudio
                  ? 'bg-amber-500/20 border-amber-400 text-amber-300 animate-pulse'
                  : 'bg-blue-600/30 hover:bg-blue-600 border-blue-500/40 text-blue-200'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>Dengarkan Pelafalan</span>
            </button>
          </div>
          <p className="text-xs text-slate-300 pt-1 leading-relaxed">
            <strong>Arti:</strong> {current.meaning}
          </p>
        </div>

        {/* Right Side: Example Sentence & Grammar Notes */}
        <div className="md:col-span-7 bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3.5">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Contoh Kalimat Riil:
            </span>
            <p className="text-xs sm:text-sm text-slate-200 italic font-serif leading-relaxed">
              "{current.sampleSentence}"
            </p>
          </div>

          <div className="pt-2.5 border-t border-white/10">
            <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">
              Kiat Pembelajaran Mr. Entis:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.grammarTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
