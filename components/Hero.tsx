import React, { useState, useEffect } from 'react';

// Icons for the Philosophy Slide
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 18.75l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>
);
const LightBulbIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);
const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 2;

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides);
        }, 10000); // 10 seconds per slide
        return () => clearInterval(interval);
    }, []);

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

    return (
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center">
            
            {/* Slide 1: Original Hero Content */}
            <div className={`transition-opacity duration-1000 ease-in-out absolute inset-0 pt-32 lg:pt-40 px-4 sm:px-6 ${currentSlide === 0 ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute'}`}>
                <div className="container mx-auto max-w-7xl">
                    {/* Intro Text */}
                    <div className="mb-10 lg:mb-14 text-center lg:text-left">
                        <p className="text-gray-500 dark:text-gray-400 font-bold mb-2 text-lg uppercase tracking-wide">
                            Hệ sinh thái luyện thi toàn diện
                        </p>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            Chào mừng đến với <br className="hidden md:block"/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-yellow-500">
                                IELTS Drills
                            </span>
                        </h1>
                    </div>

                    {/* Bento Grid Layout - RESTRUCTURED */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        
                        {/* 1. Main Value Prop Card */}
                        <div className="md:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-brand-black text-white p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-card isolate">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
                             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
                             
                             <div className="relative z-10">
                                 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-yellow-300 text-sm font-bold mb-6">
                                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                                    Công nghệ AI & Giáo dục thực chiến
                                 </div>
                                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                    Không chỉ là App luyện thi. <br/>
                                    <span className="text-gray-300">Là người bạn đồng hành tin cậy.</span>
                                 </h2>
                                 <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
                                    Sự giao thoa tinh tế giữa tư duy giáo dục sâu sắc và trí tuệ nhân tạo, giúp bạn thấu hiểu bản chất, khắc phục điểm yếu và bứt phá mọi giới hạn.
                                 </p>
                             </div>

                             <div className="relative z-10 flex flex-wrap gap-4">
                                 <a href="https://ieltsdrills.com/quiz/category/ielts" className="relative overflow-hidden group flex items-center gap-2 bg-brand-red text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-red/40 text-lg">
                                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                    <span>Bắt đầu miễn phí</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                 </a>
                                 <a href="#video-demo" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full transition-all border border-white/10 hover:border-white/30">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>Xem Demo</span>
                                 </a>
                             </div>
                        </div>

                        {/* 2. Ms. Trinh Portrait Card */}
                        <div className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] bg-gray-200 dark:bg-gray-800 min-h-[500px] md:min-h-auto shadow-card isolate">
                            <div className="absolute inset-0 z-0">
                                <img 
                                    src="http://drills.vn/wp-content/uploads/2026/01/Trinh-red-bg-scaled.png" 
                                    alt="Ms. Kiều Trinh - Founder" 
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                            </div>

                            <div className="absolute top-4 left-4 z-20">
                                 <div className="bg-white/90 dark:bg-black/60 backdrop-blur-md p-2 rounded-xl shadow-lg border border-white/20 flex items-center gap-2 animate-float-1">
                                     <div className="bg-brand-red text-white font-bold px-2 py-1 rounded-md text-[10px]">10+ Năm</div>
                                     <div>
                                         <p className="text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase leading-tight">Kinh nghiệm</p>
                                         <p className="text-xs font-bold text-gray-900 dark:text-white leading-tight">Giảng dạy & Đào tạo</p>
                                     </div>
                                 </div>
                            </div>

                            <div className="absolute bottom-8 right-8 z-20 text-right">
                                <div className="transform transition-transform group-hover:-translate-y-1">
                                    <span className="inline-block px-3 py-1 mb-2 rounded-full bg-brand-red text-white text-xs font-bold tracking-widest uppercase shadow-md">Founder</span>
                                    <h3 className="text-3xl font-extrabold text-white leading-tight drop-shadow-lg">Ms. Kiều Trinh</h3>
                                </div>
                            </div>
                        </div>

                        {/* 3. Stats Card */}
                        <div className="md:col-span-4 bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 shadow-card border border-gray-100 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 opacity-50 transition-opacity group-hover:opacity-80"></div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2">Kết quả thực tế</h3>
                                <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 mb-2">90%</div>
                                <p className="text-gray-900 dark:text-white font-bold text-lg leading-tight">Học viên đạt Band mục tiêu</p>
                                
                                <div className="mt-3 space-y-1">
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 py-1 px-3 rounded-full inline-block">
                                        <span className="text-brand-red font-bold">300+</span> bạn đạt 6.5+
                                    </p>
                                    <br />
                                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700/50 py-1 px-3 rounded-full inline-block">
                                         <span className="text-brand-red font-bold">90+</span> bạn đạt 7.0+
                                    </p>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-600 h-1.5 rounded-full mt-5 overflow-hidden">
                                    <div className="bg-brand-red h-full w-[90%] rounded-full animate-slide-in-bottom"></div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Course Promo Card */}
                        <div className="md:col-span-4 bg-[#FFE8E8] dark:bg-red-900/20 rounded-[2.5rem] p-8 shadow-card border border-red-100 dark:border-red-900/30 flex flex-col justify-between relative group hover:shadow-floating transition-all duration-300">
                            <div className="absolute top-4 right-4 text-brand-red bg-white dark:bg-black/20 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </div>
                            <div>
                                <span className="bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">Top 1</span>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">Writing Task 1</h3>
                                <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                                    Chinh phục dạng bài biểu đồ với tư duy logic và từ vựng ăn điểm.
                                </p>
                            </div>
                            <a href="https://ieltsdrills.com/course/ielts-writing-task-1-academic-jYEXNFSSBqy8viVnxDHS" className="mt-6 w-full bg-[#ffe36d] hover:bg-[#ffd633] text-brand-black font-bold py-3 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                                Học thử ngay
                            </a>
                        </div>

                        {/* 5. Exam Feature */}
                         <div className="md:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-[2.5rem] p-8 shadow-card border border-blue-100 dark:border-gray-700 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kho đề thi thực</h3>
                                 <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    500+ đề thi Listening & Reading cập nhật liên tục từ các kỳ thi thật.
                                </p>
                                 <div className="flex -space-x-2 mb-4">
                                     {['L', 'R', 'WT1', 'WT2', 'S', 'P'].map((skill, i) => (
                                         <div key={i} className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 flex items-center justify-center text-[10px] font-bold text-brand-black dark:text-white shadow-sm z-10 hover:z-20 hover:scale-110 transition-transform cursor-default">
                                             {skill}
                                         </div>
                                     ))}
                                     <div className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-gray-800 relative z-0">+2k</div>
                                 </div>
                            </div>
                            
                            <a href="https://ieltsdrills.com/quiz/category/ielts" className="w-full bg-brand-red text-white font-bold py-3 rounded-xl text-center shadow-lg hover:bg-red-700 transition-all">
                                Làm bài thi thử
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/* Slide 2: Philosophy Content (Moved from AboutUs) */}
            <div className={`transition-opacity duration-1000 ease-in-out absolute inset-0 pt-32 lg:pt-40 px-4 sm:px-6 flex items-center ${currentSlide === 1 ? 'opacity-100 z-10 relative' : 'opacity-0 z-0 absolute'}`}>
                 <div className="container mx-auto max-w-7xl">
                    <div className="bg-white dark:bg-gray-800 rounded-[3rem] p-8 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                        {/* Background Blobs */}
                        <div aria-hidden="true" className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 dark:bg-brand-red/10 blur-[100px] rounded-full pointer-events-none"></div>
                        <div aria-hidden="true" className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                            {/* Text content */}
                            <div>
                                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-red/10 text-brand-red font-bold text-sm mb-6 uppercase tracking-wider">
                                    Về Chúng Tôi
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-4 leading-tight">
                                    Sự Kết Hợp Giữa <br/> Cái Tâm Giáo Dục & <br/> Sức Mạnh Công Nghệ
                                </h2>
                                <p className="text-lg sm:text-xl text-brand-black dark:text-gray-200 font-bold mt-4 italic">
                                    "Học IELTS giờ không còn chỉ là 'luyện thi' nữa. Mỗi người đều có nỗi lo riêng."
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed text-lg">
                                    Đó chính là lý do cô Kiều Trinh - giáo viên với hơn 10 năm kinh nghiệm đứng lớp - đã tạo ra IELTS Drills. Không phải để tạo ra thêm một công cụ vô hồn, mà là một người trợ lý thấu hiểu, giúp bạn vượt qua nỗi sợ không biết bắt đầu từ đâu.
                                </p>
                                
                                <div className="mt-10 grid gap-6">
                                    {values.map((value, index) => (
                                        <div key={index} className="flex items-start p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-700 border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-300 shadow-sm hover:shadow-md">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-red to-yellow-500 flex items-center justify-center shadow-lg shadow-brand-red/30 text-white">
                                                {value.icon}
                                            </div>
                                            <div className="ml-5">
                                                <h4 className="font-bold text-gray-900 dark:text-white text-lg">{value.title}</h4>
                                                <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">{value.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="relative h-full min-h-[400px] lg:min-h-[600px] rounded-[2.5rem] overflow-hidden group">
                                <img 
                                    src="https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/610971552_122099442903197617_2885371806561280639_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kT8FlsBaafAQ7kNvwFTvj4C&_nc_oc=AdngzrPTGR7PvD3JMaQ67RaIvvIZs_S1VgKF9jxE81ZPI-OWxdTlgQzBflawxktFnlkfw0EDJDgNITpMYndLLhFE&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=z461JesYbvJsPbm6KfPhtg&oh=00_AfobNOm8LZCSxLgWd7DeiKiJ6-AryJ2UingSWdOwBa9sKQ&oe=697E5FE9" 
                                    alt="Đội ngũ IELTS Drills" 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                        <p className="font-medium text-lg leading-relaxed">
                                            "Chúng tôi tin rằng công nghệ sinh ra để phục vụ con người, không phải thay thế con người. Tại IELTS Drills, AI là công cụ, còn giáo dục là trái tim."
                                        </p>
                                        <div className="mt-4 flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center font-bold">KT</div>
                                            <div>
                                                <p className="text-sm font-bold">Cô Kiều Trinh</p>
                                                <p className="text-xs text-gray-300">Founder IELTS Drills</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === idx 
                            ? 'bg-brand-red w-10' 
                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-brand-red/50'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Custom Keyframe for Shimmer Effect */}
            <style>{`
                @keyframes shimmer {
                    100% {
                        transform: translateX(100%);
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;