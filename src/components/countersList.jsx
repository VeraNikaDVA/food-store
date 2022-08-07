import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 0, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handelDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const newCounters = counters.map((c) => {
      if (c.id === id) {
        return { id: c.id, value: c.value + 1, name: c.name };
      } else {
        return c;
      }
    });
    setCounters(newCounters);
  };

  const handleDecrement = (id) => {
    const newCounters = counters.map((c) => {
      if (c.id === id) {
        return { id: c.id, value: c.value - 1, name: c.name };
      } else {
        return c;
      }
    });
    setCounters(newCounters);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handelDelete}
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          value={count.value}
          {...count}
        />
      ))}
      <button className="btn btn-primary btm-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
