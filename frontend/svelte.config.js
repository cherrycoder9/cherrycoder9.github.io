// frontend/svelte.config.js

// import adapter from '@sveltejs/adapter-static'; // 이 라인을 주석 처리하거나 삭제
import adapter from '@sveltejs/adapter-auto'; // 이 라인을 추가
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// adapter-static 관련 설정을 모두 adapter() 로 교체합니다.
		adapter: adapter()
	}
};

export default config;