

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/chunks/1.ed5f6b88.js","_app/immutable/chunks/error.95ba16da.js","_app/immutable/chunks/index.627eab2f.js","_app/immutable/chunks/singletons.cfa9368a.js"];
export const stylesheets = [];
export const fonts = [];
