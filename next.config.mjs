/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "://unsplash.com" },
      { protocol: "https", hostname: "://instagram.com" },
    ],
  },
  experimental: {
    mdxRs: false,
  },
};

export default nextConfig;
