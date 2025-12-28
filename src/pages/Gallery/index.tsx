import { galleryImages } from '../../data/galleryImages';
import { Instagram } from 'lucide-react';

function Gallery() {
  return (
    <>
      <h1 className="flex text-2xl font-medium px-8 pb-20 pt-41 mb-10 justify-center bg-linear-to-br from-blue-500 via-indigo-400 to-sky-300">Мої роботи</h1>
      <div className="grid grid-cols-2 px-5 mb-10">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="flex justify-center items-center p-2"
          >
            <img src={image.src} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        ))}
      </div>

      <div className="text-center pb-15 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-2">Подивитися більше робіт</p>
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
    </>
  )
}

export default Gallery
