import React, { useState, useEffect, useRef } from 'react';

const CheckIcon = () => {
    return (
        <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
    );
};

type PricingCardProps = { plan: string, price: string, period: string, features: string[], isPopular?: boolean, delay?: number };
const PricingCard: React.FC<PricingCardProps> = ({ plan, price, period, features, isPopular, delay = 0 }) => {
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
            className={`bg-white dark:bg-gray-900 rounded-3xl p-8 flex flex-col transition-all duration-500 ease-out border ${isPopular ? 'ring-2 ring-brand-red lg:scale-105 shadow-large dark:shadow-2xl dark:shadow-brand-black/20 border-transparent' : 'shadow-medium border-gray-200/60 dark:border-gray-700'} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 scale-95'
            }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {isPopular && <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase self-center -mt-11 mb-4">Phổ biến nhất</span>}
            <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white">{plan}</h3>
            <div className="text-center my-6">
                <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-yellow-400">{price}</span>
                <span className="text-gray-600 dark:text-gray-400">{period}</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow text-gray-700 dark:text-gray-300">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <a href="https://ieltsdrills.com/" className={`w-full text-center font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 transform hover:-translate-y-1 ${isPopular ? 'bg-brand-red text-white hover:bg-red-700 shadow-lg hover:shadow-xl' : 'bg-gray-100 text-brand-black hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 shadow-md hover:shadow-lg'}`}>
                Bắt đầu ngay
            </a>
        </div>
    );
};

const Pricing = () => {
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

    const plans = [
        {
            plan: 'Cơ bản',
            price: '0đ',
            period: '/mãi mãi',
            features: ['1 Bài thi thử', 'Bài luyện tập kỹ năng giới hạn', 'Phản hồi cơ bản từ AI', 'Truy cập cộng đồng'],
            isPopular: false
        },
        {
            plan: 'Pro',
            price: '299k',
            period: '/tháng',
            features: ['Thi thử không giới hạn', 'Luyện tập kỹ năng không giới hạn', 'Phản hồi Viết & Nói nâng cao từ AI', 'Lộ trình học cá nhân hoá', 'Sơ đồ tư duy AI'],
            isPopular: true
        },
        {
            plan: 'Premium',
            price: '1.999k',
            period: '/năm',
            features: ['Tất cả tính năng gói Pro', 'Lớp học trực tuyến với chuyên gia', 'Buổi học 1 kèm 1', 'Hỗ trợ ưu tiên'],
            isPopular: false
        }
    ];

    return (
        <section id="pricing" className="py-28 bg-brand-gray dark:bg-brand-black">
            <div className="container mx-auto px-6">
                <div 
                    ref={titleRef}
                    className={`text-center mb-24 transition-all duration-700 ease-out ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">Chọn Gói Học Phù Hợp Với Bạn</h2>
                    <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-8 max-w-2xl mx-auto">Bắt đầu miễn phí, hoặc khai phá toàn bộ tiềm năng với các gói học cao cấp.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-16 lg:gap-8 max-w-5xl mx-auto items-center">
                    {plans.map((p, i) => <PricingCard key={i} {...p} delay={i * 150} />)}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
