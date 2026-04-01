import FAQ from '@/components/FAQ';

export const metadata = {
  title: 'FAQ - 온누리케어',
  description: '온누리케어 서비스에 대한 자주 묻는 질문을 확인하고 더 자세히 알아보세요.',
};

export default function FAQPage() {
  return (
    <section className="min-h-screen bg-[#FAF7F5] py-12">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-black text-text-deep mb-8 text-center">
          FAQ 더 보기
        </h1>
        <FAQ />
      </div>
    </section>
  );
}
