# 비바로연구소 / Be Right Labs

비바로연구소의 공식 인덱스 문서입니다. 반복 업무, 판단, 운영, 시스템 구축을 더 적은 노동으로 처리하는 방식을 다루는 흑백 에디토리얼 사이트로 설계했습니다.

문서 데이터와 화면 컴포넌트를 분리해 작은 문서 시스템처럼 관리합니다.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Local development

```bash
npm run dev
```

브라우저에서 표시된 로컬 주소를 엽니다. 기본 포트는 Vite 설정을 따릅니다.

## Build

```bash
npm run build
```

정적 결과물은 `dist/`에 생성됩니다.

## Structure

```text
src/
  components/
    Header.tsx
    Hero.tsx
    Section.tsx
    EditorialList.tsx
    StatementBlock.tsx
    Work.tsx
    Method.tsx
    Contact.tsx
    Footer.tsx
  data/
    manifesto.ts
    navigation.ts
    work.ts
  App.tsx
  main.tsx
```

## Cloudflare Pages

1. Cloudflare Pages에서 Git 저장소를 연결합니다.
2. Framework preset은 `Vite`를 선택합니다.
3. Build command는 `npm run build`로 설정합니다.
4. Build output directory는 `dist`로 설정합니다.
5. Node.js는 20 이상을 권장합니다.

정적 사이트이므로 별도 서버 없이 배포할 수 있습니다.
