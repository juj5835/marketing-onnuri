"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X } from 'lucide-react';

const steps = [
  {
    title: '1. 간병 상황 발생',
    desc: '연로하신 부모님, 어린 자녀, 혹은 배우자가 입원시 전문 간병인 대신 가족이 간병하는 상황이 발생합니다.',
    details: ['가족(부모, 자녀, 배우자) 입원 시'],
  },
  {
    title: '2. 간병인 등록 ',
    desc: '간병 업무를 시작하기 전 반드시 온누리케어에 간병인 등록을 완료해야 합니다.',
    isCritical: true,
    details: [
      '중요: 간병인 등록 시점부터 보험 청구가 가능합니다.',
      '등록 이전의 간병 기간은 소급 적용되지 않습니다.',
      '간병인 정보, 환자 정보, 관계, 설계사 정보 등록'
    ],
  },
  {
    title: '3. 입퇴원 서류 등록',
    desc: '퇴원후 병원에서 발급받은 입퇴원 확인서 및 관련 서류를 등록합니다.',
    details: ['입퇴원 증명서 및 병원 서류 등록'],
  },
  {
    title: '4. 간병일지 작성',
    desc: '정확한 간병 시간 증빙을 위해 간병일지를 작성합니다.',
    details: [
      '하루 8시간 이상의 간병 기록 필수 (보험 혜택 기준)',
      '의료 기록과 일치해야 하며, 불일치 시 보장이 어려울 수 있음'
    ],
  },
  {
    title: '5. 보험 청구 서류 전달',
    desc: '작성된 일지와 발급된 서류를 담당 보험 설계사에게 직접 전송하여 청구를 완료합니다.',
    details: ['비대면 서류 전송 및 청구 접수 완료'],
  },
];

export default function GuideContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-center px-6 glass-effect" style={{ boxShadow: '0 4px 10px rgba(255, 237, 213, 0.3)' }}>
        <div className="max-w-[1200px] mx-auto w-full flex justify-start items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Heart size={18} fill="currentColor" />
            </div>
            <div className="text-xl font-bold text-text-dark tracking-tight">
              온누리케어 <span className="text-text-muted font-medium text-lg">간병협회</span>
            </div>
          </Link>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 pt-10"
      >
        <h1 className="text-4xl md:text-5xl font-black text-text-deep leading-[1.2] mb-8">
          가족 간병비 <br className="md:hidden" />
          보상 받는 법
        </h1>
        <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed max-w-2xl mx-auto">
          온누리케어와 함께라면 복잡한 서류와 절차 없이 <br className="hidden md:block" />
          가족 간병의 정당한 가치를 인정받을 수 있습니다.
        </p>
      </motion.div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            {/* Content Card */}
            <div className={`p-8 md:p-10 rounded-[32px] border bg-white relative overflow-hidden transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] ${step.isCritical
                ? 'border-[#FFEDD5] border-l-[8px] border-r-[8px] border-l-orange-400 border-r-orange-400'
                : 'border-[#FFEDD5]'
              }`}>

              <div className="flex flex-col gap-6">
                {/* Text Section */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className={`text-2xl font-black mb-2 ${step.isCritical ? 'text-orange-950' : 'text-text-deep'
                      }`}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-text-body text-lg font-medium leading-relaxed mb-8">
                    {step.desc}
                  </p>

                  <ul className="space-y-4">
                    {step.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-3 text-[15px] font-medium text-text-muted">
                        <div className={`mt-2 h-1.5 w-1.5 rounded-full shrink-0 ${step.isCritical ? 'bg-orange-400' : 'bg-primary/30'
                          }`} />
                        <span className={detail.includes('중요') || detail.includes('필수') ? 'text-orange-600 font-bold' : ''}>
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 p-10 rounded-[40px] text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-80 " />
        <p className="text-text-body text-lg mb-10 relative z-10 max-w-md mx-auto font-medium">
          가족간병인 등록부터 서류 전송까지 <br />
          어플리케이션 안에서 원스톱으로 해결됩니다.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto px-14 h-16 bg-primary text-white rounded-[16px] font-black text-lg hover:brightness-110 transition-all shadow-xl shadow-primary/20"
          >
            간병인 등록 하기
          </button>
        </div>
      </motion.div>

      {/* Preparation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-[32px] p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>

              <div className="text-center pt-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary">
                  <Heart size={32} fill="currentColor" />
                </div>
                <h3 className="text-2xl font-black text-text-deep mb-4">
                  서비스 준비 중입니다
                </h3>
                <p className="text-text-body font-medium leading-relaxed mb-8">
                  현재 더욱 안정적인 서비스 제공을 위해 <br />
                  시스템 고도화 작업 중입니다. <br />
                  <span className="text-primary font-bold">2026년 하반기</span> 정식 오픈 예정입니다.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-4 bg-text-deep text-white rounded-[16px] font-black text-lg hover:brightness-110 transition-all"
                >
                  확인
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
