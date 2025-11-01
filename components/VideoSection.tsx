import React, { useState, useRef, useEffect } from 'react';

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
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
        <section id="video-demo" ref={sectionRef} className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div 
                    className={`text-center mb-16 transition-all duration-700 ease-out ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black">Trải Nghiệm Nền Tảng Trực Quan</h2>
                    <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        Xem cách các công cụ của chúng tôi hoạt động và giúp bạn tăng tốc hành trình chinh phục IELTS.
                    </p>
                </div>
                <div 
                    className={`max-w-4xl mx-auto bg-white rounded-4xl p-4 shadow-large border border-gray-200/60 transition-all duration-700 ease-out delay-200 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    <div className="relative rounded-3xl overflow-hidden aspect-video">
                        <video
                            ref={videoRef}
                            className="w-full h-full"
                            src={isVisible ? "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" : undefined}
                            poster="https://images.unsplash.com/photo-1554415707-6e8cf603245d?q=80&w=2070&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            controls={isPlaying}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onEnded={() => setIsPlaying(false)}
                            playsInline
                            preload="none"
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
            </div>
        </section>
    );
};

export default VideoSection;