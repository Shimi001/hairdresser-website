import profile from '../../assets/profile.webp';

function Profile() {
  return (
    <>
      <section id="profile" className="flex flex-col min-h-screen pt-30 pb-20 px-5 tracking-wide bg-linear-to-b from-blue-400 via-sky-400 to-cyan-400">
        <h2 className="text-2xl mb-12 font-medium tracking-wider">Про Мене</h2>
        <div className="grid grid-col-[1fr_auto]">
          <div className="flex mb-10 w-64 h-auto mx-auto"><img src={profile} className="border border-white/30 rounded-full"></img></div>
          <div className="space-y-7 italic leading-relaxed text-white/90">
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
      </section>
      <div className="h-15 w-full bg-linear-to-b from-cyan-400 to-green-300"></div>
    </>
  );
}

export default Profile
