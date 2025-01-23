import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { Entry } from "../../types/Entry";
import useGetEntries from "../../hooks/useGetEntries";

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getEntries = useGetEntries();

  const handleSelectedDateChange = useCallback((date: string) => {
    setSelectedDate(date);
  }, []);


  const getCurrentDate = useMemo(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; 
  }, []);

  const fetchEntries = useCallback(async () => {
    if (entries.length > 0) return; 
    setLoading(true);
    try {
      const fetchedEntries = await getEntries();
      if (fetchedEntries) {
        setEntries(fetchedEntries);
      }
    } catch (error) {
      console.error("Error fetching entries:", error);
    } finally {
      setLoading(false);
    }
  }, [entries.length, getEntries]);

  useEffect(() => {
    setSelectedDate(getCurrentDate);
  }, [getCurrentDate]);

  useEffect(() => {
    fetchEntries();
  },[fetchEntries])

  const filteredEntries = useMemo(() => {
    if (!selectedDate) return [];
    return entries.filter((entry) =>
      new Date(entry.date).toISOString().split("T")[0] === selectedDate
    );
  }, [entries, selectedDate]);

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
          entryData={filteredEntries}   
          loading={loading}  
        />
      </div>
    </div>
  );
};

export default memo(CalendarPage);
