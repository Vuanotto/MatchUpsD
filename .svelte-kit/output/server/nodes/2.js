import * as universal from '../entries/pages/_slug_/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+layout.js";
export const imports = ["_app/immutable/chunks/2.aac9263f.js","_app/immutable/chunks/layout.455a58ef.js","_app/immutable/chunks/index.627eab2f.js"];
export const stylesheets = [];
export const fonts = [];
