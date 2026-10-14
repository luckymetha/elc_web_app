import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../../data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'elc_database.sqlite');
export const db = new Database(dbPath);

// Aktifkan WAL mode untuk performa cepat
db.pragma('journal_mode = WAL');

export function initDatabase() {
  // 1. Table Users (Siswa & Admin)
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      student_id_number TEXT UNIQUE, -- NIM misal ELC-ENG-041
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'student', -- 'student' | 'admin' | 'instructor'
      avatar TEXT,
      program_category TEXT NOT NULL, -- 'english' | 'computer' | 'lpk'
      program_name TEXT NOT NULL,
      class_type TEXT NOT NULL DEFAULT 'Reguler',
      branch TEXT NOT NULL DEFAULT 'Kampus Pusat Ciparay',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // 2. Table Modules (Materi Belajar Spesifik per Program)
  db.exec(`
    CREATE TABLE IF NOT EXISTS modules (
      id TEXT PRIMARY KEY,
      program_category TEXT NOT NULL,
      title TEXT NOT NULL,
      type TEXT NOT NULL, -- 'audio' | 'video' | 'pdf' | 'quiz'
      duration TEXT NOT NULL,
      description TEXT,
      content_url TEXT,
      order_index INTEGER DEFAULT 1
    );
  `);

  // 3. Table Student Module Progress (Nilai & Status Selesai)
  db.exec(`
    CREATE TABLE IF NOT EXISTS student_module_progress (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      module_id TEXT NOT NULL,
      status TEXT NOT NULL DEFAULT 'in_progress', -- 'completed' | 'in_progress' | 'locked'
      score INTEGER,
      completed_at DATETIME,
      FOREIGN KEY (user_id) REFERENCES users(id),
      FOREIGN KEY (module_id) REFERENCES modules(id),
      UNIQUE(user_id, module_id)
    );
  `);

  // 4. Table Attendance (Presensi Scan Riil)
  db.exec(`
    CREATE TABLE IF NOT EXISTS attendances (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      session_name TEXT NOT NULL,
      room_name TEXT NOT NULL,
      scan_time DATETIME DEFAULT CURRENT_TIMESTAMP,
      status TEXT NOT NULL DEFAULT 'Hadir',
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  // 5. Table Certificates (Kelulusan Resmi)
  db.exec(`
    CREATE TABLE IF NOT EXISTS certificates (
      id TEXT PRIMARY KEY,
      user_id TEXT UNIQUE NOT NULL,
      cert_number TEXT UNIQUE NOT NULL,
      issue_date TEXT NOT NULL,
      verified INTEGER DEFAULT 1,
      skills_json TEXT NOT NULL,
      FOREIGN KEY (user_id) REFERENCES users(id)
    );
  `);

  seedInitialData();
}

function seedInitialData() {
  const userCount = db.prepare('SELECT count(*) as count FROM users').get() as { count: number };
  if (userCount.count === 0) {
    // Password default untuk akun demo siswa: 'elc12345'
    // Menggunakan hash sederhana atau plaintext fallback demi reliabilitas demo lokal
    const insertUser = db.prepare(`
      INSERT INTO users (id, student_id_number, name, email, password_hash, role, avatar, program_category, program_name, class_type, branch)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    // Siswa 1: Bahasa Inggris
    insertUser.run(
      'user-1',
      'ELC-ENG-041',
      'Rizky Ramadhani',
      'rizky@elc.id',
      'elc12345',
      'student',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      'english',
      'Active Speaking & Teens Conversation',
      'Reguler Sore',
      'Kampus Pusat Ciparay'
    );

    // Siswa 2: Komputer
    insertUser.run(
      'user-2',
      'ELC-COM-019',
      'Siti Nurhaliza',
      'siti@elc.id',
      'elc12345',
      'student',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
      'computer',
      'Aplikasi Perkantoran & Excel Mahir',
      'Privat Intensif',
      'Kampus Pusat Ciparay (Lab Komputer)'
    );

    // Siswa 3: LPK BNSP
    insertUser.run(
      'user-3',
      'ELC-LPK-007',
      'Fajar Nugraha',
      'fajar@elc.id',
      'elc12345',
      'student',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      'lpk',
      'LPK Vokasi Siap Kerja & Sertifikasi BNSP',
      'Kelas Vokasi Industri',
      'Kampus Cabang Pacet (Jalancagak)'
    );

    // Akun Admin / Instruktur
    insertUser.run(
      'admin-1',
      'ELC-ADM-001',
      'Mr. Entis Sutisna',
      'admin@elc.id',
      'admin123',
      'admin',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
      'english',
      'Direktur Lembaga & Instruktur Utama',
      'Manajemen',
      'Pusat & Cabang'
    );

    // Seeding Modul Materi
    const insertMod = db.prepare(`
      INSERT INTO modules (id, program_category, title, type, duration, description, order_index)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    // Modul Bahasa Inggris
    insertMod.run('mod-eng-1', 'english', 'Daily Greetings & Breaking Mental Block', 'audio', '15 Menit', 'Latihan audio pelafalan dasar dan keberanian berbicara', 1);
    insertMod.run('mod-eng-2', 'english', 'Direct & Indirect Speech in Formal Report', 'pdf', '25 Menit', 'Tata bahasa pelaporan kalimat berita dan percakapan formal', 2);
    insertMod.run('mod-eng-3', 'english', 'Passive Voice Mastery in Academic Test', 'quiz', '20 Menit', 'Kuis interaktif pola kalimat pasif untuk TOEFL', 3);
    insertMod.run('mod-eng-4', 'english', 'TOEFL Listening Tactics & Dialog Part A', 'audio', '30 Menit', 'Bedah trik menjawab audio listening TOEFL dalam 12 detik', 4);

    // Modul Komputer
    insertMod.run('mod-com-1', 'computer', 'Mastering MS Word Format Dokumen Resmi', 'pdf', '30 Menit', 'Tata letak margin, penomoran halaman otomatis, dan surat resmi', 1);
    insertMod.run('mod-com-2', 'computer', 'Rumus Logika Excel: IF, AND, OR, VLOOKUP', 'quiz', '40 Menit', 'Otomatisasi pengolahan data kasir dan rekap kantor', 2);
    insertMod.run('mod-com-3', 'computer', 'Desain Flyer & Brosur Kerja di CorelDraw', 'video', '35 Menit', 'Praktik layout promosi siap cetak resolusi tinggi', 3);
    insertMod.run('mod-com-4', 'computer', 'Pivot Table & Visual Dashboard Interaktif', 'pdf', '45 Menit', 'Penyajian grafik laporan eksekutif perusahaan', 4);

    // Modul LPK BNSP
    insertMod.run('mod-lpk-1', 'lpk', 'Etika Kerja & Komunikasi Profesional Kantor', 'pdf', '20 Menit', 'Pembentukan karakter disiplin dan sopan santun industri', 1);
    insertMod.run('mod-lpk-2', 'lpk', 'Standar Operasional Kerja Berbasis SKKNI', 'pdf', '40 Menit', 'Pedoman uji kompetensi kementerian tenaga kerja', 2);
    insertMod.run('mod-lpk-3', 'lpk', 'Pembuatan Portofolio Asesmen Mandiri BNSP', 'quiz', '30 Menit', 'Penyusunan berkas bukti kompetensi kerja asesi', 3);
    insertMod.run('mod-lpk-4', 'lpk', 'Final Job Interview & English Presentation', 'video', '45 Menit', 'Simulasi wawancara kerja profesional dua bahasa', 4);

    // Seeding Modul Progress Siswa 1 (Rizky)
    const insertProg = db.prepare(`
      INSERT INTO student_module_progress (id, user_id, module_id, status, score, completed_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    insertProg.run('prog-1', 'user-1', 'mod-eng-1', 'completed', 95, '2026-10-01');
    insertProg.run('prog-2', 'user-1', 'mod-eng-2', 'completed', 90, '2026-10-06');
    insertProg.run('prog-3', 'user-1', 'mod-eng-3', 'in_progress', 82, null);
    insertProg.run('prog-4', 'user-1', 'mod-eng-4', 'locked', null, null);

    // Seeding Modul Progress Siswa 2 (Siti)
    insertProg.run('prog-5', 'user-2', 'mod-com-1', 'completed', 100, '2026-10-02');
    insertProg.run('prog-6', 'user-2', 'mod-com-2', 'completed', 94, '2026-10-07');
    insertProg.run('prog-7', 'user-2', 'mod-com-3', 'in_progress', 88, null);
    insertProg.run('prog-8', 'user-2', 'mod-com-4', 'locked', null, null);

    // Seeding Modul Progress Siswa 3 (Fajar)
    insertProg.run('prog-9', 'user-3', 'mod-lpk-1', 'completed', 96, '2026-10-03');
    insertProg.run('prog-10', 'user-3', 'mod-lpk-2', 'completed', 92, '2026-10-08');
    insertProg.run('prog-11', 'user-3', 'mod-lpk-3', 'in_progress', 85, null);
    insertProg.run('prog-12', 'user-3', 'mod-lpk-4', 'locked', null, null);

    // Seeding Absensi Awal
    const insertAtt = db.prepare(`
      INSERT INTO attendances (id, user_id, session_name, room_name, scan_time, status)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    insertAtt.run('att-1', 'user-1', 'Session 18: Speaking Simulation', 'Ruang Speaking A (Lt. 2)', '2026-10-12 15:32:00', 'Hadir');
    insertAtt.run('att-2', 'user-1', 'Session 17: Conditional Sentences', 'Ruang Speaking A (Lt. 2)', '2026-10-08 15:28:00', 'Hadir');
    insertAtt.run('att-3', 'user-2', 'Session 12: VLOOKUP & Data Validation', 'Lab Komputer AC (PC #06)', '2026-10-13 14:00:00', 'Hadir');
    insertAtt.run('att-4', 'user-3', 'Session 22: Asesmen Mandiri', 'Ruang Workshop Vokasi', '2026-10-11 09:00:00', 'Hadir');

    // Seeding Sertifikat
    const insertCert = db.prepare(`
      INSERT INTO certificates (id, user_id, cert_number, issue_date, verified, skills_json)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    insertCert.run('cert-1', 'user-1', 'ELC/ENG/2026/0892', 'Segera Terbit (Setelah 24 Sesi)', 1, JSON.stringify(['Active English Speaking', 'Grammar Application', 'Pronunciation Natural']));
    insertCert.run('cert-2', 'user-2', 'ELC/COMP/2026/0311', 'Segera Terbit', 1, JSON.stringify(['Excel Advanced', 'Office Administration', 'Digital Data Formatting']));
    insertCert.run('cert-3', 'user-3', 'ELC/BNSP/2026/0055', 'Terverifikasi Asesor BNSP', 1, JSON.stringify(['Standar SKKNI', 'Office Communication', 'Etos Kerja Industri']));
  }
}
