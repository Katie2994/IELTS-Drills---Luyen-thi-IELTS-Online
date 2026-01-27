import React, { useState, useEffect } from 'react';

// Video Modal Component specifically for Hero
const VideoModal = ({ src, onClose }: { src: string, onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';
        
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 animate-fade-in-up" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
        >
            <div 
                className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/20" 
                onClick={(e) => e.stopPropagation()}
            >
                <video src={src} controls autoPlay className="w-full h-full" playsInline>
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors border border-white/20 backdrop-blur-md"
                    aria-label="Đóng video"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const Hero = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative hero-gradient-bg text-white overflow-hidden z-10 py-20 lg:py-28 flex items-center">
            {/* Decorative Blobs - Simplified animation */}
            <div aria-hidden="true" className="blob bg-red-400/20 w-[30rem] h-[30rem] top-[-5%] left-[-5%] animate-pulse"></div>
            <div aria-hidden="true" className="blob bg-yellow-400/10 w-[20rem] h-[20rem] bottom-[10%] right-[10%]"></div>
            
            <div className="noise-overlay"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Column: Content */}
                    <div className="text-center lg:text-left animate-fade-in-down">
                         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-yellow-300 font-bold text-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                            Giáo Dục Thực Chiến & Công Nghệ AI
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-white drop-shadow-md">
                            IELTS Drills <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                Sâu Hơn. Sát Hơn.
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Không chỉ là app luyện thi. Đây là sự kết hợp giữa <strong>10 năm kinh nghiệm giảng dạy</strong> của Ms. Kiều Trinh và công nghệ AI, giúp bạn học đúng trọng tâm, sửa lỗi tận gốc.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="https://ieltsdrills.com/quiz/category/ielts" className="w-full sm:w-auto bg-white text-brand-red font-bold py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                                Bắt đầu miễn phí
                            </a>
                            <button 
                                onClick={() => setIsVideoOpen(true)}
                                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black/20 text-white border border-white/30 font-bold py-4 px-8 rounded-2xl text-lg hover:bg-black/40 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Xem Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Simple Visual */}
                    <div className="relative mx-auto w-full max-w-sm lg:max-w-md animate-fade-in-up">
                        <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                             <img 
                                src="http://drills.vn/wp-content/uploads/2026/01/Trinh-red-bg-scaled.png" 
                                alt="Ms. Kiều Trinh - Founder IELTS Drills" 
                                className="w-full h-auto object-cover bg-gray-800"
                             />
                             <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-center">
                                 <p className="text-white font-bold text-lg">Ms. Kiều Trinh</p>
                                 <p className="text-yellow-400 text-sm font-medium">Founder & Head Teacher</p>
                             </div>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-white text-brand-black p-4 rounded-2xl shadow-xl animate-float-1 hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="bg-brand-red/10 p-2 rounded-lg text-brand-red font-bold text-xl">10+</div>
                                <div className="text-sm font-semibold leading-tight">
                                    Năm Kinh Nghiệm<br/>Giảng Dạy
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <VideoModal 
                    src="http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Writing-Practice.mp4" 
                    onClose={() => setIsVideoOpen(false)} 
                />
            )}
        </section>
    );
};

export default Hero;