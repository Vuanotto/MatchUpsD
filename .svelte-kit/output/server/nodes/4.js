import * as universal from '../entries/pages/_slug_/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/4.0a8fff72.js","_app/immutable/chunks/_page.b1d2653b.js","_app/immutable/chunks/index.627eab2f.js"];
export const stylesheets = [];
export const fonts = [];
