import { Hono } from 'hono';
import { cors } from 'hono/cors'; // CORS 미들웨어 import

const app = new Hono();

// CORS 미들웨어 설정....
app.use(
  '/*', // 하위의 모든 경로에 CORS 적용
  cors({
    // Vercel에 배포된 프론트엔드 URL을 허용
    // 또는 개발 편의를 위해 일단 모든 출처를 허용할 수도 있습니다.
    origin: [
      'http://localhost:5173', // 로컬 개발용
      'https://cherrycoder9-github-io-frontend.vercel.app' // Vercel 배포용
    ],
    allowMethods: ['GET', 'POST', 'OPTIONS'], // 허용할 HTTP 메소드
    allowHeaders: ['Content-Type', 'Authorization'], // 허용할 요청 헤더
  })
);

// 기존 루트 핸들러 (약간 수정하여 구분)
app.get('/', (c) => {
  return c.text('Hello Hono from the backend root!');
});

// 새로운 API 엔드포인트 추가
app.get('/greet', (c) => {
  console.log('✅ GET /api/greet 요청 받음'); // 백엔드 터미널에 로그 출력
  const message = '안녕하세요!! Hono 백엔드에서 보내는 메시지입니다. 👋';
  return c.json({ message: message }); // JSON 형태로 메시지 반환
});

export default app; // Vercel 배포를 위해 export default 추가