import { DM_Sans } from 'next/font/google';
import './global.css';

const dmsans = DM_Sans({
    weight: ["400", "700"],  
    style: ["normal"],        
    subsets: ["latin-ext"],
  });

export const metadata = {
    title: 'Pokemon Trainers',
    description: 'A website of Pokemon trainers',
};

export default function RootLayout({children}){
    return (
        <html>
            <body className={dmsans.className}>
                {children}
            </body>
        </html>
    );
}