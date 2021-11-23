module.exports = {
  template: 'Home.svelte',
  all: () => [{ slug: '/' }],
  permalink: ({ request }) => request.slug,
  data: ({ data }) => {},
};
