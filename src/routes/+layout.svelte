<script lang="ts">
	import '../app.postcss';

	import { FirebaseApp, SignedIn, SignedOut } from 'sveltefire';
	import { auth, firestore, storage } from '$lib/firebase';
	import { signInAnonymously } from 'firebase/auth';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });




</script>

<FirebaseApp {auth} {firestore} {storage}>

	<SignedOut>
		<button on:click={() => signInAnonymously(auth)}>Sign In</button>
	</SignedOut>

	<SignedIn let:user let:signOut>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
			<a href="/posts">Posts</a>
			<p>Hello {user.uid}</p>
			<button on:click={signOut}>Sign Out</button>
		</nav>
		
		<slot />
	</SignedIn>

</FirebaseApp>

