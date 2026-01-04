function Hero() {
    return (
        <>
            <section id="hero" className="flex flex-col px-8 h-[85vh] justify-center tracking-wide bg-linear-to-b from-blue-400 via-indigo-400 to-violet-400 text-white">
                <div className="mx-auto text-center">
                    <h1 className="text-2xl mb-1 font-medium tracking-wide">
                        <span>Майстер </span>
                        <span className="italic">Людмила</span>
                    </h1>
                    <p className="italic mb-7">
                        Стильно. Якісно.
                    </p>
                    <button onClick={() => { document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' }) }}
                        className="inline-flex bg-white/10 border-2 border-white/20 backdrop-blur-sm rounded-3xl p-4 justify-center">
                        Переглянути роботи
                    </button>
                </div>
            </section>
            <div className="text-center text-4xl text-white/30 h-15 w-full bg-linear-to-b from-violet-400 to-fuchsia-400">↓</div>
        </>
    );
}

export default Hero
