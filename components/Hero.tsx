import React from 'react';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-7xl">
                
                {/* Intro Text */}
                <div className="mb-10 lg:mb-14">
                    <p className="text-gray-500 dark:text-gray-400 font-medium mb-2 text-lg uppercase tracking-wide">Chào mừng đến với IELTS Drills</p>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Thư viện IELTS <br className="hidden md:block"/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-yellow-500">
                            Của Riêng Bạn
                        </span>
                    </h1>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Main Card (Large Left) */}
                    <div className="md:col-span-8 relative group overflow-hidden rounded-[2.5rem] bg-brand-black text-white p-8 md:p-12 min-h-[500px] flex flex-col justify-center md:justify-end shadow-card isolate">
                         {/* Abstract blobs */}
                         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none z-0"></div>
                         
                         {/* Ms. Trinh Image - Restored & Styled */}
                         <div className="absolute bottom-0 right-0 w-[80%] md:w-[50%] h-auto z-0 opacity-90 translate-y-10 group-hover:translate-y-0 transition-transform duration-700">
                             <img 
                                src="http://drills.vn/wp-content/uploads/2026/01/Trinh-red-bg-scaled.png" 
                                alt="Ms. Kiều Trinh" 
                                className="w-full h-full object-contain mask-image-gradient"
                             />
                             {/* Gradient Overlay to blend image with black card */}
                             <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
                             <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-black/20 to-brand-black"></div>
                         </div>
                         
                         <div className="relative z-10 max-w-lg">
                             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-yellow-300 text-sm font-bold mb-6">
                                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                                Công nghệ AI & Giáo dục thực chiến
                             </div>
                             <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                                Không chỉ là app luyện thi. <br/>
                                Là sự thấu hiểu từ <span className="text-yellow-400">10 năm kinh nghiệm</span>.
                             </h2>
                             <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                                Kết hợp phương pháp của Ms. Kiều Trinh và AI để giúp bạn học đúng trọng tâm, sửa lỗi tận gốc.
                             </p>
                         </div>

                         <div className="relative z-10 flex flex-wrap gap-4">
                             <a href="https://ieltsdrills.com/quiz/category/ielts" className="flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg text-lg">
                                <span>Bắt đầu miễn phí</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                             </a>
                             <a href="#features" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-4 px-8 rounded-full transition-all border border-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>Xem Demo</span>
                             </a>
                         </div>
                    </div>

                    {/* Stats Card (Top Right) */}
                    <div className="md:col-span-4 bg-white dark:bg-gray-800 rounded-[2.5rem] p-8 shadow-card border border-gray-100 dark:border-gray-700 flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-700 dark:to-gray-800 opacity-50"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-sm mb-2">Kết quả thực tế</h3>
                            <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 mb-2">90%</div>
                            <p className="text-gray-900 dark:text-white font-bold text-xl">Học viên đạt Band mục tiêu</p>
                            <div className="w-full bg-gray-200 dark:bg-gray-600 h-2 rounded-full mt-6 overflow-hidden">
                                <div className="bg-brand-red h-full w-[90%] rounded-full animate-slide-in-bottom"></div>
                            </div>
                        </div>
                    </div>

                    {/* Promo Card (Bottom Right) */}
                    <div className="md:col-span-4 bg-[#FFE8E8] dark:bg-red-900/20 rounded-[2.5rem] p-8 shadow-card border border-red-100 dark:border-red-900/30 flex flex-col justify-between relative group hover:shadow-floating transition-all duration-300">
                        <div className="absolute top-4 right-4 text-brand-red">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        </div>
                        <div>
                            <span className="bg-brand-red text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Top 1</span>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 leading-tight">IELTS Writing Task 1</h3>
                            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                                Khoá học được yêu thích nhất. Chinh phục dạng bài khó nhằn với AI và tư duy 10 năm kinh nghiệm.
                            </p>
                        </div>
                        <a href="https://ieltsdrills.com/course/ielts-writing-task-1-academic-jYEXNFSSBqy8viVnxDHS" className="mt-6 w-full bg-white dark:bg-gray-800 text-brand-black dark:text-white font-bold py-3 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                            Học thử ngay
                        </a>
                    </div>

                    {/* Secondary Feature (Bottom Middle) */}
                     <div className="md:col-span-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-[2.5rem] p-8 shadow-card border border-blue-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Trải nghiệm thi thử như thật</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                Kho đề khổng lồ, giao diện chuẩn thi máy. Giúp bạn làm quen áp lực phòng thi.
                            </p>
                             <div className="flex items-center gap-4 justify-center md:justify-start">
                                 <div className="flex -space-x-2">
                                     {[1,2,3,4].map(i => (
                                         <div key={i} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                                     ))}
                                 </div>
                                 <span className="text-sm font-semibold text-gray-500">5000+ người đang luyện</span>
                             </div>
                        </div>
                        <div className="flex-1 w-full relative h-40 md:h-full min-h-[160px]">
                            {/* Decorative Elements mimicking the app interface */}
                             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-xs bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-4 rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-100 dark:border-gray-600">
                                 <div className="h-2 w-1/3 bg-gray-200 dark:bg-gray-600 rounded mb-3"></div>
                                 <div className="h-2 w-full bg-gray-100 dark:bg-gray-600 rounded mb-2"></div>
                                 <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-600 rounded"></div>
                                 <div className="mt-4 flex justify-between items-center">
                                     <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">8.0</div>
                                     <div className="text-xs text-gray-400">Vừa xong</div>
                                 </div>
                             </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;