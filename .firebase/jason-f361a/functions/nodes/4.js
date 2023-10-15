

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.fa0c1ae6.js","_app/immutable/chunks/scheduler.8dd42232.js","_app/immutable/chunks/index.5b7475d8.js"];
export const stylesheets = [];
export const fonts = [];
