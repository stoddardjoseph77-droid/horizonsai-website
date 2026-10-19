/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  /* Two hosts were both returning 200 for the same pages, so Search
     Console treated them as duplicates and indexed nothing. The apex
     host redirects to www before any other rule. /commercial was the
     homepage when the site served two audiences; a page-level
     permanentRedirect() cannot be statically prerendered and emitted a
     308 with no Location, so that one stays an edge redirect too. */
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "host", value: "horizonsai.co" }],
        destination: "https://www.horizonsai.co",
        permanent: true,
      },
      {
        source: "/:path+",
        has: [{ type: "host", value: "horizonsai.co" }],
        destination: "https://www.horizonsai.co/:path+",
        permanent: true,
      },
      { source: "/commercial", destination: "/", permanent: true },
      { source: "/commercial/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
