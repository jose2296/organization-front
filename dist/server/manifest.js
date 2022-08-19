export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","manifest.json","offline.html","service-worker.js"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".html":"text/html"},
	_: {
		entry: {"file":"_app/immutable/start-339cecc6.js","imports":["_app/immutable/start-339cecc6.js","_app/immutable/chunks/index-d3d2aee4.js","_app/immutable/chunks/preload-helper-c28b9807.js","_app/immutable/chunks/singletons-eca981c1.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "app",
				pattern: /^\/app\/?$/,
				names: [],
				types: [],
				path: "/app",
				shadow: null,
				a: [0,3,4],
				b: [1]
			},
			{
				type: 'page',
				id: "app/categories",
				pattern: /^\/app\/categories\/?$/,
				names: [],
				types: [],
				path: "/app/categories",
				shadow: null,
				a: [0,3,5],
				b: [1]
			},
			{
				type: 'page',
				id: "app/lists",
				pattern: /^\/app\/lists\/?$/,
				names: [],
				types: [],
				path: "/app/lists",
				shadow: null,
				a: [0,3,6],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/login",
				pattern: /^\/auth\/login\/?$/,
				names: [],
				types: [],
				path: "/auth/login",
				shadow: null,
				a: [0,7,8],
				b: [1]
			},
			{
				type: 'page',
				id: "auth/register",
				pattern: /^\/auth\/register\/?$/,
				names: [],
				types: [],
				path: "/auth/register",
				shadow: null,
				a: [0,7,9],
				b: [1]
			},
			{
				type: 'page',
				id: "app/categories/[categoryId]",
				pattern: /^\/app\/categories\/([^/]+?)\/?$/,
				names: ["categoryId"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3,10],
				b: [1]
			},
			{
				type: 'page',
				id: "app/lists/[listId]",
				pattern: /^\/app\/lists\/([^/]+?)\/?$/,
				names: ["listId"],
				types: [null],
				path: null,
				shadow: null,
				a: [0,3,11],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
