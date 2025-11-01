import React, { useState, useEffect, useRef } from 'react';

type FaqItemProps = { question: string, answer: string, delay?: number };
const FaqItem: React.FC<FaqItemProps> = ({ question, answer, delay = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
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
            className={`bg-white rounded-3xl shadow-medium transition-all duration-700 ease-out border border-gray-200/60 mb-4 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left p-6"
                aria-expanded={isOpen}
            >
                <h4 className="text-lg font-semibold text-gray-900">{question}</h4>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-brand-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="text-gray-600 px-6 pb-6">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const Faq = () => {
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

    const faqData = [
        {
            question: "IELTS Drills có phù hợp cho người mới bắt đầu không?",
            answer: "Chắc chắn rồi! Nền tảng của chúng tôi được thiết kế cho mọi cấp độ. Người mới bắt đầu có thể làm quen với các bài tập kỹ năng cơ bản và dần dần chuyển sang các bài thi thử hoàn chỉnh. Lộ trình học cá nhân hóa sẽ hướng dẫn bạn từng bước."
        },
        {
            question: "Hệ thống chấm điểm bằng AI chính xác đến mức nào?",
            answer: "AI của chúng tôi được huấn luyện trên hàng ngàn bài thi IELTS thật và được chấm bởi các giám khảo có chứng chỉ. Hệ thống cung cấp phản hồi cực kỳ chính xác và chi tiết, tập trung vào các tiêu chí giống như kỳ thi thật."
        },
        {
            question: "Tôi có thể sử dụng IELTS Drills trên điện thoại không?",
            answer: "Có, trang web của chúng tôi hoàn toàn tương thích và hoạt động mượt mà trên mọi thiết bị, bao gồm máy tính để bàn, máy tính bảng và điện thoại di động. Bạn có thể luyện tập mọi lúc, mọi nơi."
        },
        {
            question: "Sự khác biệt giữa gói Pro và Premium là gì?",
            answer: "Gói Pro cho phép bạn truy cập không giới hạn vào tất cả các công cụ tự học, bao gồm các bài thi thử và chấm điểm bằng AI. Gói Premium bao gồm tất cả các tính năng của gói Pro, cộng thêm các lớp học trực tuyến và buổi học 1 kèm 1 với chuyên gia."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-brand-gray">
            <div className="container mx-auto px-6 max-w-3xl">
                <div 
                    ref={titleRef}
                    className={`text-center mb-12 transition-all duration-700 ease-out ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black">Câu Hỏi Thường Gặp</h2>
                    <p className="text-base sm:text-lg text-gray-600 mt-4">Bạn có câu hỏi? Chúng tôi có câu trả lời.</p>
                </div>
                <div>
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} delay={index * 150} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;