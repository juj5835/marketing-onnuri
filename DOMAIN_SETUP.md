# Onnuri Landing 도메인 연결 가이드 (Domain Connection Guide)

이 문서는 Onnuri Landing 페이지를 **onnuri-care.co.kr** 도메인과 연결하는 방법을 단계별로 설명합니다.

---

## 1. Vercel에서 도메인 추가 (Vercel Setting)

1.  [Vercel Dashboard](https://vercel.com/dashboard)에 접속하여 온누리 랜딩 프로젝트를 선택합니다.
2.  상단 메뉴에서 **Settings** -> **Domains**를 클릭합니다.
3.  **Add** 버튼을 누르고 연결할 도메인 주소 `onnuri-care.co.kr`을 입력합니다.
4.  **Add**를 클릭하면 Vercel이 해당 도메인의 DNS 설정을 분석하여 필요한 값을 보여줍니다.

---

## 2. DNS 레코드 설정 (DNS Configuration)

도메인을 관리하는 **NHN Cloud(또는 NHN 커머스)** 등의 DNS 관리 페이지에서 아래 정보를 입력해야 합니다.

### 가. A 레코드 (A Record)
*   **Host**: `@` (또는 빈칸)
*   **Value**: `76.76.21.21` (Vercel IP)
*   **TTL**: 기본값 (보통 3600)

### 나. CNAME 레코드 (CNAME Record) - www 연결 시
*   **Host**: `www`
*   **Value**: `cname.vercel-dns.com.`
*   **TTL**: 기본값

---

## 3. NHN Cloud 설정 방법 (For NHN Users)

1.  [NHN Cloud Console](https://console.nhncloud.com/)에 로그인합니다.
2.  왼쪽 메뉴에서 **Network** -> **DNS**를 선택합니다.
3.  연결할 도메인 `onnuri-care.co.kr`을 클릭하여 상세 페이지로 이동합니다. (**도메인 추가**가 안 되어 있다면 먼저 추가해주세요.)
4.  **레코드 세트 추가** 버튼을 누르고 아래 정보를 각각 입력합니다.
    *   **레코드 세트 1**: 타입 `A` / 이름 `@` / 값 `76.76.21.21`
    *   **레코드 세트 2**: 타입 `CNAME` / 이름 `www` / 값 `cname.vercel-dns.com.`
5.  **확인**을 눌러 저장합니다.

---

## 4. 최종 확인 및 SSL 발급 (Verification)

1.  다시 **Vercel Domains Settings** 페이지로 돌아옵니다.
2.  `Valid Configuration`이라는 초록색 메시지가 표시되면 연결이 성공한 것입니다.
3.  Vercel에서 자동으로 **SSL(HTTPS)**을 발급하며, 약 5~10분 후에 `https://onnuri-care.co.kr`으로 접속이 가능해집니다.

> [!TIP]
> DNS 설정이 인터넷 전체에 전파(Propagation)되는 데에는 최대 24~48시간이 소요될 수 있지만, 보통은 몇 분 이내에 완료됩니다.

---

## 문의사항

설정 중 문제가 발생하면 `Vercel Dashboard`에서 제공하는 에러 메시지를 확인해주세요!
