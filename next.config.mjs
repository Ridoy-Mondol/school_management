// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;






/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = 'school_management';  // Set the repository name here
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  output: 'export', // Static export
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Disable image optimization for GitHub Pages
  },
};

export default nextConfig;
