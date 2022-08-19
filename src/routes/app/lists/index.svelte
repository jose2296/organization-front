<script lang="ts">
	import axios from "axios";
	import { onMount } from 'svelte';
    const apiUrl = import.meta.env.VITE_API_URL;

    let lists: any[];

    onMount(async () => {
        const token = localStorage.getItem('token');
        const options = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        lists = await (await axios.get(`${apiUrl}/lists`, options)).data;

        console.log(lists);

    })

</script>


<h1>List of lists</h1>

{#if !lists}
    <p>Loading...</p>
{/if}

{#if lists}
    {#each lists || [] as list}
        <p><a href={`/app/lists/${list.id}`}>{list.name} </a></p>
    {/each}
{/if}
