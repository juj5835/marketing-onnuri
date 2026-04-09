"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "가족 간병비 보험금 청구는 어떻게 하나요?",
    answer: "온누리케어에서 가족 간병인 등록부터 간병일지 스마트 작성, 서류 전송까지 한 번에 처리하실 수 있습니다. 전문 간병인 없이 가족이 직접 간병한 경우에도 보험금 청구가 가능하도록 전 과정을 지원합니다.",
  },
  {
    question: "간병인 확인서는 언제 발급되나요?",
    answer: "퇴원 후 간병일지 작성과 간병비 지급이 완료되면, 간병인 사용확인서가 함께 발급됩니다.",
  },
  {
    question: "기존에 가입된 모든 보험사 청구가 가능한가요?",
    answer: "네, 대부분의 보험사에 청구가 가능합니다. 기본적으로 전자 서류는 무료로 제공되며, 일부 보험사에서 원본 서류 제출을 요구하는 경우에만 추가 비용이 발생할 수 있습니다.",
  },
  {
    question: "보험 설계사에게 서류를 보내는 비용이 따로 있나요?",
    answer: "아니요, 온누리케어 회원 가입 및 일기/확인서 전송 서비스는 협회 회원 서비스에 포함되어 별도의 추가 비용 없이 이용 가능합니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 bg-[#FAF7F5] section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center space-y-4 mb-[80px]">
          <h2 className="text-3xl md:text-[36px] font-black text-text-deep leading-tight">
            궁금하신 점이 있으신가요?
          </h2>
          <p className="text-text-body font-normal text-lg">
            가족 간병 등록 및 보험금 청구에 대해 가장 많이 묻는 질문입니다.
          </p>
        </div>

        <div className="space-y-[16px]">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#FFEDD5] rounded-[16px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-[32px] text-left transition-colors group"
              >
                <span className="text-lg font-bold text-text-deep group-hover:text-primary transition-colors">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-text-body transition-transform duration-300 ${openIndex === index ? "rotate-180 text-primary" : ""
                    }`}
                  size={24}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-[32px] pb-[32px] pt-0">
                      <p className="text-[#64748B] leading-relaxed text-[16px]">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
