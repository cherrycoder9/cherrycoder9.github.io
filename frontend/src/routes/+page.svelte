<script lang="ts">
	// 1. static에서 실제 변수 이름을 직접 가져옵니다.
	import { PUBLIC_VITE_API_BASE_URL } from '$env/static/public';

	// 2. 템플릿에서 사용하는 모든 상태 변수를 선언합니다.
	let isLoading = false;
	let apiMessageFromServer = '';
	let fetchError = '';

	// 3. 템플릿에서 호출하는 함수 이름과 동일하게 맞춰줍니다.
	async function callBackendApi() {
		isLoading = true;
		fetchError = '';
		apiMessageFromServer = '';

		try {
			// 4. 'env.' 없이 직접 변수를 사용합니다.
			const res = await fetch(`${PUBLIC_VITE_API_BASE_URL}/api/greet`);

			if (!res.ok) {
				throw new Error('API 응답이 올바르지 않습니다.');
			}

			const data = await res.json();
			apiMessageFromServer = data.message;
		} catch (e: any) {
			fetchError = e.message;
		} finally {
			isLoading = false;
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<hr style="margin: 2rem 0;" />

<h2>백엔드 API 호출 테스트</h2>
<button on:click={callBackendApi} disabled={isLoading}>
	{isLoading ? '백엔드 호출 중...' : '백엔드 API 호출하기'}
</button>

{#if apiMessageFromServer}
	<p style="margin-top: 10px; color: green;">
		<strong>서버로부터 받은 메시지:</strong>
		{apiMessageFromServer}
	</p>
{/if}

{#if fetchError}
	<p style="margin-top: 10px; color: red;">
		<strong>오류 발생:</strong>
		{fetchError}
	</p>
{/if}

<style>
	button {
		padding: 10px 15px;
		font-size: 1rem;
		cursor: pointer;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
