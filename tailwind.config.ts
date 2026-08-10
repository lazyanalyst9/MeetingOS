import type { Config } from 'tailwindcss'
export default { darkMode: 'class', content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#090d12', panel:'#121820', lime:'#b7f34a', muted:'#89939f' }, boxShadow:{card:'0 12px 40px rgba(0,0,0,.22)'} } }, plugins: [] } satisfies Config
