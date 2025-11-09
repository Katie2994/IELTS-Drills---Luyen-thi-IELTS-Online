import React, { useState, useEffect, useRef } from 'react';

const StarIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
};

type TestimonialCardProps = { quote: string, name: string, score: string, imgSrc: string, delay?: number };
const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, score, imgSrc, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div 
            ref={ref}
            className={`bg-white p-8 rounded-3xl shadow-medium flex flex-col items-start h-full transition-all duration-700 ease-out border border-gray-200/60 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
            </div>
            <blockquote className="text-gray-600 italic mb-6 flex-grow">"{quote}"</blockquote>
            <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4 object-cover ring-2 ring-gray-200" src={imgSrc} alt={name} />
                <div>
                    <p className="font-bold text-gray-900">{name}</p>
                    <p className="text-brand-red font-semibold">{score}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
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

    const testimonialData = [
        {
            quote: "IELTS Drills thực sự đã thay đổi cuộc chơi. Phản hồi từ AI cho bài luận của mình cực kỳ chính xác, giúp mình cải thiện điểm Viết từ 6.5 lên 8.0!",
            name: "An Nguyễn",
            score: "Đạt Band 8.5",
            imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            quote: "Các bài thi thử giống hệt như thi thật. Mình đã cảm thấy rất tự tin và sẵn sàng trong ngày thi. Rất khuyến khích nền tảng này cho tất cả mọi người.",
            name: "Trần Minh Quân",
            score: "Đạt Band 8.0",
            imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            quote: "Mình đã từng rất vất vả với kỹ năng Nói, nhưng các bài luyện tập chuyên sâu và chủ đề đa dạng đã giúp mình vượt qua nỗi sợ. Giao diện cũng rất thân thiện nữa.",
            name: "Lê Thảo My",
            score: "Đạt Band 7.5",
            imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    return (
        <section id="testimonials" className="py-28 bg-brand-gray">
            <div className="container mx-auto px-6">
                <div 
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-700 ease-out ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">Gia Nhập Cùng Hàng Ngàn Học Viên Thành Công</h2>
                    <p className="text-base sm:text-lg text-brand-black font-bold mt-8 max-w-2xl mx-auto">Xem IELTS Drills đã giúp những học viên như bạn đạt được ước mơ như thế nào.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;