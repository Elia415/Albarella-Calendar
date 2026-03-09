'use client'

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-8">
          {/* Titolo grande solo su mobile */}
          <div className="text-center mb-4 md:mb-2 fade-in block md:hidden">
            <h1 className="text-white font-bold text-3xl drop-shadow-lg">Calendario Eventi</h1>
          </div>
          
          {/* Sottotitolo claim solo su mobile */}
          <div className="text-center mb-4 md:mb-8 fade-in block md:hidden">
            <p className="text-sm text-white font-medium drop-shadow-lg">Non perderti nessun momento magico sull'isola</p>
          </div>
          
          {/* Sottotitolo solo su desktop */}
          <div className="text-center mb-4 md:mb-8 fade-in hidden md:block">
            <p className="text-sm md:text-lg text-white font-medium drop-shadow-lg">Non perderti nessun momento magico sull'isola</p>
          </div>
          
          <div className="glass-card rounded-lg shadow-2xl p-2 md:p-6 fade-in">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=ca1e157a0b04114c540f57459636156dccf9aac6d2f76a1b16227cd3e488da14%40group.calendar.google.com&ctz=Europe%2FRome"
                className="w-full h-[400px] md:h-[600px] lg:h-[800px] border-0 rounded-lg"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer integrato con effetto vetro scuro */}
      <footer className="glass-footer text-white py-4 md:py-6 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs md:text-sm">
            Calendario realizzato con ❤️ da <span className="font-semibold">Albarella Holidays</span>
          </p>
          <p className="text-xs mt-2 opacity-75">
            © 2026 Albarella Holidays. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  )
}
