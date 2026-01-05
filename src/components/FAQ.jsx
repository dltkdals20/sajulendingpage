import React from 'react';
import { Plus, Minus } from 'lucide-react';

const QA = [
    {
        q: "TCI 결과지도 받을 수 있나요?",
        a: "기본 제공은 결쌤이 정리한 ‘결 지도(요약본) + 결 루틴’입니다. TCI는 저작권 보호 범위가 있는 심리검사로 원문 문항/매뉴얼 공유는 어렵습니다."
    },
    {
        q: "타로가 미래를 확정하나요?",
        a: "결 상담소에서 타로는 “예언”이 아니라 선택의 변수를 점검하는 도구로 씁니다. 최종 결정은 본인에게 있습니다."
    },
    {
        q: "의료/법률/투자 상담도 되나요?",
        a: "의학적 진단/치료, 법률·투자 자문은 제공하지 않습니다. 필요 시 전문기관을 권합니다."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState(null);

    return (
        <section className="py-24 px-4 bg-white border-t border-stone-200">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-stone-900 text-center mb-12">FAQ</h2>

                <div className="space-y-4">
                    {QA.map((item, index) => (
                        <div key={index} className="border-b border-stone-100 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center py-4 text-left hover:text-amber-700 transition"
                            >
                                <span className="text-lg font-medium text-stone-700">{item.q}</span>
                                {openIndex === index ? <Minus className="w-5 h-5 text-amber-600" /> : <Plus className="w-5 h-5 text-stone-400" />}
                            </button>
                            {openIndex === index && (
                                <div className="pb-4 text-stone-500 leading-relaxed animate-in slide-in-from-top-2 fade-in duration-200">
                                    {item.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Refund Policy & Footer */}
                <div className="mt-20 pt-10 border-t border-stone-100 text-stone-500 text-sm leading-relaxed">
                    <h4 className="font-bold text-stone-600 mb-2">환불/변경 안내</h4>
                    <ul className="list-disc list-inside space-y-1 mb-8">
                        <li>사전 질문 제출 전: 100% 환불</li>
                        <li>사전 질문 제출 후(분석 착수): 진행비 공제 후 환불 / 환불 불가 중 택1 (상황에 따라)</li>
                        <li>일정 변경: 1회 무료 변경, 이후 변경 수수료</li>
                        <li>노쇼: 환불 불가</li>
                    </ul>

                    <div className="text-center border-t border-stone-100 pt-8">
                        <p className="mb-4 font-serif text-lg text-stone-800">
                            "당신이 바꿔야 할 건 ‘운명’이 아니라,<br />
                            반응의 결 · 선택의 결 · 삶의 결입니다."
                        </p>
                        <p className="text-stone-400">© 2026 결 상담소 All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
