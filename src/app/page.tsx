"use client"

import { useEffect, useState } from "react";
import Background from "./components/Background";
import Card from "./components/Card";
import Input from "./components/Input";

export default function Home() {
  const [cardVal, setCardVal] = useState('')
  const [cardName, setCardName] = useState('')
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardVal(e.target.value.match(/\d{4}/g)?.join(' '));
  }

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
  }

  useEffect(() => {
    // console.log(cardVal);
  }, [cardVal]);

  

  return (
    <>
    <Background/>
    <main className="flex flex-col md:flex-row w-screen h-screen justify-center items-center z-20">
      <Card cardVal={cardVal} cardName={cardName}/>

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
          <div className="flex flex-row gap-2 " > 
            <Input 
              name='Hello'

            />
            
            <Input 
              name='Hello'

            />
            <Input 
              name='Hello'

            />
          </div>
          
        </div>
      </section>     
    </main>
    </>

  );
}


