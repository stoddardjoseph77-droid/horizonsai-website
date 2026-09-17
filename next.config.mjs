/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  /* /commercial was the homepage when the site served two audiences.
     A page component calling permanentRedirect() cannot be statically
     prerendered — it emitted a 308 with no Location header and Next's
     error page as the body, so inbound links passed nothing on. An edge
     redirect sends a real 308 with a Location. */
  async redirects() {
    return [
      { source: "/commercial", destination: "/", permanent: true },
      { source: "/commercial/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
