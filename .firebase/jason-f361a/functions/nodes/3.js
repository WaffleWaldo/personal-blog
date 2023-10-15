

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.cf64f812.js","_app/immutable/chunks/scheduler.8dd42232.js","_app/immutable/chunks/index.5b7475d8.js"];
export const stylesheets = [];
export const fonts = [];
