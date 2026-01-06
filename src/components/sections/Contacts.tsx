import { Phone, MessageCircle, Send } from 'lucide-react'

const contactsButtons = [
  { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/380663823269' },
  { name: 'Viber', icon: Phone, link: 'https://msng.link/o?380663823269=vi' },
  { name: 'Telegram', icon: Send, link: 'https://t.me/Ludmyla_Kasian' }
]

function Contacts() {
  return (
    <section
      id="contacts"
      className="min-h-screen pt-30 md:pt-35 2xl:pt-30 bg-linear-to-b justify-center from-rose-400 via-orange-300 to-amber-300"
    >
      <div className="px-5 md:px-16 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <h2 className="text-2xl xl:text-3xl mb-30 px-2 lg:px-4 md:mb-20 2xl:mb-30 2xl:mt-10 font-medium tracking-wider">Контакти</h2>
          <div className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-14 md:px-19 xl:px-30 max-w-3xl mx-auto">
            <div className="max-w-md mx-auto border-b border-white/20 pb-8 mb-6 2xl:pb-10 2xl:mb-8">
              {/* phone */}
              <div className="text-center">
                <p className="text-sm text-white/60 mb-1">Телефонуйте за номером</p>
                <div className="italic xl:text-xl 2xl:text-2xl tracking-wide lg:tracking-wide mb-7 md:mb-9 2xl:mb-12">+43 677 62492753</div>

                <div className="grid grid-cols-3 gap-2 md:gap-5">
                  {contactsButtons.map((button) => (
                    <a
                      key={button.name}
                      href={button.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 2xl:p-6 bg-white/10 border border-white/20 backdrop-blur-sm shadow-sm text-white rounded-xl lg:hover:scale-105 lg:duration-200"
                    >
                      <button.icon className="w-6 h-6" />
                      <span className="text-xs xl:text-base">{button.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center xl:text-xl italic text-white/70 tracking-wide">Нижня Австрія • Відень</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts
