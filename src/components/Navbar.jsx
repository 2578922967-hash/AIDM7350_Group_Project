import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const navItemsEn = [
  { name: 'Home', href: '#home' },
  { name: 'Facts', href: '#facts' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Debunks', href: '#debunks' },
  { name: 'Links', href: '#links' },
  { name: 'About', href: '#about' },
];

const navItemsCn = [
  { name: '首页', href: '#home' },
  { name: '事实', href: '#facts' },
  { name: '评价', href: '#reviews' },
  { name: '迷思', href: '#debunks' },
  { name: '链接', href: '#links' },
  { name: '关于', href: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const navItems = lang === 'en' ? navItemsEn : navItemsCn;

  return (
    <nav className="sticky top-0 z-50 bg-[#F8F6F2]/80 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="font-serif text-2xl font-bold text-[#1F2937]">
              {lang === 'en' ? 'AI Companions' : 'AI伴侣'}
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-[#1F2937] hover:text-[#C08497] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              
              <button
                onClick={toggleLang}
                className="ml-4 px-4 py-1.5 rounded-full border border-[#C08497] text-[#C08497] hover:bg-[#C08497] hover:text-white text-sm font-bold transition-all"
              >
                {lang === 'en' ? '中' : 'EN'}
              </button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden items-center">
            <button
              onClick={toggleLang}
              className="mr-2 px-3 py-1 rounded-full border border-[#C08497] text-[#C08497] hover:bg-[#C08497] hover:text-white text-sm font-bold transition-all"
            >
               {lang === 'en' ? '中' : 'EN'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-[#F8F6F2] inline-flex items-center justify-center p-2 rounded-md text-[#6B7280] hover:text-[#1F2937] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#F8F6F2] border-b border-[#E5E7EB]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#1F2937] hover:text-[#C08497] block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
