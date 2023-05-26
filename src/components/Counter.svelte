<script lang="ts">
  export let count = 0

  function handleClick() {
    count += 1
  }

  function reset() {
    count = 0
  }
</script>

<button on:click={handleClick}>Click me!</button>
<button on:click={reset}>Reset!</button>

<p data-testid="count">Total clicks is {count}</p>
