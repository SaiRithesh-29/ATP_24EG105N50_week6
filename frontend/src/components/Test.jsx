import { useContext } from "react";
import { counterContextObj } from "../contexts/contextProvider";
import { useCounterStore } from "../store/CounterStore";

function Test() {
  console.log("Test");
   let newCounter1= useCounterStore((state)=>state.newCounter1);
   let incrementCounter1= useCounterStore((state)=>state.incrementCounter1);
  const {counter1,changeCounter1}= useContext(counterContextObj);
  return (
    <div>
     <div>
      <h1 className="text-4xl font-semibold text-gray-800">Counter: {counter1}</h1>
      <button onClick={changeCounter1} className="bg-amber-400 text-white font-medium px-5 py-2 rounded-lg hover:bg-amber-500">+</button>
    </div>
     <div>
      <h1 className="text-4xl font-semibold text-gray-800 mt-6">NewCounter1: {newCounter1}</h1>
      <button onClick={incrementCounter1} className="bg-blue-400 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-500">+</button>
    </div>
    </div>
  )
}

export default Test