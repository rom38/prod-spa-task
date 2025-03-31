import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/prod-spa-task',
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/products/',
        //destination: '/',
        permanent: true,
      },
    ]
  },
}
 
export default nextConfig