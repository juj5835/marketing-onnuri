"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const router = useRouter();

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
                가족 간병비 <br /><span className="text-primary">보험금 청구 방법</span> <br />
                가장 쉽고 빠르게
              </h1>

              {/* Subheader */}
              <p className="text-base md:text-lg text-text-body font-medium leading-[1.6] md:leading-[29px] mb-[40px] max-w-xl">
                가족 간병비 보험금 청구 및 보장 받는 법, 온누리케어가 통합 지원합니다. <br className="hidden md:block" />
                가족 간병인 등록부터 디지털 간병일지 작성, 보험 설계사 전송까지 한 번에 해결하세요.
              </p>

              {/* CTA Button */}
              <div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => router.push('/guide')}
                  className="flex items-center justify-center gap-3 bg-primary text-white font-black hover:brightness-105 transition-all shadow-[0px_25px_50px_-12px_rgba(230,126,34,0.4)]"
                  style={{
                    height: '68px',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    fontSize: '20px',
                    borderRadius: '16px'
                  }}
                >
                  가족 간병비 보험 청구 방법
                  <ArrowRight size={20} className="stroke-[3px]" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
}
