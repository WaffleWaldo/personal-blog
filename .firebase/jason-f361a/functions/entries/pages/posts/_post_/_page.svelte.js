import { c as create_ssr_component, f as escape } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-ebkfrs">Blog Post</h1> <h2>${escape(data.title)}</h2> <p>${escape(data.content)}</p>`;
});
export {
  Page as default
};
