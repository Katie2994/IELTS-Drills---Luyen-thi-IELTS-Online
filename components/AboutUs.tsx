import React, { useState, useEffect, useRef } from 'react';

// Reusing icons from other components if needed, or create new ones.
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 18.75l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);
const LightBulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

const values = [
    {
        icon: <LightBulbIcon />,
        title: "Đổi Mới & Công Nghệ",
        description: "Luôn tiên phong áp dụng AI để cá nhân hoá lộ trình và tối ưu hiệu quả học tập."
    },
    {
        icon: <HeartIcon />,
        title: "Tận Tâm & Chuyên Môn",
        description: "Đội ngũ chuyên gia IELTS giàu kinh nghiệm luôn sẵn sàng hỗ trợ, đảm bảo chất lượng học thuật cao nhất."
    },
    {
        icon: <UsersIcon />,
        title: "Cộng Đồng Gắn Kết",
        description: "Xây dựng một môi trường học tập tích cực, nơi học viên có thể trao đổi, học hỏi và cùng nhau tiến bộ."
    }
];

const AboutUs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section id="about-us" ref={sectionRef} className="py-28 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text content */}
                    <div className={`relative transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                         <div
                            aria-hidden="true"
                            className="blob bg-brand-red/15 w-80 h-80 -top-10 -left-10"
                            style={{ animation: 'blob-animate-2 26s infinite ease-in-out', animationDelay: '1s' }}
                        ></div>
                        <h2 className="relative z-10 text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">
                            Về IELTS Drills: <br />Sứ Mệnh Nâng Tầm Người Việt
                        </h2>
                        <p className="relative z-10 text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-6">
                            Chúng tôi không chỉ là một nền tảng luyện thi. IELTS Drills là người đồng hành, được xây dựng bởi đội ngũ chuyên gia tâm huyết, với sứ mệnh mang đến phương pháp học IELTS hiệu quả, thông minh và dễ tiếp cận nhất cho học viên Việt Nam.
                        </p>
                        <div className="relative z-10 mt-8 space-y-6">
                            {values.map((value, index) => (
                                <div key={index} className={`flex items-start transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{transitionDelay: `${200 + index * 150}ms`}}>
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-yellow-500 flex items-center justify-center shadow-lg shadow-brand-red/30">
                                        {value.icon}
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">{value.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400 mt-1">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{transitionDelay: '300ms'}}>
                        <div className="relative aspect-square">
                            <div
                                aria-hidden="true"
                                className="blob bg-brand-red/20 w-80 h-80 -top-10 -left-20"
                                style={{ animation: 'blob-animate-1 25s infinite ease-in-out', animationDelay: '2s' }}
                            ></div>
                            <div
                                aria-hidden="true"
                                className="blob bg-yellow-400/20 w-96 h-96 -bottom-20 -right-20"
                                style={{ animation: 'blob-animate-2 30s infinite ease-in-out' }}
                            ></div>
                            <img 
                                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Đội ngũ IELTS Drills" 
                                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-large border border-gray-200/60 dark:border-gray-700/60 opacity-90 transition-opacity duration-300 hover:opacity-100"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
