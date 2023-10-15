import "../../../chunks/index.js";
import { p as posts } from "../../../chunks/posts.js";
function load({ params }) {
  return { posts };
}
export {
  load
};
