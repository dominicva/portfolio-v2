const rehypePrettyCode = require('rehype-pretty-code');
const fs = require('fs');

/** @type {import('next').NextConfig} */
const nextConfig = {};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: 'dracula',
};

// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [],
//     rehypePlugins: [[rehypePrettyCode, options]],
//   },
// });

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);
