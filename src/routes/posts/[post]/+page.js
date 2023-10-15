import { posts } from "$lib/data/posts"
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const post = posts.find(post => post.id === params.post);

    if (!post) throw error(404) 
    return post
}