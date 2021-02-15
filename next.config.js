const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const dev = process.env.NODE_ENV === 'development'

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  },
  ...(dev ? {} : withPWA({
    pwa: {
      dest: 'public',
      runtimeCaching,
    },
  }))
}
