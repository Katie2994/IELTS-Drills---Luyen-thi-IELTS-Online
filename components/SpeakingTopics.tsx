import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

const slides = [
  { url: 'http://drills.vn/wp-content/uploads/2025/11/7.png', alt: 'Giao diện lựa chọn bài thi IELTS Speaking Part 1' },
  { url: 'http://drills.vn/wp-content/uploads/2025/11/8.png', alt: 'Giao diện lựa chọn bài thi IELTS Speaking Part 2' },
  { url: 'http://drills.vn/wp-content/uploads/2025/11/9.png', alt: 'Giao diện lựa chọn bài thi IELTS Speaking Part 3' },
  { url: 'http://drills.vn/wp-content/uploads/2025/11/10.png', alt: 'Minh hoạ câu hỏi trong bài thi Speaking' },
  { url: 'http://drills.vn/wp-content/uploads/2025/11/11.png', alt: 'Minh hoạ câu trả lời mẫu cho bài thi Speaking' },
  { url: 'http://drills.vn/wp-content/uploads/2025/11/12.png', alt: 'Minh hoạ hệ thống chấm điểm chi tiết cho bài thi Speaking' }
] as const;

const SpeakingTopics = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Dừng slideshow
  const stopSlideshow = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Bắt đầu slideshow
  const startSlideshow = useCallback(() => {
    stopSlideshow();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  }, [stopSlideshow]);

  // Tự động chạy khi vào viewport
  useEffect(() => {
    if (isVisible) {
      startSlideshow();
    }
    return stopSlideshow;
  }, [isVisible, startSlideshow, stopSlideshow]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    stopSlideshow();
    startSlideshow(); // restart timer
  }, [stopSlideshow, startSlideshow]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    stopSlideshow();
    startSlideshow();
  }, [stopSlideshow, startSlideshow]);

  // Xử lý phím mũi tên
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isVisible) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, prevSlide, nextSlide]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      stopSlideshow();
      startSlideshow();
    },
    [stopSlideshow, startSlideshow]
  );

  return (
    <section
      id="speaking-topics"
      ref={sectionRef}
      className="py-28 bg-brand-gray dark:bg-brand-black"
      aria-labelledby="speaking-topics-title"
    >
      <div className="container mx-auto px-6">
        {/* Tiêu đề */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2
            id="speaking-topics-title"
            className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2"
          >
            Kho Đề Speaking Khổng Lồ, Cập Nhật Liên Tục
          </h2>
          <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-6 max-w-3xl mx-auto">
            Không bao giờ cạn ý tưởng với ngân hàng đề thi Speaking đa dạng, bám sát xu hướng ra đề mới nhất. Bạn sẽ nhận được phần chấm chữa chi tiết và những gợi ý hữu ích từ AI, giúp bạn tự tin đối mặt với mọi chủ đề.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className={`max-w-4xl mx-auto transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          onMouseEnter={stopSlideshow}
          onMouseLeave={startSlideshow}
          role="region"
          aria-label="Carousel minh hoạ bài thi Speaking"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-large border border-gray-200/60 dark:border-gray-700/60 aspect-[16/10] sm:aspect-[16/9] bg-white dark:bg-gray-900">
            <div
              className="flex transition-transform ease-in-out duration-500 h-full will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              aria-live="polite"
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'low'}
                  />
                </div>
              ))}
            </div>

            {/* Nút điều hướng */}
            <button
              onClick={prevSlide}
              aria-label="Slide trước"
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white/70 hover:bg-white dark:bg-black/50 dark:hover:bg-black p-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red z-10 backdrop-blur-sm"
            >
              <svg className="h-5 w-5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              aria-label="Slide tiếp theo"
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white/70 hover:bg-white dark:bg-black/50 dark:hover:bg-black p-2.5 rounded-full shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red z-10 backdrop-blur-sm"
            >
              <svg className="h-5 w-5 text-gray-800 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  aria-label={`Đi đến slide ${index + 1}`}
                  aria-current={currentIndex === index}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red ${
                    currentIndex === index
                      ? 'bg-brand-red w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="https://ieltsdrills.com/speak/category/ielts-speaking-practice-drill"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-brand-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
          >
            Thử sức Speaking ngay
            <svg
              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
});

SpeakingTopics.displayName = 'SpeakingTopics';

export default SpeakingTopics;
