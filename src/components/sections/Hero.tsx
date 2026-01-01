function Hero() {
    return (
        <>
            <section className="flex flex-col px-8 pt-10 h-[85vh] justify-center tracking-wide bg-linear-to-b from-blue-400 via-indigo-400 to-violet-400 text-white">
                <h1 className="text-2xl mb-1 font-medium tracking-wide">
                    Майстер Людмила
                </h1>
                <p className="italic mb-4">
                    Стильно. Якісно.
                </p>
                <button className="inline-flex bg-white/10 border-2 border-white/20 backdrop-blur-sm rounded-3xl p-4 justify-center">
                    Переглянути роботи
                </button>
            </section>
            <div className="h-15 w-full bg-linear-to-b from-violet-400 to-fuchsia-400"></div>
        </>
    );
}

export default Hero
