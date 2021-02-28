const withPWA = require('next-pwa')
const withPlugins = require('next-compose-plugins')

const dev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    // Fixes packages that depend on fs/module module
    if (!isServer) {
      config.node = { fs: 'empty', module: 'empty' }
    }

    return config
  }
}

module.exports = withPlugins([
  ...(!dev ? [withPWA, {
    pwa: {
      dest: 'public',
    },
  }] : [])
], nextConfig)
