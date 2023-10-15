<script>
	import { Collection, collectionStore } from 'sveltefire';
    import { collection, where, query } from 'firebase/firestore';
    import { firestore } from '$lib/firebase';

    const blogsRef = collection(firestore, 'blogs');
    const q = query(blogsRef, where('author.name', '==', 'Jason P'));

    const jasonsBlogs = collectionStore(firestore, q);
    
</script>

<h1>Posts</h1>
{#each $jasonsBlogs as blog}
    <h2>{[blog.title]}</h2>
    <p>{[blog.contents]}</p>
{/each}