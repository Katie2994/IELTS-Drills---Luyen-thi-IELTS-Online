import React, { useState, useEffect, useRef } from 'react';

// Video Modal Component
const VideoModal = ({ src, onClose }: { src: string, onClose: () => void }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[999] p-4 animate-fade-in-up" 
            style={{ animationDuration: '300ms' }}
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div className="bg-brand-black rounded-2xl shadow-large w-full max-w-4xl aspect-video relative" onClick={(e) => e.stopPropagation()}>
                <video src={src} controls autoPlay className="w-full h-full rounded-2xl" playsInline>
                    Trình duyệt của bạn không hỗ trợ thẻ video.
                </video>
                <button 
                    onClick={onClose}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full text-brand-black flex items-center justify-center text-2xl font-bold shadow-lg hover:scale-110 transition-transform"
                    aria-label="Đóng video"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

const SmallPlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);


// FIX: Define a props type for FeatureCard for better type safety and consistency.
type FeatureCardProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
    videoSrc?: string;
    posterSrc?: string;
    onWatchDemo?: (src: string) => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0, videoSrc, posterSrc, onWatchDemo }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    
    const hasVideo = videoSrc && onWatchDemo && posterSrc;

    return (
        <div
            ref={ref}
            onClick={hasVideo ? () => onWatchDemo(videoSrc) : undefined}
            role={hasVideo ? "button" : undefined}
            tabIndex={hasVideo ? 0 : undefined}
            onKeyDown={hasVideo ? (e) => { if (e.key === 'Enter' || e.key === ' ') onWatchDemo(videoSrc!); } : undefined}
            aria-label={hasVideo ? `Xem demo cho ${title}` : undefined}
            className={`group bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-medium dark:shadow-2xl dark:shadow-brand-black/20 transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-200/60 dark:border-gray-700/60 flex flex-col h-full text-left ${hasVideo ? 'cursor-pointer' : ''} ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div>
                <div className="bg-gradient-to-br from-brand-red to-yellow-500 text-white rounded-xl p-3 inline-flex mb-4 shadow-lg shadow-brand-red/30">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
            </div>
            {hasVideo && (
                <div className="mt-auto pt-6">
                    <div className="relative rounded-2xl overflow-hidden aspect-video shadow-inner group-hover:shadow-lg transition-shadow">
                        <img src={posterSrc} alt={`Demo for ${title}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
                             <div className="bg-brand-red/80 p-2 rounded-full transition-transform duration-300 group-hover:scale-110 backdrop-blur-sm ring-4 ring-white/20">
                                <SmallPlayIcon />
                             </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Features = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const [modalVideo, setModalVideo] = useState<string | null>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTitleVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        const currentRef = titleRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const featureList = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            title: 'Chấm Điểm Writing & Phản Hồi AI',
            description: 'Nhận góp ý chi tiết cho bài Viết từ AI, phân tích sâu theo 4 tiêu chí chấm thi thật để cải thiện nhanh chóng.',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Submit-Writing-Task-2-final.mp4',
            posterSrc: 'http://drills.vn/wp-content/uploads/2025/11/6-1.png'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
            title: 'Luyện Nói Tự Tin Cùng AI',
            description: 'Thực hành Speaking với các chủ đề đa dạng, nhận phản hồi tức thì về phát âm, lưu loát và từ vựng.',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/Speaking-Practice-Mode-Demo.mp4',
            posterSrc: 'http://drills.vn/wp-content/uploads/2025/11/11.png'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
            title: 'Thi Thử & Luyện Từ Vựng Chuyên Sâu',
            description: 'Làm quen áp lực thi thật và luyện từ vựng chuyên sâu ngay khi làm bài Reading & Listening.',
            videoSrc: 'http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Reading-0911.mp4',
            posterSrc: 'http://drills.vn/wp-content/uploads/2025/11/4-1.png'
        }
    ];

    return (
        <section id="features" className="py-28 bg-brand-gray dark:bg-brand-black">
            <div className="container mx-auto px-6">
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-700 ease-out ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">Công Nghệ Đột Phá, Kết Quả Vượt Trội</h2>
                    <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-8 max-w-2xl mx-auto">
                        IELTS Drills kết hợp công nghệ AI tiên tiến và phương pháp học hiện đại để giúp bạn chinh phục mục tiêu.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureList.map((feature, index) => (
                        <FeatureCard 
                            key={index} 
                            icon={feature.icon} 
                            title={feature.title} 
                            description={feature.description} 
                            delay={index * 150}
                            videoSrc={feature.videoSrc}
                            posterSrc={feature.posterSrc}
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
