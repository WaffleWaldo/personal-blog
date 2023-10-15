<script>
	import { Collection } from 'sveltefire';

</script>

<h1>Posts</h1>
<Collection ref="blogs" let:data let:count>
    <p>There are {count} blogs</p>
    {#each data as blog}
        <h2>{[blog.title]}</h2>
        <p>{[blog.contents]}</p>
    {/each}
</Collection>