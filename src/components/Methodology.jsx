import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, Compass, Briefcase } from 'lucide-react';
import toolTci from '../assets/tool_tci.png';
import toolHolland from '../assets/tool_holland.png';
import toolSaju from '../assets/tool_saju.png';
import toolTarot from '../assets/tool_tarot.png';

const methodologies = [
    {
        icon: Brain,
        title: "1) 심리 검사: TCI (기질) 검사",
        image: toolTci,
        desc: "불안해질 때, 관계가 흔들릴 때 자동으로 튀어나오는 내 기질적 특성을 이해합니다.",
        tags: ["#기질분석", "#반응패턴", "#내면이해"],
        color: "text-rose-700",
        bg: "bg-rose-50"
    },
    {
        icon: Briefcase,
        title: "2) 심리 검사: 홀랜드 (적성) 검사",
        image: toolHolland,
        desc: "내가 어떤 환경에서 일할 때 가장 빛나는지, 직업적 흥미와 적성을 분석합니다.",
        tags: ["#적성탐색", "#강점발견", "#커리어매칭"],
        color: "text-indigo-700",
        bg: "bg-indigo-50"
    },
    {
        icon: Sparkles,
        title: "3) 사주 명리 (흐름)",
        image: toolSaju,
        desc: "지금 이 시기에 왜 유독 그 문제가 커지는지 흐름의 결(타이밍)을 읽어냅니다.",
        tags: ["#운의흐름", "#시기포착", "#나만의계절"],
        color: "text-amber-700",
        bg: "bg-amber-50"
    },
    {
        icon: Compass,
        title: "4) 타로 카드 (선택)",
        image: toolTarot,
        desc: "당장 바꿔야 하는 선택지 A/B, 현재 상황에서의 최선의 전략을 구체화합니다.",
        tags: ["#선택전략", "#무의식탐색", "#행동가이드"],
        color: "text-emerald-700",
        bg: "bg-emerald-50"
    }
];

const Methodology = () => {
    return (
        <section className="py-12 md:py-24 px-4 bg-stone-50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-amber-700 font-bold tracking-wider text-sm uppercase">Our Method</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-6">결 상담소의 4가지 분석 도구</h2>
                    <p className="text-stone-600 max-w-2xl mx-auto text-lg mb-8">
                        과학적 심리 검사(TCI, 홀랜드)와 동양의 지혜(사주, 타로).<br className="md:hidden" />
                        4가지 도구로 입체적인 해답을 드립니다.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {methodologies.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl bg-white border border-stone-200 hover:border-amber-200 transition-all shadow-sm hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
                        >
                            <div className="h-40 overflow-hidden relative bg-stone-100">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <div className="absolute top-0 left-0 w-full h-full bg-black/5 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 flex items-center gap-2">
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                    {item.title.includes(":") ? item.title.split(":")[1].trim() : item.title.replace(/^\d+\)\s*/, "")}
                                </h3>
                                <p className="text-stone-600 leading-relaxed mb-4 text-sm md:text-[15px] flex-grow word-keep-all">
                                    {item.desc}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-auto pt-4 border-t border-stone-100">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium text-stone-500 bg-stone-50 px-2 py-1 rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Methodology;
