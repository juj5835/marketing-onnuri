"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

export const metadata = {
  title: '가족 간병비 보험금 청구 방법',
  description: '온누리케어에서 제공하는 가족 간병비 보험금 청구 절차를 단계별로 안내합니다.',
};

export default function GuidePage() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden px-6 py-20 bg-[#FFFCF9]">
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
          {[
            {
              title: '1. 간병인 등록',
              desc: '마이페이지에서 가족 간병인을 등록하고 인증을 완료합니다.',
              img: '/images/guide_step1.png',
            },
            {
              title: '2. 일지 작성',
              desc: '간병일지를 작성하면 자동으로 청구에 필요한 확인서가 생성됩니다.',
              img: '/images/guide_step2.png',
            },
            {
              title: '3. 서류 업로드',
              desc: '필요한 서류를 업로드하고 설계사에게 전송합니다.',
              img: '/images/guide_step3.png',
            },
            {
              title: '4. 청구 완료',
              desc: '보험사에 청구가 접수되고, 지급이 완료됩니다.',
              img: '/images/guide_step4.png',
            },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex items-center gap-6 bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text-deep mb-1">{step.title}</h3>
                <p className="text-text-body">{step.desc}</p>
              </div>
              {step.img && (
                <Image
                  src={step.img}
                  alt={step.title}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
