"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "간병인 등록 및 신청",
    description: "복잡한 서류 없이 온라인으로  간병인 등록부터 간병 신청까지,\n 터치 몇 번으로 간편하게 시작하세요.",
  },
  {
    number: "2",
    title: "디지털 간병일지 스마트 작성",
    description: "보험 청구의 핵심인 간병일지를 누락 없이,\n 모바일에서 편리하게 작성하고 관리하세요.",
  },
  {
    number: "3",
    title: "설계사에게 바로 전달되는 원스톱 서류 전송.",
    description: "복잡한 보험 청구 서류, 담당 설계사에게 시스템이 직접 전달하여 \n보험금 수령 시간을 앞당겨 드립니다.",
  },
];

export default function Workflow() {
  return (
    <section id="registration" className="px-6 bg-[#FFFCF9] section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-[80px]">
          <h2 className="text-3xl md:text-[36px] font-black text-text-deep leading-tight">
            보험금 수령의 마지막 단계까지, <br className="hidden md:block" />
            온누리케어가 함께합니다.
          </h2>
          <p className="text-text-body font-normal text-lg">
            가장 쉽고 확실하게 보험 혜택을 받는 방법
          </p>
        </div>

        <div className="flex flex-col gap-[24px] items-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center transition-all bg-white"
              style={{
                maxWidth: '600px',
                width: '100%',
                padding: '16px',
                gap: '24px',
                borderRadius: '21px',
                border: '1px solid #FFEDD5',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              <div className="w-[48px] h-[48px] rounded-full bg-primary text-white flex items-center justify-center text-xl font-black shrink-0">
                {step.number}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-[20px] font-bold text-text-deep">
                  {step.title}
                </h3>
                <p className="text-[#64748B] text-[16px] leading-[1.6] whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
