import withPWAInit from '@ducanh2912/next-pwa'
const withPWA = withPWAInit({ registerType: 'autoUpdate', workbox: { navigateFallback: '/', globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'] } })
export default withPWA({ reactStrictMode: true })
