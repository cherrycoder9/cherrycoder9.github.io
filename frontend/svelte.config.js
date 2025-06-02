import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({
			// 빌드 결과물이 생성될 폴더입니다. 위 YAML의 `path: ./frontend/build`와 일치해야 합니다.
			pages: 'build',
			assets: 'build',
			// GitHub Pages에서 404 처리를 위해 필요할 수 있습니다.
			// SPA 모드가 아니라면 undefined도 괜찮습니다.
			fallback: undefined, // 또는 '404.html' 또는 'index.html' (라우팅 방식에 따라)
			precompress: false, // GitHub Pages는 자체적으로 압축을 처리할 수 있습니다.
			strict: true
		})
		// 중요: 사용자님의 GitHub Pages URL이 'https://cherrycoder9.github.io/' (즉, username.github.io 형태)라면
		// paths.base 설정이 필요 없거나 빈 문자열이어야 합니다.
		// 만약 'https://cherrycoder9.github.io/my-repo/' 형태라면,
		// paths: { base: '/my-repo' } 와 같이 설정해야 합니다.
		// 사용자님의 경우 'cherrycoder9.github.io' 저장소일 가능성이 높으므로 base 설정은 불필요할 수 있습니다.
		// paths: {
		//  base: process.env.NODE_ENV === 'production' ? '' : '' // 혹은 해당없음
	}
};

export default config;
