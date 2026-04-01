import GuideContent from '@/components/GuideContent';

export const metadata = {
  title: '가족 간병비 보험금 청구 방법 - 온누리케어',
  description: '온누리케어에서 제공하는 가족 간병비 보험금 청구 절차를 단계별로 안내합니다.',
};

export default function GuidePage() {
  return (
    <main className="min-h-screen bg-[#FFFCF9] py-20 px-6">
      <GuideContent />
    </main>
  );
}
