import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, RotateCcw, Award, ArrowRight } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    points: { english: number; computer: number; lpk: number };
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Apa tujuan utama belajar Anda saat ini?',
    options: [
      { text: 'Lancar ngobrol & persiapan tes TOEFL / beasiswa kuliah', points: { english: 3, computer: 0, lpk: 1 } },
      { text: 'Mahir Excel, desain grafis, atau administrasi kantor modern', points: { english: 0, computer: 3, lpk: 1 } },
      { text: 'Ingin cepat dapat sertifikat BNSP & disalurkan kerja/magang', points: { english: 1, computer: 1, lpk: 4 } }
    ]
  },
  {
    id: 2,
    question: 'Berapa waktu luang yang bisa Anda investasikan setiap minggu?',
    options: [
      { text: '2-3 pertemuan santai tanpa beban PR berat', points: { english: 3, computer: 2, lpk: 1 } },
      { text: 'Intensif praktik langsung di lab komputer (1 siswa 1 PC)', points: { english: 1, computer: 3, lpk: 2 } },
      { text: 'Bootcamp karir 3-6 bulan plus persiapan penempatan kerja', points: { english: 1, computer: 1, lpk: 4 } }
    ]
  },
  {
    id: 3,
    question: 'Hasil akhir apa yang paling penting bagi Anda?',
    options: [
      { text: 'Percaya diri berbicara bahasa Inggris tanpa takut salah grammar', points: { english: 4, computer: 0, lpk: 0 } },
      { text: 'Portofolio dokumen kerja, laporan data & desain kreatif', points: { english: 0, computer: 4, lpk: 1 } },
      { text: 'Sertifikat resmi kompetensi nasional untuk melamar di BUMN / Swasta', points: { english: 1, computer: 1, lpk: 4 } }
    ]
  }
];

export const InteractiveCurriculumFinder: React.FC<{
  onSelectProgram: (programId: string) => void;
  onOpenRegister: (programName: string) => void;
}> = ({ onSelectProgram, onOpenRegister }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState({ english: 0, computer: 0, lpk: 0 });
  const [isFinished, setIsFinished] = useState(false);

  const handleSelectOption = (points: { english: number; computer: number; lpk: number }) => {
    const nextScores = {
      english: scores.english + points.english,
      computer: scores.computer + points.computer,
      lpk: scores.lpk + points.lpk
    };
    setScores(nextScores);

    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getRecommendation = () => {
    if (scores.lpk >= scores.english && scores.lpk >= scores.computer) {
      return {
        id: 'lpk',
        title: 'LPK ELC Vocational Training (Siap Kerja & BNSP)',
        badge: 'Rekomendasi Terbaik untuk Anda',
        desc: 'Program bursa pelatihan vokasi resmi Disnaker dengan sertifikasi profesi BNSP dan pembekalan budaya kerja industri.',
        color: 'from-amber-600 to-orange-600'
      };
    } else if (scores.computer >= scores.english) {
      return {
        id: 'computer',
        title: 'ELC Digital Computer Academy',
        badge: 'Rekomendasi Terbaik untuk Anda',
        desc: 'Kuasai keahlian komputer perkantoran modern, rumus praktis Excel, dan media promosi desain grafis langsung di lab PC ber-AC.',
        color: 'from-emerald-600 to-teal-600'
      };
    } else {
      return {
        id: 'english',
        title: 'English Lovers Club (ELC)',
        badge: 'Rekomendasi Terbaik untuk Anda',
        desc: 'Metode belajar Active Speaking "Tanpa Beban" bimbingan Mr. Entis Sutisna yang telah meraih Juara 2 tingkat Jawa Barat.',
        color: 'from-blue-600 to-indigo-600'
      };
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({ english: 0, computer: 0, lpk: 0 });
    setIsFinished(false);
  };

  const result = getRecommendation();

  return (
    <div className="w-full bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
            Interactive Course Matcher
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
            Bingung Pilih Program? Temukan Kelas yang Tepat dalam 30 Detik
          </h3>
        </div>
        {!isFinished && (
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-400">Pertanyaan</span>
            <p className="text-sm font-black text-slate-800">{currentStep + 1} / {QUESTIONS.length}</p>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isFinished ? (
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className="text-base font-semibold text-slate-800 mb-4">
              {QUESTIONS[currentStep].question}
            </h4>
            <div className="space-y-3">
              {QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.points)}
                  className="w-full p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/90 hover:border-blue-300 text-left text-xs sm:text-sm text-slate-700 hover:text-blue-900 font-medium transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span>{option.text}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
              <Award className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              {result.badge}
            </span>
            <h4 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              {result.title}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
              {result.desc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  onSelectProgram(result.id);
                  onOpenRegister(result.title);
                }}
                className={`w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r ${result.color} text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:opacity-95`}
              >
                <span>Daftar Program Ini Sekarang</span>
                <CheckCircle2 className="w-4 h-4" />
              </button>
              <button
                onClick={resetQuiz}
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ulangi Kuis</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
