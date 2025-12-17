function Prices() {
  return (
    <> 
      <h1 className="flex text-2xl font-medium px-8 pb-20 pt-40 justify-center bg-linear-to-br from-red-300 via-rose-300 to-rose-200">Ціни</h1>
      <h2 className="text-lg mt-3">Чоловічі стрижки</h2>
      <ul className="list-inside mt-1">
        <li>Коротке волосся - -€</li>
        <li>Довге волосся - -€</li>
      </ul>
      <h2 className="text-lg mt-3">Жіночі стрижки</h2>
      <ul className="list-inside mt-1">
        <li>Коротке волосся - -€</li>
        <li>Довге волосся - -€</li>
      </ul>
      <h2 className="text-lg mt-3">Фарбування волосся</h2>
      <ul className="list-inside mt-1">
        <li>Однотонне фарбування - -€</li>
        <li>Мелірування - -€</li>
        <li>Інші послуги - -€</li>
      </ul>

      <div className="mt-5">* Коштовність стрижок можно уточнювати по телефону</div>
    </>
  )
}

export default Prices
