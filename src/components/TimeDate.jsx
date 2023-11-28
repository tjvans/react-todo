import { useEffect, useState } from "react";
import Calendar from "react-calendar";

export default function TimeDate() {
  const [status, setStatus] = useState("display");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState(() => new Date());

  function useTime() {
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }
  const currentTime = useTime();

  return (
    <div className="selectdate-container">
      {time.toLocaleTimeString()}
      <Calendar onChange={setSelectedDate} value={selectedDate} />
    </div>
  );
}
