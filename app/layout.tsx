import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'VELORA — Drive your next chapter',description:'A considered automotive marketplace. Explore, compare and find your next car. A multilingual portfolio by Cenker Sule.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="tr"><body>{children}</body></html>}
