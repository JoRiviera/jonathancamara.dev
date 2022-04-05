<script>
  import skills from './skills';
  import experiences from './experiences';
  import Skill from "../../components/Skill.svelte";
  import Experience from "../../components/Experience.svelte";

  let tabIndex = 0;
  $: currentCategory = Object.assign({}, skills[Object.keys(skills)[tabIndex]]);
  const switchTab = (i) => () => {
    tabIndex = i;
  }
</script>

<h1>Resume</h1>

<h2 class="mb-1">Work Experience</h2>

<div class="grid grid-flow-row grid-cols-1 gap-2">
  {#each experiences as experience}
    <Experience {...experience} />
  {/each}
</div>

<h2>Skill Set</h2>

<div class="tabs">
{#each Object.keys(skills) as skillcategory, i}
  <div
    class="tab tab-bordered {tabIndex === i ? 'tab-active' : ''}"
    on:click={switchTab(i)}
  >
    {skillcategory.toUpperCase()}
  </div>
{/each}
</div>

<!--  <h3>{skillcategory.toUpperCase()}</h3>-->
  <div class="grid grid-flow-row grid-cols-2 gap-3 w-full">
    {#each currentCategory as skill}
      <Skill {...skill}/>
    {/each}
  </div>



<style lang="postcss">
  * {
    margin: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply text-left;
  }

  h1 {
    @apply mx-0 mb-2;
    font-size: xx-large;
  }

  h2 {
    margin-top: 1em;
    font-size: xx-large;
  }

  h3 {
    margin-top: 2em;
    margin-bottom: 1.5em;
    font-size: x-large;
  }
</style>
