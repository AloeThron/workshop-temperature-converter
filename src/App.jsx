import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [ctext, setcText] = useState(0);
  const [ftext, setfText] = useState(0);
  const [ktext, setkText] = useState(0);

  useEffect(() => {
    document.querySelector("#f").value = (ctext * 9) / 5 + 32;
    document.querySelector("#k").value = ctext * 1 + 273;
  }, [ctext]);

  useEffect(() => {
    document.querySelector("#c").value = ((ftext - 32) * 5) / 9;
    document.querySelector("#k").value = (ftext - 32) * (5 / 9) + 273;
  }, [ftext]);

  useEffect(() => {
    document.querySelector("#c").value = ktext * 1 - 273;
    document.querySelector("#f").value = ((ktext * 1 - 273) * 9) / 5 + 32;
  }, [ktext]);

  useEffect(() => {
    document.querySelector("#c").value = null;
    document.querySelector("#f").value = null;
    document.querySelector("#k").value = null;
  }, []);

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center shadow-md bg-white sm:bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="p-2 w-[500px] h-[500px] flex flex-wrap content-center justify-center rounded-l-md rounded-r-md bg-white">
          <div className="p-5 w-[300px]">
            <h1 className="text-2xl text-center font-semibold mb-10">
              Temperature Converter
            </h1>

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Celcius
                </label>
                <input
                  id="c"
                  type="number"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  onClick={() => {
                    document.querySelector("#c").value = null;
                    document.querySelector("#f").value = null;
                    document.querySelector("#k").value = null;
                  }}
                  onChange={(e) => {
                    setcText(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Farenheit
                </label>
                <input
                  id="f"
                  type="number"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  onClick={() => {
                    document.querySelector("#c").value = null;
                    document.querySelector("#f").value = null;
                    document.querySelector("#k").value = null;
                  }}
                  onChange={(e) => {
                    setfText(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Kelvin
                </label>
                <input
                  id="k"
                  type="number"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  onClick={() => {
                    document.querySelector("#c").value = null;
                    document.querySelector("#f").value = null;
                    document.querySelector("#k").value = null;
                  }}
                  onChange={(e) => {
                    setkText(e.target.value);
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
