<script>
  import BlogPostCard from '../../components/BlogPostCard.svelte';
  export let data, helpers, settings;
  const blogPosts = data.markdown.posts;
</script>

<style>
</style>

<h1>Tous les articles du Blog</h1>
<main class="p-10">
  {#each blogPosts as post}
    <BlogPostCard {post} />
  {/each}
</main>
