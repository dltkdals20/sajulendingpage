import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import characterWorryImg from '../assets/character_worry.png';

const painPoints = [
    "같은 관계/상황에서 늘 비슷하게 무너진다",
    "결정을 내려야 하는데 A/B 앞에서 멈춘다",
    "머리로는 아는데 감정이 따라오지 않아 자책이 쌓인다",
    "불안·예민·완벽·회피 같은 패턴이 반복된다",
    "“이건 내 성향이야? 시기야? 선택 문제야?”가 헷갈린다"
];

const Features = () => {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">이런 분께 권합니다</h2>
                    <p className="text-stone-500 text-lg">혹시 지금 이런 마음이신가요?</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        {painPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all hover:border-amber-200"
                            >
                                <div className="mt-1 bg-red-50 p-2 rounded-full shrink-0">
                                    <AlertCircle className="w-5 h-5 text-red-700/70" />
                                </div>
                                <span className="text-stone-700 leading-relaxed font-medium">{point}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative hidden md:block h-full min-h-[400px]">
                        {/* Character Image Visual */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-stone-100">
                                <img src={characterWorryImg} alt="Worried character looking out window" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                                    <p className="font-bold text-lg mb-1">혼자 끙끙 앓지 마세요.</p>
                                    <p className="text-sm text-stone-200">당신의 고민을 "이해"하고 "해결"로 연결해드립니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
