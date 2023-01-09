/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ["www.pngall.com", "links.papareact.com"]
  },
  env: {
    mapbox_key: "pk.eyJ1IjoiYXZpaml0c2FoYTI5OTciLCJhIjoiY2xjcDM4ZWpiMXEzYjNybXFlN2ExNWtjYSJ9.l0lzw0rJpo-uIh3v7-NFdQ"
  }
}
