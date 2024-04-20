

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/menu/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.C2OHo7N3.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CraYWBY1.js"];
export const stylesheets = [];
export const fonts = [];
