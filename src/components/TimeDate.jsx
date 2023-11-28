import { useEffect, useState } from "react";
import Calendar from "react-calendar";

export default function TimeDate() {
  const [status, setStatus] = useState("display");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState(() => new Date());

  // update time
  let toExactMinute = 60000 - (new Date().getTime() % 60000);

  function useTime() {
    useEffect(() => {
      setTimeout(() => {
        const id = setInterval(() => {
          setTime(new Date());
        }, 60000);
        return () => clearInterval(id);
      }, toExactMinute);
    }, []);
    return time;
  }
  useTime();

  if (status === "select") {
    return (
      <div className="timedate-container">
        <Calendar
          className="calender-component"
          onChange={setSelectedDate}
          value={selectedDate}
        />
      </div>
    );
  }

  return (
    <div className="timedate-container">
      {time.toLocaleString("default", { month: "long" })}
      {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </div>
  );
}
