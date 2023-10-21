<script lang="ts">
	import '../app.postcss';

	import { FirebaseApp, SignedIn, SignedOut } from 'sveltefire';
	import { auth, firestore, storage } from '$lib/firebase';
	import { signInAnonymously } from 'firebase/auth';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup, AppShell } from '@skeletonlabs/skeleton';
	import Nav from '$lib/components/Nav.svelte';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });




</script>

<FirebaseApp {auth} {firestore} {storage}>

	<SignedIn>
		<AppShell>
			<svelte:fragment slot="header">
				<Nav />
			</svelte:fragment>
			<slot />
		</AppShell>
	</SignedIn>

	<SignedOut>
		<button on:click={() => signInAnonymously(auth)}>Sign In</button>
	</SignedOut>

</FirebaseApp>


