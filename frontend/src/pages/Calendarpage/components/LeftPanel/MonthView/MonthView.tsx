import React from "react";
import CalendarCell from "../CalendarCell/CalendarCell";

interface MonthViewProps {
  onDateSelect: (date: string) => void;
  year: number;
  month: number;
}

const MonthView : React.FC<MonthViewProps> = ({onDateSelect , year , month}) => {

    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    return(
        <div
          key={`${year}-${month}`}
          className="mb-6 h-[70vh] overflow-y-auto"
        >
          <h3 className="text-xl font-semibold text-center mb-2">
            {new Date(year, month).toLocaleString("default", { month: "long" })}{" "}
            {year}
          </h3>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: getDaysInMonth(year, month) }, (_, i) => i + 1).map((day) => (
              <CalendarCell
                onDateSelect={onDateSelect}
                day={day}
                month={month}
                year={year}
              />
            ))}
          </div>
        </div>
      )
}

export default MonthView