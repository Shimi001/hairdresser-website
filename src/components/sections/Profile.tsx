import profile from '../../assets/profile.webp';

function Profile() {
  return (
    <section
      id="profile"
      className="min-h-screen pt-30 md:pt-35 2xl:pt-30 pb-20 lg:pb-30 xl:pb-0 tracking-wide bg-linear-to-b from-blue-400 via-sky-400 to-cyan-400"
    >
      <div className="px-6 md:px-16 xl:px-20 2xl:px-32">
        <div className="flex flex-col">
          <h2 className="text-2xl xl:text-3xl px-2 2xl:px-0 mb-12 lg:mb-16 xl:mb-18 2xl:mb-30 2xl:mt-10 font-medium tracking-wider">Про Мене</h2>
          <div className="grid grid-col-[1fr_auto] lg:grid-cols-[auto_1fr]">
            <div className="mb-10 lg:mb-0 lg:mr-10 2xl:mr-20 2xl:ml-10 w-full mx-auto max-w-xs flex items-center justify-center">
              <img src={profile} className="border border-white/30 rounded-full"></img>
            </div>
            <div className="flex flex-col justify-center xl:text-xl 2xl:tracking-wider space-y-7 italic leading-relaxed text-white/90">
              <p>Вітаю! Мене звуть Людмила, і я професійний перукар
                з понад 10-річним досвідом роботи.</p>
              <p>Для мене найважливіше - створити дружню атмосферу
                та індивідуальний підхід до кожного клієнта. Моя
                мета - зробити вас гарними та задоволеними результатом.</p>
              <p>Працюю з усіма типами волосся, використовуючи
                професійну косметику. Завжди починаю з консультації,
                щоб зрозуміти ваші побажання та запропонувати
                найкращі рішення.</p>
              <p>Багато клієнтів довіряють мені вже роками, і я
                дуже ціную ці теплі стосунки. Буду рада бачити
                вас серед них!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile
