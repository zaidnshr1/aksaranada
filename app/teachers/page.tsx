import type { Metadata } from "next";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Pengajar Kami",
  description:
    "Kenal lebih dekat dengan instruktur bersertifikat AksaraNada — musisi profesional dengan dedikasi untuk berbagi ilmu.",
};

const TEACHERS = [
  {
    name: "Rizal Firmansyah",
    role: "Instruktur Gitar Elektrik & Klasik",
    bio: "Alumnus Berklee Online dengan 10 tahun pengalaman mengajar. Mantan gitaris band indie terkemuka dengan tour nasional. Spesialis teknik fingerstyle dan blues.",
    specialties: ["Fingerstyle", "Blues", "Rock", "Klasik"],
    experience: "10+ tahun",
    photo: null,
  },
  {
    name: "Dewi Rahayu",
    role: "Instruktur Vokal",
    bio: "Soprano dengan latar belakang pendidikan vokal klasik dari ISI Yogyakarta. Telah melatih lebih dari 200 penyanyi dari berbagai genre mulai dari pop, jazz, hingga opera.",
    specialties: ["Pop", "Jazz", "Klasik", "R&B"],
    experience: "8+ tahun",
    photo: null,
  },
  {
    name: "Bintang Kusuma",
    role: "Instruktur Piano & Keyboard",
    bio: "Pianis jazz berpengalaman dengan rekam jejak di berbagai festival musik internasional. Mengajarkan piano dari dasar hingga tingkat mahir dengan pendekatan yang menyenangkan.",
    specialties: ["Jazz", "Classical", "Pop", "Worship"],
    experience: "12+ tahun",
    photo: null,
  },
  {
    name: "Aditya Prasetyo",
    role: "Instruktur Produksi Musik & Bass",
    bio: "Produser musik dengan portfolio 50+ lagu komersial. Ahli dalam FL Studio, Ableton Live, dan mixing/mastering. Juga mengajar bass elektrik dengan teknik slap yang solid.",
    specialties: ["FL Studio", "Ableton", "Mixing", "Bass Slap"],
    experience: "7+ tahun",
    photo: null,
  },
  {
    name: "Siti Nuraini",
    role: "Instruktur Vokal & Piano Anak",
    bio: "Spesialis pendidikan musik untuk anak usia dini. Mengembangkan metode pembelajaran berbasis permainan yang membuat anak-anak jatuh cinta pada musik secara alami.",
    specialties: ["Anak-anak", "Metode Bermain", "Piano", "Vokal"],
    experience: "6+ tahun",
    photo: null,
  },
  {
    name: "Fajar Nugroho",
    role: "Instruktur Gitar & Band Management",
    bio: "Gitaris yang telah berpengalaman memimpin dan mengelola beberapa band indie. Mengajarkan tidak hanya teknik bermain, tapi juga dinamika bermusik dalam sebuah band.",
    specialties: [
      "Band Dynamics",
      "Gitar Rhythm",
      "Gitar Lead",
      "Stage Performance",
    ],
    experience: "9+ tahun",
    photo: null,
  },
];

function TeacherCard({
  teacher,
  index,
}: {
  teacher: (typeof TEACHERS)[0];
  index: number;
}) {
  return (
    <article className="group border border-border-soft bg-ivory hover:border-maroon/30 transition-all duration-400">
      {/* Photo placeholder */}
      <div
        className="relative overflow-hidden bg-ivory-deeper"
        style={{ aspectRatio: "4/5" }}
      >
        {teacher.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={teacher.photo}
            alt={teacher.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16 rounded-full border border-maroon/20 flex items-center justify-center">
              <span className="font-serif text-2xl text-maroon/30 font-bold">
                {teacher.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
          </div>
        )}
        {/* Experience badge */}
        <div className="absolute top-3 right-3 bg-obsidian/80 backdrop-blur-xs px-2 py-1">
          <span className="eyebrow text-[0.55rem] text-ivory">
            {teacher.experience}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <span className="eyebrow text-[0.58rem] text-maroon block mb-2">
          {teacher.role}
        </span>
        <h3 className="font-serif text-lg font-semibold text-obsidian mb-3">
          {teacher.name}
        </h3>
        <p className="text-obsidian-muted text-xs leading-relaxed mb-4">
          {teacher.bio}
        </p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5">
          {teacher.specialties.map((s) => (
            <span
              key={s}
              className="eyebrow text-[0.55rem] border border-border-soft text-obsidian-muted px-2 py-1"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function TeachersPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-obsidian relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 60%, #5B1B1B, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <span className="eyebrow text-maroon text-[0.65rem] block mb-6">
            Tim Pengajar
          </span>
          <h1
            className="font-serif font-bold text-ivory max-w-2xl"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
              lineHeight: "1.04",
              letterSpacing: "-0.02em",
            }}
          >
            Belajar dari yang
            <br />
            <span className="italic text-maroon-accent">
              Telah Hidup di Panggung.
            </span>
          </h1>
          <p className="text-ivory/50 text-sm md:text-base leading-relaxed max-w-lg mt-5">
            Instruktur kami bukan hanya pengajar — mereka adalah musisi aktif
            yang membawa pengalaman nyata ke dalam setiap sesi kelas.
          </p>
        </div>
      </section>

      {/* Teachers grid */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEACHERS.map((teacher, i) => (
              <TeacherCard key={teacher.name} teacher={teacher} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Join as teacher CTA */}
      <section className="py-16 md:py-20 bg-ivory-dark border-t border-border-soft">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <div className="h-px w-12 bg-maroon mx-auto mb-8" />
          <h2
            className="font-serif font-semibold text-obsidian text-2xl md:text-3xl mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            Berminat Bergabung Menjadi
            <span className="italic text-maroon"> Pengajar Bersama Kami?</span>
          </h2>
          <p className="text-obsidian-muted text-sm leading-relaxed max-w-md mx-auto mb-8">
            Kami selalu mencari musisi berdedikasi yang ingin berbagi ilmu. Jika
            Anda memiliki pengalaman dan passion mengajar, kami ingin mendengar
            cerita Anda.
          </p>
          <a
            href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Lamaran Pengajar AksaraNada`}
            className="inline-flex items-center gap-2 bg-maroon text-ivory eyebrow text-[0.68rem] px-8 py-4 hover:bg-maroon-light transition-colors"
          >
            <Mail size={14} strokeWidth={1.5} />
            Hubungi Kami
          </a>
        </div>
      </section>
    </>
  );
}
