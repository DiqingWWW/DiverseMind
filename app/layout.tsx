import type { Metadata } from 'next';
import './globals.css';
import './design-language.css';
import { LanguageProvider } from '@/components/site/LanguageProvider';
import { SiteShell } from '@/components/site/SiteShell';
export const metadata:Metadata={title:{default:'DiverseMind AI — Different minds. Different ways forward.',template:'%s | DiverseMind'},description:'Tools for reading, focus, and everyday life. Explore DiverseMind Reading, Pause Lab, Gentle Hand, Focus Room and ADHD Hub.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><LanguageProvider><SiteShell>{children}</SiteShell></LanguageProvider></body></html>}
