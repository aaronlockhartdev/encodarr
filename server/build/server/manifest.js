const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BjoNfCvd.js","app":"_app/immutable/entry/app.D9YBTbhH.js","imports":["_app/immutable/entry/start.BjoNfCvd.js","_app/immutable/chunks/entry.DoI9sZ07.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.D9YBTbhH.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CDIhRLKe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-C_VhomJ5.js')),
			__memo(() => import('./chunks/1-CNd7dWN9.js')),
			__memo(() => import('./chunks/2-D-0kILKY.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map