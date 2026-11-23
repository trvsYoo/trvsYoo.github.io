# Travis Blog

배우고 만든 것을 기록하는 개발 블로그입니다.
[AstroPaper](https://github.com/satnaing/astro-paper) v7.2.1 테마로 만들었습니다.

- 블로그: https://trvsyoo.github.io

## 로컬 실행

pnpm 11.3.0을 씁니다(`npm install -g pnpm@11.3.0`).

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # dist/ 에 정적 사이트 생성
```

## 프로젝트 구조

```
├── src/content/posts/       글 (평소에는 여기만 만지면 됨)
├── src/content/pages/       소개(About) 페이지 본문
├── astro-paper.config.ts    사이트 설정: 제목, 주소, 기능 켜고 끄기
├── src/custom/              내 커스터마이즈 자리. 테마 업데이트가 건드리지 않음
├── src/i18n/lang/ko.ts      한국어 UI 문구
├── src/pages/               URL별 페이지: 홈, 글, 태그, 검색, OG 이미지
├── src/components/          화면 부품 (테마 코드)
├── src/layouts/             페이지 뼈대 (테마 코드)
├── public/                  그대로 복사되는 파일: 파비콘 등
├── .github/workflows/       ci.yml(검사), deploy.yml(배포)
├── astro.config.ts          Astro 설정: 폰트, 마크다운 처리
└── package.json             패키지 목록 (정확한 버전은 pnpm-lock.yaml)
```

사이트를 바꿀 때는 `astro-paper.config.ts`와 `src/custom/`을 먼저 봅니다.
테마 코드(`components/`, `layouts/`, `pages/`)를 고치면 테마 업데이트 때 충돌이 날 수 있습니다.

## 글 쓰기

`src/content/posts/`에 마크다운 파일을 추가합니다. 파일 이름이 URL이 됩니다.

```yaml
---
pubDatetime: 2026-11-23T21:00:00+09:00
title: 글 제목
description: 목록과 미리보기에 쓰이는 한두 문장
tags:
  - 태그
draft: true # 공개할 때 지우거나 false로
---
```

`main`에 push하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.

## 테마 업데이트

```bash
git remote add astro-paper https://github.com/satnaing/astro-paper.git
git pull astro-paper main --allow-unrelated-histories
```

직접 고친 파일(`astro-paper.config.ts`, `src/custom/`, 한국어 설정)에서 충돌이 나면 직접 정리합니다.
