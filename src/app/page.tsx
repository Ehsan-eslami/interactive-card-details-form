
export default function Home() {
  return (
    <>
    {/* background  */}
    <div className="card-abs w-full md:w-[40%] h-96 md:h-full fixed md:left-0 top-0 z-10 ">
      <img className="hidden md:block h-full" src="/images/bg-main-desktop.png" alt="" />
      <img className="block md:hidden w-full" src="/images/bg-main-mobile.png" alt="" />
    </div>

    <main className="flex flex-col md:flex-row w-screen h-screen justify-center items-center z-20">
      <section className="grid grid-cols-5 gap-5 p-5 md:p-0 w-full order-1">
        <div className="relative w-[280px] md:w-96 col-span-2 col-start-2 shadow-lg rounded-lg order-2 md:order-none">
          <img className="z-30 w-fit h-fit " src="/images/bg-card-front.png" alt="card front" />
          <div 
            className=" absolute top-0 left-0 p-6  w-full h-full" 
            >
            <div className="md:mb-[60px]">
              <img src="/images/card-logo.svg" alt="" />
            </div>

            <h2 className="text-white text-lg md:text-2xl text-center tracking-widest">
              0000 0000 0000 0000
            </h2>
            <div className="flex justify-between px-3 py-4 text-white">
              <p>Name</p>
              <p>00/00</p>
            </div>
          </div>
        </div>

        <div className="w-[280px] md:w-96 col-span-2 col-start-2 md:col-span-2 md:col-start-3 shadow-lg rounded-lg order-1 md:order-none">
          <img src="/images/bg-card-back.png" alt="card back" />
        </div>
      </section>


      <section className="w-full h-full order-2">
        hello from 2
      </section>
    </main>
    </>

  );
}
