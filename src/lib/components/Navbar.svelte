<script lang="ts">
	import { signOut } from "firebase/auth";

    export let user: any;
</script>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
    <a href="/posts">Posts</a>
    <p>Hello {user.uid}</p>
    <button on:click={() => signOut}>Sign Out</button>
</nav>