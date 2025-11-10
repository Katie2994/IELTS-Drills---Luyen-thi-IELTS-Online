import React, { useState } from 'react';

const Logo = () => (
  <img src="http://drills.vn/wp-content/uploads/2025/10/IELTS-DRILLS-Rec-2.png" alt="IELTS Drills Logo" className="h-10" />
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);

type ThemeToggleProps = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-red dark:focus:ring-offset-gray-900 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};


const Header = ({ theme, toggleTheme }: { theme: 'light' | 'dark', toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Tính năng', href: '#features' },
    { name: 'Kho đề', href: '#speaking-topics' },
    { name: 'Demo', href: '#video-demo' },
    { name: 'Học viên', href: '#testimonials' },
    { name: 'Bảng giá', href: '#pricing' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200/60 shadow-soft dark:bg-gray-900/70 dark:border-gray-800/60">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} aria-label="IELTS Drills Home">
            <Logo />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-red dark:text-gray-300 dark:hover:text-brand-yellow font-semibold transition-colors duration-300 whitespace-nowrap">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <a href="https://ieltsdrills.com/" className="group flex items-center justify-center bg-brand-red text-white font-bold py-2.5 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-0.5 whitespace-nowrap">
              <span>Dùng thử miễn phí</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 dark:text-gray-300 focus:outline-none p-2 ml-2" aria-label="Mở menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-brand-red dark:text-gray-200 dark:hover:text-brand-yellow font-semibold transition-colors duration-300 text-center py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                  {link.name}
                </a>
              ))}
              <a href="https://ieltsdrills.com/" className="group flex items-center justify-center bg-brand-red text-white font-bold py-3 px-5 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-center mt-4">
                <span>Dùng thử miễn phí</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
