import React, { useState, useEffect, useRef } from 'react';

const CheckIcon = () => (
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
        </svg>
    </div>
);

const Methodology = () => {
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

    return (
        <section ref={sectionRef} className="py-12 px-4 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 shadow-card overflow-hidden relative">
                    {/* Background blob */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-black opacity-50 z-0"></div>
                    
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image Column */}
                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                                <img 
                                    src="http://drills.vn/wp-content/uploads/2025/11/3.png" 
                                    alt="Khoá học Daily Listening" 
                                    className="w-full h-auto object-cover"
                                />
                             </div>
                        </div>

                        {/* Text Content Column */}
                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{ transitionDelay: '200ms' }}>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
                                Phương Pháp <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500">Đã Được Kiểm Chứng</span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                Không chỉ là lý thuyết suông. Các khoá học được thiết kế dựa trên nghiên cứu sư phạm và thực tế giảng dạy hàng ngàn giờ.
                            </p>
                            
                            <div className="space-y-6 mb-10">
                                <div className="flex items-start">
                                    <CheckIcon />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Nguồn tài liệu thực tế</h4>
                                        <p className="text-gray-500 dark:text-gray-400 mt-1">Học từ báo chí, video, podcast thay vì giáo trình khô khan.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <CheckIcon />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Học mà chơi (Edutainment)</h4>
                                        <p className="text-gray-500 dark:text-gray-400 mt-1">Daily Listening với video ngắn dưới 2 phút giúp duy trì hứng thú.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://ieltsdrills.com/quiz/tag/daily-listening" className="bg-brand-black dark:bg-white text-white dark:text-brand-black font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center">
                                    Học thử Daily Listening
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;