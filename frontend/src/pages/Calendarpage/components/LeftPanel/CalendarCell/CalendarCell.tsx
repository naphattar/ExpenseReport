import React, { useCallback } from "react";
interface CalendarCellProps {
    onDateSelect: (date: string) => void;
    day: number;
    month: number;
    year: number;
  }
  
  const CalendarCell: React.FC<CalendarCellProps> = ({
    onDateSelect,
    day,
    month,
    year,
  }) => {

    const handleCalendarCellClick = useCallback(() => {
      return(
        onDateSelect(
          `${year}-${(month + 1).toString().padStart(2, "0")}-${day
            .toString()
            .padStart(2, "0")}`
        )
      )
    },[day, month, onDateSelect, year])
    
    return (
      <div
        key={`${year}-${month}-${day}`}
        onClick={handleCalendarCellClick}
        className="p-6 border rounded hover:bg-blue-100 text-center cursor-pointer flex flex-col justify-between bg-white shadow-md"
      >
        <div className="text-lg font-bold text-gray-700">{day}</div>
  
        <div className="text-sm text-gray-500 mt-2">
          {/* Example Content */}
          <p>Event</p>
          <p>Note</p>
        </div>
      </div>
    );
  };
  
  export default CalendarCell;
  
