'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); 

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' }, 
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md py-5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-white text-xl font-bold tracking-tight hover:text-primary transition-colors">
          Zoan Thi Bang
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 pb-2 border-b-2 ${
                      isActive 
                        ? 'text-primary-accent border-primary-accent scale-105' 
                        : 'text-gray-400 border-transparent hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-xl text-gray-400">
            <a href="https://github.com/Bang-2108" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/zo%C3%A3n-th%E1%BB%8B-b%C4%83ng-v135798642/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="mailto:zoanthibang@gmail.com" className="hover:text-white transition-colors">
              <i className="bi bi-envelope"></i>
            </a>
          </div>

          <div className="h-6 w-[1px] bg-white/20"></div>

          <a 
            href="http://localhost:5173/auth/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white text-sm font-semibold transition-colors"
          >
            Admin Login
          </a>
        </div>
      </div>
    </header>
  );
}