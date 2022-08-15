<script lang="ts">
  import { page } from '$app/stores';
  import axios from "axios";
  import { onMount } from 'svelte';

  const listId = $page.params.listId;

  let list: any;

  onMount(async () => {
      await import('@ezzing/web-components/components/icon/icon.component');

      const token = localStorage.getItem('token');
      const options = {
          headers: {
              authorization: `Bearer ${token}`
          }
      }

      list = await (await axios.get('http://localhost:3001/lists/' + listId, options)).data;

      console.log(list);

  })
</script>

<style lang="sass">
  ezz-icon
    width: 20px
    display: flex
  .list-item
    padding-left: 20px
    border-bottom: 1px solid black
    padding: 10px 0
    display: flex
    p
      width: 200px
    input
      margin-left: 20px
  p
    margin: 0
    padding: 0
</style>


{#if !list}
    <p>Loading...</p>
{/if}

{#if list}
    <h3>{list.name}</h3>

    <ezz-icon name={list.icon} color={list.color} />

    <h4>Items: </h4>
    {#each list.listItems as listItem}
      <div class="list-item">
        <p>{listItem.name}</p>
        <input type="checkbox" name={list.name} value={listItem.checked} checked={listItem.checked} id={listItem.id} />
      </div>
    {/each}
{/if}
