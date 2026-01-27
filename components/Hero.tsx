import React from 'react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                
                {/* Intro Text */}
                <div className="mb-10 lg:mb-14 text-center lg:text-left">
                    <p className="text-gray-500 dark:text-gray-400 font-bold mb-2 text-lg uppercase tracking-wide animate-fade-in-down">
                        Chào mừng đến với IELTS Drills
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight animate-fade-in-down" style={{animationDelay: '100ms'}}>
                        Thư viện IELTS <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-yellow-500">
                            Của Riêng Bạn
                        </span>
                    </h1>
                </div>

                {/* Bento Grid Layout - RESTRUCTURED */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* 1. Main Value Prop Card (Top Left - Spans 7 cols) */}
                    <div className="md:col-span-7 relative group overflow-hidden rounded-[2.5rem] bg-brand-black text-white p-8 md:p-12 min-h-[400px] flex flex-col justify-center shadow-card isolate animate-fade-in-up">
                         {/* Abstract background blobs */}
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

                         {/* Enhanced Buttons */}
                         <div className="relative z-10 flex flex-wrap gap-4">
                             {/* Shiny Button Effect */}
                             <a href="https://ieltsdrills.com/quiz/category/ielts" className="relative overflow-hidden group flex items-center gap-2 bg-brand-red text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-brand-red/40 text-lg">
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                <span>Bắt đầu miễn phí</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                             </a>
                             <a href="#features" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full transition-all border border-white/10 hover:border-white/30">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Xem Demo</span>
                             </a>
                         </div>
                    </div>

                    {/* 2. Ms. Trinh Portrait Card (Top Right - Spans 5 cols) */}
                    <div className="md:col-span-5 relative group overflow-hidden rounded-[2.5rem] bg-gray-200 dark:bg-gray-800 min-h-[500px] md:min-h-auto shadow-card isolate animate-fade-in-up" style={{animationDelay: '200ms'}}>
                        
                        {/* Full Bleed Image Container */}
                        <div className="absolute inset-0 z-0">
                            <img 
                                src="http://drills.vn/wp-content/uploads/2026/01/Trinh-red-bg-scaled.png" 
                                alt="Ms. Kiều Trinh - Founder" 
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                        </div>

                        {/* Floating Info Cards - RESIZED SMALLER */}
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

                    {/* 3. Stats Card (Bottom Left - 4 cols) */}
                    <div className="md:col-span-4 bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 shadow-card border border-gray-100 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden group animate-fade-in-up" style={{animationDelay: '300ms'}}>
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 opacity-50 transition-opacity group-hover:opacity-80"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2">Kết quả thực tế</h3>
                            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 mb-2">90%</div>
                            <p className="text-gray-900 dark:text-white font-bold text-xl">Học viên đạt Band mục tiêu</p>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full mt-6 overflow-hidden">
                                <div className="bg-brand-red h-full w-[90%] rounded-full animate-slide-in-bottom"></div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Course Promo Card (Bottom Middle - 4 cols) */}
                    <div className="md:col-span-4 bg-[#FFE8E8] dark:bg-red-900/20 rounded-[2.5rem] p-8 shadow-card border border-red-100 dark:border-red-900/30 flex flex-col justify-between relative group hover:shadow-floating transition-all duration-300 animate-fade-in-up" style={{animationDelay: '400ms'}}>
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
                        <a href="https://ieltsdrills.com/course/ielts-writing-task-1-academic-jYEXNFSSBqy8viVnxDHS" className="mt-6 w-full bg-white dark:bg-gray-800 text-brand-black dark:text-white font-bold py-3 rounded-xl text-center shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-600">
                            Học thử ngay
                        </a>
                    </div>

                    {/* 5. Exam Feature (Bottom Right - 4 cols) */}
                     <div className="md:col-span-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-[2.5rem] p-8 shadow-card border border-blue-100 dark:border-gray-700 flex flex-col justify-between animate-fade-in-up" style={{animationDelay: '500ms'}}>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Kho đề thi thực</h3>
                             <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                500+ đề thi Listening & Reading cập nhật liên tục từ các kỳ thi thật.
                            </p>
                             <div className="flex -space-x-2 mb-4">
                                 {[1,2,3,4].map(i => (
                                     <div key={i} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                                 ))}
                                 <div className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center text-xs font-bold border-2 border-white dark:border-gray-800">+2k</div>
                             </div>
                        </div>
                        
                        <a href="#speaking-topics" className="w-full bg-brand-black text-white font-bold py-3 rounded-xl text-center shadow-lg hover:bg-gray-800 transition-all">
                            Làm bài thi thử
                        </a>
                    </div>

                </div>
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