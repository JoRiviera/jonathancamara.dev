<script>
  import Icon from "./Icon.svelte";

  export let title,level,note, iconPath;
</script>

<div class="card w-full grid grid-flow-row gap-1">
  <div class="card-body grow flex-col gap-2">
    <p class="card-title"><strong>{title.toUpperCase()}</strong></p>
    <p>{level}</p>
    <p class="italic">{note}</p>
  </div>
</div>

<style lang="postcss">
  .card {
    @apply bg-base-200;
    top: 0;
    transition: top 0.5s ease, box-shadow 1s ease;
  }

  .card:hover {
    @apply shadow-2xl;
    top: -1em;
  }

  .card-body > p {
    margin: 0;
  }

  .card > figure {

  }
</style>
