import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-xl font-bold text-white">HocOnline</span>
            </div>
            <p className="text-sm leading-relaxed">
              Nen tang hoc truc tuyen hang dau danh cho hoc sinh THPT. Luyen thi THPT Quoc gia hieu qua voi doi ngu giao vien gioi.
            </p>
          </div>

          {/* Khoa hoc */}
          <div>
            <h3 className="text-white font-semibold mb-4">Khoa hoc</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses?subject=Toan" className="hover:text-white transition-colors">Toan hoc</Link></li>
              <li><Link to="/courses?subject=Tieng+Anh" className="hover:text-white transition-colors">Tieng Anh</Link></li>
              <li><Link to="/courses?grade=10" className="hover:text-white transition-colors">Lop 10</Link></li>
              <li><Link to="/courses?grade=11" className="hover:text-white transition-colors">Lop 11</Link></li>
              <li><Link to="/courses?grade=12" className="hover:text-white transition-colors">Lop 12</Link></li>
            </ul>
          </div>

          {/* Ho tro */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ho tro</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Huong dan su dung</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cau hoi thuong gap</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Chinh sach bao mat</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dieu khoan su dung</a></li>
            </ul>
          </div>

          {/* Lien he */}
          <div>
            <h3 className="text-white font-semibold mb-4">Lien he</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0123 456 789
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@hoconline.vn
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                TP. Ho Chi Minh, Viet Nam
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">&copy; 2026 HocOnline. All rights reserved.</p>
          <div className="flex gap-4">
            {['facebook', 'youtube', 'tiktok'].map((social) => (
              <a key={social} href="#" className="w-9 h-9 rounded-full bg-gray-800 hover:bg-primary transition-colors flex items-center justify-center">
                <span className="text-xs font-medium uppercase">{social[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
