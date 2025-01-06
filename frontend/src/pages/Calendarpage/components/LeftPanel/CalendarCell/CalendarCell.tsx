import React, { memo, useCallback } from "react";

interface CalendarCellProps {
  onDateSelect: (date: string) => void;
  day: number;
  month: number;
  year: number;
  selectedDate: string | null;
}

const CalendarCell: React.FC<CalendarCellProps> = ({
  onDateSelect,
  day,
  month,
  year,
  selectedDate,
}) => {
  const today = new Date();
  const todayString = `${today.getFullYear()}-${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${today.getDate().toString().padStart(2, "0")}`;

  const cellDateString = `${year}-${(month + 1)
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

  const isToday = todayString === cellDateString;
  const isSelected = selectedDate === cellDateString;

  const handleCalendarCellClick = useCallback(() => {
    onDateSelect(cellDateString);
  }, [cellDateString, onDateSelect]);

  return (
    <div
      onClick={handleCalendarCellClick}
      className={`p-6 border rounded text-center cursor-pointer flex flex-col justify-between shadow-md
        ${isToday ? "bg-blue-100" : "bg-white"}
        ${isSelected && !isToday ? "bg-blue-200 border-blue-400" : ""}
        hover:bg-blue-100`}
    >
      <div className="text-lg font-bold">{day}</div>
      <div className="text-sm text-gray-500 mt-2">
        {/* Example Content */}
        <p>Event</p>
        <p>Note</p>
      </div>
    </div>
  );
};

export default memo(CalendarCell);
