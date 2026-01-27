import React, { useState, useEffect, useRef } from 'react';

// Icons for the Philosophy Section
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 18.75l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);
const LightBulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

// New Component for Animated Value Item
type ValueItemProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: number;
};

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div 
            ref={ref}
            className={`flex items-start p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 shadow-sm hover:shadow-md transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-yellow-500 flex items-center justify-center shadow-lg shadow-brand-red/30 text-white">
                {icon}
            </div>
            <div className="ml-5">
                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{description}</p>
            </div>
        </div>
    );
};

const values = [
    {
        icon: <LightBulbIcon />,
        title: "Tư Duy Giáo Dục",
        description: "Tính năng AI được xây dựng dựa trên phương pháp sư phạm, giúp học sâu, nhớ lâu."
    },
    {
        icon: <HeartIcon />,
        title: "Thấu Hiểu & Đồng Hành",
        description: "Giải pháp khắc phục triệt để khó khăn của học viên từ kinh nghiệm 10+ năm giảng dạy."
    },
    {
        icon: <UsersIcon />,
        title: "Cá Nhân Hoá",
        description: "Hệ thống phân tích điểm yếu riêng để thiết kế lộ trình học phù hợp nhất."
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
        <section id="about-us" ref={sectionRef} className="py-20 px-4 sm:px-6">
            <div className={`container mx-auto max-w-7xl transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                    {/* Background Blobs */}
                    <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 dark:bg-brand-red/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <div aria-hidden="true" className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text content */}
                        <div>
                            {/* Updated Badge: Bigger text, padding and bold font */}
                            <div className="inline-block px-6 py-2 rounded-full bg-brand-red/10 text-brand-red font-extrabold text-base mb-6 uppercase tracking-wider">
                                Về Chúng Tôi
                            </div>
                            
                            {/* Updated Heading: Increased line-height (leading-loose) for better spacing */}
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-4 leading-loose">
                                Sự Kết Hợp Giữa <br/> Cái Tâm Giáo Dục & <br/> Sức Mạnh Công Nghệ
                            </h2>
                            
                            <p className="text-lg sm:text-xl text-brand-black dark:text-gray-200 font-bold mt-4 italic">
                                "Học IELTS giờ không còn chỉ là 'luyện thi' nữa. Mỗi người đều có nỗi lo riêng."
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed text-lg">
                                Đó chính là lý do cô Kiều Trinh - giáo viên với hơn 10 năm kinh nghiệm đứng lớp - đã tạo ra IELTS Drills. Không phải để tạo ra thêm một công cụ vô hồn, mà là một người trợ lý thấu hiểu, giúp bạn vượt qua nỗi sợ không biết bắt đầu từ đâu.
                            </p>
                            
                            {/* Value Items with Animation */}
                            <div className="mt-10 grid gap-6">
                                {values.map((value, index) => (
                                    <ValueItem 
                                        key={index}
                                        icon={value.icon}
                                        title={value.title}
                                        description={value.description}
                                        delay={index * 150} // Staggered delay for cascade effect
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Image - Forced to Aspect Square */}
                        <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden group shadow-lg border border-gray-100 dark:border-gray-700/50">
                            <img 
                                src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/610971552_122099442903197617_2885371806561280639_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kT8FlsBaafAQ7kNvwFTvj4C&_nc_oc=AdngzrPTGR7PvD3JMaQ67RaIvvIZs_S1VgKF9jxE81ZPI-OWxdTlgQzBflawxktFnlkfw0EDJDgNITpMYndLLhFE&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=z461JesYbvJsPbm6KfPhtg&oh=00_AfobNOm8LZCSxLgWd7DeiKiJ6-AryJ2UingSWdOwBa9sKQ&oe=697E5FE9" 
                                alt="Đội ngũ IELTS Drills" 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                            
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                    <p className="font