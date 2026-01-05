import { ArrowRight } from 'lucide-react';

const TALK_URL = "https://talk.naver.com/wi2drb9";

export default function ApplyCTA({ text = "리포트 신청하기(네이버 톡톡)" }) {
  return (
    <a href={TALK_URL} target="_blank" rel="noopener noreferrer">
      <button type="button" className="px-6 py-3 rounded-xl border border-stone-200 hover:bg-stone-50 text-stone-800 font-semibold transition flex items-center gap-2">
        {text} <ArrowRight className="w-4 h-4" />
      </button>
    </a>
  );
}
