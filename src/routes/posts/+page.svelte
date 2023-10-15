<script>
    export let data;
</script>

<h1>Posts</h1>
{#each data.posts as post (post.id)}
    <h2>
        <a href={`/posts/${post.id}`}>{post.title}</a>
    </h2>
{/each}