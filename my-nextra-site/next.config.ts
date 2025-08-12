// import type { NextConfig } from "next";
import nextra from "nextra";
// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// Set up Nextra with its configuration
const withNextra = nextra({
  // ... Add Nextra-specific options here
  latex: true,
  search: {
    codeblocks: false,
  },
  // contentDirBasePath: '/src/app/docs'
});

// Export the final Next.js config with Nextra included
export default withNextra({
  reactStrictMode: true,
  // ... Add regular Next.js options here
});
