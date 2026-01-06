function Hero() {
    return (
        <section
            id="hero"
            className="flex flex-col h-[85vh] justify-center tracking-wide bg-linear-to-b from-blue-400 via-indigo-400 to-violet-400 text-white"
        >
            <div className="mx-auto text-center">
                <h1 className="text-2xl xl:text-3xl mb-1 font-medium tracking-wide md:tracking-wider">
                    <span>Майстер </span>
                    <span className="italic">Людмила</span>
                </h1>
                <p className="xl:text-xl italic mb-7">
                    Стильно. Якісно.
                </p>
                <button onClick={() => { document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="inline-flex cursor-pointer xl:text-xl bg-white/10 border-2 border-white/20 backdrop-blur-sm rounded-3xl p-4 md:px-9 xl:px-11 justify-center lg:hover:scale-105 lg:duration-200">
                    Переглянути роботи
                </button>
            </div>
        </section>
    );
}

export default Hero
