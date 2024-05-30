import Background from "./components/Background";
import Card from "./components/Card";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
    <Background/>
    <main className="flex flex-col md:flex-row w-screen h-screen justify-center items-center z-20">
      <Card/>
      <Form />      
    </main>
    </>

  );
}
