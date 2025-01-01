import React, { useCallback, useState } from "react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleSelectedDateChange = useCallback((date : string) => {
    setSelectedDate(date)
  },[])

  return (
    <div className="flex h-screen w-screen">
      <div className="w-2/3 border-r overflow-y-auto">
        <LeftPanel onDateSelect={handleSelectedDateChange} />
      </div>
      <div className="w-1/3">
        <RightPanel selectedDate={selectedDate} />
      </div>
    </div>
  );
};

export default CalendarPage;
