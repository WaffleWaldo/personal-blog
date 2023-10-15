

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d1eba0e9.js","_app/immutable/chunks/scheduler.8dd42232.js","_app/immutable/chunks/index.5b7475d8.js","_app/immutable/chunks/singletons.ccdd9ae2.js","_app/immutable/chunks/index.0d2103e5.js"];
export const stylesheets = [];
export const fonts = [];
