import React from 'react'

export default function ActiveCard(props) {
  return (
    <section className="w-full h-full order-2 flex justify-center">
      <div className="h-full w-[60%] flex flex-col justify-center items-center gap-5">
        <div>
          <img src="/images/icon-complete.svg" alt="" />
        </div>
        <h3 className='font-bold text-2xl'>
          THANK YOU!
        </h3>
        <h5 className='text-slate-400 text-sm mb-5'>
          We've added your card details
        </h5>
        <button
          onClick={props.func}
          className=" p-2 bg-[#21092F] w-full text-white rounded-md hover:opacity-90 "
          >
          Continue
        </button>

      </div>
    </section>   
  )
}
