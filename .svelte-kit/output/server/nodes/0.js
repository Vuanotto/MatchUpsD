import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/chunks/0.665a34ee.js","_app/immutable/chunks/_layout.0e6b41be.js","_app/immutable/chunks/index.627eab2f.js"];
export const stylesheets = ["_app/immutable/assets/_layout.68da5101.css"];
export const fonts = [];
