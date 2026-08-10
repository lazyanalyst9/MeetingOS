import type { Metadata, Viewport } from 'next'; import './globals.css'
export const metadata:Metadata={title:'82 Day Medium Challenge',description:'Your private, offline-first discipline companion.',manifest:'/manifest.webmanifest',appleWebApp:{capable:true,title:'82 Day Challenge',statusBarStyle:'black-translucent'},icons:{icon:'/icon.svg',apple:'/icon.svg'}}
export const viewport:Viewport={themeColor:'#090d12',width:'device-width',initialScale:1,viewportFit:'cover'}
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
