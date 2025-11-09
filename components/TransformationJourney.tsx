import React, { useState, useEffect, useRef, memo } from 'react';

const beforeImages = [
  { type: 'Feedback', src: 'http://drills.vn/wp-content/uploads/2025/11/16.png', alt: 'Phản hồi cho bài viết 5.0' },
  { type: 'Grammar', src: 'http://drills.vn/wp-content/uploads/2025/11/15.png', alt: 'Kiểm tra ngữ pháp cho bài viết 5.0' },
  { type: 'Vocab', src: 'http://drills.vn/wp-content/uploads/2025/11/17.png', alt: 'Cải thiện từ vựng cho bài viết 5.0' },
] as const;

const afterImage = {
  src: 'http://drills.vn/wp-content/uploads/2025/11/14.png',
  alt: 'Phản hồi cho bài viết 7.0 đã sửa',
} as const;

const TransformationJourney = memo(() => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="transformation" ref={sectionRef} className="py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">
            Hành Trình Lột Xác
          </h2>
          <p className="text-base sm:text-lg text-brand-black font-bold mt-8 max-w-3xl mx-auto">
            Xem sức mạnh của AI và chuyên gia biến một bài viết từ band 5.0 thành 7.0 chỉ sau một lần sửa.
          </p>
        </div>

        {/* Before vs After Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Before */}
          <div
            className={`bg-white rounded-3xl p-6 shadow-medium border border-gray-200/60 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Lần đầu - <span className="text-red-500">Band 5.0</span>
            </h3>

            {/* Tabs */}
            <div className="mb-5 flex space-x-1 sm:space-x-2 border-b border-gray-200">
              {beforeImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-3 sm:px-4 py-2.5 font-semibold text-sm rounded-t-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red/50 ${
                    activeTab === index
                      ? 'bg-red-50 text-brand-red border-b-2 border-brand-red'
                      : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                  aria-selected={activeTab === index}
                  role="tab"
                >
                  {image.type}
                </button>
              ))}
            </div>

            {/* Image Container - TỐI ƯU TỶ LỆ */}
            <div className="relative aspect-[154/100] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
              {beforeImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ease-in-out p-3 sm:p-4 ${
                    activeTab === index ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'low'}
                />
              ))}

              {/* Skeleton Placeholder */}
              {!isVisible && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full max-w-xs mx-auto bg-gray-200 border-2 border-dashed rounded-xl animate-pulse" />
                </div>
              )}
            </div>
          </div>

          {/* After */}
          <div
            className={`bg-white rounded-3xl p-6 shadow-large border border-transparent ring-2 ring-yellow-400/80 transition-all duration-700 ease-out lg:mt-10 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Viết lại - <span className="text-green-500">Band 7.0</span>
            </h3>
            <p className="text-gray-600 mb-5">
              Áp dụng gợi ý từ AI, học viên đã cải thiện toàn diện bài viết.
            </p>

            {/* After Image */}
            <div className="relative aspect-[154/100] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 shadow-inner">
              <img
                src={afterImage.src}
                alt={afterImage.alt}
                className="w-full h-full object-contain p-3 sm:p-4"
                loading="lazy"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-opacity duration-700 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a
            href="https://ieltsdrills.com/quiz/IELTS%20WT1%20-%20Tests/CGcya"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center bg-brand-red text-white font-bold py-3 px-8 rounded-xl hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-brand-red/30"
          >
            Thử sức viết bài này ngay
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

TransformationJourney.displayName = 'TransformationJourney';

export default TransformationJourney;