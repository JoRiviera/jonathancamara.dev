<script>
  export let templateHtml, settings;
</script>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  h1,
h2,
h3,
h4 {
  @apply font-serif font-bold leading-9;
}

h1 {
  @apply text-4xl leading-10 my-6;
}

h2 {
  @apply text-xl leading-10 my-6;
}

h3 {
  @apply text-lg leading-10 my-6;
}

p {
  @apply text-base leading-6 my-6;
}

a {
  @apply text-red-500 underline;
}

.code,
code {
  @apply px-1 text-sm rounded-lg mr-2 my-1 font-mono inline-block;
}

body {
  @apply antialiased;
}
  @tailwind utilities;
</style>

<svelte:head>
  <!-- <link rel="stylesheet" href="/style.css" /> -->
</svelte:head>
<body class='container md:mx-auto' data-theme="fantasy">
  <div class="lg:max-width-md p-3 md:w-4/5 lg:w-3/5 mx-auto bg-base-200 text-base-content">
    {@html templateHtml}
  </div>
</body>
