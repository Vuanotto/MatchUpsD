export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-512x512.png","apple-touch-icon.png","data/reg-d.json","favicon-16x16.png","favicon-32x32.png","favicon.ico","robots.txt","site.webmanifest","sprites/pokemonicons-sheet.png","_headers","_redirects"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".ico":"image/vnd.microsoft.icon",".txt":"text/plain",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.1a5d33f1.js","app":"_app/immutable/entry/app.9d51684e.js","imports":["_app/immutable/entry/start.1a5d33f1.js","_app/immutable/chunks/index.627eab2f.js","_app/immutable/chunks/singletons.cfa9368a.js","_app/immutable/entry/app.9d51684e.js","_app/immutable/chunks/index.627eab2f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
