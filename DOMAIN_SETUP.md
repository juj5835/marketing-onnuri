# Onnuri Landing 도메인 연결 가이드 (Domain Connection Guide)

이 문서는 Onnuri Landing 페이지를 **onnuri-care.co.kr** 도메인과 연결하는 방법을 단계별로 설명합니다.

---

## 1. Vercel에서 도메인 추가 (Vercel Setting)

1.  [Vercel Dashboard](https://vercel.com/dashboard)에 접속하여 온누리 랜딩 프로젝트를 선택합니다.
2.  상단 메뉴에서 **Settings** -> **Domains**를 클릭합니다.
3.  **Add** 버튼을 누르고 연결할 도메인 주소 `onnuri-care.co.kr`을 입력합니다.
4.  **Add**를 클릭하면 Vercel이 해당 도메인의 DNS 설정을 분석하여 필요한 값을 보여줍니다.

---

## 2. DNS 레코드란 무엇인가요? (DNS Basics)

도메인을 연결하는 것은 **'이름(도메인)'**과 **'실제 주소(IP)'**를 연결하는 과정입니다. 전화번호부에 이름을 등록하는 것과 비슷합니다.

| 구분 | 비유 | 실제 설정 (Vercel 필수값) | 설명 |
| :--- | :--- | :--- | :--- |
| **A 레코드** | 성함 -> 전화번호 | `@` -> `76.76.21.21` | `onnuri-care.co.kr` 주소 자체를 Vercel 서버로 보냅니다. |
| **CNAME 레코드** | 별명 -> 본명 | `www` -> `cname.vercel-dns.com.` | `www.onnuri-care.co.kr`로 들어와도 Vercel로 연결합니다. |

---

## 3. NHN Cloud 설정 상세 방법 (NHN Guide)

NHN Cloud(또는 NHN 커머스)의 **DNS 관리** 서비스에서 아래 표와 같이 **레코드 세트**를 추가해 주세요.

### [레코드 추가 테이블]

| 타입 (Type) | 이름 (Host/Name) | TTL | 값 (Value) |
| :--- | :--- | :--- | :--- |
| **A** | **@** (또는 빈칸) | 3600 | **76.76.21.21** |
| **CNAME** | **www** | 3600 | **cname.vercel-dns.com.** |

---

### [상세 순서]
1.  **NHN Cloud 콘솔** 로그인 -> **Network > DNS** 메뉴 선택
2.  사용 중인 도메인 `onnuri-care.co.kr`의 **[관리]** 클릭 (목록에 없다면 도메인을 먼저 추가하세요.)
3.  **[레코드 세트 추가]** 버튼 클릭
    *   타입에서 **A** 선택
    *   이름에 **@** 입력 (또는 비워둠)
    *   값에 **76.76.21.21** 입력 후 확인
4.  다시 **[레코드 세트 추가]** 버튼 클릭
    *   타입에서 **CNAME** 선택
    *   이름에 **www** 입력
    *   값에 **cname.vercel-dns.com.** 입력 후 확인

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
