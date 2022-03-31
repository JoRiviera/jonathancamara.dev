<script>
  import skills from './skills';
  import experiences from './experiences';
  import Skill from "../../components/Skill.svelte";
  import Experience from "../../components/Experience.svelte";
</script>

<h1>Resume</h1>

<div class="grid grid-flow-row grid-cols-1 gap-2">
  {#each experiences as experience}
    <Experience {...experience} />
  {/each}
</div>

<h2>Skill Set</h2>
{#each Object.keys(skills) as skillcategory}
  <h3>{skillcategory.toUpperCase()}</h3>
  <div class="grid grid-flow-row grid-cols-2">
    {#each skills[skillcategory] as skill}
      <Skill {...skill}/>
    {/each}
  </div>
{/each}



<style>
  * {
    margin: auto;
  }

  h1 {
    @apply text-left mx-0 mb-2;

  }
</style>
