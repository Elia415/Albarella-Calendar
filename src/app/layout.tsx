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
      <body className={`${inter.className} animated-gradient min-h-screen`}>
        <header className="glass-header relative py-8 px-8 shadow-sm">
          <div className="w-full flex items-center">
            <a href="/" className="relative h-12 w-auto ml-8">
              <img
                src="/Logo Albarella Holidays.png"
                alt="Albarella Holidays"
                className="h-auto"
                style={{ height: '48px' }}
              />
            </a>
            <div className="flex-1 flex justify-center mr-40">
              <h1 className="text-primary font-bold text-5xl">Calendario Eventi</h1>
            </div>
            <div className="w-12"></div>
          </div>
        </header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
