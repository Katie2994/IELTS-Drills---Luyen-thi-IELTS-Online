import React, { useRef, useEffect } from 'react';

const ArrowIcon = () => (
    <svg className="w-10 h-10 md:w-12 md:h-12 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const StarIcon = () => (
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const Hero = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleParallax = () => {
            if (contentRef.current) {
                // Disable parallax on mobile devices (e.g., screen width <= 768px)
                if (window.innerWidth <= 768) {
                    if (contentRef.current.style.transform !== 'translateY(0px)') {
                        contentRef.current.style.transform = 'translateY(0px)';
                    }
                    return;
                }
                
                const offsetY = window.pageYOffset;
                // Move foreground content down at a fraction of the scroll speed
                // to make it appear to scroll slower than the background, creating a parallax effect.
                contentRef.current.style.transform = `translateY(${offsetY * 0.4}px)`;
            }
        };

        // Run on mount and on resize to adjust for different screen sizes
        handleParallax();
        window.addEventListener('scroll', handleParallax, { passive: true });
        window.addEventListener('resize', handleParallax, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleParallax);
            window.removeEventListener('resize', handleParallax);
        };
    }, []);

    return (
        <section className="relative hero-gradient-bg text-white overflow-hidden z-10">
            {/* Decorative Blobs */}
            <div 
                aria-hidden="true" 
                className="blob bg-red-400/20 w-96 h-96 top-1/4 left-1/4"
                style={{ animation: 'blob-animate-1 25s infinite ease-in-out' }}
            ></div>
            <div 
                aria-hidden="true" 
                className="blob bg-brand-red/30 w-[500px] h-[500px] -bottom-1/4 -right-1/4"
                style={{ animation: 'blob-animate-2 30s infinite ease-in-out' }}
            ></div>
            
            <div className="noise-overlay"></div>
            <div ref={contentRef} className="container mx-auto px-6 py-24 sm:py-32 text-center relative z-10 will-change-transform">
                
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight animate-fade-in-down text-white drop-shadow-sm">
                    Từ <span className="text-yellow-400">6.5</span> lên <span className="text-yellow-400">8.0</span> Writing trong 3 tháng
                </h1>
                <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed animate-fade-in-up" style={{animationDelay: '150ms'}}>
                    Câu chuyện của An Nguyễn không phải là phép màu. Đó là kết quả của phương pháp học thông minh với sự đồng hành từ Trợ lý AI của IELTS Drills.
                </p>

                <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 animate-fade-in-up" style={{animationDelay: '300ms'}}>
                    {/* Before Card */}
                    <div className="w-full max-w-sm bg-white/10 dark:bg-black/20 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-large text-left transform transition-transform duration-500 hover:scale-105">
                        <p className="text-sm font-semibold uppercase tracking-wider text-gray-300 dark:text-gray-400">Lúc trước</p>
                        <p className="text-5xl font-bold my-4 text-gray-100 dark:text-gray-200">Writing <span className="text-yellow-400">6.5</span></p>
                        <p className="text-gray-300 dark:text-gray-400">"Mình loay hoay không biết cải thiện bài viết thế nào, ý tưởng thì nghèo nàn, ngữ pháp lặp lại và không biết mình sai ở đâu."</p>
                    </div>

                    {/* Arrow */}
                    <div className="my-4 md:my-0 md:px-4 flex-shrink-0 rotate-90 md:rotate-0">
                       <ArrowIcon />
                    </div>

                    {/* After Card */}
                    <div className="w-full max-w-sm bg-white/20 dark:bg-black/30 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 dark:border-white/20 shadow-large text-left transform transition-transform duration-500 hover:scale-105 ring-2 ring-yellow-300/50">
                        <div className="flex justify-between items-center">
                            <p className="text-sm font-semibold uppercase tracking-wider text-yellow-300">Sau khi dùng IELTS Drills</p>
                            <StarIcon />
                        </div>
                        <p className="text-5xl font-bold my-4 text-white">Writing <span className="text-yellow-400">8.0</span></p>
                        <p className="text-gray-200">"AI chỉ ra từng lỗi nhỏ, gợi ý ý tưởng và cấu trúc logic. Mình tự tin hơn hẳn, bài viết rành mạch và đạt điểm số ngoài mong đợi!"</p>
                    </div>
                </div>

                <div className="mt-16 animate-fade-in-up" style={{animationDelay: '450ms'}}>
                    <a href="#pricing" className="bg-white text-brand-black dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 font-bold py-4 px-10 rounded-xl text-lg hover:bg-yellow-300 transition-all duration-300 shadow-large hover:shadow-2xl transform hover:-translate-y-1">
                        Bắt đầu hành trình của bạn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;