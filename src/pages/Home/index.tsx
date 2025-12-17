import { Link } from 'react-router-dom';
import { services } from '../../data/services';

function Home({ closeMenu }: { closeMenu: () => void }) {
  return (
    <>
      {/* hero section */}
      <section className="flex flex-col px-8 pb-20 pt-41 mb-16 tracking-wide bg-linear-to-br from-indigo-400 via-violet-300 to-purple-300">
        <h1 className="text-2xl mb-1 font-medium">
          Майстер Людмила
        </h1>
        <p className="italic mb-4">
          Стильно. Якісно.
        </p>
        <Link to="/gallery" onClick={closeMenu} className="inline-flex border rounded-md p-4 justify-center">
          Переглянути роботи
        </Link>
      </section>

      {/* services */}
      <section className="px-5 mb-16 tracking-wide">
        <h2 className="text-2xl mb-6 font-medium">Послуги</h2>
        <div className="space-y-5 mb-8 list-inside">
          {services.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl mb-3">{category.title}</h3>
              <ul className="flex flex-col list-disc ml-8 gap-1 italic">
                {category.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link to="/prices"
          onClick={closeMenu}
          className="inline-flex border rounded-md p-4 px-10 justify-center bg-linear-to-br from-indigo-300 via-violet-300 to-purple-300">
          Переглянути ціни
        </Link>
      </section>

      {/* profile */}
      <section className="flex flex-col mb-15 px-5 tracking-wide">
        <h2 className="text-2xl mb-8 font-medium">Про Перукаря</h2>
        <div className="flex flex-col">
          <div className="flex mb-5 justify-center items-center p-15 rounded-2xl bg-gray-300">image</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sed inventore laborum nisi voluptatum fugit perspiciatis ab ullam hic? Quisquam sunt quae placeat sit quos, quia fugit accusamus vero cupiditate.</p>
        </div>
      </section>

      <div className="p-1 w-full bg-linear-to-r from-indigo-400 via-violet-300 to-purple-300"></div>

      {/* contacts */}
      <section className="mt-15 mb-20 px-5 tracking-wide">
        <div className="mb-5">
          <h2 className="text-2xl mb-4 font-medium">Телефон</h2>
          <p>Австрійский: <span className="italic">+43 00000</span></p>
          <p>Український: <span className="italic">+38 00000</span></p>
        </div>
        <div className="flex flex-row mb-6 justify-center gap-8">
          <div className="bg-gray-400 p-6 rounded-2xl"></div>
          <div className="bg-gray-400 p-6 rounded-2xl"></div>
          <div className="bg-gray-400 p-6 rounded-2xl"></div>
        </div>
        <div>
          <h2 className="text-2xl font-medium mb-4">Соцмережі</h2>
          <p className="italic">Instagram</p>
          <p className="italic">Facebook</p>
        </div>
      </section>
    </>
  )
}

export default Home
