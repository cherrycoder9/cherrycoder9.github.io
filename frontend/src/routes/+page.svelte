<script lang="ts">
	let isLoading = false;
	let apiMessageFromServer = '';
	let fetchError = '';

	async function callBackendApi() {
		isLoading = true;
		fetchError = '';
		apiMessageFromServer = ''; // 이전 메시지 초기화

		try {
			// 백엔드 API URL (Hono 서버가 3001 포트에서 실행 중이라고 가정)
			const response = await fetch('http://localhost:3001/api/greet');

			if (!response.ok) {
				// HTTP 응답 상태가 ok(200-299)가 아닐 경우 오류 발생
				const errorText = await response.text(); // 오류 응답 본문 시도
				throw new Error(
					`API 요청 실패: ${response.status} ${response.statusText}. 서버 응답: ${errorText}`
				);
			}

			// 응답을 JSON으로 파싱
			const data = await response.json();

			// 'message' 필드의 값을 alert으로 표시
			alert(data.message);
			apiMessageFromServer = data.message; // 페이지에도 표시 (선택 사항)
		} catch (error: any) {
			console.error('백엔드 API 호출 중 오류 발생:', error);
			fetchError = error.message || '백엔드에서 데이터를 가져오는 데 실패했습니다.';
			alert(`오류: ${fetchError}`);
		} finally {
			isLoading = false;
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<hr style="margin: 20px 0;" />

<h2>백엔드 API 호출 테스트</h2>
<button on:click={callBackendApi} disabled={isLoading}>
	{isLoading ? '백엔드 호출 중...' : '백엔드 API 호출하기'}
</button>

{#if apiMessageFromServer && !fetchError}
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
