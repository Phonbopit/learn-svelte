<script lang="ts">
  let count = 0
  let newTodo = ''

  export let todos: string[] = []

  function handleClick() {
    count += 1
  }

  const addTodo = (newTodo: string) => {
    todos = [...todos, newTodo]
  }

  // watch count and update doubled
  // declare variable with $: prefix
  $: doubled = count * 2

  // run a statement
  $: console.log('count is', count)

  // run a group statements
  $: {
    console.log('group: count is', count)
    console.log('group: doubled is', doubled)
  }
</script>

<button data-testid="click-me" on:click={handleClick}>Click me!</button>

<p>Total count is {count}</p>
<p>Total doubled is {doubled}</p>

<h4>List of Todos</h4>
{#each todos as todo}
  <p>{todo}</p>
{/each}

<input type="text" bind:value={newTodo} />
<button on:click={() => addTodo(newTodo)}>Add Todo</button>
