import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Counselor = () => {
    return (
        <section className="py-20 md:py-32 px-4 bg-[#FDFCF8] overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

                    {/* Profile Image Section */}
                    <div className="w-full md:w-5/12 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50 bg-gradient-to-b from-amber-50 to-[#FFE4C4]"
                        >
                            <img
                                src={profileImg}
                                alt="결 테라피스트"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient for text readability if needed, or just style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 md:opacity-100 transition-opacity"></div>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl -z-0"></div>
                    </div>

                    {/* Text Content Section */}
                    <div className="w-full md:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-bold tracking-wider uppercase border border-stone-200">
                                    Counselor Introduction
                                </span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 font-serif">
                                당신의 고유한 '결'을<br />
                                읽어드리는 <span className="text-amber-600">결 테라피스트</span>입니다.
                            </h2>

                            <div className="space-y-6 text-stone-600 leading-relaxed font-light text-lg">
                                <p>
                                    <Quote className="inline-block w-4 h-4 text-stone-300 mr-2 -mt-2 transform rotate-180" />
                                    운명은 정해진 것이 아니라, <strong className="text-stone-800 font-medium">내 기질을 알고 선택할 때 비로소 내 편이 됩니다.</strong>
                                </p>
                                <p>
                                    저는 단순히 "올해 운이 좋다, 나쁘다"를 맞히는 것에 그치지 않습니다.
                                    수천 년의 데이터인 <strong className="text-stone-800 font-medium">명리학(Saju)</strong>과
                                    현대 심리학의 도구인 <strong className="text-stone-800 font-medium">TCI(기질분석)·홀랜드(적성탐색)</strong>를 결합하여,
                                    당신이 타고난 강점을 발견하고 현실적인 삶의 해답을 찾도록 돕습니다.
                                </p>
                                <p>
                                    막연한 불안감 속에서 흔들리고 있다면,
                                    이제 당신만의 '결'대로 살아가는 방법을 이야기 나눌 시간입니다.
                                </p>
                            </div>

                            <div className="mt-10 p-6 bg-white rounded-2xl border border-stone-100 shadow-sm flex flex-col md:flex-row gap-6 md:items-center">
                                <div className="space-y-1">
                                    <h4 className="font-bold text-stone-900">전문 분야</h4>
                                    <p className="text-sm text-stone-500">Traditional Saju & Psychology</p>
                                </div>
                                <div className="h-px md:h-12 w-full md:w-px bg-stone-200"></div>
                                <ul className="text-sm text-stone-600 space-y-1">
                                    <li className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                        <span>현대 명리학 기반 심층 사주 분석</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                        <span>TCI 기질 및 성격 검사 전문가</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                        <span>홀랜드 진로 탐색 및 커리어 코칭</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counselor;
