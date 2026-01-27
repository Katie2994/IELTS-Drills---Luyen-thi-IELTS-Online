import React, { useState, useEffect, useRef } from 'react';

// Reusing VideoModal logic
const VideoModal = ({ src, onClose }: { src: string, onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] p-4" onClick={onClose}>
            <div className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative bg-black" onClick={(e) => e.stopPropagation()}>
                <video src={src} controls autoPlay className="w-full h-full" playsInline>Browser not supported.</video>
                <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur rounded-full flex items-center justify-center text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </div>
        </div>
    );
};

type FeatureCardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    thumbnail: string;
    videoSrc?: string;
    onWatchDemo?: (src: string) => void;
    bookCount: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, thumbnail, videoSrc, onWatchDemo, bookCount }) => {
    return (
        <div 
            className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-900 p-8 min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:shadow-floating hover:-translate-y-2 cursor-pointer isolate`}
            onClick={() => videoSrc && onWatchDemo && onWatchDemo(videoSrc)}
        >
            {/* Background Thumbnail */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/30"></div>
            </div>
            
            {/* Top Section */}
            <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl shadow-sm text-white border border-white/20">
                    {icon}
                </div>
                <div className="bg-brand-red text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {bookCount}
                </div>
            </div>

            {/* Content Section */}
            <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-200 font-medium line-clamp-2 text-sm md:text-base leading-relaxed opacity-90 mb-4">
                    {description}
                </p>
                
                <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform">
                    <span>Xem video demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>

             {/* Play Button Overlay Effect */}
             <div className="absolute inset-0 z-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                 <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                 </div>
             </div>
        </div>
    );
};

const Features = () => {
    const [modalVideo, setModalVideo] = useState<string | null>(null);

    const features = [
        {
            title: 'Chấm Điểm Writing',
            description: 'AI phân tích sâu theo 4 tiêu chí chấm thi thật, giúp bạn nhận ra lỗi sai.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
            thumbnail: 'http://drills.vn/wp-content/uploads/2025/11/Writing-Practice-Mode.png',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Submit-Writing-Task-2-final.mp4',
            bookCount: 'Writing AI'
        },
        {
            title: 'Luyện Nói Cùng AI',
            description: 'Thực hành Speaking không giới hạn chủ đề. Feedback phát âm tức thì.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
            thumbnail: 'http://drills.vn/wp-content/uploads/2025/11/7.png',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/Speaking-Practice-Mode-Demo.mp4',
            bookCount: 'Speaking'
        },
        {
            title: 'Thi Thử Online',
            description: 'Giao diện chuẩn thi máy. Kho đề khổng lồ giúp bạn vững tâm lý.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            thumbnail: 'http://drills.vn/wp-content/uploads/2025/11/4-1.png',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Reading-0911.mp4',
            bookCount: 'Exam'
        }
    ];

    return (
        <section id="features" className="py-16 md:py-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Công Nghệ Đột Phá</h2>
                    <p className="text-gray-500 mt-2 text-lg">Khám phá các tính năng giúp bạn đạt kết quả vượt trội.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            {...feature}
                            onWatchDemo={setModalVideo}
                        />
                    ))}
                </div>
            </div>
            {modalVideo && <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />}
        </section>
    );
};

export default Features;