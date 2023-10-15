import { p as posts } from "../../../../chunks/posts.js";
import { e as error } from "../../../../chunks/index.js";
async function load({ params }) {
  const post = posts.find((post2) => post2.id === params.post);
  if (!post)
    throw error(404);
  return post;
}
export {
  load
};
