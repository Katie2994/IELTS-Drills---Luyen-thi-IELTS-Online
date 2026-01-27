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
        <section ref={sectionRef} className="py-28 px-4 sm:px-6">
            <div className="container mx-auto max-w-5xl">
                 {/* Updated container to match Bento style - Centered Card */}
                 <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[3rem] p-10 md:p-20 shadow-card border border-gray-100 dark:border-gray-700 text-center relative overflow-hidden">
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/5 dark:bg-brand-red/10 blur-[80px] rounded-full pointer-events-none"></div>

                    <div className={`relative z-10 transition-all duration-700 ease-out ${ isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5' }`}>
                        <div className="inline-block px-6 py-2 rounded-full bg-brand-red/10 text-brand-red font-extrabold text-sm uppercase tracking-wider mb-6">
                            Miễn Phí
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-4 leading-tight">
                           Kiểm Tra Trình Độ Toàn Diện
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mt-4 max-w-2xl mx-auto leading-relaxed">
                           Đánh giá chính xác trình độ của bạn qua bài thi 4 kỹ năng chuẩn Cambridge. Nhận ngay kết quả chi tiết và lộ trình học được AI cá nhân hoá để bứt phá band điểm.
                        </p>
                        
                        <div className="mt-10 bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-700 inline-block text-left max-w-xl w-full">
                            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                                <li className="flex items-center">
                                    <CheckIcon />
                                    <span className="font-semibold">Bao gồm đầy đủ 4 kỹ năng: Listening, Reading, Writing, Speaking.</span>
                                </li>
                                 <li className="flex items-center">
                                    <CheckIcon />
                                    <span className="font-semibold">AI phân tích điểm mạnh, điểm yếu và đề xuất lộ trình học.</span>
                                </li>
                                 <li className="flex items-center">
                                    <CheckIcon />
                                    <span className="font-semibold">Hoàn toàn miễn phí, không yêu cầu tài khoản.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="mt-12">
                            <a
                                href="https://ieltsdrills.com/mindmap/placement-test?id=v6XiIZj9A6jnkMtk5paN"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center bg-brand-red text-white font-bold py-4 px-12 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30 text-lg"
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