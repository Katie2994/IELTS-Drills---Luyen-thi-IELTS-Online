import React, { useState, useEffect, useRef } from 'react';

// Icons for each step
const Step1Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 8h.01M12 12h.01M12 16h.01M9 12h.01M9 16h.01" /></svg>;
const Step2Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 3l6-3" /></svg>;
const Step3Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" /></svg>;
const Step4Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const Step5Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const journeySteps = [
  {
    icon: <Step1Icon />,
    title: 'Bước 1: Kiểm Tra & Xác Định Mục Tiêu',
    description: 'Thực hiện bài kiểm tra đầu vào toàn diện 4 kỹ năng. AI sẽ phân tích kết quả và cùng bạn xác định band điểm mục tiêu rõ ràng.',
  },
  {
    icon: <Step2Icon />,
    title: 'Bước 2: AI Xây Dựng Lộ Trình Cá Nhân',
    description: 'Dựa trên điểm yếu và mục tiêu, AI tạo ra một kế hoạch học tập độc quyền, phân bổ thời gian và bài tập một cách thông minh.',
  },
  {
    icon: <Step3Icon />,
    title: 'Bước 3: Luyện Tập Chuyên Sâu Với AI',
    description: 'Tương tác với AI qua hàng ngàn bài tập Writing & Speaking. Mỗi bài nộp đều được chấm điểm, phân tích lỗi và gợi ý cải thiện tức thì.',
  },
  {
    icon: <Step4Icon />,
    title: 'Bước 4: Thi Thử & Tối Ưu Hoá Chiến Lược',
    description: 'Tham gia các kỳ thi thử định kỳ với điều kiện như thi thật. AI sẽ theo dõi tiến độ, điều chỉnh lộ trình và giúp bạn hoàn thiện chiến lược làm bài.',
  },
  {
    icon: <Step5Icon />,
    title: 'Bước 5: Sẵn Sàng Chinh Phục Mục Tiêu',
    description: 'Tự tin bước vào phòng thi với kiến thức vững chắc và kỹ năng hoàn thiện. Sẵn sàng đạt được band điểm IELTS mà bạn hằng mong ước.',
  },
];

type JourneyItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast: boolean;
  delay: number;
};

const JourneyItem: React.FC<JourneyItemProps> = ({ icon, title, description, isLast, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={ref} className="relative flex items-start group">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-14 left-7 -ml-px w-0.5 bg-gray-200 dark:bg-gray-700" style={{ height: 'calc(100% - 2rem)' }} aria-hidden="true"></div>
      )}
      {!isLast && (
        <div className={`absolute top-14 left-7 -ml-px w-0.5 bg-gradient-to-b from-brand-red to-yellow-400 transition-all duration-1000 ease-out ${isVisible ? 'max-h-full' : 'max-h-0'}`} style={{ height: 'calc(100% - 2rem)' }} aria-hidden="true"></div>
      )}

      {/* Circle and Icon */}
      <div className={`relative flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-brand-red to-yellow-500 flex items-center justify-center shadow-lg shadow-brand-red/30 transition-all duration-500 ease-out z-10 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        {icon}
      </div>

      {/* Content */}
      <div className={`ml-6 flex-1 transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'}`} style={{ transitionDelay: `${delay}ms`}}>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const CaseStudy = () => {
  const [isVisible, setIsVisible] = useState(false);
  // FIX: The ref's type should be HTMLElement for a <section> element, not HTMLDivElement. This corrects a type mismatch that likely caused the confusing error.
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section id="learning-journey" ref={sectionRef} className="py-28 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-brand-red to-yellow-500 pb-2">
            Lộ Trình Chinh Phục IELTS Rõ Ràng
          </h2>
          <p className="text-base sm:text-lg text-brand-black dark:text-gray-300 font-bold mt-8 max-w-3xl mx-auto">
            Từ lúc bắt đầu đến khi đạt mục tiêu, mọi bước tiến của bạn đều được theo dõi và tối ưu hoá bởi AI, đảm bảo hiệu quả học tập cao nhất.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             {/* Timeline */}
            <div className="max-w-3xl mx-auto lg:max-w-none lg:mx-0">
                <div className="space-y-12">
                    {journeySteps.map((step, index) => (
                        <JourneyItem
                            key={step.title}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            isLast={index === journeySteps.length - 1}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
            
            {/* Dashboard Image */}
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`} style={{ transitionDelay: '300ms' }}>
                <img 
                    src="http://drills.vn/wp-content/uploads/2025/11/13.png" 
                    alt="Dashboard theo dõi tiến độ học tập" 
                    className="rounded-3xl shadow-large w-full h-auto border border-gray-200/60 dark:border-gray-700/60"
                    loading="lazy"
                />
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400 italic">
                    Giao diện Dashboard trực quan, giúp bạn dễ dàng theo dõi tiến độ, xem lại lịch sử làm bài và nhận biết điểm mạnh, điểm yếu của bản thân.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
