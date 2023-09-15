const rehypePrettyCode = require('rehype-pretty-code');
const fs = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  // mdxRs: true,
  // },
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'dracula',
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

module.exports = withMDX(nextConfig);
