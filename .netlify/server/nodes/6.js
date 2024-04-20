

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/shop/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.C2OHo7N3.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CraYWBY1.js"];
export const stylesheets = [];
export const fonts = [];
