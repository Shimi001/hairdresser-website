import { Phone, MessageCircle, Send } from 'lucide-react'

function Contacts() {
  return (
    <section className="flex flex-col h-screen px-5 py-25 bg-linear-to-b justify-center from-rose-400 via-orange-300 to-amber-300">
      <h1 className="text-2xl mb-12 font-medium tracking-wide">Контакти</h1>
      <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
        <div className="max-w-md mx-auto space-y-6 border-b border-white/20 pb-6 mb-6">
          {/* phone */}
          <div className="text-center">
            <p className="text-sm text-white/60 mb-1">Телефонуйте за номером</p>
            <div className="italic mb-5">+43 677 62492753</div>

            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://wa.me/380663823269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm text-white rounded-xl transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs font-medium">WhatsApp</span>
              </a>

              <a
                href="https://msng.link/o?380663823269=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm text-white rounded-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span className="text-xs font-medium">Viber</span>
              </a>

              <a
                href="https://t.me/Ludmyla_Kasian"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm text-white rounded-xl transition-colors"
              >
                <Send className="w-6 h-6" />
                <span className="text-xs font-medium">Telegram</span>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center italic text-white/70">Нижня Австрія • Відень</div>
      </div>
    </section>
  );
}

export default Contacts
