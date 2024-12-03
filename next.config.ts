import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    ppr: "incremental",
  },
  redirects: async () => [
    {
      source: "/redirect",
      destination: "/",
      permanent: false,
    },
  ],
  rewrites: async () => [
    {
      source: "/docs/:path*",
      destination: "https://render-docs-proxy.onrender.com//docs/:path*",
    },
  ],
  // headers: async () => {
  //   return [
  //     {
  //       source: "/dynamic",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=0, stale-while-revalidate=60",
  //         },
  //       ],
  //     },
  //   ]
  // },
}

export default nextConfig
