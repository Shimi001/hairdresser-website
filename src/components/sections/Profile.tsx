import placeholderImg from '../../assets/placeholderImg.png'

function Profile() {
  return (
    <>
      <section className="flex flex-col h-min-screen py-25 px-5 tracking-wide bg-linear-to-b from-blue-400 via-sky-400 to-cyan-400">
        <h2 className="text-2xl mb-8 font-medium tracking-wide">Про Мене</h2>
        <div className="grid grid-col-[1fr_auto]">
          <div className="flex mb-5 w-64 h-auto mx-auto"><img src={placeholderImg} className="border border-white/30 rounded-full"></img></div>
          <div className="flex flex-col gap-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Doloribus sed inventore laborum nisi voluptatum fugit perspiciatis ab ullam hic?</p>
            <p>Quisquam sunt quae placeat sit quos, quia fugit accusamus vero cupiditate.</p>
          </div>
        </div>
      </section>
      <div className="h-15 w-full bg-linear-to-b from-cyan-400 to-green-300"></div>
    </>
  );
}

export default Profile
