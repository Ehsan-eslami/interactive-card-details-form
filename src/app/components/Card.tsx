import React from 'react';

interface CardProps {
  cardVal?: string;
  cardName?: string;
  cardMonth?: string;
  cardYear?: string;
  cardCvc?: string;
}

const Card: React.FC<CardProps> = ({ cardVal, cardName, cardMonth, cardYear, cardCvc }) => {
  return (
    <>
      <section className="hidden md:grid md:grid-cols-5 gap-5 p-5 md:p-0 w-full order-1">
        <div className="relative w-[280px] md:w-96 col-span-2 col-start-2 shadow-lg rounded-lg order-2 md:order-none">
          <img className="z-30 w-fit h-fit" src="/images/bg-card-front.png" alt="card front" />
          <div className="absolute top-0 left-0 p-6 w-full h-full">
            <div className="md:mb-[60px]">
              <img src="/images/card-logo.svg" alt="card logo" />
            </div>
            <h2 className="text-white text-lg md:text-2xl text-center tracking-widest">
              {cardVal || "0000 0000 0000 0000"}
            </h2>
            <div className="flex justify-between px-3 py-4 text-white">
              <p>{cardName ? cardName.toUpperCase() : 'JANE APPLESEED'}</p>
              <p>
                <span>{cardMonth}/</span>
                <span>{cardYear}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-[280px] md:w-96 col-span-2 col-start-2 md:col-span-2 md:col-start-3 shadow-lg rounded-lg order-1 md:order-none">
          <img className="z-30 w-fit h-fit" src="/images/bg-card-back.png" alt="card back" />
          <p className="text-white absolute top-[43%] z-20 right-10">
            {cardCvc}
          </p>
        </div>
      </section>
      <section className="fixed md:hidden top-0 left-[50%] w-full translate-x-[-50%]">
        <div className="grid grid-cols-5 gap-5 p-5 md:p-0 w-full order-1">
          <div className="relative w-[200px] sm:w-[280px] md:w-96 col-span-2 col-start-2 shadow-lg rounded-lg order-2 md:order-none">
            <img className="z-30 w-fit h-fit" src="/images/bg-card-front.png" alt="card front" />
            <div className="absolute top-0 left-0 p-2 sm:p-6 w-full h-full">
              <div className="mb-[10px] md:mb-[60px]">
                <img className="w-10" src="/images/card-logo.svg" alt="card logo" />
              </div>
              <h2 className="text-white text-sm sm:text-lg md:text-2xl text-center tracking-widest">
                {cardVal || "0000 0000 0000 0000"}
              </h2>
              <div className="flex justify-between px-3 py-4 text-sm sm:text-lg text-white">
                <p>{cardName ? cardName.toUpperCase() : 'JANE APPLESEED'}</p>
                <p>
                  <span>{cardMonth}/</span>
                  <span>{cardYear}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[200px] sm:w-[280px] md:w-96 col-span-2 col-start-3 md:col-span-2 md:col-start-3 shadow-lg rounded-lg order-1 md:order-none">
            <img className="z-30 w-fit h-fit" src="/images/bg-card-back.png" alt="card back" />
            <p className="text-white absolute text-[10px] sm:text-base top-[43%] z-20 right-10">
              {cardCvc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
