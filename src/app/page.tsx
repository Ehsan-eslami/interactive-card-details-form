"use client"

import { useEffect, useState } from "react";
import Background from "./components/Background";
import Card from "./components/Card";
import Input from "./components/Input";
import ActiveCard from "./components/ActiveCard";

export default function Home() {
  const [cardVal, setCardVal] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvc] = useState('000');
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); 
    const formattedValue = value.match(/.{1,4}/g)?.join(' ').slice(0, 20) || value;
    setCardVal(formattedValue);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  };

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); 
    setCardMonth(value);
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); 
    setCardYear(value);
  };

  const handleCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3); 
    setCardCvc(value);
  };

  const handleSubmit = () => {
    setShowModal(true)
  };

  const handleContinue = () => {
    setShowModal(false)
    setCardCvc('000')
    setCardName('')
    setCardMonth('00')
    setCardVal('')
    setCardYear('00')
  }


  useEffect(() => {}, [cardVal, cardMonth, cardYear, cardCvc]);


  return (
    <>
    <Background/>
    <main className="flex flex-col md:flex-row w-screen h-screen justify-center items-center z-20">
      <Card cardVal={cardVal} cardName={cardName} cardMonth={cardMonth} cardYear={cardYear} cardCvc={cardCvc}/>
      {!showModal ?
      (
        <section className="w-full h-full order-2 flex justify-center">
          <div className="h-full w-[60%] flex flex-col justify-center items-center gap-5">
            <Input 
              name='CARDHOLDER NAME'
              func={handleName}
              placeholder="e.g. Jane Appleseed"
              type="text"
              />

            <Input 
              name='CARD NUMBER'
              func={handleChange}
              placeholder="e.g. 1234 5678 9012 3456"
              type="number"
              />
            <div className=" z-10 flex flex-row gap-2 " > 
              <Input 
                name='Exp. Date (MM)'
                func={handleMonth}
                type="number"
                placeholder="00"
                />
              
              <Input 
                name='Exp. Date (YY)'
                func={handleYear}
                type="number"
                placeholder="00"
                />
              <Input 
              name='CVC'
              func={handleCvc}
              type="number"
              placeholder="000"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              className="z-10 p-2 bg-[#21092F] w-full text-white rounded-md hover:opacity-90 "
              >
              Confirm
            </button>

          </div>
        </section>     
      ) 
      :
      (
        <ActiveCard func={handleContinue} />
      )
      }

      
    </main>
    </>

  );
}


