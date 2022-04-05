<script>
  import Icon from "./Icon.svelte";

  export let title,level,note, iconPath;
</script>

<div class="card card-side">
  <figure class="flex"><Icon path="{iconPath}" title="Javascript" alt="Javascript official logo" class="m-auto text-primary" size="3em"/></figure>
  <div class="card-body flex flex-col gap-2">
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
</style>
