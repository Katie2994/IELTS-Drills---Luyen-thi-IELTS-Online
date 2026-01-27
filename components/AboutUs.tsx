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
        title: "Tư Duy Của Người Làm Giáo Dục",
        description: "Mọi tính năng AI đều được xây dựng dựa trên phương pháp sư phạm, giúp bạn không chỉ học đúng mà còn học sâu."
    },
    {
        icon: <HeartIcon />,
        title: "Thấu Hiểu & Đồng Hành",
        description: "Cô Kiều Trinh cùng đội ngũ hiểu rõ từng khó khăn nhỏ nhất của học viên để đưa ra giải pháp khắc phục triệt để."
    },
    {
        icon: <UsersIcon />,
        title: "Cá Nhân Hoá Tuyệt Đối",
        description: "Không có lộ trình chung chung. Hệ thống phân tích điểm yếu riêng của bạn để thiết kế bài học phù hợp nhất."
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
                            IELTS Drills:<br />Sự Kết Hợp Giữa Cái Tâm Giáo Dục & Sức Mạnh Công Nghệ
                        </h2>
                        <p className="relative z-10 text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-6">
                            "Học IELTS giờ không còn chỉ là 'luyện thi' nữa. Mỗi người đều có nỗi lo riêng."
                        </p>
                        <p className="relative z-10 text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                            Đó chính là lý do cô Kiều Trinh - giáo viên với hơn 10 năm kinh nghiệm đứng lớp - đã tạo ra IELTS Drills. Không phải để tạo ra thêm một công cụ vô hồn, mà là một người trợ lý thấu hiểu, giúp bạn vượt qua nỗi sợ không biết bắt đầu từ đâu.
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
                            {/* Floating Quote Card */}
                            <div className="absolute -bottom-6 -left-6 z-20 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 max-w-xs animate-float-1">
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                                    "Học IELTS không chỉ để thi, mà còn là cách luyện tập thông minh và khai phá tiềm năng bản thân."
                                </p>
                                <p className="text-xs text-brand-red font-bold mt-2">- Cô Kiều Trinh</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;