import { useContext } from "react";
import { counterContextObj } from "../contexts/contextProvider";
import { useCounterStore } from "../store/CounterStore";
import Test from "./Test";

function Home() {
  let { newCounter, incrementCounter, decrementCounter } = useCounterStore();
  const { counter, changeCounter } = useContext(counterContextObj);
  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-gray-800">Counter: {counter}</h1>
        <button onClick={changeCounter} className="bg-amber-400 text-white font-medium px-5 py-2 rounded-lg hover:bg-amber-500">+</button>
      </div>
      <div>
        <h1 className="text-4xl font-semibold text-gray-800 mt-6">NewCounter: {newCounter}</h1>
        <button onClick={incrementCounter} className="bg-blue-400 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-500 mr-2">+</button>
        <button onClick={decrementCounter} className="bg-amber-400 text-white font-medium px-5 py-2 rounded-lg hover:bg-amber-500">-</button>
      </div>
      <Test />
    </div>
  );
}

export default Home;