import { Link } from 'react-router-dom';
import { services } from '../../data/services';
import placeholderImg from '../../assets/placeholderImg.png';
import { Phone, MessageCircle, Send, Instagram } from 'lucide-react';

function Home({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      {/* hero section */}
      <section className="flex flex-col px-8 pb-20 pt-41 mb-16 tracking-wide bg-linear-to-br from-indigo-400 via-violet-300 to-purple-300">
        <h1 className="text-2xl mb-1 font-medium tracking-wide">
          Майстер Людмила
        </h1>
        <p className="italic mb-4">
          Стильно. Якісно.
        </p>
        <Link to="/gallery"
          onClick={closeMenu}
          className="inline-flex border rounded-md p-4 justify-center">
          Переглянути роботи
        </Link>
      </section>

      {/* services */}
      <section className="grid grid-col-[1fr_1fr_auto] px-6 mb-18">
        <h2 className="text-2xl mb-8 font-medium tracking-wide">Послуги</h2>

        <div className="mb-4 divide-y divide-gray-300">
          {services.map((category, index) => (
            <div
              key={index}
              className={index === 0 ? 'pb-6' : 'py-6'}
            >
              <h3 className="text-xl tracking-wide mb-3">
                <span className="pr-0.5">{category.icon}</span>{category.title}
              </h3>
              <ul className="flex flex-col list-disc ml-4 gap-1 italic">
                {category.items.map((item, i) =>
                  <li key={i} className="flex text-gray-700 items-start">
                    <span className="text-pink-400 mr-3">•</span>
                    <div className="flex justify-between w-full">
                      <span className="flex italic">{item.name}</span>
                      <span className="flex">{item.price}</span>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <p className="flex flex-row italic text-gray-600 mt-2"><span className="pr-1">💡</span>Точна ціна залежить від довжини та стану волосся</p>
      </section>

      {/* profile */}
      <section className="flex flex-col mb-15 px-5 tracking-wide">
        <h2 className="text-2xl mb-8 font-medium tracking-wide">Про Перукаря</h2>
        <div className="grid grid-col-[1fr_auto]">
          <div className="flex mb-5 w-64 h-auto mx-auto"><img src={placeholderImg} className="rounded-2xl"></img></div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Doloribus sed inventore laborum nisi voluptatum fugit perspiciatis ab ullam hic?</p>
            <p>Quisquam sunt quae placeat sit quos, quia fugit accusamus vero cupiditate.</p>
          </div>
        </div>
      </section>

      <div className="p-1 w-full bg-linear-to-r from-indigo-400 via-violet-300 to-purple-300"></div>

      {/* contacts */}
      <section className="px-5 mt-15 pb-25">
        <div className="max-w-md mx-auto space-y-6">
          {/* phone */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Телефонуйте за номером</p>
            <div className="italic mb-5">+43 677 62492753</div>

            <div className="grid grid-cols-3 gap-3">
              <a
                href="https://wa.me/380663823269"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-linear-to-tr from-green-400 to-green-600 text-white rounded-xl transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-xs font-medium">WhatsApp</span>
              </a>

              <a
                href="https://msng.link/o?380663823269=vi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-linear-to-tr from-purple-400 to-purple-600 text-white rounded-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span className="text-xs font-medium">Viber</span>
              </a>

              <a
                href="https://t.me/Ludmyla_Kasian"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-linear-to-tr from-blue-400 to-blue-600 text-white rounded-xl transition-colors"
              >
                <Send className="w-6 h-6" />
                <span className="text-xs font-medium">Telegram</span>
              </a>
            </div>
          </div>

          {/* instagram */}
          <div className="text-center mt-5 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Подивитися роботи</p>
            <a
              href="https://www.instagram.com/ludakasyan_hairstyle/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-tr from-yellow-300 via-red-500 to-indigo-500 text-white rounded-xl"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-medium">@ludakasyan_hairstyle</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
