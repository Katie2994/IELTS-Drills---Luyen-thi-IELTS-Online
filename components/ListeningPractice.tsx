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

const ListeningPractice = () => {
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
            description: 'Audio chất lượng cao với nhiều giọng đọc (accents) khác nhau.'
        },
        {
            description: 'Rèn luyện kỹ năng nghe-hiểu, nắm bắt ý chính và thông tin chi tiết.'
        },
        {
            description: 'Tất cả các bài luyện tập đều miễn phí và không giới hạn.'
        }
    ];

    return (
        <section ref={sectionRef} className="py-4 px-4 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                 {/* Updated container to match Bento style */}
                 <div className="bg-brand-black text-white rounded-[2.5rem] p-8 md:p-16 shadow-card overflow-hidden relative">
                    {/* Abstract background blobs */}
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red/20 blur-[100px] rounded-full"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                         {/* Image Column */}
                        <div className={`order-2 lg:order-1 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}>
                            <div className="relative rounded-3xl shadow-2xl overflow-hidden border border-white/10 transform hover:scale-[1.02] transition-transform duration-500">
                                <img 
                                    src="http://drills.vn/wp-content/uploads/2025/11/5-1.png" 
                                    alt="Luyện đề thi IELTS Listening trên IELTS Drills" 
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Text Content Column */}
                        <div className={`order-1 lg:order-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{ transitionDelay: '200ms' }}>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm mb-4 border border-white/10">
                                Kỹ năng Listening
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                                Chinh Phục IELTS Listening <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-400">Với Đề Thi Thật</span>
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                               Rèn luyện kỹ năng nghe qua các bài thi mô phỏng kỳ thi thật. Nâng cao khả năng tập trung, nhận biết thông tin chi tiết và làm quen với nhiều giọng đọc khác nhau.
                            </p>
                            
                            <div className="space-y-4 mb-10">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <CheckIcon />
                                        <p className="text-gray-300 font-medium">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div>
                                <a
                                    href="https://ieltsdrills.com/quiz/tag/ielts-listening-advanced"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-full sm:w-auto inline-flex items-center justify-center bg-brand-red text-white font-bold py-4 px-8 rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
                                >
                                    Bắt đầu luyện Listening
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

export default ListeningPractice;