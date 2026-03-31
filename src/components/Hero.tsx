"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden px-6 shrink-0 section-padding" style={{
        backgroundColor: '#FFFCF9',
        paddingTop: '180px',
      }}>
        {/* Background Image Container - Centered 1200px Area */}
        <div
          className="absolute inset-0 z-0 flex md:justify-end pointer-events-none md:max-w-[1200px]"
          style={{
            margin: '0 auto'
          }}
        >
          <div className="w-full h-full md:max-w-[700px] relative ">
            <Image
              src="/images/hero_family_care_refined.png"
              alt="가족 간병 배경"
              fill
              className="object-cover object-center opacity-30 md:object-contain md:object-right md:opacity-100"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 35%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 35%, black 85%, transparent)'
              }}
              priority
            />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10">
          <div className="max-w-2xl">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Heading */}
              <h1 className="text-[36px] md:text-[60px] font-bold tracking-tight text-text-deep leading-[1.2] md:leading-[68px] mb-[40px]">
                가족간병 <br /><span className="text-primary">보험금 지급 청구</span> <br />
                쉽고 편하게
              </h1>

              {/* Subheader */}
              <p className="text-base md:text-lg text-text-body font-medium leading-[1.6] md:leading-[29px] mb-[40px] max-w-xl">
                가족간병 보험청구방법, 가장 쉽고 빠른 길을 안내합니다. <br className="hidden md:block" />
                가족 간병인 등록부터 서류 발급, 설계사 전송까지 온누리케어가 통합 지원합니다.
              </p>

              {/* CTA Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center gap-3 bg-primary text-white font-black hover:brightness-105 transition-all shadow-[0px_25px_50px_-12px_rgba(230,126,34,0.4)]"
                  style={{
                    height: '68px',
                    paddingLeft: '48px',
                    paddingRight: '48px',
                    fontSize: '20px',
                    borderRadius: '16px'
                  }}
                >
                  간병인 신청하기
                  <ArrowRight size={20} className="stroke-[3px]" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-[32px] p-10 text-center shadow-2xl"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 text-text-muted hover:text-text-deep transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl">
                🚀
              </div>

              <h2 className="text-2xl font-black text-text-deep mb-4">
                서비스 준비 중입니다!
              </h2>

              <p className="text-text-body text-lg leading-relaxed mb-10">
                더욱 완벽한 서비스를 위해 <br />
                열심히 준비하고 있습니다. <br />
                <span className="text-primary font-bold">2026.08월</span>에 만나요!
              </p>

              <button
                onClick={() => setShowModal(false)}
                className="w-full h-16 bg-text-deep text-white rounded-[16px] font-bold hover:brightness-110 transition-all text-lg"
              >
                확인
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
