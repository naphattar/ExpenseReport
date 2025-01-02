import React from "react";
import CalendarCell from "../CalendarCell/CalendarCell";

interface MonthViewProps {
  onDateSelect: (date: string) => void;
  year: number;
  month: number;
  selectedDate: string | null;
}

const MonthView: React.FC<MonthViewProps> = ({ onDateSelect, year, month , selectedDate }) => {
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = getDaysInMonth(year, month);

  const leadingBlanks = Array(firstDayOfMonth).fill(null);

  return (
    <div
      key={`${year}-${month}`}
      className="mb-6 h-[80vh] overflow-y-auto p-4 bg-gray-50 rounded shadow"
    >
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-700">
        {new Date(year, month).toLocaleString("default", { month: "long" })} {year}
      </h3>

      {/* Days of the Week Header */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold bg-blue-500 text-white rounded-t-lg shadow">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 uppercase tracking-wide">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mt-2">
        {/* Leading Blanks */}
        {leadingBlanks.map((_, index) => (
          <div key={`blank-${index}`} className="p-6"></div>
        ))}

        {/* Calendar Days */}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <CalendarCell
            key={`${year}-${month}-${day}`}
            onDateSelect={onDateSelect}
            selectedDate={selectedDate}
            day={day}
            month={month}
            year={year}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthView;
