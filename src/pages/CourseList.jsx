import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const grades = [10, 11, 12];
const subjects = ['Tat ca', 'Toan', 'Tieng Anh'];

export default function CourseList() {
  const [searchParams] = useSearchParams();
  const initialGrade = searchParams.get('grade') ? Number(searchParams.get('grade')) : null;
  const initialSubject = searchParams.get('subject') || 'Tat ca';

  const [selectedGrade, setSelectedGrade] = useState(initialGrade);
  const [selectedSubject, setSelectedSubject] = useState(initialSubject);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const gradeMatch = !selectedGrade || c.grade === selectedGrade;
      const subjectMatch = selectedSubject === 'Tat ca' || c.subject === selectedSubject;
      return gradeMatch && subjectMatch;
    });
  }, [selectedGrade, selectedSubject]);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Tat ca khoa hoc
          </motion.h1>
          <p className="text-white/70 mt-2">Tim khoa hoc phu hop voi ban</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex items-center gap-2 mr-4">
            <span className="text-sm font-semibold text-gray-600">Mon:</span>
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSubject(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedSubject === s
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-600">Lop:</span>
            <button
              onClick={() => setSelectedGrade(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                !selectedGrade
                  ? 'bg-secondary text-white shadow-md shadow-secondary/25'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              Tat ca
            </button>
            {grades.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedGrade === g
                    ? 'bg-secondary text-white shadow-md shadow-secondary/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                Lop {g}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <p className="text-sm text-gray-500 mb-6">
          Hien thi <span className="font-semibold text-gray-800">{filtered.length}</span> khoa hoc
        </p>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-700">Khong tim thay khoa hoc</h3>
            <p className="text-gray-500 mt-2">Thu thay doi bo loc de tim khoa hoc phu hop</p>
          </div>
        )}
      </div>
    </div>
  );
}
