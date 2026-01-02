import React from 'react';

const steps = [
    "상품 선택 및 결제",
    "사전 질문지 작성 (이메일/폼)",
    "분석 및 리포트/로드맵 준비",
    "결과물 발송 (PDF/모바일)",
    "후속 상담 진행 (해당 시)"
];

const Process = () => {
    return (
        <section className="py-20 px-4 bg-stone-50 border-t border-stone-200">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-12">진행 과정</h2>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative max-w-4xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-stone-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="flex md:flex-col items-center gap-4 w-full md:w-auto z-10">
                            <div className="w-12 h-12 rounded-full bg-white border-2 border-stone-200 text-stone-500 flex items-center justify-center font-bold shrink-0 shadow-sm">
                                {index + 1}
                            </div>
                            <span className="text-stone-600 font-medium text-lg md:text-sm md:text-center">
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
