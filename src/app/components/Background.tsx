export default function Background() {
  return (
    <div className="card-abs w-full md:w-[40%] h-96 md:h-full fixed md:left-0 top-0 z-10 ">
      <img className="hidden md:block h-full" src="/images/bg-main-desktop.png" alt="" />
      <img className="block md:hidden w-full" src="/images/bg-main-mobile.png" alt="" />
    </div>
  )
}
