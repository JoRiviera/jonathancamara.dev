module.exports = {
  template: 'Blog.svelte',
  all: () => [{ slug: '/blog/' }],
  permalink: '/blog/',
  data: ({ data }) => {
    return data;
  },
};
