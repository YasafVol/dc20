export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: null,
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/character/progress/complete",
				pattern: /^\/api\/character\/progress\/complete\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/character/progress/complete/_server.ts.js'))
			},
			{
				id: "/api/character/progress/stageA",
				pattern: /^\/api\/character\/progress\/stageA\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/character/progress/stageA/_server.ts.js'))
			},
			{
				id: "/api/character/progress/stageB",
				pattern: /^\/api\/character\/progress\/stageB\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/character/progress/stageB/_server.ts.js'))
			},
			{
				id: "/character-creator",
				pattern: /^\/character-creator\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/character-creator/stage-a",
				pattern: /^\/character-creator\/stage-a\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/character-creator/stage-b",
				pattern: /^\/character-creator\/stage-b\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/test-ui",
				pattern: /^\/test-ui\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
