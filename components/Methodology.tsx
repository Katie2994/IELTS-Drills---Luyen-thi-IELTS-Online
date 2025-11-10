import React, { useState, useEffect, useRef } from 'react';

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

    const features = [
        {
            title: 'Nguồn tài liệu thực tế',
            description: 'Tiếp cận ngôn ngữ từ những nguồn tài liệu được tuyển chọn thực tế, thú vị, và vừa sức.'
        },
        {
            title: 'Học mà chơi, hiệu quả bất ngờ',
            description: 'Khoá học Daily Listening sử dụng video Youtube ngắn (dưới 2 phút) giúp việc học không chỉ hiệu quả mà còn đầy hứng thú.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Column */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}>
                        <img 
                            src="http://drills.vn/wp-content/uploads/2025/11/3.png" 
                            alt="Khoá học Daily Listening từ video Youtube" 
                            className="rounded-3xl shadow-large w-full h-auto border border-gray-200/60"
                            loading="lazy"
                        />
                    </div>
                    {/* Text Content Column */}
                    <div className={`lg:order-first transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{ transitionDelay: '200ms' }}>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">
                            Phương Pháp Đã Được Kiểm Chứng
                        </h2>
                        <p className="text-base sm:text-lg text-brand-black font-bold mt-6">
                            Các khoá học được thiết kế chuẩn mực, dựa trên nghiên cứu sư phạm và được chứng minh hiệu quả qua sự thành công của hàng ngàn học viên.
                        </p>
                        
                        <div className="mt-8 space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start p-4 bg-gray-50 rounded-2xl border border-gray-200/80">
                                    <CheckIcon />
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-lg">{feature.title}</h4>
                                        <p className="text-gray-600 mt-1">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-10 pt-8 border-t border-gray-200">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                                    <p className="text-3xl font-extrabold text-brand-red">90%+</p>
                                    <p className="text-gray-600 font-semibold mt-1 text-sm">Học viên đạt band mục tiêu</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                                    <p className="text-3xl font-extrabold text-brand-red">~100%</p>
                                    <p className="text-gray-600 font-semibold mt-1 text-sm">Học viên hài lòng</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl border border-gray-200/80">
                                    <p className="text-3xl font-extrabold text-brand-red">95%+</p>
                                    <p className="text-gray-600 font-semibold mt-1 text-sm">Thấy khoá học dễ hiểu</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 space-y-6">
                            <a
                                href="https://ieltsdrills.com/quiz/tag/daily-listening"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-full inline-flex items-center justify-center bg-brand-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
                            >
                                Học thử Daily Listening
                                <ArrowRightIcon />
                            </a>
                            <div className="p-4 bg-yellow-50 border-2 border-yellow-200 rounded-2xl shadow-soft text-center sm:text-left sm:flex items-center justify-between gap-4">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">
                                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full">TOP 1</span>
                                        Khoá học IELTS Writing Task 1
                                    </h4>
                                    <p className="text-gray-600 mt-1 text-sm">Được học viên yêu thích nhất, giúp chinh phục dạng bài khó nhằn.</p>
                                </div>
                                <a href="https://ieltsdrills.com/mindmap/placement-test?id=v6XiIZj9A6jnkMtk5paN"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="group mt-4 sm:mt-0 flex-shrink-0 inline-flex items-center justify-center bg-yellow-400 text-yellow-900 font-bold py-2.5 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 whitespace-nowrap">
                                   Học thử ngay
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