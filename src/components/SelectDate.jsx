import { useState } from "react";
import Calendar from "react-calendar";

export function SelectDate() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="selectdate-container">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
