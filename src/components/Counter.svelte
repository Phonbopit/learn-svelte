<script lang="ts">
  export let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>Click me!</button>

<p data-testid="count">Total clicks is {count}</p>
