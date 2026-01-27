import React from 'react';

const ZaloIcon = () => (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 text-white">
        <path d="M42 38.5C42 40.433 40.433 42 38.5 42H9.5C7.567 42 6 40.433 6 38.5V9.5C6 7.567 7.567 6 9.5 6H38.5C40.433 6 42 7.567 42 9.5V38.5Z" fill="none"/>
        <path d="M20.5 32H13V15H20.5V17.8L31.7 32H35V15H27.5V18.2L16.3 32H20.5Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Stylized Z letter for Zalo */}
        <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="28" fontWeight="900" fontFamily="Arial, sans-serif">Z</text>
    </svg>
);

const ZaloButton = () => {
    return (
        <a 
            href="https://zalo.me/g/dgmvit008" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-24 right-6 z-50 group"
            aria-label="Chat Zalo"
        >
            <div className="relative">
                {/* Main Blue Circle */}
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0068FF] rounded-full flex items-center justify-center shadow-floating hover:scale-110 transition-transform duration-300 ring-4 ring-white/30 dark:ring-gray-800/30">
                    <span className="text-white font-extrabold text-3xl font-sans">Z</span>
                </div>
                
                {/* Red Notification Dot with Pulse Effect */}
                <span className="absolute top-0 right-0 block h-4 w-4 md:h-5 md:w-5 rounded-full ring-2 ring-white bg-red-500 transform translate-x-1/4 -translate-y-1/4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                </span>
                
                {/* Tooltip text on hover */}
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1 bg-white dark:bg-gray-800 text-brand-black dark:text-white text-sm font-bold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    Tham gia nhóm Zalo
                </span>
            </div>
        </a>
    );
};

export default ZaloButton;