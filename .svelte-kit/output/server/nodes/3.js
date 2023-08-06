

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/chunks/3.970281ca.js","_app/immutable/chunks/_page.0945e292.js","_app/immutable/chunks/index.627eab2f.js"];
export const stylesheets = [];
export const fonts = [];
