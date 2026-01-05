import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-12 md:pt-20 pb-10 text-center">
            {/* Warm Background Effects */}
            <div className="absolute inset-0 -z-20">
                <img src={heroBg} alt="Warm desk with tarot cards" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#F5E6D3,transparent)] -z-10 opacity-60"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),#FFF)] -z-10"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-8"
            >
                <span className="inline-block px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-sm md:text-base text-stone-600 font-medium">
                    결 상담소 | 결쌤
                </span>

                <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight text-stone-900">
                    인생의 결 · 마음의 결을 읽어,<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600">선택의 결을 바꿉니다</span>
                </h1>

                <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
                    같은 고민이 반복될 때는 운만의 문제가 아닙니다.<br className="hidden md:block" />
                    <strong className="text-amber-800">마음의 결(반응 패턴)</strong>과 <strong className="text-amber-800">인생의 결(흐름)</strong>이<br className="hidden md:block" /> 겹쳐서 생기는 문제입니다.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                    <a href="https://talk.naver.com/wi2drb9" target="_blank" rel="noopener noreferrer">
                        <button className="px-8 py-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-lg transition-all shadow-lg shadow-stone-900/10 flex items-center gap-2 group">
                            결쌤 상담 신청하기(네이버 톡톡)
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </a>

                    <button className="px-8 py-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-stone-700 font-medium transition-all shadow-sm">
                        사전 질문 먼저 작성하기
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
