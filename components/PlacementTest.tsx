import React, { useState, useEffect, useRef } from 'react';

const CheckIcon = () => (
     <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);

const ArrowRightIcon = () => (
    <svg className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const PlacementTest = () => {
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
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-28 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                 <div className="max-w-3xl mx-auto">
                    <div className={`text-center transition-all duration-700 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5' }`}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">
                           Kiểm Tra Trình Độ Toàn Diện Miễn Phí
                        </h2>
                        <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-6">
                           Đánh giá chính xác trình độ của bạn qua bài thi 4 kỹ năng chuẩn Cambridge. Nhận ngay kết quả chi tiết và lộ trình học được AI cá nhân hoá để bứt phá band điểm.
                        </p>
                        
                        <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-400 text-left max-w-lg mx-auto">
                            <li className="flex items-start">
                                <CheckIcon />
                                <span>Bao gồm đầy đủ 4 kỹ năng: Listening, Reading, Writing, Speaking.</span>
                            </li>
                             <li className="flex items-start">
                                <CheckIcon />
                                <span>AI phân tích điểm mạnh, điểm yếu và đề xuất lộ trình học.</span>
                            </li>
                             <li className="flex items-start">
                                <CheckIcon />
                                <span>Hoàn toàn miễn phí, không yêu cầu tài khoản.</span>
                            </li>
                        </ul>
                        
                        <div className="mt-10">
                            <a
                                href="https://ieltsdrills.com/mindmap/placement-test?id=v6XiIZj9A6jnkMtk5paN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center bg-brand-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
                            >
                                Làm bài thi ngay
                                <ArrowRightIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementTest;