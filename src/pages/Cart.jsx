import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, registerCourse, cartTotal } = useCart();
  const formatPrice = (price) => price.toLocaleString('vi-VN') + 'd';

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Gio hang trong</h2>
          <p className="text-gray-500 mb-6">Ban chua them khoa hoc nao vao gio hang</p>
          <Link to="/courses" className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:shadow-lg transition-all">
            Xem khoa hoc
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Gio hang cua ban</h1>

        <div className="space-y-4 mb-8">
          {cartItems.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4"
            >
              <img src={course.image} alt={course.title} className="w-full sm:w-40 h-28 object-cover rounded-xl" />
              <div className="flex-1">
                <Link to={`/courses/${course.id}`} className="font-bold text-gray-800 hover:text-primary transition-colors">
                  {course.title}
                </Link>
                <p className="text-sm text-gray-500 mt-1">{course.teacher}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-lg font-bold text-primary">{formatPrice(course.price)}</span>
                  <span className="text-sm text-gray-400 line-through">{formatPrice(course.originalPrice)}</span>
                </div>
              </div>
              <div className="flex sm:flex-col gap-2 sm:items-end justify-end">
                <button
                  onClick={() => registerCourse(course)}
                  className="px-4 py-2 bg-gradient-to-r from-secondary to-orange-500 text-white text-sm font-semibold rounded-lg hover:shadow-md transition-all"
                >
                  Dang ky ngay
                </button>
                <button
                  onClick={() => removeFromCart(course.id)}
                  className="px-4 py-2 text-sm font-medium text-red-500 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
                >
                  Xoa
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Tong cong ({cartItems.length} khoa hoc)</span>
            <span className="text-2xl font-extrabold text-primary">{formatPrice(cartTotal)}</span>
          </div>
          <button
            onClick={() => cartItems.forEach((course) => registerCourse(course))}
            className="w-full py-3.5 bg-gradient-to-r from-secondary to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-secondary/30 transition-all"
          >
            Dang ky tat ca
          </button>
        </div>
      </div>
    </div>
  );
}
