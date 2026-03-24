import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Khong tim thay khoa hoc</h2>
          <Link to="/courses" className="text-primary font-semibold hover:underline">Quay lai danh sach</Link>
        </div>
      </div>
    );
  }

  const formatPrice = (price) => price.toLocaleString('vi-VN') + 'd';
  const discount = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-dark to-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/courses" className="text-white/70 hover:text-white text-sm mb-4 inline-flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Quay lai
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-extrabold text-white mt-2"
          >
            {course.title}
          </motion.h1>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="px-3 py-1 bg-white/10 text-white rounded-full text-sm">{course.teacher}</span>
            <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">Lop {course.grade}</span>
            <span className="flex items-center gap-1 text-yellow-400 text-sm">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {course.rating} | {course.students.toLocaleString()} hoc sinh
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-white/30 transition-colors">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm">Xem video gioi thieu khoa hoc</p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Mo ta khoa hoc</h2>
              <p className="text-gray-600 leading-relaxed">{course.description}</p>
            </motion.div>

            {/* Chapters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Noi dung khoa hoc</h2>
              <div className="space-y-3">
                {course.chapters.map((chapter, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-gray-700">{chapter}</span>
                    <svg className="w-4 h-4 text-gray-400 ml-auto shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V9m0 0l3 3m-3-3l-3 3" />
                    </svg>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-24"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-xl mb-6" />

              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-extrabold text-primary">{formatPrice(course.price)}</span>
                <span className="text-lg text-gray-400 line-through">{formatPrice(course.originalPrice)}</span>
              </div>
              <span className="inline-block px-2.5 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-6">
                Giam {discount}%
              </span>

              <button className="w-full py-3.5 bg-gradient-to-r from-secondary to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all mb-3">
                Dang ky ngay
              </button>
              <button className="w-full py-3.5 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                Them vao gio hang
              </button>

              <div className="mt-6 space-y-3">
                {[
                  { icon: '📹', label: `${course.lessons} bai giang video` },
                  { icon: '📝', label: 'Bai tap theo chuyen de' },
                  { icon: '📋', label: 'De thi thu co loi giai' },
                  { icon: '💬', label: 'Hoi dap truc tiep' },
                  { icon: '♾️', label: 'Truy cap tron doi' },
                  { icon: '📱', label: 'Hoc tren moi thiet bi' },
                ].map((feature) => (
                  <div key={feature.label} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="text-lg">{feature.icon}</span>
                    {feature.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
