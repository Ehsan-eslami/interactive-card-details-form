"use client"

import { useEffect, useState } from "react";
import Background from "./components/Background";
import Card from "./components/Card";
import Input from "./components/Input";
import ActiveCard from "./components/ActiveCard";

export default function Home() {
  const [cardVal, setCardVal] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardMonth, setCardMonth] = useState('');
  const [cardYear, setCardYear] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [showModal, setShowModal] = useState(false);

  const [errors, setErrors] = useState({
    cardVal: '',
    cardName: '',
    cardMonth: '',
    cardYear: '',
    cardCvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); 
    const formattedValue = value.match(/.{1,4}/g)?.join(' ').slice(0, 19) || value;
    setCardVal(formattedValue);
    if (!/^\d{16}$/.test(value)) {
      setErrors(prev => ({ ...prev, cardVal: 'Card number must be 16 digits' }));
    } else {
      setErrors(prev => ({ ...prev, cardVal: '' }));
    }
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardName(e.target.value);
    if (!e.target.value.trim()) {
      setErrors(prev => ({ ...prev, cardName: 'Cardholder name is required' }));
    } else {
      setErrors(prev => ({ ...prev, cardName: '' }));
    }
  };

  const handleMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); 
    setCardMonth(value);
    if (!/^(0[1-9]|1[0-2])$/.test(value)) {
      setErrors(prev => ({ ...prev, cardMonth: 'Month must be between 01 and 12' }));
    } else {
      setErrors(prev => ({ ...prev, cardMonth: '' }));
    }
  };

  const handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); 
    setCardYear(value);
    if (!/^\d{2}$/.test(value)) {
      setErrors(prev => ({ ...prev, cardYear: 'Year must be two digits' }));
    } else {
      setErrors(prev => ({ ...prev, cardYear: '' }));
    }
  };

  const handleCvc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3); 
    setCardCvc(value);
    if (!/^\d{3}$/.test(value)) {
      setErrors(prev => ({ ...prev, cardCvc: 'CVC must be 3 digits' }));
    } else {
      setErrors(prev => ({ ...prev, cardCvc: '' }));
    }
  };

  const handleSubmit = () => {
    const hasErrors = Object.values(errors).some(error => error !== '') || 
      !cardVal || !cardName || !cardMonth || !cardYear || !cardCvc;
    if (hasErrors) {
      alert("Please fill out all fields correctly.");
    } else {
      setShowModal(true);
    }
  };

  const handleContinue = () => {
    setShowModal(false);
    setCardVal('');
    setCardName('');
    setCardMonth('');
    setCardYear('');
    setCardCvc('');
  };

  useEffect(() => {}, [cardVal, cardMonth, cardYear, cardCvc]);

  return (
    <>
      <Background />
      <main className="flex flex-col md:flex-row w-screen h-screen justify-center items-center z-20">
        <Card 
          cardVal={cardVal} 
          cardName={cardName} 
          cardMonth={cardMonth} 
          cardYear={cardYear} 
          cardCvc={cardCvc} 
        />
        {!showModal ? (
          <section className="w-full h-full order-2 flex justify-center">
            <div className="h-full w-[60%] flex flex-col justify-center items-center gap-5">
              <Input 
                name='CARDHOLDER NAME'
                func={handleName}
                placeholder="e.g. Jane Appleseed"
                type="text"
                errors={errors.cardName}
              />
              <Input 
                name='CARD NUMBER'
                func={handleChange}
                placeholder="e.g. 1234 5678 9012 3456"
                type="text" 
                errors={errors.cardVal}
              />
              <div className="z-10 flex flex-row gap-2"> 
                <Input 
                  name='Exp. Date (MM)'
                  func={handleMonth}
                  type="text" 
                  placeholder="MM"
                  errors={errors.cardMonth}
                />
                <Input 
                  name='Exp. Date (YY)'
                  func={handleYear}
                  type="text" 
                  placeholder="YY"
                  errors={errors.cardYear}
                />
                <Input 
                  name='CVC'
                  func={handleCvc}
                  type="text" 
                  placeholder="CVC"
                  errors={errors.cardCvc}
                />
              </div>
              <button
                onClick={handleSubmit}
                className="z-10 p-2 bg-[#21092F] w-full text-white rounded-md hover:opacity-90"
              >
                Confirm
              </button>
            </div>
          </section>     
        ) : (
          <ActiveCard func={handleContinue} />
        )}
      </main>

      <div className="attribution z-40 absolute bottom-0 left-[50%] translate-x-[-50%]">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/Ehsan-eslami">EhsanEslami</a>.
      </div>
    </>
  );
}
