<script>
	// import {user} from './auth.js';
    import { writable } from 'svelte/store';

    export const user = writable(false);
</script>

{#if $user}
	<slot name="authed"></slot>
{:else}
	<slot name="not_authed"></slot>
{/if}
