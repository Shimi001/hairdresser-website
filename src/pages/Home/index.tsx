import { Link } from 'react-router-dom';

function Home({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      {/* hero section */}
      <div className="flex flex-col px-8 pb-20 pt-40 tracking-wide bg-linear-to-br from-pink-300 via-rose-300 to-teal-300">
        <h1 className="text-2xl font-medium">
          Майстер Людмила
        </h1>
        <p className="mt-1 italic">
          Стильно. Якісно.
        </p>
        <Link to="/gallery" onClick={closeMenu} className="inline-flex mt-5 border rounded-md p-4 justify-center">
          Переглянути роботи
        </Link>
      </div>

      {/* price/services */}
      <div className="mt-10 px-5 tracking-wide">
        <h2 className="text-2xl font-medium">Послуги</h2>
        <ul className="flex flex-col list-inside mt-5 gap-1">
          <li>Чоловіча стрижка</li>
          <li>Жіночі стрижка</li>
          <li>Фарбування волосся</li>
          <li>Складне фарбування волосся</li>
          <li>Зачіски різної складності</li>
          <li>Хімічна завивка волосся</li>
          <li>Укладання волосся</li>
          <li>Прокалування вушей</li>
        </ul>
        <Link to="/prices" onClick={closeMenu} className="inline-flex mt-8 border rounded-md p-4 px-10 justify-center bg-linear-to-br from-pink-300 via-rose-300 to-teal-200">
          Переглянути ціни
        </Link>
      </div>

      {/* review */}
      <div className="flex flex-col mt-16 px-5 tracking-wide">
        <h2 className="text-2xl font-medium">Про Перукаря</h2>
        <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed inventore laborum nisi voluptatum fugit perspiciatis ab ullam hic? Quisquam sunt quae placeat sit quos, quia fugit accusamus vero cupiditate.</p>
      </div>

      {/* contacts */}
      <div className="mt-10 tracking-wide">
        <div className="p-1 w-full bg-linear-to-r from-pink-300 via-rose-300 to-teal-200"></div>
        <div className="px-5 pt-10 pb-20">
          <h2 className="text-2xl font-medium">Контакти</h2>
          <p className="mt-5">Австрійский: <span className="italic">+43 00000</span></p>
          <p>Український: <span className="italic">+38 00000</span></p>
          <h2 className="text-lg mt-4">Соцмережі</h2>
          <div>Instagram, telegram, . . .</div>
        </div>
      </div>
    </>
  )
}

export default Home
