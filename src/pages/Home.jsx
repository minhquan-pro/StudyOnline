import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { courses, books, testimonials, honorStudents } from '../data/courses';
import { CardSkeleton } from '../components/Skeleton';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function SectionTitle({ subtitle, title }) {
  return (
    <div className="text-center mb-10">
      <span className="text-secondary font-semibold text-sm uppercase tracking-wider">{subtitle}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">{title}</h2>
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mt-4" />
    </div>
  );
}

/* ==================== BANNER ==================== */
function Banner() {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark via-primary to-accent overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 rounded-full text-sm font-medium mb-6">
              Nen tang hoc truc tuyen #1 Viet Nam
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Chinh phuc <span className="text-secondary">THPT Quoc gia</span> cung chuyen gia
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-lg">
              Khoa hoc Toan & Tieng Anh chat luong cao. Video bai giang chi tiet, bai tap theo chuyen de, de thi thu sat de that.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="px-8 py-3.5 bg-secondary hover:bg-secondary-light text-white font-semibold rounded-full shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all"
              >
                Khoa hoc ngay
              </Link>
              <a
                href="#courses"
                className="px-8 py-3.5 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full transition-all border border-white/20"
              >
                Tim hieu them
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              {[
                { value: '10,000+', label: 'Hoc sinh' },
                { value: '500+', label: 'Bai giang' },
                { value: '98%', label: 'Hai long' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary-light/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=450&fit=crop"
                alt="Students learning"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-800">Ti le do dai hoc</div>
                    <div className="text-2xl font-extrabold text-green-600">95.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ==================== COURSES SECTION ==================== */
function CoursesSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="courses" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle subtitle="Khoa hoc noi bat" title="Luyen thi cung chuyen gia" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading
            ? Array(6).fill(0).map((_, i) => <CardSkeleton key={i} />)
            : courses.map((course) => (
                <motion.div
                  key={course.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 px-8 py-3 text-primary font-semibold border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all"
          >
            Xem tat ca khoa hoc
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ==================== BOOKS SECTION ==================== */
function BooksSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle subtitle="Tai lieu hoc tap" title="Sach & De thi" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <motion.div
              key={book.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img src={book.image} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-secondary">{book.category}</span>
                <h3 className="font-bold text-gray-800 mt-1 group-hover:text-primary transition-colors">{book.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{book.author}</p>
                <p className="text-primary font-bold mt-2">{book.price.toLocaleString('vi-VN')}d</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== TESTIMONIALS ==================== */
function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark to-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Cam nhan hoc sinh</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Hoc sinh noi gi ve chung toi?</h2>
        </div>

        <div className="relative min-h-[280px]">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={false}
              animate={{
                opacity: index === current ? 1 : 0,
                scale: index === current ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${index === current ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10">
                <img src={t.avatar} alt={t.name} className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20" />
                <p className="text-white/90 text-lg italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="text-white font-bold text-lg">{t.name}</div>
                <div className="text-white/60 text-sm">{t.school}</div>
                <div className="inline-block mt-2 px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
                  {t.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? 'bg-secondary w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== HONOR STUDENTS ==================== */
function HonorSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <SectionTitle subtitle="Vinh danh" title="Hoc sinh xuat sac" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {honorStudents.map((student, index) => (
            <motion.div
              key={student.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 flex items-center gap-4 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="relative">
                <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full" />
                {index < 3 && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.school}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-semibold text-primary">{student.score} {student.subject}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== COUNTDOWN ==================== */
function CountdownSection() {
  const examDate = new Date('2026-06-25T00:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = examDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { value: timeLeft.days, label: 'Ngay' },
    { value: timeLeft.hours, label: 'Gio' },
    { value: timeLeft.minutes, label: 'Phut' },
    { value: timeLeft.seconds, label: 'Giay' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-orange-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Ky thi THPT Quoc gia 2026</h2>
        <p className="text-white/80 mb-8">Con bao lau nua? Hay bat dau on thi ngay hom nay!</p>

        <div className="flex justify-center gap-4 md:gap-6">
          {units.map((unit) => (
            <div key={unit.label} className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-extrabold text-white">
                {String(unit.value).padStart(2, '0')}
              </div>
              <div className="text-white/70 text-sm mt-1 font-medium">{unit.label}</div>
            </div>
          ))}
        </div>

        <Link
          to="/courses"
          className="inline-block mt-8 px-8 py-3.5 bg-white text-secondary font-bold rounded-full hover:shadow-lg transition-all"
        >
          Bat dau on thi ngay!
        </Link>
      </div>
    </section>
  );
}

/* ==================== HOME PAGE ==================== */
export default function Home() {
  return (
    <>
      <Banner />
      <CoursesSection />
      <BooksSection />
      <TestimonialsSection />
      <HonorSection />
      <CountdownSection />
    </>
  );
}
