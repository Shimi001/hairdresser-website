import { Phone, MessageCircle, Send } from 'lucide-react'

const contactsButtons = [
  { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/380663823269' },
  { name: 'Viber', icon: Phone, link: 'https://msng.link/o?380663823269=vi' },
  { name: 'Telegram', icon: Send, link: 'https://t.me/Ludmyla_Kasian' }
]

function Contacts() {
  return (
    <section id="contacts" className="flex flex-col min-h-screen px-5 py-30 bg-linear-to-b justify-center from-rose-400 via-orange-300 to-amber-300">
      <h1 className="text-2xl mb-12 font-medium tracking-wider">Контакти</h1>
      <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
        <div className="max-w-md mx-auto space-y-6 border-b border-white/20 pb-8 mb-6">
          {/* phone */}
          <div className="text-center">
            <p className="text-sm text-white/60 mb-1">Телефонуйте за номером</p>
            <div className="italic tracking-wide mb-7">+43 677 62492753</div>

            <div className="grid grid-cols-3 gap-2">
              {contactsButtons.map((button) => (
                <a
                  key={button.name}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 p-4 bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm text-white rounded-xl transition-colors"
                >
                  <button.icon className="w-6 h-6" />
                  <span className="text-xs ">{button.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center italic text-white/70 tracking-wide">Нижня Австрія • Відень</div>
      </div>
    </section>
  );
}

export default Contacts
