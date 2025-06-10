import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// 디버깅을 위해 모든 출처를 허용하는 가장 단순한 CORS 설정..
app.use('*', cors());

// 다른 모든 라우트를 제거하고, 오직 이 테스트 라우트만 남깁니다.
// 파일 경로가 'api/index.ts' 이므로 최종 경로는 '/api/test-route' 가 됩니다.
app.get('/test-route', (c) => {
  return c.json({ message: '✅ 라우팅 테스트 성공! Hono 백엔드가 응답합니다.' });
});

export default app;