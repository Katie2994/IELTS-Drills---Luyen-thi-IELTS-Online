import React, { useState, useEffect, useRef } from 'react';

const FeatureCard = ({ icon, title, description, delay = 0 }: { icon: React.ReactNode, title: string, description: string, delay?: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

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

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`bg-white p-8 rounded-3xl shadow-medium transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-200/60 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="bg-red-100 text-brand-red rounded-xl p-3 inline-flex mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

const Features = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTitleVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        const currentRef = titleRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    const featureList = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            title: 'Chấm Điểm & Phản Hồi bằng AI',
            description: 'Nhận góp ý chi tiết cho bài Nói & Viết từ AI, phân tích sâu theo 4 tiêu chí chấm thi thật.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            title: 'Sơ Đồ Tư Duy AI (Mindmap)',
            description: 'Tự động phác thảo dàn ý thông minh cho bài viết, giúp bạn xây dựng bố cục logic và mạch lạc.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
            title: 'Thi Thử Không Giới Hạn',
            description: 'Làm quen với áp lực và giao diện thi thật (trên giấy & máy tính) để tự tin bước vào phòng thi.'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5zm-6 8A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5zm6 0A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5zm6 0a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5z"/>
                </svg>,
            title: 'Bảng Dữ Liệu & Lộ Trình Học',
            description: 'AI phân tích chi tiết kết quả từng bài làm để xác định điểm yếu. Ví dụ: nếu bạn yếu dạng bài Matching Headings, hệ thống sẽ đề xuất các bài tập chuyên sâu và mẹo làm bài hiệu quả.'
        }
    ];

    return (
        <section id="features" className="py-24 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-700 ease-out ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black">Công Nghệ Đột Phá, Kết Quả Vượt Trội</h2>
                    <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                        IELTS Drills kết hợp công nghệ AI tiên tiến và phương pháp học hiện đại để giúp bạn chinh phục mục tiêu.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featureList.map((feature, index) => (
                        <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;