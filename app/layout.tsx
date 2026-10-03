import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/site/LanguageProvider';
import { SiteShell } from '@/components/site/SiteShell';
export const metadata:Metadata={title:{default:'DiverseMind — Life, a little more your way.',template:'%s | DiverseMind'},description:'Tools for reading, focus, and everyday life. Explore DiverseMind Reading, Pause Lab, and a family of products made with ADHD minds in mind.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><LanguageProvider><SiteShell>{children}</SiteShell></LanguageProvider></body></html>}
