import React, { useState, useEffect, useRef } from 'react';

// A reusable component for the floating icons
const FloatingIcon = ({ icon, className, delay = 0 }: { icon: React.ReactNode, className: string, delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => setIsVisible(true), delay);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.4 });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [delay]);

    return (
        <div ref={ref} className={`absolute bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-medium transition-all duration-1000 transform ${className} ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-12'}`}>
            {icon}
        </div>
    );
};

const NewTiktokIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 256 256" className="h-12 w-12">
        <g style={{ stroke: 'none', strokeWidth: 0, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'none', fillRule: 'nonzero', opacity: 1 }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path d="M 36.203 35.438 v -3.51 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -15.047 0 -27.289 12.244 -27.289 27.291 c 0 9.23 4.613 17.401 11.65 22.342 c -4.712 -5.039 -7.332 -11.681 -7.328 -18.58 C 9.559 47.88 21.453 35.784 36.203 35.438" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,242,234)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
            <path d="M 36.847 75.175 c 6.714 0 12.19 -5.341 12.44 -11.997 l 0.023 -59.417 h 10.855 c -0.232 -1.241 -0.349 -2.5 -0.35 -3.762 H 44.989 l -0.025 59.419 c -0.247 6.654 -5.726 11.993 -12.438 11.993 c -2.015 0.001 -4 -0.49 -5.782 -1.431 C 29.079 73.238 32.839 75.171 36.847 75.175 M 80.441 23.93 v -3.302 c -3.989 0.004 -7.893 -1.157 -11.232 -3.339 c 2.928 3.371 6.869 5.701 11.234 6.641" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,242,234)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
            <path d="M 69.209 17.286 c -3.272 -3.744 -5.075 -8.549 -5.073 -13.522 h -3.972 C 61.203 9.318 64.472 14.205 69.209 17.286 M 32.526 46.486 c -6.88 0.008 -12.455 5.583 -12.463 12.463 c 0.004 4.632 2.576 8.88 6.679 11.032 c -1.533 -2.114 -2.358 -4.657 -2.358 -7.268 c 0.007 -6.88 5.582 -12.457 12.463 -12.465 c 1.284 0 2.515 0.212 3.677 0.577 V 35.689 c -1.218 -0.173 -2.447 -0.262 -3.677 -0.268 c -0.216 0 -0.429 0.012 -0.643 0.016 v 11.626 C 35.014 46.685 33.774 46.49 32.526 46.486" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,0,79)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
            <path d="M 80.441 23.93 v 11.523 c -7.689 0 -14.81 -2.459 -20.627 -6.633 v 30.13 c 0 15.047 -12.24 27.289 -27.287 27.289 c -5.815 0 -11.207 -1.835 -15.639 -4.947 c 5.151 5.555 12.384 8.711 19.959 8.709 c 15.047 0 27.289 -12.242 27.289 -27.287 v -30.13 c 6.009 4.321 13.226 6.642 20.627 6.633 V 24.387 c -1.484 0 -2.927 -0.161 -4.323 -0.46" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(255,0,79)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
            <path d="M 59.813 58.949 v -30.13 c 6.009 4.322 13.226 6.642 20.627 6.633 V 23.93 c -4.364 -0.941 -8.305 -3.272 -11.232 -6.644 c -4.737 -3.081 -8.006 -7.968 -9.045 -13.522 H 49.309 l -0.023 59.417 c -0.249 6.654 -5.726 11.995 -12.44 11.995 c -4.007 -0.004 -7.768 -1.938 -10.102 -5.194 c -4.103 -2.151 -6.676 -6.399 -6.681 -11.032 c 0.008 -6.88 5.583 -12.455 12.463 -12.463 c 1.282 0 2.513 0.21 3.677 0.577 V 35.438 C 21.453 35.784 9.559 47.88 9.559 62.713 c 0 7.173 2.787 13.703 7.328 18.58 c 4.578 3.223 10.041 4.95 15.639 4.945 C 47.574 86.238 59.813 73.996 59.813 58.949" style={{ stroke: 'none', strokeWidth: 1, strokeDasharray: 'none', strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 10, fill: 'rgb(0,0,0)', fillRule: 'nonzero', opacity: 1 }} transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
        </g>
    </svg>
);


const SocialProof = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });
        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    
    const skills = ['Listening', 'Reading', 'Writing', 'Speaking', 'Vocab', 'Pronunciation', 'Debating'];
    const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

    useEffect(() => {
        if (isVisible) {
            const timer = setInterval(() => {
                setCurrentSkillIndex(prevIndex => (prevIndex + 1) % skills.length);
            }, 2500); // Change every 2.5 seconds
            return () => clearInterval(timer);
        }
    }, [isVisible, skills.length]);

    const avatars = [
        "http://drills.vn/wp-content/uploads/2025/11/An-Nguyen-1.png",
        "https://images.pexels.com/photos/11057497/pexels-photo-11057497.jpeg?auto=compress&cs=tinysrgb&w=300",
        "http://drills.vn/wp-content/uploads/2025/11/Pham-Thanh-Hang-1.png",
        "https://images.pexels.com/photos/9433434/pexels-photo-9433434.jpeg?auto=compress&cs=tinysrgb&w=300",
        "https://images.pexels.com/photos/9312891/pexels-photo-9312891.jpeg?auto=compress&cs=tinysrgb&w=300",
    ];

    return (
        <section ref={sectionRef} className="py-28 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Visuals Column */}
                    <div className="relative h-[500px] lg:h-[600px]">
                        {/* 3D Globe */}
                        <div className={`absolute top-10 inset-x-0 bottom-10 flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                             <img
                                src="http://drills.vn/wp-content/uploads/2025/11/3d-globe-11444549.png"
                                alt="Quả địa cầu 3D"
                                className="w-full h-auto max-w-[450px] object-contain animate-float-1 drop-shadow-2xl"
                                style={{ animationDuration: '15s' }}
                            />
                        </div>
                        
                        {/* Floating Social Icons - Repositioned and Resized */}
                        {/* Left Icons */}
                        <FloatingIcon
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-700 dark:text-blue-500" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>}
                            className="top-[10%] left-[5%] animate-float-1"
                            delay={200}
                        />
                         <FloatingIcon
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>}
                            className="top-[40%] left-0 animate-float-2"
                            delay={300}
                        />
                         <FloatingIcon
                            icon={<NewTiktokIcon />}
                            className="bottom-0 left-[calc(30%+30px)] -translate-x-1/2 animate-float-2"
                            delay={400}
                        />
                        <FloatingIcon
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black dark:text-white" fill="currentColor" viewBox="0 0 16 16"><path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/></svg>}
                            className="bottom-[5%] left-[10%] animate-float-2"
                            delay={500}
                        />

                        {/* Right Icons */}
                        <FloatingIcon
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-600 dark:text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>}
                            className="top-[5%] right-[10%] animate-float-2"
                            delay={250}
                        />
                        <FloatingIcon
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-600 dark:text-pink-500" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/></svg>}
                            className="top-[35%] right-0 animate-float-1"
                            delay={350}
                        />
                        <FloatingIcon
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black dark:text-white" fill="currentColor" viewBox="0 0 16 16"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.6.75Zm-1.8 12.95h1.5l-6.876-8.8-1.54-1.855H3.04l7.76 10.655Z"/></svg>}
                            className="top-0 left-[35%] -translate-x-1/2 animate-float-1"
                            delay={450}
                        />
                        <FloatingIcon
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                            }
                            className="bottom-[10%] right-[5%] animate-float-1"
                            delay={550}
                        />
                    </div>

                    {/* Text Content Column */}
                    <div className="text-center lg:text-left">
                        <h2 className={`text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 transition-all duration-700 ease-out pb-2 leading-tight ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                           Drill Your{' '}
                           <span className="inline-block text-yellow-400">
                                {skills[currentSkillIndex].split('').map((char, index) => (
                                    <span
                                        key={`${currentSkillIndex}-${index}`}
                                        className="animate-wave-in"
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        {char}
                                    </span>
                                ))}
                           </span>
                           {' '}Skills.
                           <br />
                           <span className="inline-block pt-2">Toả sáng toàn cầu.</span>
                        </h2>
                        <p className={`text-lg sm:text-xl text-brand-black dark:text-gray-300 font-bold mt-8 max-w-lg mx-auto lg:mx-0 transition-all duration-700 ease-out delay-200 leading-relaxed ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                           Tham gia cùng hàng ngàn học viên IELTS Drills từ khắp nơi trên thế giới. Chia sẻ kinh nghiệm, nhận động lực và cùng nhau tiến bộ mỗi ngày.
                        </p>
                        
                        <div className="mt-10">
                            <div className={`flex justify-center lg:justify-start -space-x-4 mb-4 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                {avatars.map((avatar, index) => (
                                    <img 
                                        key={index}
                                        src={avatar}
                                        alt={`Học viên ${index + 1}`}
                                        className="w-14 h-14 rounded-full object-cover border-4 border-white dark:border-gray-900 ring-2 ring-gray-200 dark:ring-gray-700 shadow-sm transition-transform hover:scale-110 hover:z-10"
                                    />
                                ))}
                            </div>
                            <p className={`text-gray-500 dark:text-gray-400 font-semibold transition-all duration-700 ease-out delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                                <span className="text-brand-red font-bold">5,000+</span> học viên đã tin tưởng và đồng hành cùng IELTS Drills từ 2017
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
