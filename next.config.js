const rehypePrettyCode = require('rehype-pretty-code');

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'one-dark-pro',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: '' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['highlighted', 'word'];
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
  experimental: {
    // mdxRs: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
