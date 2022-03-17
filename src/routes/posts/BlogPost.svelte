<script>
  export let data, request, settings; // data is mainly being populated from the @elderjs/plugin-markdown
  const { html, frontmatter } = data;
</script>

<style>
</style>

<svelte:head>
  <title>{frontmatter.title}</title>
  <meta name="description" content={frontmatter.excerpt} />
  <link href="{settings.origin}{request.permalink}" rel="canonical" />
</svelte:head>

<div class="text-sm breadcrumbs">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/blog">Blog</a></li>
  </ul>
</div>

<article class="mx-4 mt-6">
  <header>
    <h1>{frontmatter.title}</h1>
    <div class="flex-col justify-end">
      {#if frontmatter.author && frontmatter.date}
        <small class="block self-end">
          par <strong>{frontmatter.author}</strong>, publié le
          <em>{new Date(frontmatter.date).toLocaleString()}</em>
        </small>
      {/if}
      <div class="w-full inline-flex">
        {#each frontmatter.categories as category}
          <span class="badge badge-xs mx-2">{category}</span>
        {/each}
      </div>
    </div>
  </header>

  <main class="prose">
    {#if html}
      {@html html}
    {:else}
      <h1>Oops!! Not found!</h1>
    {/if}
  </main>
</article>
