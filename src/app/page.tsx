import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import FAQ from "@/components/FAQ";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center px-6 glass-effect" style={{ boxShadow: '0 4px 10px rgba(255, 237, 213, 0.5)' }}>
        <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Heart size={18} fill="currentColor" />
            </div>
            <div className="text-xl font-bold text-text-dark tracking-tight">
              온누리케어 <span className="text-text-muted font-medium text-lg">간병협회</span>
            </div>
          </div>

          <div className="hidden md:flex gap-10 text-[15px] font-semibold text-text-dark">
            <a href="#services" className="hover:text-primary transition-colors">서비스 소개</a>
            <a href="#registration" className="hover:text-primary transition-colors">가족 간병 등록</a>
            <a href="#faq" className="hover:text-primary transition-colors">자주 묻는 질문</a>
          </div>

        </div>
      </nav>

      <Hero />
      <Features />
      <Workflow />
      <FAQ />

      {/* Footer */}
      <footer className="bg-text-deep text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Heart size={20} className="text-primary" fill="currentColor" />
                <span className="text-lg font-bold">온누리케어간병협회</span>
              </div>
              <p className="text-sm text-text-sub leading-relaxed">
                가족 간병인 등록 및 보험금 청구 지원 서비스, 온누리케어.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-xs">💬</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-xs">🔗</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm text-text-sub">주요 서비스</h4>
              <ul className="space-y-2 text-sm text-text-sub">
                <li><a href="#" className="hover:text-white transition-colors">가족 간병인 등록 절차</a></li>
                <li><a href="#" className="hover:text-white transition-colors">간병 확인서 발급</a></li>
                <li><a href="#" className="hover:text-white transition-colors">보험금 청구 지원</a></li>
                <li><a href="#" className="hover:text-white transition-colors">협회 회원 가입</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm text-text-sub">고객 지원</h4>
              <ul className="space-y-2 text-sm text-text-sub">
                <li><a href="#" className="hover:text-white transition-colors">자주 묻는 질문</a></li>
                <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
                <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
              </ul>
            </div>

            <div className="space-y-4 hidden">
              <h4 className="font-bold text-sm text-text-sub">고객센터</h4>
              <div className="text-2xl font-bold">1588-XXXX</div>
              <p className="text-xs text-text-sub">
                상담가능시간: 평일 09:00 - 18:00 (토, 일, 공휴일 휴무)
              </p>
              <button className="w-full py-3 rounded-[12px] bg-primary text-white font-bold hover:brightness-110 transition-all">
                카카오톡 상담
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-xs text-text-sub flex justify-center items-center">
            <p>© 2024 온누리케어 간병인협회. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
