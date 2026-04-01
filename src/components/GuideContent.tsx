"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const steps = [
  {
    title: '1. 간병인 등록',
    desc: '마이페이지에서 가족 간병인을 등록하고 인증을 완료합니다.',
    img: '/images/hero_family_care_refined.png', // Using existing image as placeholder
  },
  {
    title: '2. 일지 작성',
    desc: '간병일지를 작성하면 자동으로 청구에 필요한 확인서가 생성됩니다.',
    img: '/images/hero_family_care_refined.png',
  },
  {
    title: '3. 서류 업로드',
    desc: '필요한 서류를 업로드하고 설계사에게 전송합니다.',
    img: '/images/hero_family_care_refined.png',
  },
  {
    title: '4. 청구 완료',
    desc: '보험사에 청구가 접수되고, 지급이 완료됩니다.',
    img: '/images/hero_family_care_refined.png',
  },
];

export default function GuideContent() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-black text-text-deep text-center mb-8"
      >
        가족 간병비 보험금 청구 방법
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg md:text-xl text-text-body text-center mb-12"
      >
        온누리케어와 함께라면 복잡한 서류와 절차 없이 간편하게 청구할 수 있습니다.
      </motion.p>
      
      {/* Step list */}
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="flex items-center gap-6 bg-white rounded-xl p-4 shadow-sm border border-[#FFEDD5]"
          >
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl">
              {idx + 1}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-text-deep mb-1">{step.title}</h3>
              <p className="text-text-body">{step.desc}</p>
            </div>
            <div className="hidden md:block relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-cover opacity-50 transition-opacity hover:opacity-100"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
