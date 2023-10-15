import * as universal from '../entries/pages/posts/_post_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/posts/_post_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/posts/[post]/+page.js";
export const imports = ["_app/immutable/nodes/6.9d68cee7.js","_app/immutable/chunks/posts.88c01e7b.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/scheduler.8dd42232.js","_app/immutable/chunks/index.5b7475d8.js"];
export const stylesheets = [];
export const fonts = [];
