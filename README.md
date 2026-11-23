# Travis Blog

배우고 만든 것을 기록하는 개발 블로그입니다.
[AstroPaper](https://github.com/satnaing/astro-paper) v7.2.1 테마로 만들었습니다.

- 블로그: https://trvsyoo.github.io

## 로컬 실행

```bash
npx pnpm@11.3.0 install
npx pnpm@11.3.0 dev      # http://localhost:4321
npx pnpm@11.3.0 build    # dist/ 에 정적 사이트 생성
```

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
