<script lang="ts">
	import axios from "axios";
	import { onMount } from 'svelte';
    const apiUrl = import.meta.env.VITE_API_URL;

    let userData: {categories: any[]};

    onMount(async () => {
        const token = localStorage.getItem('token');
        const options = {
            headers: {
                authorization: `Bearer ${token}`
            }
        }

        userData = await (await axios.get(`${apiUrl}/users`, options)).data;

        console.log(userData);

    })

</script>


<h1>List of categories</h1>

{#if !userData}
    <p>Loading...</p>
{/if}

{#if userData}
    {#each userData.categories || [] as category}
        <p><a href={`/app/categories/${category.id}`}>{category.name} </a></p>
    {/each}
{/if}
