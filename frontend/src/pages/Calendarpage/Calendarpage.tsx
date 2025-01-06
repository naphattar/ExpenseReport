import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { Entry } from "../../types/Entry";
import useMockEntries from "../../hooks/useMockEntries";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [entriesData, setEntriesData] = useState<{ [key: string]: Entry[] }>({});
  const { data , loading } = useMockEntries(); 

  const handleSelectedDateChange = useCallback((date: string) => {
    setSelectedDate(date);
  }, []);

  const handleAddEntry = useCallback((date: string, entry: Entry) => {
    setEntriesData((prev) => ({
      ...prev,
      [date]: prev[date] ? [...prev[date], entry] : [entry],
    }));
  }, []);

  const getCurrentDate = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; 
  }, []);

  useEffect(() => {
    setSelectedDate(getCurrentDate);
  }, [getCurrentDate]);

  const entriesForSelectedDate = useMemo(() => {
    if (selectedDate) {
      return entriesData[selectedDate] || data[selectedDate] || []; 
    }
    return [];
  }, [selectedDate, entriesData, data]);

  return (
    <div className="flex h-screen w-screen">
      <div className="w-2/3 border-r overflow-y-auto">
        <LeftPanel 
          onDateSelect={handleSelectedDateChange} 
          selectedDate={selectedDate}
        />
      </div>
      <div className="w-1/3">
        <RightPanel
          selectedDate={selectedDate}
          data={data}
          addEntry={handleAddEntry} 
          loading={loading}       
        />
      </div>
    </div>
  );
};

export default memo(CalendarPage);
