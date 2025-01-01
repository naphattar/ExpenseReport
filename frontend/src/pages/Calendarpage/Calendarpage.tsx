import React, { useState } from "react";
import LeftPanel from "./components/LeftPanel/Leftside";
import RightPanel from "./components/RightPanel/Rightside";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div className="flex h-screen w-screen">
      <div className="w-2/3 border-r overflow-y-auto">
        <LeftPanel onDateSelect={(date : string ) => setSelectedDate(date)} />
      </div>
      <div className="w-1/3">
        <RightPanel selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default CalendarPage;
