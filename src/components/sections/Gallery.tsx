import { galleryImages } from '../../data/galleryImages'
import { Instagram } from 'lucide-react'

function Gallery() {
    return (
        <section
            id="gallery"
            className="min-h-screen pt-30 md:pt-35 2xl:pt-30 pb-20 lg:pb-30 bg-linear-to-b from-green-300 via-emerald-400 to-teal-400"
        >
            <div className="px-5 md:px-10 lg:px-16 xl:px-20 2xl:px-32">
                <h2 className="text-2xl xl:text-3xl 2xl:mt-10 font-medium px-2 mb-12 tracking-wider">Мої Роботи</h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 mb-14 lg:mb-22">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="flex justify-center items-center p-2 md:p-4"
                        >
                            <img src={image.src} className="w-full h-auto rounded-lg shadow-sm border border-white/30" />
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <p className="text-sm xl:text-base text-white/80 mb-2 xl:mb-3">Дивитися більше робіт</p>
                    <a
                        href="https://www.instagram.com/ludakasyan_hairstyle/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-white rounded-xl md:rounded-2xl gap-2 px-6 md:px-9 lg:px-12 xl:px-14 py-3 md:py-4 xl:py-5 lg:hover:scale-105 lg:duration-200 bg-linear-to-tr from-yellow-300 via-red-500 to-indigo-500"
                    >
                        <Instagram className="w-5 h-5" />
                        <span className="font-medium 2xl:text-xl">@ludakasyan_hairstyle</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Gallery
