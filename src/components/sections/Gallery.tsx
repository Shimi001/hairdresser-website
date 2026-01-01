import { galleryImages } from '../../data/galleryImages'
import { Instagram } from 'lucide-react'

function Gallery() {
    return (
        <>
            <section className="h-min-screen py-25 bg-linear-to-b from-green-300 via-emerald-400 to-teal-400">
                <h1 className="flex text-2xl font-medium px-8 mb-10">Мої Роботи</h1>
                <div className="grid grid-cols-2 px-5 mb-10">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="flex justify-center items-center p-2"
                        >
                            <img src={image.src} className="w-full h-auto rounded-lg shadow-sm border border-white/30" />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm text-white/80 mb-2">Подивитися більше робіт</p>
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
            </section>
            <div className="h-15 w-full bg-linear-to-b from-teal-400 to-rose-400"></div>
        </>
    );
}

export default Gallery
