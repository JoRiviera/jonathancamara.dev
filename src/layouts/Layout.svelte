<script>
  import Icon from '../components/Icon.svelte';
  import { mdiHome, mdiHeart, mdiLinkedin, mdiTwitter} from '@mdi/js';
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

  nav a, nav a:visited {
    @apply text-base-content;
    text-decoration: none;
  }

  nav a:hover {
    @apply text-accent link link-hover;
  }

  nav .site-logo > a {
    @apply text-primary;
    text-decoration: none;
  }

  nav .site-logo > a:hover {
    @apply text-primary-focus;
    text-decoration: none;
  }

</style>

<svelte:head>
  <!-- <link rel="stylesheet" href="/style.css" /> -->
</svelte:head>

<body class="container" data-theme="fantasy">
  <div class="bg-base-300">
    <div class="max-w-screen-lg mx-auto
      min-h-screen
      flex flex-col justify-between
      p-3
      bg-base-100 text-base-content">
      <nav class="navbar w-full inline-flex justify-between">
        <div class="site-logo">
          <a href="/"
             class="inline-flex gap-2 font-bold items-center">
            <Icon path={mdiHome} size="1.5em"/>
            JONATHANCAMARA.DEV</a>
        </div>
        <div class="text-base font-semibold">
          <ul class="inline-flex gap-3">
            <li><a href="/blog/">Blog</a></li>
          </ul>
          <div class="divider divider-vertical"></div>
          <ul class="inline-flex gap-3">
            <li><a href="/resume/">Resume</a></li>
            <li><a href="/hire/">HIRE ME</a></li>
          </ul>
          <div class="divider divider-vertical"></div>
          <ul class="inline-flex gap-3">
            <li><a href="/about/">About me</a></li>
            <li>
              <a href="/support/" class="inline-flex gap-1 items-center">
                <Icon path="{mdiHeart}"/>
                <span>Support</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main class="flex flex-col flex-grow justify-start">
        {@html templateHtml}
      </main>

      <footer class="
          text-neutral-focus footer footer-center pt-6 pb-12">
        <ul>
          <li class="footer-title">Connectons nous!</li>
          <li>
            <a href="https://www.linkedin.com/camarajonathan" class="link link-hover inline-flex gap-1 items-center">
              <Icon path="{mdiLinkedin}" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/joriviera" class="link link-hover inline-flex gap-1 items-center">
              <Icon path="{mdiTwitter}" />
              <span>Twitter</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</body>
