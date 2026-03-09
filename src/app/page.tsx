'use client'

export default function CalendarPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8 fade-in">
            <p className="text-lg text-white font-medium drop-shadow-lg">Non perderti nessun momento magico sull'isola</p>
          </div>
          
          <div className="glass-card rounded-lg shadow-2xl p-6 fade-in">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=ca1e157a0b04114c540f57459636156dccf9aac6d2f76a1b16227cd3e488da14%40group.calendar.google.com&ctz=Europe%2FRome"
                className="w-full h-[800px] border-0 rounded-lg"
                frameBorder="0"
                scrolling="no"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer integrato con effetto vetro scuro */}
      <footer className="glass-footer text-white py-6 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">
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
