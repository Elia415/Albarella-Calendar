import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Calendario Albarella Holidays',
  description: 'Calendario eventi e attività Albarella Holidays',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <style>{`
          @media (min-width: 768px) {
            .logo-desktop {
              height: 48px !important;
            }
          }
        `}</style>
      </head>
      <body className={`${inter.className} animated-gradient min-h-screen`}>
        <header className="glass-header relative py-4 md:py-8 px-4 md:px-8 shadow-sm">
          <div className="w-full flex items-center">
            <a href="/" className="relative h-8 md:h-12 w-auto ml-2 md:ml-8">
              <img
                src="/Logo Albarella Holidays.png"
                alt="Albarella Holidays"
                className="h-auto logo-desktop"
                style={{ height: '32px' }}
              />
            </a>
            <div className="flex-1 flex justify-center mr-12 md:mr-20 lg:mr-40">
              <h1 className="text-primary font-bold text-xl md:text-3xl lg:text-5xl whitespace-nowrap">Calendario Eventi</h1>
            </div>
            <div className="w-8 md:w-12 lg:w-20"></div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
