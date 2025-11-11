import React, { useState, useRef, useEffect } from 'react';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const VideoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);

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
        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section id="video-demo" ref={sectionRef} className="py-28 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div 
                    className={`text-center mb-16 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-gray-500 dark:from-gray-300 dark:to-gray-500 mb-6 max-w-2xl mx-auto">
                        Nếu bạn vẫn còn phân vân, hãy xem video dưới đây để thấy Trợ lý AI của chúng tôi làm được những gì.
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">AI Hướng Dẫn Phân Tích Bài Luận &amp; Viết Câu Trong Vài Giây</h2>
                    <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-8 max-w-3xl mx-auto">
                        Khám phá cách AI không chỉ phân tích đề bài mà còn hướng dẫn bạn từng bước xây dựng ý tưởng và viết câu hoàn chỉnh, giúp bạn tự tin chinh phục mọi chủ đề Writing.
                    </p>
                </div>
                <div 
                    className={`max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-4xl p-4 shadow-large border border-gray-200/60 dark:border-gray-700/60 transition-all duration-700 ease-out delay-200 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    <div className="relative rounded-3xl overflow-hidden aspect-video">
                        <video
                            ref={videoRef}
                            className="w-full h-full"
                            src={isVisible ? "http://drills.vn/wp-content/uploads/2025/11/IELTS-Drills-Writing-Practice.mp4" : undefined}
                            poster="http://drills.vn/wp-content/uploads/2025/11/Writing-Practice-Mode.png"
                            controls={isPlaying}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            playsInline
                            preload="metadata"
                        >
                            Trình duyệt của bạn không hỗ trợ thẻ video.
                        </video>

                        {!isPlaying && (
                            <div
                                className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer group"
                                onClick={handlePlay}
                                aria-label="Play video"
                            >
                                <div className="bg-brand-red/80 p-3 md:p-4 rounded-full transition-all duration-300 group-hover:scale-110 shadow-lg backdrop-blur-sm">
                                    <PlayIcon />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <a
                        href="https://ieltsdrills.com/writing-practice/step1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center bg-brand-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
                    >
                        Dùng thử ngay
                        <ArrowRightIcon />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;