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
        <section ref={sectionRef} className="py-28 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                        <img 
                            src="http://drills.vn/wp-content/uploads/2025/11/4-1.png" 
                            alt="Luyện đề thi IELTS Reading trên IELTS Drills" 
                            className="rounded-3xl shadow-large w-full h-auto border border-gray-200/60 dark:border-gray-700/60"
                            loading="lazy"
                        />
                    </div>
                    {/* Text Content Column */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{ transitionDelay: '200ms' }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">
                            Luyện Đề Thi IELTS Reading Miễn Phí
                        </h2>
                        <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-6">
                            Thử sức với bộ sưu tập đề thi Reading sát với đề thi thật đã ra. Cải thiện kỹ năng đọc hiểu, quản lý thời gian và làm quen với các dạng câu hỏi khó nhất.
                        </p>
                        
                        <div className="mt-8 space-y-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckIcon />
                                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-10">
                            <a
                                href="https://ieltsdrills.com/quiz/tag/ielts-reading-advanced"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full sm:w-auto inline-flex items-center justify-center bg-brand-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
                            >
                                Bắt đầu luyện Reading
                                <ArrowRightIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadingPractice;
