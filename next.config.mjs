import createMDX from '@next/mdx';
import rehypePrismPlus from 'rehype-prism-plus';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  rehypePlugins: [rehypePrismPlus], // Add rehype-prism-plus for syntax highlighting
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);

