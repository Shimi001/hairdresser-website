import { services } from "../../data/services";

function Services() {
  return (
    <section
      id="services"
      className="min-h-screen pt-30 md:pt-35 xl:pt-30 pb-20 lg:pb-30 bg-linear-to-b from-fuchsia-400 via-pink-400 to-rose-400"
    >
      <div className="px-6 md:px-16 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <h2 className="text-2xl xl:text-3xl px-2 xl:px-0 mb-12 lg:mb-16 xl:mb-18 2xl:mb-20 2xl:mt-10 font-medium tracking-wider">
            Послуги
          </h2>

          <div className="grid lg:grid-cols-2 lg:gap-10 mb-10 md:mb-15 lg:mb-25 2xl:mb-27">
            {services.map((category, index) => (
              <div
                key={index}
                className={
                  index === 0 ? "pb-4 md:pb-5 lg:pb-0" : "py-4 md:py-5 lg:py-0"
                }
              >
                <div className="h-full bg-white/10 border border-white/20 rounded-2xl p-2 py-5 md:p-4 md:py-8 lg:p-5 xl:py-9 2xl:p-7 2xl:py-10">
                  <h3 className="text-xl xl:text-2xl tracking-wide mb-6 lg:mb-7 xl:mb-8">
                    <span className="pr-0.5">{category.icon}</span>
                    {category.title}
                  </h3>
                  <ul className="flex flex-col list-disc mx-3 md:mx-6 xl:text-xl gap-2 lg:gap-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex text-white items-start">
                        <div className="flex justify-between w-full">
                          <span>{item.name}</span>
                          <span className="text-white/80">{item.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <p className="flex flex-row xl:text-xl">
            <span className="pr-1">💡</span>
            <span className="text-white/70 italic tracking-wide">
              Точна ціна залежить від довжини та стану волосся
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
