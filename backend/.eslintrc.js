module.exports = {
  root: true, // 현재 설정 파일이 ESLint 설정의 루트임을 나타냄
  parser: '@typescript-eslint/parser', // TypeScript 파서 지정
  plugins: [
    '@typescript-eslint/eslint-plugin', // TypeScript 플러그인 사용
  ],
  extends: [
    'eslint:recommended', // ESLint 추천 규칙
    'plugin:@typescript-eslint/recommended', // TypeScript 추천 규칙
  ],
  env: {
    node: true, // Node.js 환경 (Hono 백엔드이므로)
    es2024: true, // ES2024 문법 사용 가능
  },
  parserOptions: {
    ecmaVersion: 'latest', // 최신 ECMAScript 버전 사용
    sourceType: 'module', // ES 모듈 사용
    project: './tsconfig.json', // 타입 정보를 사용하는 규칙을 위해 tsconfig.json 경로 지정
  },
  rules: {
    // 필요한 경우 여기에 커스텀 규칙을 추가하거나 기존 규칙을 덮어쓸 수 있습니다.
    // 예: '@typescript-eslint/no-unused-vars': 'warn',
  },
  ignorePatterns: ['dist', 'node_modules'], // ESLint 검사에서 제외할 폴더/파일
};