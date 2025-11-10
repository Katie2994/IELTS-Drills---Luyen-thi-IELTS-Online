import React, { useState, useEffect, useRef } from 'react';

const StarIcon: React.FC<{ className: string }> = ({ className }) => {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
};

const testimonialData = [
  {
    quote: "IELTS Drills thực sự đã thay đổi cuộc chơi. Phản hồi từ AI cho bài luận của mình cực kỳ chính xác, giúp mình cải thiện điểm Viết từ 6.5 lên 8.0!",
    name: "An Nguyễn",
    role: "Du học sinh Anh",
    score: "Đạt Band 8.5 Overall",
    imgSrc: "http://drills.vn/wp-content/uploads/2025/11/An-Nguyen-1.png"
  },
  {
    quote: "Các bài thi thử giống hệt như thi thật. Mình đã cảm thấy rất tự tin và sẵn sàng trong ngày thi. Rất khuyến khích nền tảng này cho tất cả mọi người.",
    name: "Trần Minh Quân",
    role: "Sinh viên Đại học Bách Khoa",
    score: "Đạt Band 8.0 Overall",
    imgSrc: "https://images.pexels.com/photos/9433434/pexels-photo-9433434.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "Mình đã từng rất vất vả với kỹ năng Nói, nhưng các bài luyện tập chuyên sâu và chủ đề đa dạng đã giúp mình vượt qua nỗi sợ. Giao diện cũng rất thân thiện nữa.",
    name: "Lê Thảo My",
    role: "Nhân viên ngân hàng",
    score: "Đạt Band 7.5 Overall",
    imgSrc: "https://images.pexels.com/photos/11057497/pexels-photo-11057497.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "Tính năng chấm Speaking bằng AI quá đỉnh. Nó chỉ ra lỗi phát âm mà mình không hề nhận ra. Cảm giác như có giáo viên bản xứ kèm 1-1.",
    name: "Hoàng Anh Tuấn",
    role: "Creative Manager",
    score: "Đạt Band 7.0 Speaking",
    imgSrc: "http://drills.vn/wp-content/uploads/2025/11/Hoang-Anh-Tuan.png"
  },
  {
    quote: "Mình thích nhất là lộ trình học cá nhân hoá. Nó tập trung đúng vào điểm yếu của mình, không phải học lan man. Tiết kiệm thời gian mà hiệu quả.",
    name: "Nguyễn Minh Thông",
    role: "Giảng viên Đại học",
    score: "Tăng 1.5 band sau 3 tháng",
    imgSrc: "http://drills.vn/wp-content/uploads/2025/11/Nguyen-Minh-Thong.png"
  },
  {
    quote: "Kho đề thi thử khổng lồ và sát với đề thật. Mình làm hết kho đề là vào phòng thi tự tin hẳn, không bị ngợp.",
    name: "Bùi Đức Huy",
    role: "Du học sinh Canada",
    score: "Đạt Band 8.0 Reading",
    imgSrc: "http://drills.vn/wp-content/uploads/2025/11/Bui-Duc-Huy.png"
  },
  {
    quote: "Giao diện thân thiện, dễ dùng. Mấy cái mindmap AI cho Writing Task 2 siêu hữu ích, giúp mình không bao giờ bí ý tưởng.",
    name: "Trần Thu Trang",
    role: "Nhân viên Marketing",
    score: "Đạt Band 7.5 Writing",
    imgSrc: "https://images.pexels.com/photos/10777553/pexels-photo-10777553.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    quote: "Mình học từ xa nhưng cảm giác không hề thua kém học trung tâm. Hỗ trợ nhanh, cộng đồng sôi nổi. Rất đáng tiền.",
    name: "Phạm Thanh Hằng",
    role: "Sinh viên ĐH Ngoại Thương",
    score: "Đạt Band 7.5 Overall",
    imgSrc: "http://drills.vn/wp-content/uploads/2025/11/Pham-Thanh-Hang-1.png"
  },
  {
    quote: "Từ một người mất gốc, mình đã đạt được 6.5 Overall nhờ theo sát lộ trình của Drills. Cảm ơn team rất nhiều!",
    name: "Lê Văn Dũng",
    role: "Học sinh lớp 8",
    score: "Đạt Band 6.5 Overall",
    imgSrc: "http://drills.vn/wp-content/uploads/2025/11/IMG_3134.jpeg"
  },
];


const Testimonials = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
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
    
    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    };

    // FIX: Explicitly set the return type to `React.CSSProperties` to resolve the type mismatch for the `pointerEvents` property.
    const getCardStyle = (index: number): React.CSSProperties => {
        const offset = (index - activeIndex + testimonialData.length) % testimonialData.length;
        const scale = 1 - (Math.min(offset, 3) * 0.05);
        const translateY = Math.min(offset, 3) * 20;
        const opacity = offset > 2 ? 0 : 1;
        const zIndex = testimonialData.length - offset;
        const pointerEvents = offset === 0 ? 'auto' : 'none';

        return {
            transform: `scale(${scale}) translateY(${translateY}px)`,
            opacity,
            zIndex,
            pointerEvents,
        };
    };

    return (
        <section id="testimonials" className="py-28 bg-brand-gray dark:bg-brand-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div 
                    ref={titleRef}
                    className={`text-center mb-16 transition-all duration-700 ease-out ${
                        titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">Gia Nhập Cùng Hàng Ngàn Học Viên Thành Công</h2>
                    <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-8 max-w-2xl mx-auto">Xem IELTS Drills đã giúp những học viên như bạn đạt được ước mơ như thế nào.</p>
                </div>

                <div className="max-w-xl mx-auto">
                    <div className="relative h-[450px] cursor-pointer" onClick={handleNext} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleNext(); }} aria-label="Xem cảm nhận tiếp theo">
                        {testimonialData.map((testimonial, index) => (
                            <div 
                                key={index}
                                className="absolute inset-0 bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-medium flex flex-col border border-gray-200/60 dark:border-gray-700 transition-all duration-500 ease-out"
                                style={getCardStyle(index)}
                                aria-hidden={index !== activeIndex}
                            >
                                <div className="flex mb-4">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400" />)}
                                </div>
                                <blockquote className="text-gray-600 dark:text-gray-400 italic flex-grow text-xl md:text-2xl w-full">"{testimonial.quote}"</blockquote>
                                <div className="flex items-center w-full mt-6">
                                    <img className="w-16 h-16 rounded-full mr-5 object-cover ring-2 ring-gray-200 dark:ring-gray-700" src={testimonial.imgSrc} alt={testimonial.name} loading="lazy" />
                                    <div className="flex-1">
                                        <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-yellow-500 mb-1">{testimonial.score}</p>
                                        <p className="font-bold text-gray-900 dark:text-white text-lg">{testimonial.name}</p>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                     <div className="text-center mt-8 text-gray-500 dark:text-gray-400 font-semibold" aria-live="polite">
                        Click vào thẻ để xem tiếp ({activeIndex + 1}/{testimonialData.length})
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
