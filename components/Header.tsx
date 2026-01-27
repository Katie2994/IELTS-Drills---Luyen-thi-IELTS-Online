import React, { useState, useEffect } from 'react';

const Logo = () => (
  <div className="flex items-center gap-2">
    <img src="http://drills.vn/wp-content/uploads/2025/10/IELTS-DRILLS-Rec-2.png" alt="IELTS Drills Logo" className="h-8 md:h-9" />
  </div>
);

const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
);

const SearchIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
)

type ThemeToggleProps = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    );
};


const Header = ({ theme, toggleTheme }: { theme: 'light' | 'dark', toggleTheme: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tính năng', href: '#features' },
    { name: 'Kho đề', href: '#speaking-topics' },
    { name: 'Demo', href: '#video-demo' },
    { name: 'Học viên', href: '#testimonials' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-6'}`}>
        <header 
            className={`
                mx-4 w-full max-w-7xl 
                bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl 
                border border-white/20 dark:border-white/10 
                shadow-soft hover:shadow-lg transition-all duration-300
                rounded-full px-6 py-3
                flex items-center justify-between
            `}
        >
          {/* Left: Logo */}
          <a href="#" onClick={handleLogoClick} aria-label="IELTS Drills Home" className="flex-shrink-0">
            <Logo />
          </a>
          
          {/* Center: Search Bar (Desktop) - Mimicking App Style */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
             <div className="w-full relative group">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                     <SearchIcon />
                 </div>
                 <input 
                    type="text" 
                    placeholder="Tìm kiếm khoá học, tài liệu..." 
                    className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all border-none"
                 />
             </div>
          </div>

          {/* Right: Nav & Actions */}
          <div className="flex items-center gap-2 md:gap-4">
             <nav className="hidden lg:flex items-center gap-6 mr-2">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-sm font-semibold text-gray-600 hover:text-brand-red dark:text-gray-300 dark:hover:text-white transition-colors">
                    {link.name}
                  </a>
                ))}
              </nav>

             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
             
             <a href="https://ieltsdrills.com/" className="hidden md:flex items-center justify-center bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold py-2.5 px-6 rounded-full hover:scale-105 transition-all duration-300 shadow-md text-sm">
                <span>Vào học</span>
             </a>

             {/* Mobile Menu Button */}
             <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-800 dark:text-gray-200">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
             </button>
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-24 left-4 right-4 bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-2xl border border-gray-100 dark:border-gray-700 animate-fade-in-down z-40">
            <nav className="flex flex-col space-y-4">
               {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-semibold text-gray-800 dark:text-white py-2 border-b border-gray-100 dark:border-gray-700">
                  {link.name}
                </a>
              ))}
              <a href="https://ieltsdrills.com/" className="w-full bg-brand-red text-white font-bold py-3 rounded-xl text-center shadow-lg mt-4">
                Dùng thử miễn phí
              </a>
            </nav>
          </div>
        )}
    </div>
  );
};

export default Header;