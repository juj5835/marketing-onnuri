"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, FileText, UserPlus, Home } from 'lucide-react';

const steps = [
  {
    title: '간병 상황 발생',
    desc: '연로하신 부모님, 어린 자녀, 혹은 배우자가 입원하여 가족의 손길이 꼭 필요한 상황이 발생합니다.',
    icon: <Home className="text-primary" size={24} />,
    details: ['가족(부모, 자녀, 배우자) 입원 시'],
    img: '/images/hero_family_care_refined.png',
  },
  {
    title: '간병인 등록 (필수)',
    desc: '간병 업무를 시작하기 전 반드시 온누리케어에 간병인 등록을 완료해야 합니다.',
    icon: <UserPlus className="text-primary" size={24} />,
    isCritical: true,
    details: [
      '중요: 등록 시점부터 보험 청구가 가능합니다.',
      '등록 이전의 간병 기간은 소급 적용되지 않습니다.',
      '간병인 정보, 환자 정보, 관계, 설계사 정보 등록'
    ],
    img: '/images/hero_family_care_refined.png',
  },
  {
    title: '입퇴원 서류 등록',
    desc: '병원에서 발급받은 입퇴원 확인서 및 관련 서류를 등록합니다.',
    icon: <FileText className="text-primary" size={24} />,
    details: ['입퇴원 증명서 및 병원 서류 등록'],
    img: '/images/hero_family_care_refined.png',
  },
  {
    title: '간병일지 작성',
    desc: '정확한 간병 시간 증빙을 위해 매일 간병일지를 작성합니다.',
    icon: <Clock className="text-primary" size={24} />,
    details: [
      '하루 8시간 이상의 간병 기록 필수 (보험 혜택 기준)',
      '의료 기록과 일치해야 하며, 불일치 시 보장이 어려울 수 있음'
    ],
    img: '/images/hero_family_care_refined.png',
  },
  {
    title: '보험 청구 서류 전달',
    desc: '작성된 일지와 발급된 서류를 담당 보험 설계사에게 직접 전송하여 청구를 완료합니다.',
    icon: <AlertCircle className="text-primary" size={24} />,
    details: ['비대면 서류 전송 및 청구 접수 완료'],
    img: '/images/hero_family_care_refined.png',
  },
];

export default function GuideContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >

        <h1 className="text-4xl md:text-6xl font-black text-text-deep leading-[1.1] mb-8">
          가족 간병비 <br className="md:hidden" />
          보상 받는 법
        </h1>
        <p className="text-lg md:text-xl text-text-body font-medium leading-relaxed max-w-2xl mx-auto">
          온누리케어와 함께라면 복잡한 서류와 절차 없이 <br className="hidden md:block" />
          가족 간병의 정당한 가치를 인정받을 수 있습니다.
        </p>
      </motion.div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
          >
            {/* Dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#FAF7F5] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 absolute left-0 md:left-1/2 top-0 mt-8 md:mt-0 md:top-1/2 md:-translate-y-1/2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ml-auto md:ml-0 bg-white p-8 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#FFEDD5] relative overflow-hidden transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]">
              {step.isCritical && (
                <div className="absolute top-0 right-0 h-2 w-full bg-gradient-to-r from-orange-400 to-red-500" />
              )}
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-text-deep">
                    {step.title}
                  </h3>
                  {step.isCritical && (
                    <span className="text-[12px] font-black text-orange-500 uppercase tracking-tighter">
                      CRITICAL CHECK
                    </span>
                  )}
                </div>
              </div>

              <p className="text-text-body font-medium leading-relaxed mb-6">
                {step.desc}
              </p>

              <ul className="space-y-3">
                {step.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2 text-sm font-medium text-text-muted">
                    <div className="mt-1.5 h-1 w-1 rounded-full bg-primary/40 shrink-0" />
                    <span className={detail.includes('중요') || detail.includes('필수') ? 'text-orange-600 font-bold' : ''}>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 p-8 rounded-[32px] bg-text-deep text-white text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <h2 className="text-2xl font-black mb-4 relative z-10">
          지금 바로 온누리케어 가이드를 확인하세요
        </h2>
        <p className="text-white/70 mb-8 relative z-10 max-w-md mx-auto">
          가족간병인 등록부터 서류 전송까지 <br />
          어플리케이션 내에서 원스톱으로 가능합니다.
        </p>
        <button 
          onClick={() => window.location.href = '/'}
          className="px-12 h-16 bg-primary text-white rounded-2xl font-black text-lg hover:brightness-110 transition-all relative z-10 shadow-lg shadow-primary/20"
        >
          메인으로 이동
        </button>
      </motion.div>
    </div>
  );
}
