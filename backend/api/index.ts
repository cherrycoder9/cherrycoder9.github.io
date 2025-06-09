// backend/api/index.ts
import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// 'cors'에 모든 옵션을 제거하여 모든 출처를 허용하도록 변경합니다.
app.use('/*', cors());

// --- 나머지 코드는 그대로 둡니다 ---

app.get('/', (c) => {
  return c.text('Hello Hono from the backend root!');
});

app.get('/greet', (c) => {
  console.log('✅ GET /api/greet 요청 받음');
  const message = '안녕하세요!! Hono 백엔드에서 보내는 메시지입니다. 👋';
  return c.json({ message: message });
});

export default app;