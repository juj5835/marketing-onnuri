# Onnuri Landing 도메인 연결 가이드 (domain.nhn.com 전용)

이 문서는 Onnuri Landing 페이지를 **onnuri-care.co.kr** 도메인과 연결하는 방법을 **domain.nhn.com** 사용자 환경에 맞춰 설명합니다.

---

## 1. Vercel에서 도메인 추가 (Vercel Setting)

1.  [Vercel Dashboard](https://vercel.com/dashboard)에서 프로젝트를 선택합니다.
2.  상단 메뉴 **Settings** -> **Domains**를 클릭합니다.
3.  `onnuri-care.co.kr`을 입력하고 **Add** 버튼을 누릅니다.
4.  **Redirect to...** 옵션이 나오면 권장 사항인 `Redirect`를 선택하고 추가합니다.

---

## 2. domain.nhn.com에서 DNS 설정 방법

도메인 관리 페이지(`domain.nhn.com`)에서 아래 레코드 정보를 입력해야 합니다.

### [입력해야 할 레코드 값]

| 레코드 타입 | 호스트(Host) | 값(Value) |
| :--- | :--- | :--- |
| **A** | **@** (또는 빈칸) | **76.76.21.21** |
| **CNAME** | **www** | **cname.vercel-dns.com.** |

---

### [상세 클릭 순서]
1.  [domain.nhn.com](https://domain.nhn.com) 접속 및 로그인
2.  상단 메뉴 **[마이페이지]** 또는 **[나의 도메인 관리]** 클릭
3.  `onnuri-care.co.kr` 도메인 우측의 **[관리]** 버튼 클릭
4.  왼쪽 또는 하단 메뉴에서 **[부가서비스 관리]** -> **[DNS 관리]** 클릭
    *   또는 메뉴명에 **[네임서버(DNS) 설정/관리]**라고 된 곳을 찾으세요.
5.  **[DNS 레코드 설정]** 또는 **[레코드 추가]** 버튼 클릭
6.  위의 표에 있는 **A 레코드**와 **CNAME 레코드**를 각각 하나씩 추가하고 저장합니다.

---

## 3. 최종 확인 (Verification)

1.  Vercel의 Domains 페이지로 돌아와서 `Valid Configuration` (초록색 체크)이 뜨는지 확인합니다.
2.  설정 후 반영까지는 약 5분~1시간 정도 소요될 수 있습니다.
3.  반영이 완료되면 `https://onnuri-care.co.kr`로 접속이 가능해집니다.

> [!IMPORTANT]
> '포워딩 신청' 메뉴가 아닙니다! 반드시 **'DNS 관리'** 또는 **'네임서버 레코드 설정'** 메뉴를 이용해 주세요.

---

## 문의사항

설정 화면이 가이드와 다르다면, 화면의 메뉴 이름을 말씀해 주세요! 바로 안내해 드리겠습니다.
