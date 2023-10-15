import { c as create_ssr_component, h as each, i as add_attribute, f as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-rmphmr">Posts</h1> ${each(data.posts, (post) => {
    return `<h2><a${add_attribute("href", `/posts/${post.id}`, 0)}>${escape(post.title)}</a> </h2>`;
  })}`;
});
export {
  Page as default
};
