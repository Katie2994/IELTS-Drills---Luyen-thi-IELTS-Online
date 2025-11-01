import React, { useState, useEffect, useRef } from 'react';

const quizData = [
  {
    question: 'Which sentence is grammatically correct?',
    options: [
      'He don\'t like ice cream.',
      'She is liking the new movie.',
      'They have finished their homework.',
      'I has a new car.',
    ],
    correctAnswer: 'They have finished their homework.',
  },
  {
    question: 'Choose the best synonym for "ubiquitous":',
    options: ['rare', 'omnipresent', 'scarce', 'hidden'],
    correctAnswer: 'omnipresent',
  },
  {
    question: 'The company\'s profits have _______ increased this year.',
    options: ['significant', 'significantly', 'signify', 'significance'],
    correctAnswer: 'significantly',
  },
  {
    question: 'Identify the error in the following sentence: "Despite of the heavy rain, the match continued."',
    options: ['Despite of', 'the heavy rain', 'the match', 'continued'],
    correctAnswer: 'Despite of',
  },
  {
    question: 'Choose the correct word to complete the sentence: "The new regulations will _______ everyone in the company."',
    options: ['affect', 'effect', 'except', 'accept'],
    correctAnswer: 'affect',
  },
  {
    question: 'Listen and fill in the blank: "I\'m not sure _______ we should go out, the forecast is terrible."',
    options: ['weather', 'whether', 'wether', 'whither'],
    correctAnswer: 'whether',
  },
];

const results = [
    {
        level: 'Sơ cấp (Band 4.0 - 5.0)',
        description: 'Bạn có kiến thức nền tảng. Gói Cơ Bản sẽ giúp bạn làm quen với dạng bài thi.',
        plan: 'Cơ bản',
        planIndex: 0
    },
    {
        level: 'Trung cấp (Band 5.5 - 6.5)',
        description: 'Bạn đã sẵn sàng để bứt phá. Gói Pro là lựa chọn hoàn hảo để nâng cao kỹ năng toàn diện.',
        plan: 'Pro',
        planIndex: 1
    },
    {
        level: 'Cao cấp (Band 7.0+)',
        description: 'Bạn có tiềm năng rất lớn. Gói Premium sẽ giúp bạn đạt được điểm số cao nhất với sự hỗ trợ từ chuyên gia.',
        plan: 'Premium',
        planIndex: 2
    }
];

const LevelChecker = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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


  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === quizData[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };
  
  const getResult = (finalScore: number) => {
    if (finalScore <= 2) {
      return results[0]; // Sơ cấp (0-2 câu đúng)
    } else if (finalScore <= 4) {
      return results[1]; // Trung cấp (3-4 câu đúng)
    } else {
      return results[2]; // Cao cấp (5-6 câu đúng)
    }
  };

  const result = getResult(score);

  return (
    <section id="level-checker" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-black">Bạn Đã Sẵn Sàng Cho IELTS?</h2>
          <p className="text-base sm:text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Kiểm tra nhanh trình độ của bạn để nhận lộ trình học được cá nhân hoá.
          </p>
        </div>
        <div className={`max-w-2xl mx-auto bg-white rounded-4xl p-8 shadow-large border border-gray-200/60 transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {!showResult ? (
            <div>
              <div className="flex justify-between items-center mb-6">
                 <p className="text-sm font-semibold text-gray-500">Câu hỏi {currentQuestionIndex + 1}/{quizData.length}</p>
                 <div className="w-full bg-gray-200 rounded-full h-2.5 mx-4">
                    <div className="bg-brand-red h-2.5 rounded-full transition-all duration-500" style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}></div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-8 text-center">{quizData[currentQuestionIndex].question}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quizData[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-brand-red hover:bg-red-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
                  >
                    <span className="font-semibold text-gray-700">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center animate-fade-in-up">
              <h3 className="text-2xl font-bold text-brand-black">Kết quả của bạn</h3>
              <p className="text-5xl font-extrabold my-4 text-brand-red">{result.level}</p>
              <p className="text-gray-600 max-w-md mx-auto mb-8">{result.description}</p>
              
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <p className="font-bold text-lg text-gray-900">Gói học đề xuất</p>
                <p className="text-3xl font-bold my-2">{result.plan}</p>
                <a href="#pricing" className="bg-brand-red text-white font-bold py-3 px-8 rounded-xl text-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 inline-block mt-4">
                  Xem chi tiết gói {result.plan}
                </a>
              </div>
              
              <button onClick={restartQuiz} className="mt-8 text-gray-600 hover:text-brand-black font-semibold transition-colors">Làm lại bài kiểm tra</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LevelChecker;