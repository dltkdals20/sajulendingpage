import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        text: "항상 막연한 불안감이 있었는데, 상담을 통해 그 불안의 뿌리가 제 기질과 운의 흐름이 맞물린 결과라는 걸 알게 되었습니다. 이제는 제 감정을 훨씬 더 객관적으로 바라볼 수 있게 되었어요.",
        author: "30대 직장인 김**님",
        product: "1:1 심층 솔루션",
        tags: ["불안해소", "자기이해"]
    },
    {
        text: "이직을 고민하던 차에 커리어 나침반을 만났습니다. 제가 왜 이전 직장에서 힘들었는지, 어떤 환경에서 빛나는 사람인지 명확한 언어로 정리해주셔서 정말 속이 시원했습니다.",
        author: "20대 프리랜서 이**님",
        product: "커리어 나침반",
        tags: ["이직고민", "적성찾기"]
    },
    {
        text: "매년 신년운세를 보지만 이렇게 구체적인 로드맵은 처음이에요. 월별로 조심해야 할 것과 집중해야 할 것을 미리 알고 준비하니, 다가올 2026년이 두렵기보다 기대가 됩니다.",
        author: "40대 사업가 박**님",
        product: "2026년 신년운세",
        tags: ["신년계획", "마음의준비"]
    },
    {
        text: "결혼 준비하면서 사소한 거로 많이 싸웠는데, 서로의 기질이 달라서 생긴 오해라는 걸 알게 됐어요. 서로를 이해하니 대화법도 바뀌고 관계가 훨씬 단단해졌습니다.",
        author: "30대 예비부부 최**님",
        product: "궁합 솔루션",
        tags: ["결혼준비", "성격차이"]
    },
    {
        text: "사업 확장을 앞두고 고민이 많았는데, 제 사주의 흐름과 시기적인 운을 분석해주셔서 큰 결정을 내리는 데 확신을 가질 수 있었습니다. 정말 큰 도움이 되었습니다.",
        author: "50대 자영업자 정**님",
        product: "비즈니스 운세",
        tags: ["사업확장", "시기파악"]
    },
    {
        text: "전공이 적성에 안 맞아 고민이었는데, 홀랜드 검사와 사주를 통해 제 잠재력이 어디에 있는지 명확히 알게 되었습니다. 이제 제 길을 찾은 것 같아요.",
        author: "20대 대학생 한**님",
        product: "진로 적성",
        tags: ["전공고민", "미래방향"]
    },
    {
        text: "아이를 키우면서 답답할 때가 많았는데, 아이의 타고난 기질을 알고 나니 육아가 한결 수월해졌어요. 아이 마음을 읽는 법을 배운 기분입니다.",
        author: "30대 워킹맘 송**님",
        product: "자녀 기질 분석",
        tags: ["아이기질", "양육방식"]
    },
    {
        text: "회사에서 사람 관계 때문에 너무 힘들었는데, 제 대인관계 패턴을 분석해주셔서 어떻게 대처해야 할지 알게 되었습니다. 덕분에 회사 생활이 편해졌어요.",
        author: "40대 직장인 류**님",
        product: "1:1 심층 솔루션",
        tags: ["대인관계", "승진운"]
    },
    {
        text: "중요한 면접을 앞두고 긴장이 많이 됐는데, 타로 상담을 통해 마음을 다잡고 어떤 태도로 임해야 할지 조언을 얻었습니다. 덕분에 합격했어요!",
        author: "20대 취준생 강**님",
        product: "타로 상담",
        tags: ["면접운", "선택장애"]
    }
];

const Reviews = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 px-4 bg-stone-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative px-4 md:px-12">
                <div className="text-center mb-12">
                    <span className="text-stone-500 font-bold tracking-wider text-sm uppercase">Real Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mt-3">
                        결을 읽고, 삶이 달라진<br className="md:hidden" /> 분들의 이야기
                    </h2>
                </div>

                <div className="relative group">
                    {/* Previous Button */}
                    <button
                        onClick={() => scroll('left')}
                        className="hidden md:flex absolute left-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-stone-200 bg-white items-center justify-center text-stone-600 hover:bg-stone-50 hover:border-amber-200 hover:text-amber-600 transition-all z-10 shadow-sm"
                        aria-label="Previous reviews"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={() => scroll('right')}
                        className="hidden md:flex absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-stone-200 bg-white items-center justify-center text-stone-600 hover:bg-stone-50 hover:border-amber-200 hover:text-amber-600 transition-all z-10 shadow-sm"
                        aria-label="Next reviews"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Slider Container */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 md:gap-8 pb-8 px-4 snap-x snap-mandatory scrollbar-hide -mx-4 md:mx-0"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {reviews.map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="min-w-[85vw] md:min-w-[380px] snap-center bg-white p-8 rounded-3xl shadow-sm border border-stone-200 relative flex flex-col h-auto md:h-[320px]"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <Quote className="w-8 h-8 text-amber-200 opacity-50" />
                                    <div className="flex text-amber-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-stone-700 leading-relaxed mb-8 flex-grow word-keep-all text-[15px]">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto border-t border-stone-100 pt-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-bold text-stone-900 text-sm">{review.author}</span>
                                        <span className="text-xs text-stone-400 font-medium">{review.product}</span>
                                    </div>
                                    <div className="flex gap-2 mt-2">
                                        {review.tags.map((tag, i) => (
                                            <span key={i} className="bg-stone-50 text-stone-500 text-xs px-2 py-1 rounded-md">#{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Scroll Indicator Hint */}
                <div className="md:hidden flex justify-center mt-4 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
