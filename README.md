To reproduce:

1. Try running `npm run dev` and see that both the mdx page and mdx post have a working/styled component in them.
2. Try running `npm run build` then `npm run preview` and see that the mdx post now has no styles.

Issue Summary:

- I installed the Imba vite plugin and enabled it in astro.config.mjs
- I created an Imba file that defines a web component in src/imba-component.imba
- I included that Imba file in an astro component (this is necessary to include it in an mdx file) inside src/components/ImbaComponentWrapper.astro
- I included that astro component in two places:
  - An mdx page, defined in src/pages/test.mdx
  - A blog post mdx file, created using astro "content collections", the mdx file is in src/content/posts/test-post.mdx
- Running `npm run astro dev` everything works, the page and the post both display the imba component correctly
- Running `npm run astro build` then serving the dist/ folder with `npx http-server dist` reveals the problem: The component will have no CSS if viewed in the MDX _post_. The javascript counter functionality will work, but the styles are not there. The component renders correctly on the mdx _page_ however.
