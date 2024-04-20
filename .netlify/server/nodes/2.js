import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CGjfNn9c.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CraYWBY1.js"];
export const stylesheets = ["_app/immutable/assets/2.CU2UTACP.css"];
export const fonts = [];
