import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import "./App.css";
import Card from "./components/card";
import { uid } from "uid";

function App() {
  const [timer, setTimer] = useState(0);
  const [data, setdata] = useState([]);
  const [totaltimer, setTotalTimer] = useState(0);

  useEffect(() => {
    if (timer >= totaltimer*1000) {
      handleClear();
    }
  }, [timer]);
  function scrollToTop() {
    var element = document.getElementById("list");
    element.scrollTop = -element.scrollHeight;
  }
  useEffect(() => {
    scrollToTop();
  }, [data]);

  const increment = useRef(null);
  let date = null;
  let tim = 0;
  let now = moment();
  let update = function () {
    tim = tim + 10;
    //date = moment(new Date());
    setTimer(timer => timer + 10);
    setdata((data) => [
      ...data,
      {
        date: now.clone().format("DD/MM/YYYY hh:mm:ss"),
        rem: totaltimer*1000 - tim,
        uid: uid(),
      },
    ]);
  };

  const handleStart = () => {
    setdata([]);
    if (totaltimer) {
      update();
      increment.current = setInterval(update, 10);
    } else {
      alert("Please Set Timer Value");
    }
  };
  const handleReset = () => {
    clearInterval(increment.current);
    setTimer(0);
    setTotalTimer(0);
    setdata([]);
  };
  const handleClear = () => {
    clearInterval(increment.current);
    setTimer(0);
    setTotalTimer(0);
  };
  const removeCard = (id) => {
    const filtered = data.filter((x) => x.uid !== id);
    setdata(filtered);
  };

  return (
    <div class="container py-5 my-5">
      <div class="row">
        <div class="col-md-6 col-sm-6 ">
          <div className="mx-height" id="list">
            {data.map((item, index) => (
              <Card key={item.uid} data={item} removeCard={removeCard} />
            ))}
          </div>
        </div>
        <div class="col-md-6 col-sm-6 c2">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              New Timer
            </label>
            <input
              type="number"
              value={totaltimer}
              onChange={(e) => setTotalTimer((e.target.value))}
              class="form-control rounded-0"
            />
            <div class="col-auto">
              {timer <= 0 ? (
                <button
                  onClick={handleStart}
                  type="button"
                  class="btn btn-secondary mt-2 px-4 mb-3 rounded-0 w-100"
                >
                  Add
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  type="button"
                  class="btn btn-secondary mt-2 px-4 mb-3 rounded-0 w-100"
                >
                  Reset
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
