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
            <head>
                <link rel="icon" type='image/x-icon' href="/pokeballico.ico" />
            </head>
            <body className={dmsans.className}>
                {children}
            </body>
        </html>
    );
}