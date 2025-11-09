import React, { useState } from 'react';

const Logo = () => (
  <img src="http://drills.vn/wp-content/uploads/2025/10/IELTS-DRILLS-Rec-2.png" alt="IELTS Drills Logo" className="h-10" />
);

const Header = () => {
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
    <header className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200/60 shadow-soft">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" onClick={handleLogoClick} aria-label="IELTS Drills Home">
            <Logo />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-700 hover:text-brand-red font-semibold transition-colors duration-300 whitespace-nowrap">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://ieltsdrills.com/" className="group flex items-center justify-center bg-brand-red text-white font-bold py-2.5 px-6 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-medium hover:shadow-large transform hover:-translate-y-0.5 whitespace-nowrap">
              <span>Dùng thử miễn phí</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none p-2" aria-label="Mở menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-brand-red font-semibold transition-colors duration-300 text-center py-2 rounded-lg hover:bg-gray-100">
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