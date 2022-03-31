<script>
  import Icon from "./Icon.svelte";
  import { mdiAccountGroup, mdiChevronRight, mdiEarth, mdiLaptop } from "@mdi/js";
  export let company, domain, size, contract, title, start, end, missions, remote, stack, links;
</script>

<div class="card w-full shadow-xl flex flex-col justify-center gap-3 my-4 py-4 px-2 bg-base-200 prose">

  <h2 class="text-center">{title}</h2>
  <p>
    <strong>{company}</strong> (<em>{domain}</em>)<br>
    {contract} {end ? 'from' : 'since'} {start} {end ? 'to ' + end : '(current position)' }<br>
  </p>
  <div class="flex flex-line justify-around">
    <div class="flex flex-line gap-2 items-center ">
      <Icon path="{mdiAccountGroup}" title="Company size"/>
      <span>Company Size:</span>
    </div>
    <div class="flex flex-line gap-2 items-center">
      <Icon path="{mdiEarth}" title="Global Team size"/>
      <span>{size.global}</span>
    </div>
    <div class="flex flex-line gap-2 items-center">
      <Icon path="{mdiLaptop}" title="Dev Team size"/>
      <span>{size.devteam}</span>
    </div>
  </div>
  <div class="divider primary"></div>

  <ul>
    {#each missions as mission}
      <li>{@html mission}</li>
    {/each}
  </ul>

  <div class="flex flex-col justify-evenly gap-2 my-3">
    {#each stack as stackgroup}
      <div class="flex flex-line flex-wrap gap-1 justify-evenly">
        {#each stackgroup as tech}
          <div class="badge badge-outline badge-lg m-1">{tech}</div>
        {/each}
      </div>
    {/each}
  </div>

<!--  TODO -->
  <div class="max-h-sm m-auto">
    <a class="btn btn-outline btn-primary btn-active btn-sm gap-2 m-auto text-primary-content">
      Read more about this experience <Icon size="1.3em" path={mdiChevronRight} />
    </a>
  </div>
</div>

<style>
  * {
    font: inherit;
  }

  h2 > p > strong {
    font-size: larger;
  }

  .btn {
      text-decoration: none;
  }

  .card {
    top: 0;
    transition: top 0.5s ease, box-shadow 1s ease;
  }

  .card:hover {
    @apply shadow-2xl;
    top: -1em;
  }
</style>
