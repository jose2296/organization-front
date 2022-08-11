<script lang="ts">
  import { page } from '$app/stores';
  import axios from "axios";
  import { onMount } from 'svelte';

  const categoryId = $page.params.categoryId;

  let category: any;

  onMount(async () => {
      await import('@ezzing/web-components/components/icon/icon.component');

      const token = localStorage.getItem('token');
      const options = {
          headers: {
              authorization: `Bearer ${token}`
          }
      }

      category = await (await axios.get('http://localhost:3001/categories/' + categoryId, options)).data;

      console.log(category);

  })
</script>

<style lang="sass">
  ezz-icon
    width: 20px
    display: flex
  .goal
    padding-left: 20px
    border-bottom: 1px solid black
    padding: 10px 0
    .options
      display: flex
      > *:not(:last-child)
        padding-right: 10px

  p
    margin: 0
    padding: 0
</style>


{#if !category}
    <p>Loading...</p>
{/if}

{#if category}
    <h3 style:color={category.color}>{category.name} - {category.icon}</h3>

    <ezz-icon name={category.icon} color={category.color} />

    <h4>Lists: </h4>
    {#each category.lists as list}
        <p>{list.name}</p>
    {/each}

    <h4>Notes: </h4>
    {#each category.notes as note}
        <p>{note.name}</p>
    {/each}

    <h4>Goals: </h4>
    {#each category.goals as goal}
      <div class="goal">
        <p>{goal.name}</p>

        <p>{goal.schedule}</p>

        {#if goal.schedule_repeat}
          <div class="options">
            {#each Object.entries(goal.schedule_repeat) as [option, value]}
              <p>{option} - {value}</p>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
{/if}
