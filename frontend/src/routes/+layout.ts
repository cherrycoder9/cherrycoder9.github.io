// frontend/src/routes/+layout.ts
// dd

// SvelteKit의 개발/프로덕션 모드 환경 변수를 가져옵니다.
import { dev } from '$app/environment';
// SvelteKit 전용 애널리틱스 모듈을 가져옵니다.
import { injectAnalytics } from '@vercel/analytics/sveltekit';

// 애널리틱스를 주입합니다. 개발 모드에서는 'development'로 동작합니다.
injectAnalytics({ mode: dev ? 'development' : 'production' });


// 이 옵션은 이 레이아웃을 사용하는 모든 페이지를
// 빌드 시점에 미리 렌더링(prerender)하도록 SvelteKit에 지시합니다.
export const prerender = true;

// 만약 서버 사이드 렌더링(SSR)이 전혀 필요 없고,
// 순수 정적 사이트(Static Site Generation, SSG)로만 만들고 싶다면
// 아래 옵션도 함께 추가할 수 있습니다. (선택 사항이지만 GitHub Pages에는 적합)
export const ssr = false;