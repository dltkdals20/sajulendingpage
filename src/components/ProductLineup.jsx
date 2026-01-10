import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Map, Sparkles, Compass, UserCheck, Check, ArrowRight, Monitor, Download } from 'lucide-react';

import reportImg from '../assets/report.png';
import roadmapImg from '../assets/roadmap.png';
import careerImg from '../assets/career.png';
import counselingImg from '../assets/counseling.png';
import ApplyCTA from './ApplyCTA';

const ProductLineup = () => {
    return (
        <section className="py-12 md:py-24 px-4 bg-white border-t border-dashed border-stone-200">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 md:mb-6">결 상담소 솔루션</h2>
                    <p className="text-stone-500 max-w-2xl mx-auto text-lg word-keep-all">
                        나에게 딱 맞는 해답을 선택하세요.<br className="hidden md:block" />
                        가벼운 리포트부터 심층 솔루션까지 준비되어 있습니다.
                    </p>
                </div>

                <div className="space-y-8">
                    {/* 1. Entry Level: Report */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row group rounded-3xl bg-white border border-stone-200 hover:border-stone-300 transition-all shadow-sm overflow-hidden"
                    >
                        <div className="md:w-2/5 h-auto relative min-h-[300px] flex flex-col bg-[#FDF9F3]">
                            {/* Chart Image */}
                            <div className="relative">
                                <img src={reportImg} alt="Saju Report" className="w-full object-contain bg-stone-50" />
                                <div className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-stone-100/90 backdrop-blur-sm text-xs font-bold text-stone-600">
                                    입문용
                                </div>
                            </div>

                            {/* Analysis Text Sample */}
                            <div className="p-6 text-sm text-stone-700 font-sans border-t border-stone-100">
                                <h4 className="text-base font-bold text-stone-900 mb-2">일간 분석</h4>
                                <p className="text-stone-500 text-xs leading-relaxed mb-4">
                                    일간은 ‘나’ 자체를 뜻하는 핵심 값이라, 타고난 기질과 에너지 방향(기본 성향)을 보여줘요.<br />
                                    그래서 어떤 상황에서도 반복되는 내 반응 패턴과 강점을 이해하는 기준이 됩니다.
                                </p>

                                <div className="bg-[#F5EFE6] p-4 rounded-xl mb-4 border-l-4 border-amber-400">
                                    <ul className="space-y-1.5 text-stone-800 font-medium">
                                        <li>제련되지 않은 거친 원석의 기질입니다.</li>
                                        <li>의리와 뚝심, 뜨거운 열정을 지녔습니다.</li>
                                        <li>생각이 많아 행동이 지체될 수 있습니다.</li>
                                    </ul>
                                </div>

                                <div className="space-y-4 text-xs leading-relaxed text-stone-600 text-justify">
                                    <p>
                                        <span className="font-bold text-stone-800">회원님</span>은 자연물로 비유하면 제련되지 않은 거친 원석이나 바위와 같습니다. 기본적으로 의리가 있고 결단력이 빠르며, 한번 마음먹은 일은 끝까지 밀고 나가는 뚝심을 지녔습니다. 겉으로는 무뚝뚝해 보일 수 있으나 내면에는 뜨거운 열정을 품고 있으며, 불의를 보면 참지 못하는 정의감도 갖추고 있습니다.
                                    </p>
                                    <p>
                                        태어난 달인 인월(봄)이라 목의 기운이 강하지만, 사주 전체적으로 토(인성)의 세력이 매우 강해 일간을 돕고 있습니다. 이는 '인다신약(印多身弱)'에 가까운 형태이거나, 괴강살의 영향으로 기질 자체는 신강하게 작용합니다. 다만, 생각이 너무 많아 행동이 지체될 수 있는 점은 경계해야 합니다.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1.5 mt-5">
                                    {["원석", "의리", "결단력", "뚝심", "열정", "정의감", "인성", "신강"].map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-white border border-stone-200 rounded-full text-[10px] text-amber-700 font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText className="w-5 h-5 text-stone-400" />
                                    <h3 className="text-2xl font-bold text-stone-900">전통 사주 핵심 리포트 (2026 신년운세 포함)</h3>
                                </div>
                                <p className="text-stone-500 leading-relaxed">지금 내 흐름을 읽고, 2026년을 덜 흔들리고 더 잘 풀리게 준비합니다.</p>
                            </div>

                            <ul className="space-y-4 mb-8 text-sm text-stone-600">
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-stone-400 mt-0.5 shrink-0" />
                                    <div>
                                        <strong>나는 어떤 사람이고, 왜 그렇게 반응하는지</strong>
                                        <p className="text-stone-400 text-xs mt-1">타고난 성향의 중심(일간·일주)을 짚어드립니다.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-stone-400 mt-0.5 shrink-0" />
                                    <div>
                                        <strong>내가 잘하는 방식 / 무너지는 방식</strong>
                                        <p className="text-stone-400 text-xs mt-1">일·관계·감정에서 반복되는 패턴을 정리합니다.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-stone-400 mt-0.5 shrink-0" />
                                    <div>
                                        <strong>2026년 내 인생에 ‘필요한 에너지’는 무엇인가</strong>
                                        <p className="text-stone-400 text-xs mt-1">부족한 기운을 체감 언어로 번역해 드립니다.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-stone-400 mt-0.5 shrink-0" />
                                    <div>
                                        <strong>운이 좋아지게 만드는 ‘현실 실행법’</strong>
                                        <p className="text-stone-400 text-xs mt-1">돈·일·관계·건강에서 지금 당장 바꿀 수 있는 행동으로 제시합니다.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-stone-400 mt-0.5 shrink-0" />
                                    <div>
                                        <strong>2026 신년운세 5대 영역 (직장·사업·연애·재물·건강)</strong>
                                        <p className="text-stone-400 text-xs mt-1">직장운, 사업운, 연애운, 재물운, 건강운 완벽 분석</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                                    <div>
                                        <span className="font-bold text-amber-700">2026년 ‘지금 당장’ 해야 할 3가지 행동</span>
                                        <p className="text-stone-400 text-xs mt-1">올해 운을 내 편으로 만드는 실행 리스트</p>
                                    </div>
                                </li>
                            </ul>

                            <div className="bg-stone-50 rounded-2xl p-5 mb-8 text-stone-600 text-sm border border-stone-200">
                                <div className="flex items-start gap-3 mb-2">
                                    <Monitor className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-stone-900 block mb-0.5">100% 비대면 진행</strong>
                                        <p className="text-stone-500 text-xs">방문 없이, 편하신 시간에 확인하세요.</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-stone-200 my-3"></div>
                                <div className="flex items-start gap-3">
                                    <Download className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                                    <div>
                                        <strong className="text-stone-900 block mb-0.5">읽기 쉬운 PDF 리포트</strong>
                                        <p className="text-stone-500 text-xs">어려운 용어는 빼고, 평생 소장 가능한 파일로 드립니다.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="mt-auto">
                                <div className="flex flex-col items-end gap-3 mb-4">
                                    <div className="text-right">
                                        <div className="text-sm text-stone-500 mb-1">비대면 PDF 제공</div>
                                        <div className="text-2xl font-bold text-stone-900">가격: 13,000원</div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-end gap-3 mb-2">
                                    <a href="https://sajureportdetailpage-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="px-6 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 font-semibold transition flex items-center gap-2">
                                            상품자세히 보기 <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </a>
                                    <ApplyCTA />
                                </div>
                                <p className="text-xs text-stone-400 text-right">
                                    * 안내사항: 리포트는 신청 후 24시간 이내로 링크로 전달됩니다.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Seasonal: Roadmap */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row-reverse group rounded-3xl bg-[#FFFCF5] border border-amber-200 shadow-md relative overflow-hidden"
                    >
                        <div className="md:w-2/5 h-48 md:h-auto overflow-hidden relative">
                            <img src={roadmapImg} alt="2026 Roadmap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 inline-block px-3 py-1 rounded-full bg-amber-500 text-xs font-bold text-white shadow-sm">
                                BEST SELLER
                            </div>
                        </div>
                        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <span className="inline-block text-amber-600 font-bold text-xs tracking-wide uppercase mb-2">Season Exclusive</span>
                                <div className="flex items-center gap-2 mb-2">
                                    <Map className="w-5 h-5 text-amber-600" />
                                    <h3 className="text-xl md:text-2xl font-bold text-stone-900">2026 병오년 신년운세 (온라인/PC 줌) | 사주×타로</h3>
                                </div>
                                <div className="text-stone-500 leading-relaxed text-sm space-y-4">
                                    <p>
                                        사주로는 <strong className="text-stone-700">2026년에 내게 좋은 운이 들어오는지(흐름의 유불리)</strong>를 확인하고,
                                        올해를 직장·사업·연애·재물·건강 5대 영역 키워드로 정리합니다.
                                    </p>
                                    <p>
                                        타로로는 신년운세 13장 리딩을 통해
                                        올해를 5대 영역에 맞춰 더 구체적으로 펼쳐 보고, 변수·조언·도움·장애물·결과까지 함께 읽어드립니다.
                                    </p>
                                    <p className="p-3 bg-amber-50 rounded-lg text-amber-800 font-medium text-xs">
                                        ✅ 사주로 큰 방향을 잡고, 타로로 선택의 힌트와 디테일을 보완하면 2026년은 ‘예측’이 아니라 내가 설계해서 쓰는 한 해가 됩니다.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-stone-900 mb-3 text-sm">포함 내용</h4>
                                <ul className="space-y-2 text-sm text-stone-600">
                                    {[
                                        "사주 신년운세: 운의 유불리 + 5대 영역 키워드",
                                        "타로 신년운세 13장 (5대 영역 확장 리딩)",
                                        "일(직장·사업): 타인의 도움 + 장애물 + 성과 흐름",
                                        "돈(재물 흐름): 금전 운 + 구체적 결과",
                                        "관계: 가족 / 형제 / 우정 / 연애 / 결혼",
                                        "건강: 컨디션 관리 및 번아웃 주의 신호",
                                        "성장: 시험운 / 학업운 / 새로운 도전",
                                        "올해의 중심축: 2026년을 관통하는 핵심 테마",
                                        "실전 가이드: 올해 운을 살리는 행동 3가지 + Do/Don't"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-5 mb-8 text-stone-600 text-sm border border-stone-100 shadow-sm">
                                <strong className="block text-stone-900 mb-2">진행 방식</strong>
                                <ul className="space-y-1.5 text-xs">
                                    <li className="flex items-start gap-2">
                                        <Monitor className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                                        <span><strong>온라인 상담 (PC Zoom)</strong>으로 진행됩니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 flex justify-center text-amber-500">•</span>
                                        <span>카메라 OFF 상태로 편안하게 참여하세요.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 flex justify-center text-amber-500">•</span>
                                        <span>타로 카드는 <strong>본인이 직접 선택</strong>합니다. (대리 뽑기 X)</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-col items-end gap-3 mb-4">
                                    <div className="text-right">
                                        <div className="text-sm text-stone-500 mb-1">(PC 줌(Zoom) / 카카오톡 / 전화 중 선택) 40~50분 상담</div>
                                        <div className="text-xl font-bold text-stone-900">가격: 30,000원</div>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row justify-end gap-3 mb-2">
                                    <a href="https://sajutarodetailpage-production.up.railway.app/" target="_blank" rel="noopener noreferrer">
                                        <button type="button" className="px-6 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 font-semibold transition flex items-center gap-2">
                                            상품자세히 보기 <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </a>
                                    <ApplyCTA text="2026년 신년운세 신청(네이버 톡톡)" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Signature A: Career Compass */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row group rounded-3xl bg-white border border-stone-200 hover:border-1 hover:border-emerald-200 transition-all shadow-sm overflow-hidden"
                    >
                        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                            <img src={careerImg} alt="Career Compass" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 left-4 inline-block px-3 py-1 rounded-full bg-emerald-50 text-xs font-bold text-emerald-700 border border-emerald-100">
                                New
                            </div>
                        </div>
                        <div className="md:w-3/5 p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Compass className="w-5 h-5 text-emerald-600" />
                                    <h3 className="text-xl md:text-2xl font-bold text-stone-900">커리어 시그니처 | 사주×홀랜드×직업가치관 통합 커리어 리딩</h3>
                                </div>
                                <div className="text-stone-500 leading-relaxed text-sm space-y-4">
                                    <p>
                                        적성(홀랜드)·가치관·기질(일주·십성)을 연결해, 나에게 맞는 직무·환경·역할 조합을 정리합니다.
                                    </p>
                                    <p>
                                        커리어 시그니처는 “직업을 찍어 맞히는” 방식이 아니라,<br className="hidden md:block" />
                                        사주를 동양 성격심리 도구로 활용해 나의 성향과 강점을 읽고,<br className="hidden md:block" />
                                        서양의 <strong className="text-stone-700">전문 커리어검사(홀랜드·직업가치관)</strong>로 적성과 기준을 검증해
                                        현실적으로 선택 가능한 커리어 방향을 정리하는 프로그램입니다.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-stone-900 mb-3 text-sm">진행 흐름</h4>
                                <div className="space-y-4 text-sm text-stone-600">
                                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                        <strong className="block text-emerald-800 mb-2">1) 홀랜드(RIASEC)로 적성 방향 진단</strong>
                                        <p className="text-xs mb-2">현실형(R) / 탐구형(I) / 예술형(A) / 사회형(S) / 진취형(E) / 관습형(C)</p>
                                        <p className="text-xs text-stone-500">
                                            이 중 <strong>상위 유형 조합(보통 2~3개)</strong>을 바탕으로 내가 자연스럽게 끌리는 업무 활동 방식과 맞는 직무 방향을 정리합니다.
                                        </p>
                                    </div>
                                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                        <strong className="block text-emerald-800 mb-2">2) 직업가치관 검사로 선택 기준 확정</strong>
                                        <p className="text-xs text-stone-500">
                                            보상/안정/성장/자율/관계/의미 등 내가 일을 선택할 때 실제로 중요하게 여기는 가치 우선순위를 정리합니다.
                                        </p>
                                    </div>
                                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                        <strong className="block text-emerald-800 mb-2">3) 사주(일주·십성)로 강점과 일하는 기질 정교화</strong>
                                        <p className="text-xs mb-1">• 일주: 성향의 중심(반응 방식, 관계 스타일, 의사결정 습관)</p>
                                        <p className="text-xs mb-2">• 십성: 강점이 발휘되는 역할 + 반복 리스크 패턴 점검</p>
                                        <p className="text-xs text-stone-500">→ 검사 결과가 내 기질과 맞는지 확인하고, 현실적인 방향으로 다듬습니다.</p>
                                    </div>
                                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                                        <strong className="block text-emerald-800 mb-2">4) 통합 결론 제안</strong>
                                        <ul className="text-xs text-stone-500 space-y-1">
                                            <li>• 나에게 맞는 직무 후보군 추천(우선순위 포함)</li>
                                            <li>• “직업명”뿐 아니라 업무 환경/조직 형태/역할 조합까지 함께 정리합니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-stone-900 mb-3 text-sm">최종 제공 결과</h4>
                                <ul className="space-y-2 text-sm text-stone-600">
                                    {[
                                        "나의 최적 업무 환경 분석",
                                        "일할 때 반복되는 패턴 & 리스크 정리",
                                        "나에게 맞는 직무 후보군 추천(우선순위)",
                                        "업무 환경/조직 형태/역할 조합 제안"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-5 mb-8 text-stone-600 text-sm border border-stone-100 shadow-sm">
                                <strong className="block text-stone-900 mb-3">진행 방식</strong>
                                <ol className="space-y-3 text-xs list-decimal pl-4 marker:text-emerald-600 marker:font-bold">
                                    <li>
                                        <strong>사전 심리검사 진단</strong>
                                        <p className="text-stone-500 mt-0.5">홀랜드(RIASEC) 및 직업가치관 등 심리검사 진단을 먼저 진행합니다.</p>
                                    </li>
                                    <li>
                                        <strong>심리검사 진단지 제출(결쌤에게 발송)</strong>
                                        <p className="text-stone-500 mt-0.5">검사 완료 후, 결과지를 발송해주시면 상담 전 핵심 포인트를 미리 분석합니다.</p>
                                    </li>
                                    <li>
                                        <strong>상담 진행(온라인)</strong>
                                        <div className="text-stone-500 mt-0.5 space-y-1">
                                            <p>• 상담 방식은 <strong>PC 줌(Zoom) / 카카오톡 / 전화 상담</strong> 중 선택 가능합니다.</p>
                                            <p>• 줌 진행 시 카메라 OFF 상태로 편안하게 진행됩니다.</p>
                                            <p>• 상담에서 <strong>홀랜드·가치관 결과 + 사주(일주·십성)</strong>를 통합 해석해 나에게 맞는 직무 후보군/업무 환경/역할 조합을 정리합니다.</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-col items-end gap-3 mb-4">
                                    <div className="text-right">
                                        <div className="text-sm text-stone-500 mb-1">(PC 줌(Zoom) / 카카오톡 / 전화 중 선택) 40~50분 상담</div>
                                        <div className="text-xl font-bold text-stone-900">가격: 30,000원</div>
                                    </div>
                                </div>
                                <div className="flex justify-end mb-2">
                                    <ApplyCTA text="내 커리어 찾기(네이버 톡톡)" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. Signature B: Deep Counseling */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row-reverse group rounded-3xl bg-white border border-stone-200 hover:border-purple-200 transition-all shadow-sm overflow-hidden"
                    >
                        <div className="md:w-2/5 h-auto relative min-h-[300px] overflow-hidden relative">
                            <img src={counselingImg} alt="Deep Counseling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-4 right-4 inline-block px-3 py-1 rounded-full bg-purple-50 text-xs font-bold text-purple-700 border border-purple-100">
                                Signature
                            </div>
                        </div>
                        <div className="md:w-3/5 p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <UserCheck className="w-5 h-5 text-purple-600" />
                                    <h3 className="text-xl md:text-2xl font-bold text-stone-900">1:1 마음 솔루션 | TCI×사주×타로 통합 상담</h3>
                                </div>
                                <div className="text-stone-500 leading-relaxed text-sm space-y-4">
                                    <p>
                                        내 마음 상태를 정확히 읽고, 앞으로의 선택과 흐름을 준비하는 상담입니다.
                                    </p>
                                    <p>
                                        이 상담은 감정이 흔들리는 이유를 “그때그때의 기분”으로만 보지 않고,<br className="hidden md:block" />
                                        <strong>기질(TCI)–흐름(사주)–선택(타로)</strong>을 함께 보며<br className="hidden md:block" />
                                        내 마음의 패턴을 이해하고, 앞으로의 방향을 정리합니다.
                                    </p>
                                    <ul className="list-disc pl-4 space-y-1 mt-2 text-stone-600">
                                        <li>TCI로 타고난 기질과 스트레스 반응(불안/회피/과몰입/예민함)을 파악하고</li>
                                        <li>사주로 앞으로의 큰 흐름 속에서 어떤 이슈가 부각되는지 확인하며</li>
                                        <li>타로로 지금의 마음 메시지와 선택의 변수를 정리합니다.</li>
                                    </ul>
                                    <p className="p-3 bg-purple-50 rounded-lg text-purple-800 font-medium text-xs">
                                        ✅ 그래서 “위로로 끝나는 상담”이 아니라, 반복되는 마음·관계·선택 패턴을 이해하고 현실적인 대응을 준비하는 상담이 됩니다.
                                    </p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-stone-900 mb-3 text-sm">포함 내용</h4>
                                <ul className="space-y-2 text-sm text-stone-600">
                                    {[
                                        "내 마음 상태 진단(지금의 컨디션/불안/갈등 포인트)",
                                        "반복 패턴 해석(관계/선택/자기비난/회피 등)",
                                        "TCI 검사 및 해석 포함(강점/취약점, 스트레스 반응, 회복 포인트)",
                                        "사주×타로 통합 리딩(큰 흐름 + 선택의 변수 점검)",
                                        "현실적인 정리: 앞으로의 준비 방향, 선택 기준, 감정/관계 대응 포인트"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <Check className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-stone-900 mb-3 text-sm">타로 카드 구성</h4>
                                <ul className="space-y-2 text-sm text-stone-600">
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                                        <span><strong>타로 리딩</strong>은 웨이트 카드와 이너액티브 카드를 함께 활용합니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                                        <span><strong>웨이트 카드</strong>: 상황의 구조와 흐름을 명확하게</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0"></span>
                                        <span><strong>이너액티브 카드</strong>: 감정/욕구/내면 메시지를 더 섬세하게</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-5 mb-8 text-stone-600 text-sm border border-stone-100 shadow-sm">
                                <strong className="block text-stone-900 mb-2">진행 방식</strong>
                                <ul className="space-y-1.5 text-xs">
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 flex justify-center text-purple-500">•</span>
                                        <span>진행은 <strong>1:1 상담</strong>으로 이루어집니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 flex justify-center text-purple-500">•</span>
                                        <span>상담 방식은 <strong>PC 줌(Zoom) / 카카오톡 / 전화</strong> 중 선택 가능합니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 flex justify-center text-purple-500">•</span>
                                        <span>줌 진행 시 카메라 OFF 상태로 편안하게 진행됩니다.</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-4 flex justify-center text-purple-500">•</span>
                                        <span>TCI는 사전 검사 진행 후, <strong>결과지를 메일로 함께 보내드립니다.</strong></span>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto">
                                <div className="flex flex-col items-end gap-3 mb-4">
                                    <div className="text-right">
                                        <div className="text-sm text-stone-500 mb-1">(PC 줌(Zoom) / 카카오톡 / 전화 중 선택) 40~50분 상담</div>
                                        <div className="text-xl font-bold text-stone-900">가격: 35,000원</div>
                                    </div>
                                </div>
                                <div className="flex justify-end mb-2">
                                    <ApplyCTA text="상담 예약하기(네이버 톡톡)" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div >
        </section >
    );
};

export default ProductLineup;
