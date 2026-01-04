import { services } from '../../data/services'

function Services() {
    return (
        <>
            <section id="services" className="grid grid-col-[1fr_1fr_auto] min-h-screen px-6 pt-30 pb-20 bg-linear-to-b from-fuchsia-400 via-pink-400 to-rose-400">
                <h2 className="text-2xl mb-12 font-medium tracking-wider">Послуги</h2>

                <div className="mb-4 divide-y divide-white/30">
                    {services.map((category, index) => (
                        <div
                            key={index}
                            className={index === 0 ? 'pb-7' : 'py-7'}
                        >
                            <h3 className="text-xl tracking-wide mb-6">
                                <span className="pr-0.5">{category.icon}</span>{category.title}
                            </h3>
                            <ul className="flex flex-col list-disc ml-4 gap-2 italic">
                                {category.items.map((item, i) =>
                                    <li key={i} className="flex text-white items-start">
                                        <span className="text-white/50 mr-3">•</span>
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

                <p className="flex flex-row mt-2">
                    <span className="pr-1">💡</span>
                    <span className="text-white/70 italic tracking-wide">Точна ціна залежить від довжини та стану волосся</span>
                </p>
            </section>
            <div className="h-15 w-full bg-linear-to-b from-rose-400 to-blue-400"></div>
        </>
    );
}

export default Services
