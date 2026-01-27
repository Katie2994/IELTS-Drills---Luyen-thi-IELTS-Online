import React, { useState, useEffect, useRef } from 'react';

// Re-using icons from other components
const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const ReadingPractice = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const features = [
        {
            description: 'Bộ sưu tập đề thi Reading được tuyển chọn, bám sát đề thi thật.'
        },
        {
            description: 'Giao diện làm bài mô phỏng kỳ thi thực tế, giúp bạn làm quen áp lực.'
        },
        {
            description: 'Cải thiện kỹ năng quản lý thời gian và chiến thuật làm bài hiệu quả.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-12 px-4 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Updated container to match Bento style */}
                <div className="bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 md:p-16 shadow-card border border-gray-100 dark:border-gray-700 overflow-hidden relative">
                    {/* Background blob */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-50/50 via-transparent to-transparent dark:from-blue-900/10 dark:to-transparent z-0 pointer-events-none"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Column */}
                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                            <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50 dark:border-gray-700/50 transform hover:scale-[1.02] transition-transform duration-500">
                                <img 
                                    src="http://drills.vn/wp-content/uploads/2025/11/4-1.png" 
                                    alt="Luyện đề thi IELTS Reading trên IELTS Drills" 
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Text Content Column */}
                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{ transitionDelay: '200ms' }}>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm mb-4">
                                Kỹ năng Reading
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                                Luyện Đề Thi IELTS Reading <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Miễn Phí</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                                Thử sức với bộ sưu tập đề thi Reading sát với đề thi thật đã ra. Cải thiện kỹ năng đọc hiểu, quản lý thời gian và làm quen với các dạng câu hỏi khó nhất.
                            </p>
                            
                            <div className="space-y-4 mb-10">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-3 rounded-xl bg-gray-50 dark:bg-gray-700/30 border border-gray-100 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-700 transition-colors">
                                        <CheckIcon />
                                        <p className="text-gray-700 dark:text-gray-300 font-medium">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div>
                                <a
                                    href="https://ieltsdrills.com/quiz/tag/ielts-reading-advanced"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center bg-brand-red text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
                                >
                                    Bắt đầu luyện Reading
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadingPractice;