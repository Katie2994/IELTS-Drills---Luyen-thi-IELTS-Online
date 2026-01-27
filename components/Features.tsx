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
    delay: number;
    practiceLink?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, thumbnail, videoSrc, onWatchDemo, bookCount, delay, practiceLink }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);

    return (
        <div 
            ref={ref}
            className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-900 border border-white/5 h-[400px] flex flex-col justify-end transition-all duration-700 ease-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer isolate ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
            onClick={() => videoSrc && onWatchDemo && onWatchDemo(videoSrc)}
        >
            {/* Background Thumbnail */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={thumbnail} 
                    alt={title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" 
                />
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>
                {/* Red Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
            </div>
            
            {/* Top Badge */}
            <div className="absolute top-6 right-6 z-10">
                 <div className="bg-white/10 backdrop-blur-md border border-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm group-hover:bg-brand-red group-hover:border-brand-red transition-colors">
                    {bookCount}
                </div>
            </div>

            {/* Icon */}
            <div className="absolute top-6 left-6 z-10 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                {icon}
            </div>

            {/* Content Section */}
            <div className="relative z-10 p-8 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight group-hover:text-yellow-400 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed mb-6 line-clamp-2 group-hover:text-white transition-colors">
                    {description}
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white shadow-lg group-hover:bg-brand-red group-hover:scale-110 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-white font-bold text-sm tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">Xem Demo</span>
                    </div>

                    {practiceLink && (
                        <a 
                            href={practiceLink} 
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white text-sm font-bold px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <span>Luyện ngay</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    )}
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
            bookCount: 'Writing AI',
            practiceLink: 'https://ieltsdrills.com/submit-writing'
        },
        {
            title: 'Luyện Nói Cùng AI',
            description: 'Thực hành Speaking không giới hạn chủ đề. Feedback phát âm tức thì.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
            thumbnail: 'http://drills.vn/wp-content/uploads/2025/11/7.png',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/Speaking-Practice-Mode-Demo.mp4',
            bookCount: 'Speaking',
            practiceLink: 'https://ieltsdrills.com/speak/category/ielts-speaking-practice-drill'
        },
        {
            title: 'Thi Thử Online',
            description: 'Giao diện chuẩn thi máy. Kho đề khổng lồ giúp bạn vững tâm lý.',
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
            thumbnail: 'http://drills.vn/wp-content/uploads/2025/11/4-1.png',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Reading-0911.mp4',
            bookCount: 'Exam',
            practiceLink: 'https://ieltsdrills.com/quiz/category/ielts'
        }
    ];

    return (
        <section id="features" className="py-16 md:py-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="mb-12 text-center md:text-left">
                    {/* Fixed: Updated gradient style and added padding-bottom to prevent clipping */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-3 leading-tight">
                        Công Nghệ Đột Phá
                    </h2>
                    <p className="text-gray-500 mt-2 text-lg max-w-2xl">Khám phá các tính năng giúp bạn đạt kết quả vượt trội.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard 
                            key={index}
                            {...feature}
                            onWatchDemo={setModalVideo}
                            delay={index * 150}
                        />
                    ))}
                </div>
            </div>
            {modalVideo && <VideoModal src={modalVideo} onClose={() => setModalVideo(null)} />}
        </section>
    );
};

export default Features;