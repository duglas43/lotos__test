import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
function App() {
  const [time, setTime] = React.useState("0:00");
  let start = 1671635954309;
  React.useEffect(() => {
    const interval = setInterval(() => {
      let diff = Date.now() - start;
      let minutes = Math.floor(diff / 60000) % 2;
      let seconds = 60 - Math.floor((diff % 60000) / 1000);
      minutes = seconds === 60 ? minutes + 1 : minutes;
      seconds = seconds === 60 ? 0 : seconds;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      setTime(minutes + ":" + seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App p-4">
      <h2 className="fw-normal text-danger">
        Ход торгов Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2022 07:00)
      </h2>
      <hr />
      <div className="text-danger bg-danger bg-opacity-10 d-inline-block rounded px-1">
        Уважаемые участники, во время вашего хода вы можете изменить параметры
        торогов, указанных в таблице:
      </div>
      <Routes>
        <Route path="/" element={<MainPage time={time} />} />
        <Route path="/:id" element={<MainPage time={time} />} />
      </Routes>
    </div>
  );
}

export default App;
