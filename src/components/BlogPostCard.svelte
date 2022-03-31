<script>
  import { mdiChevronRight } from '@mdi/js';
  import Icon from './Icon.svelte';
  export let post = null;
</script>

<style lang="postcss">
  a {
    @apply text-base-content;
    text-decoration: none;
  }

  article {
    top: 0;
    transition: top 0.5s ease, box-shadow 1s ease;
  }

  article:hover {
    @apply shadow-2xl;
    top: -1em;
  }

  article > header {
  }

  article:hover > footer > button {
    @apply bg-primary;
    transition: background-color 0.5s ease;
  }

  article:hover > footer > button:hover {
    @apply bg-primary-focus;
  }

  article > footer > button > a {
    transition: font-size 0.5s ease, font-weight 0.5s ease, color 0.5s ease;
  }

  article:hover > footer > button > a {
    @apply text-3xl font-bold text-primary-content;
  }
</style>

{#if post}
  <article class="card w-full shadow-xl bg-base-200">
    {#if post.frontmatter}
      <header class="px-7 pt-3 prose">
        <h2 class="card-title text-xl">
          <a href="/blog/{post.slug}">{post.frontmatter.title}</a>
        </h2>
        <div class="flex-col justify-end">
          {#if post.frontmatter.author && post.frontmatter.date}
            <small class="block self-end">
              par <strong>{post.frontmatter.author}</strong>, publié le
              <em>{new Date(post.frontmatter.date).toLocaleString()}</em>
            </small>
          {/if}
          <div class="w-full inline-flex">
            {#each post.frontmatter.categories as category}
              <span class="badge badge-xs mx-2">{category}</span>
            {/each}
          </div>
        </div>
      </header>
      <p class="px-7 prose italic">{post.frontmatter.excerpt}</p>
      <footer class="justify-center card-actions">
        <button class="btn btn-outline btn-block">
<!--          TODO Use only a tag for navigation -->
          <a href="/blog/{post.slug}" class="inline-flex gap-2 items-center text-2xl">
            <span class="text-base">Lire</span>
            <Icon size="1em" path={mdiChevronRight} />
          </a>
        </button>
      </footer>
    {:else}
      <p class="text-error border-error">Missing Data.</p>
    {/if}
  </article>
{/if}
