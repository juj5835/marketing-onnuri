"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Bell, Send } from "lucide-react";

const features = [
  {
    title: "가족간병 특화 서비스",
    description: "일반 간병과는 다른 복잡하고 까다로운 가족 간병비 청구, 온누리케어가 가장 정확하고 편한 길을 안내합니다.",
    icon: ShieldCheck,
  },
  {
    title: "안심 알림 서비스",
    description: "신청부터 청구 완료까지, 모든 진행 상황을 문자나 카카오톡 알림으로 꼬박꼬박 먼저 알려드립니다.",
    icon: Bell,
  },
  {
    title: "보험 설계사 전송 지원",
    description: "매번 번거로운 청구 과정 대신, 협회에서 담당 설계사에게 필요한 서류를 직접 안전하게 전달해 드립니다.",
    icon: Send,
  },
];

export default function Features() {
  return (
    <section id="services" className="px-6 bg-[#FEF5E7] section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-[64px]">
          <h2 className="text-3xl md:text-[36px] font-black text-text-deep leading-tight">
            온누리케어 핵심 서비스
          </h2>
          <p className="text-text-body font-normal text-lg">
            복잡한 절차는 저희에게 맡기시고, 오직 가족 돌봄에만 집중하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-[40px] rounded-[24px] bg-white border border-[#FFEDD5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 rounded-[16px] bg-[#FFF7ED] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-[20px] font-bold text-[#1E293B] mb-4">
                {feature.title}
              </h3>
              <p className="text-[#64748B] leading-[1.6] text-[16px]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
